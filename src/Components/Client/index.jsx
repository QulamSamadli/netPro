import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from "./ClientSwiper.module.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";

const _url = "https://neon-twilight-78fb1a.netlify.app/client";

const Client = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(_url)
      .then(({ data }) => {
        setImg(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container my-6 ">
      <div className=" text-center">
        <h2 className="text-4xl text-[#435072] font-bold ">
          Partnyorlar və Müştərilər
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2000 }}
        modules={[EffectCoverflow, Autoplay]}
        className={`${style.mySwiper}`}
      >
        {img.map(({ id, img }) => {
          return (
            <SwiperSlide
              className={`bg-transparent flex justify-center ${style.mySwiperSlide}`}
              key={id}
            >
              <img src={`${img}`} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Client;

//   <div className="items-center  grid grid-rows-1 grid-flow-col my-6 gap-x-6">
//   <img src="./vertivPartnyor.png" alt="" />
//   <img src="./glossePartnyor.png" alt="" />
//   <img src="./dealomPartnyor.png" alt="" />
//   <img src="./deltaPartnyor.png" alt="" />
//   <img src="./autoPartnyor.png" alt="" />
//   <img src="./dealomPartnyor.png" alt="" />
//   <img src="./deltaPartnyor.png" alt="" />
//   <img src="./guardanPartnyor.png" alt="" />
// </div>
