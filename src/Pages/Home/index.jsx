import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import Button from "../../Components/common/Button";
const Home = () => {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="bg-cover bg-center  bg-homeslider">
          <div className="flex container min-h-[500px] justify-center gap-10 flex-col items-start ">
            <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
              Avadanlıqların Quraşdırılması və Konfiqurasiyası
            </p>
            <Button title="Daha Ətraflı" to="/products" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-cover bg-center  bg-homeslider">
          <div className="flex container min-h-[500px] justify-center gap-10 flex-col items-start ">
            <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
              Avadanlıqların Quraşdırılması və Konfiqurasiyası
            </p>
            <Button title="Daha Ətraflı" to="/products" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-cover bg-center  bg-homeslider">
          <div className="flex container min-h-[500px] justify-center gap-10 flex-col items-start ">
            <p className="text-[#435072] font-[700] text-[42px] max-w-[600px]  ">
              Avadanlıqların Quraşdırılması və Konfiqurasiyası
            </p>

            <Button title="Daha Ətraflı" to="/products" darkMode arrow />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col items-center bg-homeAbout justify-evenly  bg-cover bg-center  h-[600px] text-[white]">
        <img src="./logoWhite.png" alt="" />
        <h3 className="text-[40px] font-bold">
          “NetPro Group” şirkəti haqqında
        </h3>
        <p className="text-[20px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
          ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
          Elementum, pharetra, egestas non vulputate eget odio elementum. Mauris
          felis nisi, consequat non diam egestas ac in diam. Arcu et risus
          tortor, sollicitudin. Ultrices sed ac lobortis at. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis
          sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas
          non vulputate eget odio elementum. Mauris felis nisi, consequat non
          diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices
          sed ac lobortis at.
        </p>
        <Button title="Daha Ətraflı" to="/about" />
      </div>
    </>
  );
};

export default Home;
