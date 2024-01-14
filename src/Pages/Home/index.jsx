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
      <div className="container flex flex-col items-center bg-homeAbout justify-evenly  bg-cover bg-center  h-[600px] text-[white]">
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
      <div className="container flex justify-between items-center p-10">
        <div className="w-[288px]">
          <h2 className="text-4xl text-[#435072] font-bold ">Partnyorlar və Müştərilər</h2>
        </div>
        <div className="items-center  grid grid-rows-2 grid-flow-col gap-x-20">
          <img  src="./vertivPartnyor.png" alt="" />
          <img  src="./glossePartnyor.png" alt="" />
          <img src="./dealomPartnyor.png" alt="" />
          <img src="./deltaPartnyor.png" alt="" />
          <img src="./autoPartnyor.png" alt="" />
          <img src="./dealomPartnyor.png" alt="" />
          <img src="./deltaPartnyor.png" alt="" />
          <img src="./guardanPartnyor.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
