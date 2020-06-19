import React, { useState, useEffect, useRef } from "react";
import { ROUTES } from "../../consts";
import style from "./Stream.module.css";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";

const Stream = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");
  let hours = useRef(0);
  let minutes = useRef(0);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const getTime = () => {
    setToday(new Date());
  };

  useEffect(() => {
    setIsActive(true);
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    // 2
    hours.current = Math.floor(seconds / 60 / 60);
    console.log(hours);
    console.log(minutes);
    // 37
    if (hours <= 0) {
      minutes.current = Math.floor(seconds / 60);
    } else {
      minutes.current = Math.floor(seconds / 60);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const setTime = setInterval(getTime, 1 * 1000);
  console.log(seconds);

  useEffect(() => {
    return () => {
      clearInterval(setTime);
    };
  });
  return (
    <>
      <h1 className={style.hidden}>Stream</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={29}
        ></TopContainerStreamView>
        {/* <embed
          src="https://serverwebrtcint4.herokuapp.com/"
          width="100vw"
          height="100vh"
          className={style.video}
        ></embed> */}
        <iframe
          title="stream auto"
          src="https://serverwebrtcint4.herokuapp.com/"
          width="100vw"
          height="100vh"
          className={style.video}
          scrolling="no"
        ></iframe>
        <BottomContainerStreamView
          timeDriven={`${minutes.current}:${seconds}`}
          location={"Brugge, Belgium"}
          timeLocal={time}
          route={ROUTES.finish}
          textButton={"Finish"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Stream;
