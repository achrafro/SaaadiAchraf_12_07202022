import React, { useEffect, useState } from "react";
import caloriesIcon from "../styles/img/calories-icon.png";
import carbsIcon from "../styles/img/carbs-icon.png";
import fatIcon from "../styles/img/fat-icon.png";
import proteinIcon from "../styles/img/protein-icon.png";
import "../styles/Userinfo.css";

function Userinfo(props) {
   /**
 * Calories
 * @param {number} calories Calories
 * @returns {number} 
  */

let calories = "";
   /**
 * fat
 * @param {number} fat fat
 * @returns {number} 
  */
let fat = "";
   /**
 * carbs
 * @param {number} carbs carbs
 * @returns {number} 
  */
let carbs = "";
   /**
 * protein
 * @param {number} protein protein
 * @returns {number} 
  */
let protein = "";

 

  if (props.UserInfoProps.length == 0) return <>   </>
  else {
    calories =   props.UserInfoProps.calorieCount;
    fat =   props.UserInfoProps.lipidCount;
    carbs =   props.UserInfoProps.carbohydrateCount;
    protein =   props.UserInfoProps.proteinCount;

    }
 
  

  return (
   
      <div className="user_info__data">

        <div className="calories">
          <img className="icons" src={caloriesIcon} />
          <p className="valeur"> {calories}Kcal</p>
          <p className="description"> Calories</p>

        </div>
        <div className="protein">

        <img className="icons" src={proteinIcon} />
        <p className="valeur"> {protein}g</p>
          <p className="description">Proteines</p>
        </div>
        <div className="carbs">

        <img className="icons"  src={carbsIcon} />
        <p className="valeur"> {carbs}g</p>
          <p className="description"> Glucides</p>
        </div>
        <div className="fat">

        <img className="icons" src={fatIcon} />
        <p className="valeur"> {fat}g </p>
          <p className="description"> Lipides</p>
        </div>
      </div>
   
  );
}

export default Userinfo;
