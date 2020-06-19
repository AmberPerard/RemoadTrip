import React from "react";
import { Link } from "react-router-dom";
import style from "./BottomContainerStreamView.module.css";

const BottomContainerStreamView = ({
  timeDriven,
  location,
  timeLocal,
  route,
  textButton,
}) => {
  return (
    <>
      <div className={style.bottomContainer}>
        <p className={style.drivenTime}>{timeDriven}</p>
        <div className={style.local}>
          <p className={style.location}>{location}</p>
          <p className={style.localTime}>
            local time{" "}
            <span className={style.localTimeBig}>&#8192;{timeLocal}</span>
          </p>
        </div>
        <Link className={style.finish} to={route}>
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
