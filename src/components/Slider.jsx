import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slider = ({ ImagesDesktop, ImagesMobile }) => {
    return (
        <Swiper
            navigation={true}
            autoHeight={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView="auto"
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 2,
        //   },
        // }}
        >
            {
                ImagesDesktop.map((item, index) => {
                    return (
                        <SwiperSlide className="desktop-slide" index={index}><img src={item} alt="project" /></SwiperSlide>
                    )
                })
            }

            {
                ImagesMobile.map((item, index) => {
                    return (
                        <SwiperSlide className="mobile-slide" index={index}><img src={item} alt="project" /></SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Slider