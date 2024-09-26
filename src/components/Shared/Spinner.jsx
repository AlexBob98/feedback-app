import React from "react";
import spinner from "../assets/load.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "50px", margin: "0 auto", display: "flex", paddingTop: "2em"}}
    />
  );
}

export default Spinner;
