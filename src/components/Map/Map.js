import React from "react";
import MapBoxMap from "../MapBoxMap/MapBoxMap.js";
import style from "./Map.module.css";
import BackLink from "../Backlink/Backlink";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";
import Road from "../Road/Road";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks/useStores.js";

const Map = () => {
  const { carStore } = useStores();
  return useObserver(() => (
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
          {/* <h2 className={style.title}>World map</h2>
          <p className={style.subtitle}>Select your car</p> */}
          <h2 className={style.title}>Select a car on the map</h2>
          <form className={style.form}>
            <div className={style.filterGroup}>
              <p className={style.biglable}>Filter by</p>
              <select className={style.select} defaultValue="Difficulty">
                <option value="difficulty">Difficulty</option>
                <option value="availability">Availability</option>
              </select>
            </div>
            <div className={style.buttonGroup}>
              <input
                className={style.input}
                type="radio"
                name="react-tips"
                value="option1"
                id="easygoing"
                defaultChecked={true}
              />
              <label className={`${style.label}`} htmlFor="easygoing">
                Easy going
              </label>

              <input
                className={style.input}
                type="radio"
                name="react-tips"
                value="option2"
                id="challenging"
              />
              <label className={`${style.label}`} htmlFor="challenging">
                Challenging
              </label>

              <input
                className={style.input}
                type="radio"
                name="react-tips"
                value="option3"
                id="adventuretime"
              />
              <label className={`${style.label}`} htmlFor="adventuretime">
                Adventure Time
              </label>
            </div>
          </form>
          <MapBoxMap
            classForMap={"mapContainer"}
            controls={true}
            zoom={2}
            lat={carStore.cars[0].latitude}
            lng={carStore.cars[0].longitude}
          ></MapBoxMap>
        </div>
        <Road step={1} noSelectedCar={false}></Road>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={false}
          timeLocal={"00:00"}
          route={"#"}
          textButton={"Get ready"}
          noClick={true}
        ></BottomContainerStreamView>
      </div>
    </>
  ));
};

export default Map;
