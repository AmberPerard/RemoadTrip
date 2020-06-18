import React from "react";
import style from "./TopContainerStreamView.module.css";

const TopContainerStreamView = ({ tokensFound, mtoToken }) => {
  return (
    <>
      <div className={style.topContainer}>
        <p className={style.tokenNear}>{mtoToken}m</p>
        <p className={style.tokenFound}>{tokensFound}</p>
      </div>
    </>
  );
};

export default TopContainerStreamView;
