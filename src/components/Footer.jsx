import React from "react";
import { Link } from "react-router-dom";
import Stars from "../images/stars.png";
import LinkContainer from "./LinkContainer";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={Stars} alt="" />
      <p>{currentDate} Ro Sharp</p>
      <LinkContainer />
    </div>
  )
}

export default Footer
