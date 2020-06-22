import React, { useState } from "react";
import MapBoxMap from "../MapBoxMap/MapBoxMap.js";
import style from "./Map.module.css";
import BackLink from "../Backlink/Backlink";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";
import Road from "../Road/Road";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks/useStores.js";
import { ROUTES } from "../../consts/index.js";

const Map = () => {
  const { carStore } = useStores();
  const [center, setCenter] = useState([3.21667, 51.25]);
  const handleChangeForm = (e) => {
    const continent = e.currentTarget.value;
    // console.log(continent);
    if (continent === "Africa") {
      setCenter([16.052607, 10.376212]);
    }
    if (continent === "Antarctica") {
      setCenter([5.329951, -78.193822]);
    }
    if (continent === "Asia") {
      setCenter([103.415886, 30.955671]);
    }
    if (continent === "Australia") {
      setCenter([134.03451, -26.369858]);
    }
    if (continent === "Europe") {
      setCenter([8.199722, 58.122405]);
    }
    if (continent === "North-America") {
      setCenter([-97.83403, 41.131939]);
    }
    if (continent === "South-America") {
      setCenter([-59.889703, -17.740837]);
    }
    if (continent === "empty") {
      setCenter([3.21667, 51.25]);
    }
  };

  return useObserver(() => (
    <>
      <h1 className={style.hidden}>World map</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={"-"}
        ></TopContainerStreamView>
        <div className={style.backlink}>
          <BackLink route={ROUTES.home}></BackLink>
        </div>
        <div className={style.mapContainer}>
          {/* <h2 className={style.title}>World map</h2>
          <p className={style.subtitle}>Select your car</p> */}
          <h2 className={style.title}>
            Select a <span className={style.hidden}>car</span> &ensp; &ensp; on
            the map
          </h2>
          <img
            className={style.titleCar}
            alt="Car"
            src="./assets/car__3D.png"
            width="45px"
            height="38px"
          ></img>
          <form className={style.form}>
            <div className={style.filterGroup}>
              <p className={style.biglable}>Filter by</p>
              <select
                className={style.select}
                defaultValue="-Continent-"
                onChange={(e) => handleChangeForm(e)}
              >
                <option value="empty">-Continent-</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="North-America">North America</option>
                <option value="South-America">South America</option>
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
            center={center}
          ></MapBoxMap>
        </div>
        <Road step={1} noSelectedCar={false}></Road>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={false}
          route={"#"}
          textButton={"Get ready"}
          noClick={true}
        ></BottomContainerStreamView>
      </div>
    </>
  ));
};

export default Map;
