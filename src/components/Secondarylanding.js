import React from "react";
import style from "./Secondarylanding.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";

const Secondarylanding = () => {
  return (
    <>
      <section className={style.block}>
        <h2 className={style.title}>Travel &amp; explore from your couch</h2>
        <p className={style.subtitle}>You just need at least 1 computer and 1 phone. </p>
        <div className={style.button}>
          <Link className={style.start} to={ROUTES.stream}>
              Start driving
          </Link>
        </div>
        <div className={style.imgcontainer}>
          <img className={style.img__main} src="/assets/screenandroad.png" width="1758" height="1083" alt="computer and phone screen with a road and two cars"/>
        </div>
        <div className={style.download__div}>
          <p className={style.download__title}>Download the app </p>
          <div className={style.dowload__apps}>
              <img className={style.download__img} src="/assets/appstore.png" width="75" height="74" alt="appstore logo of remoad control app"/>
              <p className={style.download__name}>Remoad control</p>
              <p className={style.download__store}>App Store</p>
          </div>
          <div className={style.dowload__apps}>
              <img className={style.download__img} src="/assets/googleps.png" width="74" height="74" alt="google play store logo of remoad control app"/>
              <p className={style.download__name}>Remoad control</p>
              <p className={style.download__store}>Google Play Store</p>
          </div>
        </div>
      </section>
      

    </>
  );
};

export default Secondarylanding;
