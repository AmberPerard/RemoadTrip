import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Finish.module.css";

const Finish = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.hidden}>Finish</h1>
        <div className={style.containerFinish}>
          <img
            className={style.finishImg}
            alt="finish flag"
            src="./assets/flag_big.png"
          ></img>
          <h2 className={style.finish}>Amazing ride!</h2>
        </div>
        <div className={style.containerBox}>
          <div className={style.boxLeft}>
            <h3>Your tracked journey</h3>
          </div>
          <div className={style.boxMiddle}>
            <h3 className={style.bigText}>You collected 3 tokens.</h3>
            <p className={style.smallText}>
              These will be added to your profile
            </p>
            <div className={style.containerCollectedToken}>
              <div className={style.collectedToken}>
                <h4 className={style.rotated}>MC02</h4>
                <img alt="big_token" src="./assets/token_big.png"></img>
                <p className={style.buttonToken}>Open</p>
              </div>
              <div className={style.collectedToken}>
                <h4 className={style.rotated}>MC02</h4>
                <img alt="big_token" src="./assets/token_big.png"></img>
                <p className={style.buttonToken}>Open</p>
              </div>
              <div className={style.collectedToken}>
                <h4 className={style.rotated}>MC02</h4>
                <img alt="big_token" src="./assets/token_big.png"></img>
                <p className={style.buttonToken}>Open</p>
              </div>
            </div>
          </div>
          <div className={style.boxRight}>
            <h3>Your covered travel distance is</h3>
            <p className={style.distanceText}>9 km</p>
          </div>
        </div>
        <div className={style.containerButton}>
          <Link className={style.button} to={ROUTES.home}>
            Leave feedbackg
          </Link>
          <Link className={style.button} to={ROUTES.home}>
            Finish ride
          </Link>
        </div>
      </div>
      <div className={roads}>
        <img className={style.road} src="/assets/.png" width="" height="" alt="illustration of a blue road"/>
        <img className={style.road} src="/assets/.png" width="" height="" alt="illustration of an orange road"/>
        <img className={style.road} src="/assets/.png" width="" height="" alt="illustration of an orange road"/>
      </div>
    </>
  );
};

export default Finish;
