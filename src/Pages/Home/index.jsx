import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Home = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide className="bg-cover bg-center  bg-homeslider">
        <div className="flex container min-h-[500px] justify-center gap-10 flex-col items-start ">
          <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
            Avadanlıqların Quraşdırılması və Konfiqurasiyası
          </p>
          <button>Daha Etrafli</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-h-[580px] bg-homeslider container">
        <div className="flex  min-h-[500px] justify-center gap-10 flex-col items-start ">
          <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
            Avadanlıqların Quraşdırılması və Konfiqurasiyası
          </p>
          <button>Daha Etrafli</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-h-[580px] bg-homeslider container">
        <div className="flex  min-h-[500px] justify-center gap-10 flex-col items-start ">
          <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
            Avadanlıqların Quraşdırılması və Konfiqurasiyası
          </p>
          <button>Daha Etrafli</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
