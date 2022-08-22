import React, { useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import IntroMobile from "../images/intro section/intro-mobile.png";
import IntroMobileNav from "../images/intro section/intro-mobile-nav.png";
import IntroNavToggled from "../images/intro section/intro-nav-toggled.png";

const Images = [
  IntroNavToggled,
  IntroMobile,
  IntroMobileNav,
];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <h1>Intro</h1>
      <p>Intro Section with Dropdown Navigation</p>
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
