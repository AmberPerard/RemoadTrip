import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Stream.module.css";

const Stream = () => {
  return (
    <>
      <h1 className={style.hidden}>Stream</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>1</p>
          <p className={style.tokenNear}>29m</p>
        </div>
        <iframe
          src="https://serverwebrtcint4.herokuapp.com/"
          title="carStream"
          className={style.video}
        ></iframe>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:03</p>
          <div className={style.local}>
            <p className={style.location}>UK, Wales</p>
            <p className={style.localTime}>
              local time <span className={style.localTimeBig}>13:19</span>
            </p>
          </div>
          <Link className={style.finish} to={ROUTES.finish}>
            <img alt="finsh flag" src="./assets/flag.png"></img>
            Finish
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stream;
