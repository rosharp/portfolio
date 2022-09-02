import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";
import Content from "./Content";

import SpaceMain from "../images/space/Space.png";
import SpaceMainMobile from "../images/space/Space-mobile.png";
import SpaceMainMainMobileToggled from "../images/space/Space-mobile-toggled.png";
import Mars from "../images/space/Mars.png";
import MoonMobile from "../images/space/Moon-mobile.png";
import SpaceCrew from "../images/space/Crew.png";
import SpaceCrewMobile from "../images/space/Crew-mobile.png";
import SpaceTechnology from "../images/space/Technology.png";
import SpaceTechnologyMobile from "../images/space/Technology-mobile.png";

const ImagesDesktop = [
  SpaceMain,
  Mars,
  SpaceCrew,
  SpaceTechnology,
];

const ImagesMobile = [
  SpaceMainMobile,
  SpaceMainMainMobileToggled,
  SpaceCrewMobile,
  MoonMobile,
  SpaceTechnologyMobile,
]

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-page"
    >
      <h1>{Content[2].title}</h1>
      <p>{Content[2].subtitle}</p>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

      <p>{Content[2].text[0].content}</p>
      <p>{Content[2].text[1].content}</p>
      <ul>
        {Content[2].text[2].content.map((item) => {
          return (
            <li key={item.id}>{item.content}</li>
          )
        })}
      </ul>

    </motion.div>
  );
}
