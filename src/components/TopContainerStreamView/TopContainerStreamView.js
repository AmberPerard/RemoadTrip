import React from "react";
import style from "./TopContainerStreamView.module.css";

const TopContainerStreamView = ({ tokensFound, mtoToken, driving }) => {
  return (
    <>
      <div className={`${style.topContainer} ${driving ? "" : style.grey}`}>
        <p className={style.tokenFound}>{tokensFound}</p>
        {driving ? (
          <img
            className={`${style.compassNoFilter} ${
              driving ? "" : style.noFilter
            }`}
            src="./assets/Compass.png"
            alt="compass for the car to find the tokens"
            width="95px"
            height="95px"
          ></img>
        ) : (
          <img
            className={`${style.compassNoFilter} ${
              driving ? "" : style.noFilter
            }`}
            src="./assets/Compass.png"
            alt="compass for the car to find the tokens"
            width="95px"
            height="95px"
          ></img>
        )}
        <p className={style.tokenNear}>{mtoToken}m</p>
      </div>
    </>
  );
};

export default TopContainerStreamView;
