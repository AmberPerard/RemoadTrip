import React, { useState, useEffect } from "react";
import { ROUTES } from "../../consts";
import style from "./Stream.module.css";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";

const Stream = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");
  // let hours = useRef(0);
  // let minutes = useRef(0);

  const [seconds, setSeconds] = useState(0);
  const [passedTime, setPassedTime] = useState("0:00:00");
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

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 60 / 60);

    if (minutes - hours * 60 >= 10) {
      if (seconds - minutes * 60 >= 10) {
        setPassedTime(
          `${hours}:${minutes - hours * 60}:${seconds - minutes * 60}`
        );
      } else if (seconds - minutes * 60 < 10) {
        setPassedTime(
          `${hours}:${minutes - hours * 60}:0${seconds - minutes * 60} `
        );
      }
    } else if (minutes - hours * 60 < 10) {
      if (seconds - minutes * 60 >= 10) {
        setPassedTime(
          `${hours}:0${minutes - hours * 60}:${seconds - minutes * 60}`
        );
      } else if (seconds - minutes * 60 < 10) {
        setPassedTime(
          `${hours}:0${minutes - hours * 60}:0${seconds - minutes * 60}`
        );
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  // const setTime = setInterval(getTime, 1 * 1000);
  // console.log(seconds);

  useEffect(() => {
    const setTime = setInterval(getTime, 1 * 1000);
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
          driving={true}
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
          timeDriven={passedTime}
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
