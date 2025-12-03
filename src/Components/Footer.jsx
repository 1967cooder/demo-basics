import { Typography } from "@mui/material";
import React from "react";
const Footer = ({ count, setCount }) => {
  const handleBackgroundColor = () => {
    if (count === 0) return "grey";
    if (count > 0) return "green";
    if (count < 0) return "red";
  };

  return (
    <footer className="attribution">
      <Typography variant="body1">
        Copirihgts<a href="#">Silvana Lindholm</a>
      </Typography>

      <div className="counter-container">
        <button onClick={() => setCount(count + 1)}>+</button>
        <div
          style={{
            width: "40px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: handleBackgroundColor(),
          }}
        >
          {count}
        </div>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </footer>
  );
};
export default Footer;
