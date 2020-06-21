import React, { useState, useEffect } from "react";
import { ROUTES } from "../../consts";
import style from "./CarDetail.module.css";
import BackLink from "../Backlink/Backlink";
import LocalTime from "../LocalTime/LocalTime";
import TopContainerStreamView from "../TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "../BottomContainerStreamView/BottomContainerStreamView";
import Road from "../Road/Road";
import MapBoxMap from "../MapBoxMap/MapBoxMap";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";

const CarDetail = () => {
  const [today, setToday] = useState(new Date());
  const [bigImage, setBigImage] = useState("pic1.png");
  const { carStore } = useStores();
  const car = carStore.cars[0];

  const handleClickImg = (e) => {
    if (e) {
      const img = e.currentTarget.src.split("/")[4];
      setBigImage(img);
    }
  };

  console.log(car.lat);
  console.log(car.lng);
  console.log(car);
  if (car.lat && car.lng && car.weather === undefined) {
    console.log("in getWeather request");
    car.getWeather();
  }

  return useObserver(() => (
    <>
      {console.log(car.lat, car.lng)}
      {console.log(`weather: ${car.weather}`)}
      {/* {items? console.log(items.weather[0].main): ""} */}
      <section>
        <h1 className={style.hidden}>Connecting the devices</h1>
        <div className={style.container}>
          <TopContainerStreamView
            tokensFound={0}
            mtoToken={"-"}
          ></TopContainerStreamView>
          <div className={style.backlink}>
            <BackLink></BackLink>
          </div>

          <div className={style.CarDetailContainer}>
            <article
              className={`${style.content__article} ${style.article__left}`}
            >
              <h2 className={`${style.content__title} ${style.hidden}`}>
                Location information
              </h2>
              <div className={`${style.localinfo} ${style.localinfo__hour}`}>
                <div>
                  <h3>Local time</h3>
                  <LocalTime></LocalTime>
                </div>
                <img
                  src="/assets/local__time.png"
                  width="32"
                  height="32"
                  alt="icon of time"
                />
              </div>
              <div className={`${style.localinfo} ${style.localinfo__time}`}>
                {/* <h3>Daytime</h3> */}
                {car.weather ? console.log(car.weather.sys.sunrise) : ""}
                {car.weather ? console.log(car.weather.sys.sunset) : ""}
                {console.log(Math.round(today.getTime() / 1000))}
                {car.weather &&
                Math.round(today.getTime() / 1000) > car.weather.sys.sunrise &&
                Math.round(today.getTime() / 1000) < car.weather.sys.sunset ? (
                  <h3>Daytime</h3>
                ) : (
                  <h3>Nighttime</h3>
                )}
                <img
                  src="/assets/local__daytime.png"
                  width="32"
                  height="32"
                  alt="icon of the daytime"
                />
              </div>
              <div className={`${style.localinfo} ${style.localinfo__info}`}>
                <h3 className={style.localinfo__title}>
                  Local information &#x28;live&#x29;
                </h3>
                <ul className={style.local__list}>
                  <li className={style.list__items}>
                    <p className={style.list__item}>General weather</p>
                    {car.weather ? (
                      <p className={style.list__value}>
                        {car.weather.weather[0].main}
                      </p>
                    ) : (
                      ""
                    )}
                    {/* {weather? console.log(weather.weather[0].main): ""} */}
                  </li>
                  <li className={style.list__items}>
                    <p className={style.list__item}>Humidity</p>
                    {car.weather ? (
                      <p
                        className={style.list__value}
                      >{`${car.weather.main.humidity}%`}</p>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className={style.list__items}>
                    <p className={style.list__item}>Precipitation</p>
                    <p className={style.list__value}>14%</p>
                  </li>
                  <li className={style.list__items}>
                    <p className={style.list__item}>Wind</p>
                    {/* <p className={style.list__value}>19 km/h</p> */}
                    {car.weather ? (
                      <p className={style.list__value}>{`${
                        car.weather.wind.speed * 3.6
                      } km/h`}</p>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                <div className={style.coordinates__div}>
                  <p className={style.coordinates__title}>Live coordinates</p>
                  <ul className={style.coordinates}>
                    <li className={style.coordinate}>
                      51&#176;12&#8217;34&#8220;N
                    </li>
                    <li className={style.coordinate}>
                      3&#176;13&#8217;29&#8220;E
                    </li>
                  </ul>
                </div>
                <div className={style.details}>
                  <div className={style.details__tokens}>
                    <p className={style.details__three}>3</p>
                    <p className={style.align__left}>
                      <span className={style.details__bold}>Nearby</span> <br />
                      tokens
                    </p>
                  </div>
                  <div>
                    <img
                      src="/assets/detail__stars.png"
                      alt="stars representing amount of challenge"
                      width="59"
                      height="16"
                    />
                    <p>
                      <span className={style.details__bold}>Formula</span>{" "}
                      <br />
                      challenging
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className={style.details__bold}>€8</span> <br />
                      per hour
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className={style.content__article}>
              <h2 className={`${style.content__title}`}>Bruges, Belgium</h2>
              <div>
                <h3 className={style.content__subtitles}>
                  General information
                </h3>
                <p>
                  What could be more romantic and inspiring than a place that
                  looks like a backdrop for a fairy tale? The medieval overtones
                  of Bruges’ cobblestone streets lead to countless historical,
                  architectural and artistic wonders. Marvel at ornate houses
                  lining intricate canals, and understand why this is a favorite
                  destination for all types of travelers. The whole city
                  emanates an appreciation of the past, a love of the present,
                  and enthusiasm for the future. Don’t miss Hof Bladelin,
                  Groeninge Museum, Church of Our Lady, and Belfry and Market
                  Halls.
                </p>
              </div>
              <div>
                <h3 className={style.content__subtitles}>Live location</h3>
                <div>
                  <MapBoxMap
                    classForMap={"mapContainerSmall"}
                    controls={true}
                    zoom={8}
                  ></MapBoxMap>
                </div>
                {/* <img
                  src="/assets/detail__map.png"
                  width="389"
                  height="156"
                  alt="live location of the remote car"
                /> */}
              </div>
            </article>

            <article className={style.content__article}>
              <h2 className={`${style.content__title} ${style.hidden}`}>
                Location pictures
              </h2>
              <div className={style.content__pictures}>
                <h3 className={style.content__subtitles}>Pictures of Bruges</h3>
                <img
                  src={`/assets/${bigImage}`}
                  width="374"
                  height="214"
                  alt="a wide shot of bruges"
                />
                <div className={style.images__small}>
                  <img
                    src="/assets/pic2.png"
                    width="112"
                    height="64"
                    alt="shops in bruges"
                    onClick={handleClickImg}
                  />
                  <img
                    src="/assets/pic3.png"
                    width="112"
                    height="64"
                    alt="houses alongside the water in bruges"
                    onClick={handleClickImg}
                  />
                  <img
                    src="/assets/pic4.png"
                    width="112"
                    height="64"
                    alt="burges"
                    onClick={handleClickImg}
                  />
                </div>
              </div>
            </article>

            <article className={style.content__background}>
              <h2
                className={`${style.background__title} ${style.background__asset}`}
              >
                N° MY312
              </h2>
              <img
                className={`${style.background__img} ${style.background__asset}`}
                src="/assets/detailpage__bg.png"
                width="525"
                height="370"
                alt="illustration of an orange road with a red car on"
              />
            </article>
          </div>
          <Road step={2} noSelectedCar={true}></Road>
          <BottomContainerStreamView
            timeDriven={"00:00"}
            location={true}
            route={ROUTES.controller}
            textButton={"Set"}
          ></BottomContainerStreamView>
        </div>
      </section>
    </>
  ));
};

export default CarDetail;
