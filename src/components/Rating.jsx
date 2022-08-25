import React, { useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import RatingMain from "../images/interactive rating component/interactive-rating-component-rating.png";
import RatingThankYou from "../images/interactive rating component/interactive-rating-component-thank-you.png";

const Images = [
  RatingMain,
  RatingThankYou,
];

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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          Images.map((item, index) => {
            return (
              <SwiperSlide index={index}><img src={item} alt="project" /></SwiperSlide>
            )
          })
        }
      </Swiper>
    </motion.div>
  );
}
