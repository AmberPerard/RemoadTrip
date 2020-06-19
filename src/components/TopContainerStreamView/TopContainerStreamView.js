import React from "react";
import style from "./TopContainerStreamView.module.css";

const TopContainerStreamView = ({ tokensFound, mtoToken }) => {
  return (
    <>
      <div className={style.topContainer}>
        <p className={style.tokenNear}>{mtoToken}m</p>
        <img
          className={style.compass}
          src="./assets/Compass.png"
          alt="compass for the car to find the tokens"
          width="95px"
          height="95px"
        ></img>
        <p className={style.tokenFound}>{tokensFound}</p>
      </div>
    </>
  );
};

export default TopContainerStreamView;
