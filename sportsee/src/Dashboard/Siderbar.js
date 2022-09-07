import React from "react";
import relax from "../styles/img/relax.png";
import gym from "../styles/img/gym.png";
import nager from "../styles/img/nager.png";
import bicycle from "../styles/img/bicycle.png";

const Siderbar = () => {
  return (
    <div className="sidebar">
      <div className="icons_sidebar">
         <img src={relax}  className="relax" />
         <img src={nager}  className="nager" />
         <img src={bicycle} className = "bicycle"  />
         <img src={gym}  className="gym"/>


      </div>
      <h3> Copyright, SportSee 2022</h3>
    </div>
  );
};

export default Siderbar;
