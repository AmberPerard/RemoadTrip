import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./ShareSupport.module.css";

const ShareSupport = () => {
  return (
    <>
      <section className={style.block}>
        <h2 className={style.hidden}>Support and share</h2>
        <div className={style.div__roadcar}>
            <img className={style.car} src="/assets/car__3D.png" width="118" height="100" alt="car illustration"/>
            <img className={style.road__one} src="/assets/friendsfamroad__up.png" width="1440" height="383" alt="illustration of an orange road"/>
        </div>

        <article className={`${style.article} ${style.article__friendsfam}`}>
            <h3 className={`${style.title} ${style.title__friendsfam}`}><span className={style.span}>Experience &amp; share with </span><br/>friends or family</h3>
            <div className={style.div__one}>
                <p className={`${style.paragraph} ${style.paragraph__famfriends}`}>You can actually enjoy your travel with family or friends, challenge eachother through your personal platform. Connect multiple phones to get a bigger experience. It also enables quizzes, hints, hidden secret locations and so more!</p>
                <img className={style.famfriends} src="/assets/Famfriends.gif" width="820" height="635" alt="animation of two perons and a cat in a sofa watching the television"/>
            </div>
            <img className={style.road__two} src="/assets/friendsfamroad__bottom.png" width="1440" height="158" alt="illustration of an orange road"/>
        </article>

        <article className={`${style.article} ${style.article__support}`}>
            <h3 className={`${style.title} ${style.title__support}`}>Support many</h3>
            <p className={`${style.paragraph} ${style.paragraph__support}`}>Your money mainly goes out to support all the local people who mostly depend on tourism! While having fun, you also give the locals and their economy a big boost up!</p>
            <div className={style.div__support}>
                <img  className={style.image__tdoubleroad}src="/assets/TAndDoubleRoad.png" width="438" height="1268" alt="illustration of a blue T-road"/>
                <img  className={style.image__uturn}src="/assets/Ubocht.png" width="1306" height="678" alt="illustration of an orange U-turn road"/>

                <ul className={style.list}>
                    <li className={`${style.listitem} ${style.listitem__normal}`}>Economy</li>
                    <li className={`${style.listitem} ${style.listitem__up}`}>Locals</li>
                    <li className={`${style.listitem} ${style.listitem__normal}`}>Tourism</li>
                </ul>
                <img className={style.image__support} src="/assets/Support_Love.gif" width="453" height="323" alt="Animation of a person giving a cute little heart to another person"/>

            </div>
        </article>

        <article className={`${style.article} ${style.article__share}`}>
            <h3 className={`${style.title} ${style.title__share}`}>Share the love</h3>
            <p className={`${style.paragraph} ${style.paragraph__share}`}>Share your road trips and wonderful experiences on social media! Tell others about your travels and make connections with other people around the world!</p>
            <p className={style.hashtags}>#remoadtrip #digitaltravel #lovetravel</p>
            <div className={style.socialcar__div} >
              <img className={style.socialcar} src="/assets/socialmedia.gif" width="1467" height="134" alt="illustrated car driving through social media icons"/>
            </div>
        </article>

        <article className={`${style.article} ${style.article__cta}`}>
            <h3 className={`${style.title} ${style.title__cta}`}><span className={style.span}>Start your dream</span><br/>remoad trip</h3>
            <Link className={style.start} to={ROUTES.stream}>
              Start
            </Link>
            <img className={style.road__cta} src="/assets/startandshare.png" width="1440" height="317" alt="illustration of an orange road"/>
        </article>
        

      </section>

    </>
  );
};

export default ShareSupport;
