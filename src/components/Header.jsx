import React from "react";
import Avatar from "../images/avatar.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Divider from "./Divider";

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
      <div className="header-btn-container">
        <a className="header-btn" href="https://www.linkedin.com/in/vitaliy-bekshnev-8399b4248/"><FaIcons.FaLinkedin className="header-icon" /></a>
        <a className="header-btn" href="https://github.com/rosharp"><FaIcons.FaGithub className="header-icon" /></a>
        <a className="header-btn" href="mailto:vy.bekshnev@gmail.com"><FaIcons.FaMailBulk className="header-icon" /></a>
        <a className="header-btn" href="/downloads/Vitaliy_Bekshnev_CV.pdf" download><FaIcons.FaFileDownload className="header-icon" /></a>
      </div>
      <Divider />
    </div>
  );
}

export default Header;
