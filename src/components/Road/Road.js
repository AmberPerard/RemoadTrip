import React from "react";
import style from "./Road.module.css";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";

const Road = ({ step, noSelectedCar }) => {
  return (
    <>
      <Link
        to={ROUTES.map}
        className={`${style.Point} ${style.firstPoint} ${
          step === 1 ? style.bumpedUp : style.fadded
        }`}
      >
        <p className={style.redCircle}>1</p>
        <p className={style.pointTitle}>Get ready</p>
        <img
          className={style.pointImg}
          src="./assets/location_yellow.png"
          alt="yellow location marker"
          width="12px"
          height="16.72px"
        ></img>
      </Link>
      {noSelectedCar ? (
        <Link
          to={ROUTES.cardetails.to}
          className={`${style.Point} ${style.secondPoint} ${
            step === 2 ? style.bumpedUp : style.fadded
          }`}
        >
          <p className={style.redCircle}>2</p>
          <p className={style.pointTitle}>Set</p>
          <img
            className={style.pointImg}
            src="./assets/auto__icon.png"
            alt="yellow location marker"
            width="24px"
            height="16.77px"
          ></img>
        </Link>
      ) : (
        <div
          className={`${style.Point} ${style.secondPoint} ${
            step === 2 ? style.bumpedUp : style.fadded
          }`}
        >
          <p className={style.redCircle}>2</p>
          <p className={style.pointTitle}>Set</p>
          <img
            className={style.pointImg}
            src="./assets/auto__icon.png"
            alt="yellow location marker"
            width="24px"
            height="16.77px"
          ></img>
        </div>
      )}
      {noSelectedCar ? (
        <Link
          to={ROUTES.controller}
          className={`${style.Point} ${style.thirdPoint} ${
            step === 3 ? style.bumpedUp : style.fadded
          }`}
        >
          <p className={style.redCircle}>3</p>
          <p className={style.pointTitle}>go!</p>
          <img
            className={style.pointImg}
            src="./assets/flag.png"
            alt="yellow location marker"
            width="19px"
            height="14px"
          ></img>
        </Link>
      ) : (
        <div
          className={`${style.Point} ${style.thirdPoint} ${
            step === 3 ? style.bumpedUp : style.fadded
          }`}
        >
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
      )}
      <img
        className={` ${step === 1 ? style.carRoad1 : ""} ${
          step === 2 ? style.carRoad2 : ""
        }${step === 3 ? style.carRoad3 : ""} ${style.roadandcar}`}
        src="./assets/driving_car.gif"
        alt="animation of car that is riding"
      ></img>
      <img
        className={`${style.road} ${style.roadandcar}`}
        src="./assets/road.png"
        alt="road to follow"
      ></img>
    </>
  );
};

export default Road;
