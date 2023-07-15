import React from "react";
import Button from "./Button";
import Emoji from "./Emoji";
// import { Hidden } from "@mui/material";

function pertambahan(a, b) {
  return a + b;
}

export default function Main() {
  return (
    <div className="main" style={{ overflow: "hidden" }}>
      <h1>
        Manage Your Productivity With <span>ProductiZen</span>
      </h1>
      <p>Don't let your dreams be dreams, Make your dreams come true!</p>
      <Button />
      <hr />
      <Emoji content="trophy-emoji" top="8%" left="10%" />
      <Emoji content="medal-emoji" top="25%" left="8%" />
      <Emoji content="gradu-emoji" top="45%" left="15%" />
      <Emoji content="star-emoji" top="8%" right="10%" />
      <Emoji content="paperwriting-emoji" top="45%" right="15%" />
      <Emoji content="dart-emoji" top="25%" right="8%" />

      {/* Iphone Mockup */}
      <img src="../images/iphone-14-mockup.png" />
    </div>
  );
}

// export default main;
