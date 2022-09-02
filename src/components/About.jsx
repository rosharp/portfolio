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
      <p>{Content[1].text[0].content}</p>
      <p>{Content[1].text[1].content}</p>
      <ul>
        {Content[1].text[2].content.map((item) => {
          return (
            <li key={item.id}>{item.content}</li>
          )
        })}
      </ul>
      <Divider />
    </motion.div>
  );
}

export default About;
