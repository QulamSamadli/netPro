import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "../ThirdSwiper/ThirdSwiper.css";
import style from "./ThirdSwiper.module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
const _url = "http://localhost:5380/brend"

const ThirdSwiper = () => {
const [brend,setBrend]=useState([])
useEffect(()=>{
axios.get(_url).then(({data})=>{

  setBrend(data)
})

},[])


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
          {brend.map(({img,id}) => {
            return (
              <SwiperSlide key={id} className={`bg-white ${style.mySwiperSlide}`}>
                <img className="p-6" src={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdSwiper;
