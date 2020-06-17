import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Controller.module.css";
import QRCode from "qrcode.react";
import BackLink from "./Backlink";

const Controller = () => {
  return (
    <>
      <h1 className={style.title}>Connecting the devices</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>0</p>
          <p className={style.tokenNear}>-m</p>
        </div>
        <BackLink></BackLink>
        <p className={style.subtitle}>1. Open the app on your phone</p>
        <div className={style.qrcodes}>
          <QRCode value="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1860&q=80/" />
        </div>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:00</p>
          <div className={style.local}>
            <p className={style.location}>Brugge, Belgium</p>
            <p className={style.localTime}>
              local time <span className={style.localTimeBig}>14:33</span>
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
