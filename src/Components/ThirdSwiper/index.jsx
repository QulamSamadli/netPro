import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "../ThirdSwiper/ThirdSwiper.css";
import style from "./ThirdSwiper.module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
const images = [
  "./swiperVertiv3.png",
  "./swiperMakelsan3.png",
  "./swiperLong3.png",
];

const ThirdSwiper = () => {
  return (
    <div className="   bg-thirdSwiper  ">
      <div className="  container flex flex-col items-center p-4 ">
        <h2 className="text-4xl font-bold text-[white]">Brendlər</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{delay:2000}}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className={` ${style.mySwiper}`}
        >
          {images.map((image) => {
            return (
              <SwiperSlide className={`bg-white ${style.mySwiperSlide}`}>
                <img className="p-6" src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdSwiper;
