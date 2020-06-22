import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./Controller.module.css";
import QRCode from "qrcode.react";
import BackLink from "../Backlink/Backlink";
import socketIOClient from "socket.io-client";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";
import Road from "../Road/Road";

const Controller = () => {
  const ENDPOINT = "https://evening-caverns-60077.herokuapp.com/";
  // const ENDPOINT = "http://127.0.0.1:8081";
  // const [today, setToday] = useState(new Date());
  const [connected, setConnected] = useState(false);
  // let time = today.toLocaleTimeString("en-BE");

  // const getTime = () => {
  //   setToday(new Date());
  // };

  let socket = socketIOClient(ENDPOINT);

  // const setTime = setInterval(getTime, 1 * 1000);
  useEffect(() => {
    socket.emit("isControllerConnected", (status) => {
      setConnected(status);
      console.log(`status: ${status}`);
    })

    // console.log(connected);
    // socket.on("controllerConnected", () => {
    //   // console.log("controller connected");
    //   setConnected(true);
    //   // console.log(connected);
    // });

    socket.on("controllerStatus", (data) => {
      console.log(`status controller: ${data}`);
      setConnected(data);
    });

    // socket.on("controllerDisconnected", () => {
    //   setConnected(false)
    // })
    // setConnected(false)

    return () => {
      socket.disconnect();
    };
  }, [connected, socket]);
  return (
    <>
      <h1 className={style.hidden}>Connecting the devices</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={"-"}
        ></TopContainerStreamView>
        <div className={style.backlink}>
          <BackLink route={ROUTES.cardetails.to}></BackLink>
        </div>
        <div className={style.controllerContainer}>
          <h2 className={style.title}>Connecting the devices</h2>
          <div className={style.qrcodes}>
            <QRCode
              fgColor="#FFB400"
              bgColor="#00204B"
              value="https://int4controllers.herokuapp.com/"
            />
            <p className={style.link}>
              scan or surf to:&#8192;https://int4controllers.herokuapp.com/
            </p>
          </div>
          <div className={style.car}>
            <img
              src="./assets/car__3D.png"
              alt="car"
              width="148px"
              height="126px"
            ></img>
            <p>{connected ? "Connected" : "Connecting..."}</p>
          </div>
          {connected ? (
            <Link className={style.start} to={ROUTES.stream}>
              <div>
                <img
                  className={style.whiteImg}
                  alt="finsh flag"
                  src="./assets/flag.png"
                  width="85px"
                  height="70px"
                ></img>
                Go
              </div>
              {/* <p className={style.littlebuttonText}>start driving</p> */}
            </Link>
          ) : (
            ""
          )}
        </div>
        <Road step={3} noSelectedCar={true}></Road>
        {connected ? (
          <BottomContainerStreamView
            timeDriven={"00:00"}
            location={true}
            route={ROUTES.stream}
            textButton={"Go"}
          ></BottomContainerStreamView>
        ) : (
          <BottomContainerStreamView
            timeDriven={"00:00"}
            location={true}
            route={"#"}
            textButton={"Go"}
            noClick={true}
          ></BottomContainerStreamView>
        )}
      </div>
    </>
  );
};

export default Controller;
