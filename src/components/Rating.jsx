import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import RatingMain from "../images/interactive rating component/interactive-rating-component-rating.png";
import RatingThankYou from "../images/interactive rating component/interactive-rating-component-thank-you.png";

const Images = [
  RatingMain,
  RatingThankYou,
];

export default function App() {
  return (
    <>
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
    </>
  );
}
