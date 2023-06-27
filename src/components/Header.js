import React from "react";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <div>
      <div className="blob-effect text-center mx-auto">
        <span></span>
        <span></span>
        <span></span>
        <div className="div-container" type="submit">
          <h1>Money Time</h1>
        </div>
      </div>
      <img src={logo} id="logo" />
    </div>
  );
}
