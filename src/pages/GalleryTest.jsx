import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './GalleryTest.css'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function GalleryTest() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="BG">
            <img 
                src="https://i.imgur.com/dVq4R2O.png" 
                alt="EIRA-band" 
                className="swiperSlider-image swiperSlider-image-1" 
            />    
        </SwiperSlide> 
        <SwiperSlide className="BG">
            <img 
                src="https://i.imgur.com/dVq4R2O.png" 
                alt="EIRA-band" 
                className="swiperSlider-image swiperSlider-image-2" 
            />
        </SwiperSlide>
        <SwiperSlide className="BG">
            <img 
                src="https://i.imgur.com/dVq4R2O.png" 
                alt="EIRA-band" 
                className="swiperSlider-image swiperSlider-image-3" 
            />
        </SwiperSlide>
        <SwiperSlide className="BG">
            <img 
                src="https://i.imgur.com/dVq4R2O.png" 
                alt="EIRA-band" 
                className="swiperSlider-image swiperSlider-image-4" 
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}