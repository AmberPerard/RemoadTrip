import React from "react";
import { ROUTES } from "../consts";
import MapBoxMap from "../components/MapBoxMap.js";
import style from "./Map.module.css";
import BackLink from "./Backlink";
import TopContainerStreamView from "./TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "./BottomContainerStreamView/BottomContainerStreamView";

const Map = () => {
  return (
    <>
      <h1 className={style.hidden}>World map</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={"-"}
        ></TopContainerStreamView>
        <div className={style.backlink}>
          <BackLink></BackLink>
        </div>
        <div className={style.mapContainer}>
          <h2 className={style.title}>World map</h2>
          <p className={style.subtitle}>Select your car</p>
          <form className={style.from}>
            <div className={style.filterGroup}>
              <p className={style.biglable}>Filter by</p>
              <select className={style.select} defaultValue="Difficulty">
                <option value="difficulty">Difficulty</option>
                <option value="availability">Availability</option>
              </select>
            </div>
            <div className={style.buttonGroup}>
              <input className={style.input} type="radio" name="react-tips" value="option1" id="easygoing" defaultChecked={true}/>
              <label className={`${style.label}`} for="easygoing">Easy going</label>

              <input className={style.input} type="radio" name="react-tips" value="option2" id="challenging"/>
              <label className={`${style.label}`} for="challenging">Challenging</label>

              <input className={style.input} type="radio" name="react-tips" value="option3" id="adventuretime"/>
              <label className={`${style.label}`} for="adventuretime">Adventure Time</label>
            </div>
          </form>
          <MapBoxMap class="container__map"></MapBoxMap>
        </div>
        <img
          className={style.car}
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
          location={"location"}
          timeLocal={"00:00"}
          route={ROUTES.cardetails.to}
          textButton={"Get ready"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Map;
