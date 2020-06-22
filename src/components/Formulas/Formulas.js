import React from "react";
import style from "./Formulas.module.css";

const Formulas = () => {
  return (
    <>
      <section className={style.block}>
          <h2 className={style.title}>Multiple formulas</h2>
          <p className={style.paragraph}>Different formulas for various people. Each car has its own level of difficulty that depends on the environment in which the car is located.</p>

          <div className={style.formulas}>
            <article className={style.formula}>
                <h3 className={style.sec__title}>Easy going</h3>
                <p className={style.sec__paragraph}>For starters or people who want to take it easy and just want to enjoy the surroundings and culture.</p>
                <img className={style.sec__img} src="/assets/car1star.png" width="141" height="113" alt="illustration of a car with the amount of difficulty"/>
            </article> 

            <article className={style.formula}>
                <h3 className={style.sec__title}>Challenging</h3>
                <p className={style.sec__paragraph}>An intermediate level that requires a little more skill. <br/>You could possibly find small side roads which have unique secrets.</p>
                <img className={style.sec__img} src="/assets/car2stars.png" width="141" height="113" alt="illustration of a car with the amount of difficulty"/>
            </article> 

            <article className={style.formula}>
                <h3 className={style.sec__title}>Adventure time!</h3>
                <p className={style.sec__paragraph}>Buckle up! <br/>This level is for people who are not afraid of a challenge and love adventure!</p>
                <img className={style.sec__img} src="/assets/car3stars.png" width="141" height="113" alt="illustration of a car with the amount of difficulty"/>
            </article> 
          </div>   

      </section>

    </>
  );
};

export default Formulas;
