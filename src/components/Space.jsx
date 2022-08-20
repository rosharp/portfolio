import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
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
  return (
    <>
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
    </>
  );
}
