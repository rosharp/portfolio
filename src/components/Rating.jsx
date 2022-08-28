import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";

import RatingMain from "../images/interactive rating component/interactive-rating-component-rating.png";
import RatingThankYou from "../images/interactive rating component/interactive-rating-component-thank-you.png";

const ImagesDesktop = [
  RatingMain,
  RatingThankYou,
];

const ImagesMobile = [];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Rating</h1>
      <p>Interactive Rating Component</p>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

    </motion.div>
  );
}
