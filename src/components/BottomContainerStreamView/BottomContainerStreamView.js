import React from "react";
import { Link } from "react-router-dom";
import style from "./BottomContainerStreamView.module.css";
import LocalTime from "../LocalTime/LocalTime";
import { useStores } from "../../hooks/useStores";

const BottomContainerStreamView = ({
  timeDriven,
  location,
  route,
  textButton,
  noClick,
}) => {
  const { carStore } = useStores();

  const car = carStore.getCarsById("1");
  console.log(car);

  if (car.lat && car.lng && car.location === undefined) {
    console.log("in getLocation request");
    car.getLocation();
    console.log(car.location[3].text + car.location[5].text);
  }

  // const result = carStore.cars[0].getLocation();
  // console.log(result);
  console.log(car.location);
  return (
    <>
      <div className={style.bottomContainer}>
        <p className={style.drivenTime}>{timeDriven}</p>
        <div className={style.local}>
          <p className={style.location}>
            {/* {location === true
              ? car.location[3].text + car.location[5].text
              : "Location"} */}
            Location
          </p>
          <p className={style.localTime}>
            local time{" "}
            <span className={style.localTimeBig}>
              &#8192; <LocalTime className={style.localTimeBig}></LocalTime>
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
  );
};

export default BottomContainerStreamView;
