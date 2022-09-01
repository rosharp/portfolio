import React from "react";
import Divider from "./Divider";
import { motion } from "framer-motion";
import textAnimationX from "./animations/textAnimationX";
import Content from "./Content";

const About = () => {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1 custom={1} variants={textAnimationX}>{Content[1].title}</motion.h1>
      <p>{Content[1].text}</p>
      <Divider />
    </motion.div>
  );
}

export default About;
