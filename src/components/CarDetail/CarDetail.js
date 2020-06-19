import React, { useState, useEffect } from "react";
import { ROUTES } from "../../consts";
import style from "./CarDetail.module.css";
import BackLink from "../Backlink";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";

const CarDetail = () => {
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
        <div className={style.CarDetailContainer}>
          <div className={style.orderDetail}>
            <h2 className={style.orderTitle}>Order detail</h2>
          </div>
        </div>
        <div className={`${style.Point} ${style.firstPoint}`}>
          <p className={style.redCircle}>1</p>
          <p className={style.pointTitle}>Get ready</p>
          <img
            className={style.pointImg}
            src="./assets/location_yellow.png"
            alt="yellow location marker"
            width="12px"
            height="16.72px"
          ></img>
        </div>
        <div
          className={`${style.Point} ${style.secondPoint} ${style.bumpedUp}`}
        >
          <p className={style.redCircle}>2</p>
          <p className={style.pointTitle}>Set</p>
          <img
            className={style.pointImg}
            src="./assets/money.png"
            alt="yellow location marker"
            width="12px"
            height="16.72px"
          ></img>
        </div>
        <div className={`${style.Point} ${style.thirdPoint}`}>
          <p className={style.redCircle}>3</p>
          <p className={style.pointTitle}>go!</p>
          <img
            className={style.pointImg}
            src="./assets/flag.png"
            alt="yellow location marker"
            width="19px"
            height="14px"
          ></img>
        </div>
        <img
          className={`${style.carRoad} ${style.roadandcar}`}
          src="./assets/driving_car.gif"
          alt="animation of car that is riding"
        ></img>
        <img
          className={`${style.road} ${style.roadandcar}`}
          src="./assets/road.png"
          alt="road to follow"
        ></img>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={"Brugge, Belgium"}
          timeLocal={time}
          route={ROUTES.controller}
          textButton={"Set"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default CarDetail;
