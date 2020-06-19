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
    <section>
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
          <article className={style.content__article}>
            <h2 className={`${style.content__title} ${style.hidden}`}>Location information</h2>
            <div>
              <h3>Local time</h3>
            </div>
            <div>
              <h3>Daytime</h3>
            </div>
            <div>
              <h3>Local information &#x28;live&#x29;</h3>
            </div>
          </article>

          <article className={style.content__article}>
            <h2 className={`${style.content__title}`}>Mexico, yucatan</h2>
            <div>
              <h3>General information</h3>
            </div>
            <div>
              <h3>Live location</h3>
              <img src="" width="" height="" alt=""/>
            </div>
          </article>

          <article >
            <h2 className={`${style.content__title} ${style.hidden}`}>Location pictures</h2>
            <div>
              <h3>Pictures of the yucatan region</h3>
              <img src="" width="" height="" alt=""/>
              <img src="" width="" height="" alt=""/>
              <img src="" width="" height="" alt=""/>
              <img src="" width="" height="" alt=""/>
            </div>
          </article>

          <article className={style.content__background}>
            <h2 className={`${style.background__title} ${style.background__asset}`} >N° MY312</h2>
            <img className={`${style.background__img} ${style.background__asset}`} src="/assets/detailpage__bg.png" width="525" height="370" alt="illustration of an orange road with a red car on"/>
          </article>
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
    </section>
    </>
  );
};

export default CarDetail;
