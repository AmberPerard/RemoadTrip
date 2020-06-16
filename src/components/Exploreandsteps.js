import React from "react";
import style from "./Exploreandsteps.module.css";

const Exploreandsteps = () => {
  return (
    <>
      <section className={style.block}>
          <h2 className={`${style.title} ${style.title__first}`}>Explore and collect</h2>
          <div className={style.sectionone__imgs}> 
            <img className={style.sectionone__watcher} src="/assets/explorer_popup.gif" width="109" height="78" alt="person jumping out of mountain with binocular"/>
            <img className={style.sectionone__mountain} src="/assets/mountain.png" width="554" height="304" alt="illustration fo mountain"/>
          </div>
          <p className={`${style.sectionone__paragraph} ${style.paragraph__one}`}>Go on a road trip to the Amazon, drive on the Big Chinese Wall or just drive through an unknown village somewhere in Romania!</p>
          <p className={`${style.sectionone__paragraph} ${style.paragraph__two}`}>Go on a hunt and find hidden tokens with unique information about the local culture or just some fun and crazy facts.</p>

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

      <section className={style.block}>
          <h2 className={`${style.title} ${style.title__second}`}><span className={style.sub}>The map to</span><br/>your exploration</h2>
          <p className={style.exploration__p}>You can explore the world from out of your couch, nothing can stop you! Not even COVID-19!</p>
          <img className={style.img__worldmap} src="/assets/worldmap.png" width="455" height="241" alt="illustration of world map with cars located on it"/>
          <img className={style.img__globe} src="/assets/exploreglobe.png" width="642" height="642" alt="illustration of the globe in flat design"/>
      </section>

      <section className={style.block}>
          <h2 className={style.hidden}>Steps explanation</h2>
          <article>
              <h3>Step 1</h3>
              <p></p>
              <p></p>
              <img src="" width="" height="" alt=""/>
          </article>
          <article>
              <h3>Step 2</h3>
              <p></p>
              <p></p>
              <img src="" width="" height="" alt=""/>
              <div>
                <img src="" width="" height="" alt=""/>
                <img src="" width="" height="" alt=""/>
              </div>
          </article>
          <article>
              <h3>Step 3</h3>
              <p></p>
              <p></p>
              <img src="" width="" height="" alt=""/>
          </article>
      </section>
      
      
    </>
  );
};

export default Exploreandsteps;
