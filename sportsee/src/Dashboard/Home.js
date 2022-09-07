import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Siderbar from "./Siderbar";
import Welcome from "./Welcome";
import Barchart from "./Barchart";
import Userinfo from "./Userinfo";
import RadarIntenstite from "./RadarIntenstite";
import SessionEvolution from "./SessionEvolution";
import Objectifs from "./Objectifs";
import Objectifss from "./Objectifss";

import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Notfound from "./Notfound";
import { UserInfos,UserPerformance ,UserActivity,UserAverageSessions}
 from '../Services/Api'
 import datas from '../Data/Data.js'
import FetchingApi from "../Services/FetchingApi";

function Home() {
  const id = useParams().id;
  const ApiMethod = false;


  return (
    <>
      <FetchingApi switch={ApiMethod} id={id}> 
      
      </FetchingApi>
    </>
  );
}

export default Home;


Home.propTypes = {
  name : PropTypes.string,
  UserInfoProps :   PropTypes.object,
  UserPerformInfo : PropTypes.object ,
  evolutionInfo : PropTypes.object ,
  score : PropTypes.number 
};