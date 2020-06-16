import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./ShareSupport.module.css";

const ShareSupport = () => {
  return (
    <>
      <section className={style.block}>
        <h2 className={style.hidden}>Support and share</h2>
        <div>
            <img className={style.car} src="/assets/car__3D.png" width="364" height="310" alt="car illustration"/>
            <img src="/assets/friendsfamroad__up.png" width="1440" height="383" alt="illustration of an orange road"/>
        </div>

        <article className={style.article}>
            <h3 className={style.title}><span>Experience &amp; share with </span><br/>friends or family</h3>
            <div className={style.div__one}>
                <p className={style.paragraph}>You can actually enjoy your travel with family or friends, challenge eachother through your personal platform. Connect multiple phones to get a bigger experience. It also enables quizzes, hints, hidden secret locations and so more!</p>
                <img src="/assets/Famfriends.gif" width="820" height="635" alt="animation of two perons and a cat in a sofa watching the television"/>
            </div>
            <img src="/assets/friendsfamroad__bottom.png" width="1440" height="158" alt="illustration of an orange road"/>
        </article>

        <article className={style.article}>
            <h3 className={style.title}>Support many</h3>
            <p className={style.paragraph}>Your money mainly goes out to support all the local people who mostly depend on tourism! While having fun, you also give the locals and their economy a big boost up!</p>
            <img src="/assets/Support_Love.gif" width="453" height="323" alt="Animation of a person giving a cute little heart to another person"/>
            <div>
                <img src="/assets/TAndDoubleRoad.png" width="1440" height="1290" alt="illustration of a blue T-road and two orange roads beside it."/>
                <ul>
                    <li>Economy</li>
                    <li>Locals</li>
                    <li>Tourism</li>
                </ul>
            </div>
        </article>

        <article className={style.article}>
            <h3 className={style.title}>Share the love</h3>
            <p className={style.paragraph}>Share your road trips and wonderful experiences on social media! Tell others about your travels and make connections with other people around the world!</p>
            <p className={style.hashtags}>#remoadtrip #digitaltravel #lovetravel</p>
            <img src="/assets/socialmedia.gif" width="1467" height="134" alt="illustrated car driving through social media icons"/>
            <img src="/assets/startandshare.png" width="1440" height="317" alt="illustration of an orange road"/>
        </article>

        <article className={style.article}>
            <h3 className={style.title}><span>Start your dream</span><br/>remoad trip</h3>
            <Link className={style.start} to={ROUTES.stream}>
              Start
            </Link>
        </article>
        

      </section>

    </>
  );
};

export default ShareSupport;
