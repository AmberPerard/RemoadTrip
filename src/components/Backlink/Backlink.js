import React from "react";
import styles from "./backlink.module.css";
import { useHistory } from "react-router-dom";

const BackLink = () => {
  let history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <button className={`${styles.back} ${styles.button__animation}`} onClick={handleClick}>
      &#10094; go back
    </button>
  );
};

export default BackLink;
