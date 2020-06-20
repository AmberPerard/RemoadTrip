import React from "react";
import style from "./ExploreSteps.module.css";

const ExploreSteps = () => {
  return (
    <>
      <section className={style.block}>
          <h2 className={`${style.title} ${style.title__first}`}>Explore and collect</h2>
          <div className={style.sectionone__imgs}> 
            <img className={style.sectionone__watcher} src="/assets/explorer_popup.gif" width="109" height="78" alt="person jumping out of mountain with binocular"/>
            <img className={style.sectionone__mountain} src="/assets/mountain.png" width="554" height="304" alt="illustration fo mountain"/>
          </div>
          <p className={`${style.sectionone__paragraph} ${style.paragraph__one}`}>Go on a road trip to the Amazon, drive on the Big Chinese Wall or drive through an unknown village somewhere in Romania!</p>
          <p className={`${style.sectionone__paragraph} ${style.paragraph__two}`}>Go on a hunt and find hidden tokens with unique information about the local culture or some fun and crazy facts.</p>

          <article className={style.token}>
            <h3 className={style.token__title}>Token YM231</h3>
            <p className={style.token__paragraph}>You found an indigenous mexican recipe from the Yucatan people!</p>
            <img className={style.token__image} src="/assets/cartoken.png" width="293" height="142" alt="illustration of a car with tokens"/>
          </article>    

          <div className={style.roads}>
            <img className={`${style.road} ${style.road__one}`} src="/assets/explorecollect__orangeroad.png" width="1440" height="321" alt="orange road"/>
            <img className={`${style.road} ${style.road__two}`} src="/assets/explorecollect__blueroad.png" width="1440" height="150" alt="blue road"/>
          </div>
      </section>

      <section className={`${style.block} ${style.block__exploration}`}>
          <h2 className={`${style.title} ${style.title__second}`}><span className={style.sub}>The map to</span><br/>your exploration</h2>
          <p className={style.exploration__p}>You can explore the world from your couch, nothing can stop you! Not even COVID-19!</p>
          <img className={style.img__worldmap} src="/assets/worldmap.png" width="455" height="241" alt="illustration of world map with cars located on it"/>
          <img className={style.img__globe} src="/assets/exploreglobe.png" width="550" height="578" alt="illustration of the globe in flat design"/>
      </section>

      <section className={`${style.block} ${style.block__steps}`}>
        <h2 className={style.hidden}>Steps explanation</h2>
        <article className={`${style.step} ${style.step__one}`}>
          <h3 className={style.step__title}>Step 1</h3>
          <p className={style.step__subtitle}>Desktop startup</p>
          <p className={style.step__paragraph}>Open up the desktop website, choose a car and you’ll get a connection code.</p>
          <img className={`${style.step__gif} ${style.steproad__gifone}`} src="/assets/clickscreen1.gif" width="325" height="252" alt="animation of a computer screen clicking on a world map with cars"/>
        </article>

        <article className={`${style.step} ${style.step__two}`}>
          <h3 className={style.step__title}>Step 2</h3>
          <p className={style.step__subtitle}>Phone startup</p>
          <p className={style.step__paragraph}>Download the mobile app and enter the code you see on your desktop.</p>
          <img className={`${style.step__gif} ${style.steproad__giftwo}`} src="/assets/phonescreen2.gif" width="388" height="301" alt="animation of clicking on a smartphone while entering a code"/>
          <div className={`${style.step__stores}`}>
            <a className={`${style.step__store}`} href="https://www.apple.com/benl/ios/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/as__app.png" width="64" height="63" alt="remoad trip app logo for app store"/>
            </a>
            <a className={`${style.step__store}`} href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="/assets/ps__app.png" width="63" height="63" alt="remoad trip app logo for google play store"/>
            </a>
          </div>
        </article>

        <article className={`${style.step} ${style.step__three}`}>
          <h3 className={style.step__title}>Step 3</h3>
          <p className={style.step__subtitle}>Connect &amp; explore</p>
          <p className={style.step__paragraph}>Once your computer, phone and car are connected, you can enjoy your ride!</p>
          <img className={`${style.step__gif} ${style.steproad__gifthree}`} src="/assets/Pcphonejapan3.gif" width="413" height="266" alt="phone and computer demonstration of concept remoad trip"/>
        </article>
        
        <div className={style.step__bg}>
            <img className={`${style.step__road} ${style.steproad__one}`} src="/assets/steps__orangeone.png" width="1440" height="367" alt="illustration of an orange road"/>
            <img className={`${style.step__road} ${style.steproad__two}`} src="/assets/steps__blue.png" width="785" height="331" alt="illustration of a blue road"/>
            <img className={`${style.step__road} ${style.steproad__three}`} src="/assets/steps__orangetwo.png" width="341" height="959" alt="illustration of an orange road"/>
        </div>
      </section>
    </>
  );
};

export default ExploreSteps;
