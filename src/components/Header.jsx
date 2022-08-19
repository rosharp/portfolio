import React from "react";
import Avatar from "../images/avatar.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Header = () => {
  return (
  <div className="header-home">
    <h1>Hello, <span>I'm Vitaly</span></h1>

    <div className="header-p">
      <p>Frontend Developer</p>
      <p>Translator</p>
    </div>

    <img className="avatar-img" src={Avatar} alt="avatar" />

    <br />

    <button className="header-btn"><FaIcons.FaLinkedin className="header-icon" /></button>
    <button className="header-btn"><FaIcons.FaGithub className="header-icon" /></button>
    <button className="header-btn"><FaIcons.FaMailBulk className="header-icon" /></button>
  </div>
  );
}

export default Header;
