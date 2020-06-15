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
        <div className={style.imgcontainer}>
          <img className={style.img__main} src="/assets/screenandroad.png" width="1758" height="1083" alt="computer and phone screen with a road and two cars"/>
        </div>
        <div>
          <p className={style.download}>Download the app </p>
          <div>
              <img className={style.img} src="/assets/" width="" height="" alt=""/>
              <p>Remoad control</p>
              <p>App Store</p>
          </div>
          <div>
              <img className={style.img} src="/assets/" width="" height="" alt=""/>
              <p>Remoad control</p>
              <p>Google Play Store</p>
          </div>
        </div>
        <div>
          <Link className={style.start} to={ROUTES.stream}>
              Start driving
          </Link>
        </div>
      </section>
      

    </>
  );
};

export default Secondarylanding;
