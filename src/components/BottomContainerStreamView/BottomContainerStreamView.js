import React from "react";
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
            <p className={style.location}>
              {car.location
                ? car.location.features[3].text +
                  ", " +
                  car.location.features[5].text
                : "Location"}
            </p>
          ) : (
            <p className={style.location}>Location</p>
          )}
          <p className={style.localTime}>
            local time{" "}
            <span className={style.localTimeBig}>
              &#8192; <LocalTime className={style.localTimeBig}></LocalTime>
            </span>
          </p>
        </div>
      </div>
    </>
  ));
};

export default BottomContainerStreamView;
