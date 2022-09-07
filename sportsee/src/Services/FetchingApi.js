import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Dashboard/Header";
import Siderbar from "../Dashboard/Siderbar";
import Welcome from "../Dashboard/Welcome";
import Barchart from "../Dashboard/Barchart";
import Userinfo from "../Dashboard/Userinfo";
import RadarIntenstite from "../Dashboard/RadarIntenstite";
import SessionEvolution from "../Dashboard/SessionEvolution";
import Objectifss from "../Dashboard/Objectifss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Notfound from "../Dashboard/Notfound";
import {
  UserInfos,
  UserPerformance,
  UserActivity,
  UserAverageSessions,
} from "../Services/Api";
import datas from "../Data/Data.js";

function FetchingApi(props) {
  const identificateur = props.id;
  const method = props.switch;

  let curseur = 0;
  let isAPI = false;

  const IDD = useParams().id;

  useEffect(() => {
    function switchAPI(method, identificateur) {
      console.log(method);
      if (method == true) {
        console.log("loading from Data File");

        if (IDD == datas.USER_MAIN_DATA[0].id) {
          curseur = 0;
        } else {
          curseur = 1;
        }

        setUserName(datas.USER_MAIN_DATA[curseur].userInfos.firstName);
        SetUserMainData(datas.USER_MAIN_DATA[curseur].keyData);
        SetUserScore(datas.USER_MAIN_DATA[curseur].todayScore);
        SetUserPerform(datas.USER_PERFORMANCE[curseur]);
        SetActivitySession(datas.USER_ACTIVITY[curseur].sessions);
        SetUserAverageSession(datas.USER_AVERAGE_SESSIONS[curseur].sessions);
      } else {
        console.log("loading data from Back End");

        /**
         * geting user info
         * @param {object} getUserInfos geting user info
         * @returns {object}
         */

        const getUserInfos = async () => {
          const request = await UserInfos(id);
          setUserName(request.data.userInfos.firstName);
          SetUserMainData(request.data.keyData);
          SetUserScore(request.data.todayScore);
        };
        getUserInfos();

        /**
         * Getting user perfromance
         * @param {object} getUserPerformance Getting user perfromance
         * @returns {object}
         */

        const getUserPerformance = async () => {
          const request = await UserPerformance(id);
          SetUserPerform(request.data);
        };
        getUserPerformance();
        // .............

        //

        /**
         * Getting user activityy
         * @param {object} getUserActivity Getting user activityy
         * @returns {object}
         */
        const getUserActivity = async () => {
          const request = await UserActivity(id);
          SetActivitySession(request.data.sessions);
        };
        getUserActivity();

        /**
         * get user avg sessions
         * @param {object} getUserAverageSessions get user avg sessions
         * @returns {object}
         */
        const getUserAverageSessions = async () => {
          const request = await UserAverageSessions(id);
          SetUserAverageSession(request.data.sessions);
        };
        getUserAverageSessions();
      }
    }

    switchAPI();
  }, []);

  /**
   * nom d'utilisateur
   * @param {string} userName nom d'utilisateur
   * @returns {object}
   */
  const [userName, setUserName] = useState("");
  /**
   * session d'activity
   * @param {object} ActivitySession session d'activity
   * @returns {object}
   */
  const [ActivitySession, SetActivitySession] = useState("");
  /**
   * information sur l'utilisateur
   * @param {object} UserMainData information sur l'utilisateur
   * @returns {object}
   */
  const [UserMainData, SetUserMainData] = useState("");
  /**
   * l'average de session d'utilisateur
   * @param {object} UserAverageSession session d'activity
   * @returns {object}
   */
  const [UserAverageSession, SetUserAverageSession] = useState("");
  /**
   * performance d'utilisateur
   * @param {object} UserPerform session d'activity
   * @returns {object}
   */
  const [UserPerform, SetUserPerform] = useState("");
  /**
   * le score d'utilisateur
   * @param {object} UserScore le score d'utilisateur
   * @returns {object}
   */
  const [UserScore, SetUserScore] = useState("");

  const [isIdCorrect, SetisIdCorrect] = useState(true);

  /**
   * import l'Id a partir de lien
   * @param {string} id Id d'utilisateur
   * @returns {object}
   */

  const id = useParams().id;
  /**
   * l'url de back end
   * @param {string} url l'url de back end
   * @returns {object}
   */

  const url = "http://localhost:4000/user/" + id + "/";

  useEffect(() => {
    //  Check if id is correct :
    axios
      .get(url)
      .then((res) => {
        SetisIdCorrect(true);
      })
      .catch((err) => {
        SetisIdCorrect(false);
      });
  }, []);
  return (
    <>
      {!isIdCorrect ? (
        <>
          <Notfound> </Notfound>
        </>
      ) : (
        <>
          <Header> </Header>

          <div className="page__container">
            <Siderbar> </Siderbar>

            <Welcome name={userName} />

            <Userinfo UserInfoProps={UserMainData}> </Userinfo>

            <Barchart info={ActivitySession}> </Barchart>
            <RadarIntenstite UserPerformInfo={UserPerform}> </RadarIntenstite>
            <SessionEvolution evolutionInfo={UserAverageSession} />
            <Objectifss score={UserScore}></Objectifss>
          </div>
        </>
      )}
    </>
  );
}

export default FetchingApi;