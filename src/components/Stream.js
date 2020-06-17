import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Stream.module.css";

const Stream = () => {
  let today = new Date();

  let time = today.getHours() + ":" + today.getMinutes();
  return (
    <>
      <h1 className={style.hidden}>Stream</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>1</p>
          <p className={style.tokenNear}>29m</p>
        </div>
        {/* <embed
          src="https://serverwebrtcint4.herokuapp.com/"
          width="100vw"
          height="100vh"
          className={style.video}
        ></embed> */}
        <iframe
          title="stream auto"
          src="https://serverwebrtcint4.herokuapp.com/"
          width="100vw"
          height="100vh"
          className={style.video}
          scrolling="no"
        ></iframe>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:03</p>
          <div className={style.local}>
            <p className={style.location}>Brugge, Belgium</p>
            <p className={style.localTime}>
              local time <span className={style.localTimeBig}>{time}</span>
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
