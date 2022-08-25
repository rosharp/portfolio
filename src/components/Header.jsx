import React from "react";
import { motion } from "framer-motion";
import Avatar from "../images/avatar.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Divider from "./Divider";
import textAnimationY from "./animations/textAnimationY";


const Header = () => {

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      className="header-home"
    >
      <motion.h1 custom={1} variants={textAnimationY}>Hello, <span>I'm Vitaly</span></motion.h1>

      <div className="header-p">
        <motion.p custom={2} variants={textAnimationY}>Frontend Developer</motion.p>
        <motion.p custom={2} variants={textAnimationY}>Translator</motion.p>
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
    </motion.div>
  );
}

export default Header;
