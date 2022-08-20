import React from "react";
import * as FaIcons from "react-icons/fa";
import Stars from "../images/stars.png";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={Stars} alt="" />
      <p>{currentDate} Ro Sharp</p>

      <div className="header-btn-container">
        <a className="header-btn" href="https://www.linkedin.com/in/vitaliy-bekshnev-8399b4248/"><FaIcons.FaLinkedin className="header-icon" /></a>
        <a className="header-btn" href="https://github.com/rosharp"><FaIcons.FaGithub className="header-icon" /></a>
        <a className="header-btn" href="mailto:vy.bekshnev@gmail.com"><FaIcons.FaMailBulk className="header-icon" /></a>
      </div>
    </div>
  )
}

export default Footer
