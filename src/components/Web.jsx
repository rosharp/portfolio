import React from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import Card from "./Card";
import { CardsData } from "./CardsData";
import { IoMdHeartEmpty } from "react-icons/io";
import { motion } from "framer-motion";
import textAnimationX from "./animations/textAnimationX";

const Web = () => {
  return (
    <motion.div id="web"
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2 custom={1} variants={textAnimationX}>Web</motion.h2>
      <p>Work I've done that resides out there, somewhere in the vast virtual space of the Internet.</p>
      <div className="cards-container">
        {CardsData.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
              linkUrl={item.linkUrl}
              className={item.className}
            />
          );
        })}
      </div>
      <Divider />
    </motion.div>
  );
}

export default Web;
