import React from "react";
import { motion } from "framer-motion";
import Avatar from "../images/avatar.png";
import Divider from "./Divider";
import textAnimationY from "./animations/textAnimationY";
import LinkContainer from "./LinkContainer";


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

      <motion.img className="avatar-img" src={Avatar} alt="avatar" custom={3} variants={textAnimationY} />

      <br />

      <LinkContainer />

      <Divider />
    </motion.div>
  );
}

export default Header;
