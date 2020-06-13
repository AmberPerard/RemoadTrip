import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";

const Finish = () => {
  return (
    <>
      <h1>Finish</h1>
      <Link to={ROUTES.home}>Back home</Link>
    </>
  );
};

export default Finish;
