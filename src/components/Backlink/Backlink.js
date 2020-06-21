import React from "react";
import styles from "./backlink.module.css";
import { Link } from "react-router-dom";

const BackLink = ({ route }) => {
  return (
    <Link className={`${styles.back} ${styles.button__animation}`} to={route}>
      &#10094; go back
    </Link>
  );
};

export default BackLink;
