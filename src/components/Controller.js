import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Controller.module.css";
import QRCode from "qrcode.react";
import BackLink from "./Backlink";

const Controller = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");
  setInterval(() => {
    setToday(new Date());
    console.log(today);
  }, 1 * 1000);
  return (
    <>
      <h1 className={style.hidden}>Connecting the devices</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>0</p>
          <p className={style.tokenNear}>-m</p>
        </div>
        <div className={style.backlink}>
          <BackLink></BackLink>
        </div>
        <div className={style.controllerContainer}>
          <h2 className={style.title}>Connecting the devices</h2>
          <div className={style.qrcodes}>
            <QRCode value="https://gentle-cove-91397.herokuapp.com/" />
            <p className={style.link}>
              or surf to:&#8192;
              <a href="https://gentle-cove-91397.herokuapp.com/">
                https://gentle-cove-91397.herokuapp.com/
              </a>
            </p>
          </div>
          <div className={style.car}>
            <img
              src="./assets/car__3D.png"
              alt="car"
              width="148px"
              height="126px"
            ></img>
            <p>Connected</p>
          </div>
          <Link className={style.start} to={ROUTES.stream}>
            <img alt="finsh flag" src="./assets/finish_flag_blue.png"></img>
            Go start driving
          </Link>
        </div>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:00</p>
          <div className={style.local}>
            <p className={style.location}>Brugge, Belgium</p>
            <p className={style.localTime}>
              local time{" "}
              <span className={style.localTimeBig}>&#8192;{time}</span>
            </p>
          </div>
          <Link className={style.finish} to={ROUTES.stream}>
            <img alt="finsh flag" src="./assets/flag.png"></img>
            Go
          </Link>
        </div>
      </div>
    </>
  );
};

export default Controller;
