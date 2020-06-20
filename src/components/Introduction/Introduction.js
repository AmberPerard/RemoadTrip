import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./Introduction.module.css";
import { useStores } from "../../hooks/useStores";

const Introduction = () => {
  const { carStore } = useStores();

  const car = carStore.getCarsById("1");
  console.log(car);

  const result = car.getLocation();
  console.log(result);

  // console.log("fetching");
  // fetch(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.longitude},${this.latitude}?access_token=${process.env.REACT_APP_apiKey_weather}`
  // )
  //   .then((res) => res.json())
  //   .then(
  //     (result) => {
  //       return result;
  //     },
  //     (error) => {
  //       return error;
  //     }
  //   );

  return (
    <>
      <section className={style.landingcontainer}>
        <h1 className={style.titel}>REMOAD TRIP</h1>
        <p className={style.text}>
          Take a road trip around the world from your couch
        </p>
        <Link className={style.start} to={ROUTES.map}>
          Start
        </Link>
        <div className={style.info}>
          <a href="#secondary">
            <p className={style.introanimate}>More information</p>
          </a>
        </div>
      </section>

      <section className={style.landingbg}>
        <h2 className={style.hidden}>Background image</h2>
        <img
          className={style.road__one}
          src="/assets/road__one.png"
          width="2880"
          height="813"
          alt="road"
        />
        <img
          className={style.car__one}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
        <img
          className={style.car__two}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
        <img
          className={style.road__two}
          src="/assets/road__two.png"
          width="1078"
          height="690"
          alt="road"
        />
        <img
          className={style.road__three}
          src="/assets/road__three.png"
          width="1252"
          height="764"
          alt="road"
        />
        <img
          className={style.car__three}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
        <img
          className={style.car__four}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
        <img
          className={style.car__five}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
        <img
          className={style.car__six}
          src="/assets/car__3D.png"
          width="364"
          height="310"
          alt="car illustration"
        />
      </section>
    </>
  );
};

export default Introduction;
