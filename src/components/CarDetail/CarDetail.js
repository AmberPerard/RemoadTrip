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
          <article className={`${style.content__article} ${style.article__left}`}>
            <h2 className={`${style.content__title} ${style.hidden}`}>Location information</h2>
            <div className={`${style.localinfo} ${style.localinfo__hour}`}>
              <div>
                <h3>Local time</h3>
                <p>06&#58;31</p>
              </div>
              <img src="/assets/local__time.png" width="32" height="32" alt="icon of time"/>
            </div>
            <div className={`${style.localinfo} ${style.localinfo__time}`}>
              <h3>Daytime</h3>
              <img src="/assets/local__daytime.png" width="32" height="32" alt="icon of the daytime"/>

            </div>
            <div className={`${style.localinfo} ${style.localinfo__info}`}>
              <h3 className={style.localinfo__title}>Local information &#x28;live&#x29;</h3>
              <ul className={style.local__list}>
                <li className={style.list__items}>
                  <p className={style.list__item}>General weather</p> 
                  <p className={style.list__value}>Cloudy</p>
                </li>
                <li className={style.list__items}>
                  <p className={style.list__item}>Humidity</p>
                  <p className={style.list__value}>91%</p>
                </li>
                <li className={style.list__items}>
                  <p className={style.list__item}>Precipitation</p>
                  <p className={style.list__value}>14%</p>
                </li>
                <li className={style.list__items}>
                  <p className={style.list__item}>Wind</p>
                  <p className={style.list__value}>19 km/h</p>
                </li>
              </ul>
              <div className={style.coordinates__div}>
                <p>Live coordinates</p>
                <ul className={style.coordinates}>
                  <li className={style.coordinate}>20°51'13.6"N</li>
                  <li className={style.coordinate}>89°14'12.6"W</li>
                </ul>
              </div>
              <div className={style.details}>
                <div>
                  <p>3</p>
                  <p><span>Nearby</span> <br/>tokens</p>
                </div>
                <div>
                  <img alt=""/>
                  <p><span>Formula</span> <br/>challenging</p>
                </div>
                <div>
                  <p><span>€8</span> <br/>per hour</p>
                </div>
              </div>
            </div>
          </article>

          <article className={style.content__article}>
            <h2 className={`${style.content__title}`}>Mexico, yucatan</h2>
            <div>
              <h3 className={style.content__subtitles}>General information</h3>
              <p>The Yucatan Peninsula is an area in southeastern Mexico that separates 
                the Caribbean Sea and the Gulf of Mexico. The peninsula itself is home 
                to the Mexican nations of Yucatan, Campeche, and Quintana Roo. It also 
                covers the northern parts of Belize and Guatemala. The Yucatan is known 
                for its tropical rainforests and jungles, as well as its being the home 
                of the ancient Maya people.</p>
            </div>
            <div>
              <h3 className={style.content__subtitles}>Live location</h3>
              <img src="/assets/detail__map.png" width="389" height="156" alt="live location of the remote car"/>
            </div>
          </article>

          <article className={style.content__article}>
            <h2 className={`${style.content__title} ${style.hidden}`}>Location pictures</h2>
            <div className={style.content__pictures}>
              <h3 className={style.content__subtitles}>Pictures of yucatan</h3>
              <img src="/assets/pic1.png" width="374" height="196" alt="a watercave in yucatan"/>
              <div className={style.images__small}>
                <img src="/assets/pic2.png" width="112" height="79" alt="beach in yucatan"/>
                <img src="/assets/pic3.png" width="112" height="79" alt="temple in yucatan"/>
                <img src="/assets/pic4.png" width="112" height="79" alt="beach in yucatan"/>
              </div>
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
