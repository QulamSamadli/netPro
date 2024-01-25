import React from "react";
import NavbarMob from "../../NavbarMob";
import HeaderBottom from "../../Components/HeaderBottom";

const About = () => {
  return (
    <div>
      <HeaderBottom
        title1="Haqqımızda"
        title2="Əsas səhifə"
        title3="Haqqımızda"
      />

      <div className="container my-6 ">
        <div className="flex  flex-wrap ">
        <div className="flex flex-col  justify-around">
            <h2 className="text-[#435072] text-[40px] font-bold">
              “NetPro Group MMC” şirkəti haqqında
            </h2>

            <p className="text-[20px] text-[#606F84]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.sum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.
            </p>
            <p className="text-[20px] text-[#606F84]">
              Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et
              risus tortor, sollicitudin. Ultrices sesum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.sum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.d ac lobortis at.
            </p>
            <p className="text-[20px] text-[#606F84]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.putate eget odio elementum.
            </p>
          </div>
          <img className="m-auto" src="./haqqimizda1.png" alt="" />
          
        </div>
        <div className="flex flex-wrap my-4 gap-6 ">
          <div className="flex  flex-col justify-around text-[20px] text-[#606F84]">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio
              elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla
              porta. Elementum, pharetra, egestas non vulputate eget odio
              elementum.
            </p>
            <p className="">
              Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et
              risus tortor, sollicitudin. Ultrices sed ac lobortis at.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio elementum.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta.
              Elementum, pharetra, egestas non vulputate eget odio
              elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla
              porta. Elementum, pharetra, egestas non vulputate eget odio
              elementum.
            </p>
          </div>

          <img className="m-auto" src="./haqqimizda2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
