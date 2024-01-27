import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const HeaderTop = () => {
  return (
    <div className="bg-headertop ">
      <div className="container   justify-between items-center h-[64px] text-[white]  hidden md:flex">
        <p className="flex items-center">
          <CiLocationOn /> Fəzail Bayramov küç., 1156, Xətai ray., Bakı,
          Azərbaycan, AZ1025
        </p>
        <div className="flex gap-3  ">
          <div className="flex w-fit items-center">
            <FaWhatsapp /> +99450 5754080
          </div>
          <div>+99450 5754070</div>
        </div>
        <p className="flex  items-center">
          <CiMail />
          info@netprogroup.az
        </p>
        <div className="flex">
          <div>
            <RiFacebookBoxLine />
          </div>
          <div>
            <CiLinkedin />
          </div>
          <div>
            <CiInstagram />
          </div>
          <div>
            <FaWhatsapp />{" "}
          </div>
        </div>
        <p>Az</p>
      </div>
    </div>
  );
};

export default HeaderTop;
