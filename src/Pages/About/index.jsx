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

      <div className="container ">
        <div className="flex">
          <img src="haqqimizda1.png" alt="" />
          <div className="flex flex-col justify-between">
            <h2>“NetPro Group MMC” şirkəti haqqında</h2>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.
            </p>
            <p className="my-8"> Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</p>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</p>
          </div>
        </div>
        <div className="flex">
     <div >
     <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.
            </p>
            <p className="my-8"> Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</p>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</p>
     </div>

          <img src="./haqqimizda2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
