import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [today, setToday] = useState(new Date());
  let time = today.toLocaleTimeString("en-BE");

  const getTime = () => {
    setToday(new Date());
  };

  const setTime = setInterval(getTime, 1 * 1000);
  useEffect(() => {
    return () => {
      clearInterval(setTime);
    };
  }, [setTime]);
  return <p>{time}</p>;
};

export default LocalTime;
