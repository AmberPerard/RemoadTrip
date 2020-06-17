import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import MapBoxMap from "../components/MapBoxMap.js";
import style from "./Map.module.css";

const Map = () => {
  return (
    <>
      <h1 className={style.hidden}>Stream</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>0</p>
          <p className={style.tokenNear}>-m</p>
        </div>
        {/* <embed
          src="https://serverwebrtcint4.herokuapp.com/"
          width="100vw"
          height="100vh"
          className={style.video}
        ></embed> */}
        <MapBoxMap class="container__map"></MapBoxMap>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:00</p>
          <div className={style.local}>
            <p className={style.location}>Location</p>
            <p className={style.localTime}>
              local time <span className={style.localTimeBig}>00:00</span>
            </p>
          </div>
          <Link className={style.finish} to={ROUTES.controller}>
            <img alt="finsh flag" src="./assets/flag.png"></img>
            Get ready
          </Link>
        </div>
      </div>
    </>
  );
};

export default Map;
