import React, { useState } from "react";

const MyButton = () => {
  const [isOn, setIsOn] = useState(false); //initiall state false
  const handleClick = () => {
    setIsOn(!isOn); //toggle the state
  };
  return <button onClick={handleClick}>{isOn ? "On" : "OFF"}</button>;
};

export default MyButton;
