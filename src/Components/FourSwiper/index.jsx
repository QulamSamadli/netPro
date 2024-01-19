import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "../ThirdSwiper/ThirdSwiper.css";
import style from "./FourSwiper.module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
const _url = "http://localhost:5389/dalery"

const FourSwiper = () => {
const [galery,setGalery]=useState([])
useEffect(()=>{
axios.get(_url).then(({data})=>{
setGalery(data)
})

},[])

  return (
    <div className="  container flex flex-col items-center p-4 ">
    <h2 className="text-4xl font-bold text-[#435072]">Qalereya</h2>
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
      className={`${style.mySwiper}`}
    >
      {galery.map(({img,id}) => {
        return (
          <SwiperSlide  key ={id} className={`bg-white ${style.mySwiperSlide}`}>
            <img  src={img} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
  )
}

export default FourSwiper