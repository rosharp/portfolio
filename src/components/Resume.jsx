import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import textAnimationX from "./animations/textAnimationX";
import Content from "./Content";
import Divider from "./Divider";

const Resume = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <motion.div
      className="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 custom={1} variants={textAnimationX}>{Content[6].title}</motion.h1>
        <Divider />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2 custom={2} variants={textAnimationX}>{Content[6].text[0].title}</motion.h2>
        {
          Content[6].text[0].content.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <ul>
                  {
                    item.content.map((item) => {
                      return (
                        <li key={item.id}>{item.content}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
        <Divider />
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2 custom={1} variants={textAnimationX}>{Content[6].text[1].title}</motion.h2>
        <div>
          {
            Content[6].text[1].content.map((item) => {
              return (
                <div key={item.id}>
                  <p><span style={{ "textDecoration": "bold" }}>{item.title}</span>: {item.content}</p>
                </div>
              )
            })
          }
          <Divider />
        </div>


        <motion.div
          className="education"
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 custom={2} variants={textAnimationX}>{Content[6].text[2].title}</motion.h2>
          <p>{Content[6].text[2].content[0].university}</p>
          <p>{Content[6].text[2].content[0].bachelor}</p>
          <p>{Content[6].text[2].content[0].year}</p>
        </motion.div>
        <Divider />
      </motion.div>
    </motion.div>
  );
}

export default Resume;
