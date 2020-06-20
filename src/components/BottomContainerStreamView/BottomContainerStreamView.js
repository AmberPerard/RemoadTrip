import React from "react";
import { Link } from "react-router-dom";
import style from "./BottomContainerStreamView.module.css";
import LocalTime from "../LocalTime/LocalTime";

const BottomContainerStreamView = ({
  timeDriven,
  location,
  route,
  textButton,
  noClick,
}) => {
  return (
    <>
      <div className={style.bottomContainer}>
        <p className={style.drivenTime}>{timeDriven}</p>
        <div className={style.local}>
          <p className={style.location}>{location}</p>
          <p className={style.localTime}>
            local time{" "}
            <span className={style.localTimeBig}>&#8192; <LocalTime className={style.localTimeBig}></LocalTime></span>
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
