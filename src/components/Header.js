import React from "react";
import logo from "../img/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="blob-effect">
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
