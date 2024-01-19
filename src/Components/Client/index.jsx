import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import axios from "axios";

const _url = "http://localhost:5020/client";

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

      <Swiper className="mySwiper">
        {img.map(({ id, img }) => {
          return (
            <SwiperSlide className="text-center" key={id}>
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
