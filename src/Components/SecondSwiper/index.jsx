import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./SecondSwiper.module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import axios from "axios";

const _url = "http://localhost:5381/products"

const SecondSwiper = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{

axios.get(_url).then(({data})=>{

setProducts(data)
})

  },[])


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
          {products.map(({ id, title, img, description }) => {
            return (
              <SwiperSlide className={` ${style.mySwiperSlide}`} key={id}>
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
