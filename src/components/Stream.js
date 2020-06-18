import React, { useState } from "react";
import { ROUTES } from "../consts";
import style from "./Stream.module.css";
import TopContainerStreamView from "./TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "./BottomContainerStreamView/BottomContainerStreamView";

const Stream = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");
  setInterval(() => {
    setToday(new Date());
  }, 1 * 1000);
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
          route={ROUTES.finish}
          textButton={"Finish"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Stream;
