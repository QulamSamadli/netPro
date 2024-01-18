import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./SecondSwiper.module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const images = [
  {
    id: 1,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
  {
    id: 2,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
  {
    id: 3,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
  {
    id: 4,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
  {
    id: 5,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
  {
    id: 6,
    img: "./SwiperLogo2.png",
    title: "DC Power Systems",
    description:
      "Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power",
  },
];

const SecondSwiper = () => {
  return (
    <div className=" bg-swiperBg2">
      <div className="container py-10">
        <h2 className="text-center text-[white] font-bold text-4xl py-5">
          Məhsullar
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000 }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {images.map(({ id, title, img, description }) => {
            return (
              <SwiperSlide className={` ${style.mySwiperSlide}`} id={id}>
                <img src={img} />
                <div className="p-4">
                  <h3 className="text-center text-[white] my-[15px]">
                    {title}
                  </h3>
                  <p className="text-center text-[white]">{description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondSwiper;
