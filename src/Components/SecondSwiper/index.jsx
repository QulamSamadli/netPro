
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../SecondSwiper/SecondSwiper.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SecondSwiper = () => {
  return (
    <div className=" bg-swiperBg2">
    <div className='container ' >
    <h2 className='text-center text-[white] font-bold text-4xl py-5'>Məhsullar</h2>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
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
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./SwiperLogo2.png" />
        <h3 className='text-center text-[white] py-3 ' >DC Power Systems</h3>
        <p className='text-center text-[white]' >Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power</p>
      </SwiperSlide>
    
    </Swiper>
  </div>
  </div>
  )
}

export default SecondSwiper