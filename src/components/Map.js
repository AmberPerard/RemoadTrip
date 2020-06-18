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
        <BackLink></BackLink>
        <MapBoxMap class="container__map"></MapBoxMap>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={"Brugge, Belgium"}
          timeLocal={"00:00"}
          route={ROUTES.controller}
          textButton={"Get ready"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Map;
