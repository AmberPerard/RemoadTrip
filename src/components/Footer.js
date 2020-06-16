import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={style.block}>
        <h2 className={style.title}>Footer</h2>
        <div className={style.footer__blocks}>
            <article className={style.footer__block}>
                <h3 className={style.sec__title}>Information</h3>
                <ul className={style.list}>
                    <li className={style.listitem}><a className={style.link} href="/">About Us</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Terms &amp; Conditions</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Privacy Policy</a></li>
                </ul>
            </article> 

            <article className={style.footer__block}>
                <h3 className={style.sec__title}>Contact</h3>
                <ul className={style.list}>
                    <li className={style.listitem}><a className={style.link} href="/">FAQ</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Help Desk</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Business</a></li>
                </ul>
            </article> 

            <article className={`${style.footer__block} ${style.footerblock__right}`}>
                <h3 className={style.sec__title}>Follow Us</h3>
                <ul className={style.list}>
                    <li className={style.listitem}><a className={style.link} href="/">Twitter</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Facebook</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Instagram</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Twitch</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">Youtube</a></li>
                    <li className={style.listitem}><a className={style.link} href="/">LinkedIn</a></li>
                </ul>
            </article> 
        </div>
        <div class={style.footing}>
            <h3 class={style.footing__p}>&copy;2020 Devine Integration - student project by Amber Pérard, Ellen Sierens &amp; Julia Anseele</h3>
        </div>
      </section>

    </>
  );
};

export default Footer;
