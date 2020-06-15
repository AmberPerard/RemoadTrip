import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Introduction.module.css";

const Introduction = () => {
  return (
    <>
      <div className={style.landingcontainer}>
        <h1 className={style.titel}>REMOAD TRIP</h1>
        <p className={style.text}>
          Take a trip around the world from your couch
        </p>
        <Link className={style.start} to={ROUTES.stream}>
          Start
        </Link>
        <div className={style.info}>
          <p className={style.introanimate}>More information</p>
        </div>
      
      </div>

      <div className={style.landingbg}>
          <img className={style.road__one} src="/assets/road__one.png" width="2880" height="813" alt="road"/>
          <img className={style.car__one} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
          <img className={style.car__two} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
          <img className={style.road__two} src="/assets/road__two.png" width="1078" height="690" alt="road"/>
          <img className={style.road__three} src="/assets/road__three.png" width="1252" height="764" alt="road"/>
          <img className={style.car__three} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
          <img className={style.car__four} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
          <img className={style.car__five} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
          <img className={style.car__six} src="/assets/car__3D.png" width="364" height="310" alt="car"/>
        </div>

    </>
  );
};

export default Introduction;
