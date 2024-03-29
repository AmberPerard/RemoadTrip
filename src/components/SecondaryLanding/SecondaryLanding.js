import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./SecondaryLanding.module.css";

const SecondaryLanding = () => {
  return (
    <>
      <section className={style.block} id="secondary">
        <h2 className={style.title}>Travel &amp; explore from your couch</h2>
        <p className={style.subtitle}>You just need 1 computer and 1 phone. </p>
        <div className={style.button}>
          <Link className={style.start} to={ROUTES.map}>
            Start driving
          </Link>
        </div>
        <div className={style.imgcontainer}>
          {/* <img className={style.img__main} src="/assets/screenandroad.png" width="1758" height="1083" alt="computer and phone screen with a road and two cars"/> */}
          <iframe
            className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SUftVy9NrCM?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Remoad Trip"
          >
            Your browser doesn't support iframe
          </iframe>
          <img
            className={style.img__maintwo}
            src="/assets/Pcphonejapan3.gif"
            width="540"
            height="348"
            alt="phone and computer demonstration of concept"
          />
        </div>
        <div className={style.download__div}>
          <p className={style.download__title}>Download the app </p>
          <div className={style.dowload__apps}>
            <a
              href="https://www.apple.com/benl/ios/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.download__img}
                src="/assets/appstore.png"
                width="75"
                height="74"
                alt="appstore logo of remoad control app"
              />
            </a>
            <p className={style.download__name}>Remoad control</p>
            <p className={style.download__store}>App Store</p>
          </div>
          <div className={style.dowload__apps}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.download__img}
                src="/assets/googleps.png"
                width="74"
                height="74"
                alt="google play store logo of remoad control app"
              />
            </a>
            <p className={style.download__name}>Remoad control</p>
            <p className={style.download__store}>Google Play Store</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondaryLanding;
