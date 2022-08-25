import React, { useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import SpaceMain from "../images/space/Space.png";
import SpaceMainMobile from "../images/space/Space-mobile.png";
import SpaceMainMainMobileToggled from "../images/space/Space-mobile-toggled.png";
import Mars from "../images/space/Mars.png";
import MoonMobile from "../images/space/Moon-mobile.png";
import SpaceCrew from "../images/space/Crew.png";
import SpaceCrewMobile from "../images/space/Crew-mobile.png";
import SpaceTechnology from "../images/space/Technology.png";
import SpaceTechnologyMobile from "../images/space/Technology-mobile.png";

const Images = [
  SpaceMain,
  SpaceMainMobile,
  SpaceMainMainMobileToggled,
  Mars,
  MoonMobile,
  SpaceCrew,
  SpaceCrewMobile,
  SpaceTechnology,
  SpaceTechnologyMobile,
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
      <h1>Space</h1>
      <p>Fully Responsive Space Tourism Website</p>
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
