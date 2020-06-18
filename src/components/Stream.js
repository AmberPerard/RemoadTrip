import React, { useState, useEffect } from "react";
import { ROUTES } from "../consts";
import style from "./Stream.module.css";
import TopContainerStreamView from "./TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "./BottomContainerStreamView/BottomContainerStreamView";

const Stream = () => {
  let time;
  const [today, setToday] = useState(new Date());

  const getTime = () => {
    time = today.toLocaleTimeString("en-BE");
    setToday(new Date());
  };

  const setTime = setInterval(getTime, 1 * 1000);

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
          timeDriven={"00:00"}
          location={"Brugge, Belgium"}
          timeLocal={time}
          route={ROUTES.home}
          textButton={"Finish"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Stream;
