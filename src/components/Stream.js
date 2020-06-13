import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";

const Stream = () => {
  return (
    <>
      <h1>Stream</h1>
      <Link to={ROUTES.finish}>Finish</Link>
    </>
  );
};

export default Stream;
