import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Controller.module.css";
import QRCode from "qrcode.react";
import BackLink from "./Backlink";
import TopContainerStreamView from "./TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "./BottomContainerStreamView/BottomContainerStreamView";

const Controller = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");

  const getTime = () => {
    setToday(new Date());
  };

  const setTime = setInterval(getTime, 1 * 1000);

  useEffect(() => {
    return () => {
      clearInterval(setTime);
    };
  });
  return (
    <>
      <h1 className={style.hidden}>Connecting the devices</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={"-"}
        ></TopContainerStreamView>
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
        <img
          className={style.carRoad}
          src="./assets/driving_car.gif"
          alt="animation of car that is riding"
        ></img>
        <img
          className={style.road}
          src="./assets/road.png"
          alt="road to follow"
        ></img>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={"Brugge, Belgium"}
          timeLocal={time}
          route={ROUTES.stream}
          textButton={"Go"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Controller;
