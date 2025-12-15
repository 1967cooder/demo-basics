// 1. Toggle Button With Dynamic Label

// Pseudocode (problem)

// Create a button.
// Button text is "ON" when state is true, "OFF" when state is false.
// Initial state is false (OFF).
// When you click the button, toggle the state.
// Text on the button must update accordingly.

import React, { useState } from "react";
import { Button } from "@mui/material";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false); //initiall state false

  const handleToggle = () => {
    setIsOn(!isOn); //toggle the state
  };
  return (
    <Button variant="contained" onClick={handleToggle}>
      {isOn ? "On" : "OFF"}
    </Button>
  );
};

export default ToggleButton;
