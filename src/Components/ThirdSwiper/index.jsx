import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../ThirdSwiper/ThirdSwiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const ThirdSwiper = () => {
  return (
    <div className="   bg-thirdSwiper  ">
      <div className=" h-[300px] container flex flex-col items-center p-4 ">
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
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-[490px]"
        >
          <SwiperSlide className="bg-white " >
            <img className="object-contain" src="./swiperVertiv3.png" />
          </SwiperSlide>
          <SwiperSlide className="bg-white ">
            <img className="object-contain" src="./swiperMakelsan3.png" />
          </SwiperSlide>
          <SwiperSlide className="bg-white ">
            <img className="object-contain" src="./swiperLong3.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdSwiper;
