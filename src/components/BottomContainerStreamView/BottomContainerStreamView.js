import React from "react";
import { Link } from "react-router-dom";
import style from "./BottomContainerStreamView.module.css";
import LocalTime from "../LocalTime/LocalTime";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";

const BottomContainerStreamView = ({
  timeDriven,
  location,
  route,
  textButton,
  noClick,
}) => {
  const { carStore } = useStores();

  const car = carStore.getCarsById("1");

  if (car.lat && car.lng && car.location === undefined) {
    car.getLocation();
  }
  return useObserver(() => (
    <>
      <div className={style.bottomContainer}>
        <p className={style.drivenTime}>{timeDriven}</p>
        <div className={style.local}>
          {location ? (
            <p className={`${location ? style.location : style.locationGrey}`}>
              {car.location
                ? car.location.features[3].text +
                  ", " +
                  car.location.features[5].text
                : "Location"}
            </p>
          ) : (
            <p className={`${location ? style.location : style.locationGrey}`}>
              Location
            </p>
          )}
          <p className={`${location ? style.localTime : style.localTimeGrey}`}>
            local time{" "}
            <span
              className={`${
                location ? style.localTimeBig : style.localTimeBigGrey
              }`}
            >
              &#8192;{" "}
              {location ? (
                <LocalTime
                  className={`${
                    location ? style.localTimeBig : style.localTimeBigGrey
                  }`}
                ></LocalTime>
              ) : (
                "00:00"
              )}
            </span>
          </p>
        </div>
        <Link
          className={`${style.finish} ${noClick === true ? style.hidden : ""}`}
          to={route}
        >
          <img
            className={style.flag}
            alt="finsh flag"
            src="./assets/flag.png"
          ></img>
          {textButton}
        </Link>
      </div>
    </>
  ));
};

export default BottomContainerStreamView;
