import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Stream.module.css";

const $video = document.getElementById("video");
const $peerVideo = document.getElementById("peerVideo");
const servers = {
  iceServers: [
    {
      urls: `stun:stun.l.google.com:19302`,
    },
  ],
};

let myStream;
let socket;
let peerConnection;

const startvideo = async () => {
  const constraints = {
    audio: false,
    video: true,
  };
  myStream = await navigator.mediaDevices.getUserMedia(constraints);
  $video.srcObject = myStream;
  initSocket();
};

const initSocket = () => {
  console.log("TODO: start socket connection");
};

const Stream = () => {
  return (
    <>
      <h1 className={style.hidden}>Stream</h1>
      <div className={style.container}>
        <div className={style.topContainer}>
          <p className={style.tokenFound}>1</p>
          <p className={style.tokenNear}>29m</p>
        </div>
        <video autoplay playsinline id="video" className={style.video}></video>
        <div className={style.bottomContainer}>
          <p className={style.drivenTime}>00:03</p>
          <div className={style.local}>
            <p className={style.location}>UK, Wales</p>
            <p className={style.localTime}>13:19</p>
          </div>
          <Link className={style.finish} to={ROUTES.finish}>
            Finish
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stream;
