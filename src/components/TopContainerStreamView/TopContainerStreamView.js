import React from "react";
import style from "./TopContainerStreamView.module.css";

const TopContainerStreamView = ({ tokensFound, mtoToken, driving }) => {
  return (
    <>
      <div className={`${style.topContainer}`}>
        <p className={`${driving ? style.tokenFound : style.tokenFoundGrey}`}>
          {tokensFound}
        </p>
        <img
          className={`${style.compassNoFilter} ${
            driving ? "" : style.noFilter
          }`}
          src="./assets/Compass.png"
          alt="compass for the car to find the tokens"
          width="95px"
          height="95px"
        ></img>
        <p className={`${driving ? style.tokenNear : style.tokenNearGrey}`}>
          {mtoToken}m
        </p>
      </div>
    </>
  );
};

export default TopContainerStreamView;
