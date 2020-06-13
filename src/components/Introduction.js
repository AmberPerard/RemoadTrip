import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Introduction.module.css";

const Introduction = () => {
  return (
    <>
      <div className={style.fullContainer}>
        <h1 className={style.titel}>REMOAD TRIP</h1>
        <p className={style.text}>
          Take a trip around the world from your couch
        </p>
        <Link className={style.start} to={ROUTES.stream}>
          Start
        </Link>
        <p className={style.info}>More information</p>
      </div>
      <div className={style.block}>
        <h2>Travel &amp; explore from your couch</h2>
        <p>You just need at least 1 computer and 1 phone. </p>
        <p>Download the app </p>
      </div>
    </>
  );
};

export default Introduction;
