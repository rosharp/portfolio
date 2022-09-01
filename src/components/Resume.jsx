import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Content from "./Content";

const Resume = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{Content[6].name}</h2>
      <h3>{Content[6].speciality}</h3>

      <h1>{Content[6].title}</h1>

      <div>
        <h2>{Content[6].text[0].title}</h2>
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
      </div>

      <div>
        <h2>{Content[6].text[1].title}</h2>
        <div>
          {
            Content[6].text[1].content.map((item) => {
              return (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              )
            })
          }
        </div>
        <div>
          <h3>{Content[6].text[2].title}</h3>
          <p>{Content[6].text[2].content[0].university}</p>
          <p>{Content[6].text[2].content[0].bachelor}</p>
          <p>{Content[6].text[2].content[0].year}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
