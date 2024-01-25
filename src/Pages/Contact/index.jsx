import React from "react";
import Question from "../../Components/Question";
import HeaderBottom from "../../Components/HeaderBottom";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="">
      <HeaderBottom title1="Əlaqə" title2="Əsas səhifə" title3="Əlaqə" />
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="border-2 bg-[#FCFCFC] rounded-lg p-8 flex w-[444px] items-center gap-4">
            <div className="border-2  w-[70px] h-[70px] bg-[#435072] flex items-center justify-center rounded-full">
              <CiLocationOn className="w-[50px] h-[50px] text-white " />
            </div>
            <div>
              <h2 className="text-[26px] font-bold text-[#435072]">Ünvan</h2>
              <p className="text-[18px] w-[281px] text[#606F84]">
                Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
              </p>
            </div>
          </div>
          <div className="border-2 bg-[#FCFCFC] rounded-lg p-8 flex w-[444px] items-center gap-4">
            <div className="border-2  w-[70px] h-[70px] bg-[#435072] flex items-center justify-center rounded-full">
              <BsTelephone className="w-[50px] h-[50px] text-white " />
            </div>
            <div>
              <h2 className="text-[26px] font-bold text-[#435072]">Telefon</h2>
              <p className="text-[18px] w-[281px] text[#606F84]">
                +99450 5754080 <br />
                +99450 5754080
              </p>
            </div>
          </div>
          <div className="border-2 bg-[#FCFCFC] rounded-lg p-8 flex w-[444px] items-center gap-4">
            <div className="border-2  w-[70px] h-[70px] bg-[#435072] flex items-center justify-center rounded-full">
              <MdOutlineMail className="w-[50px] h-[50px] text-white " />
            </div>
            <div>
              <h2 className="text-[26px] font-bold text-[#435072]">Email</h2>
              <p className="text-[18px] w-[281px] text[#606F84]">
                info@netprogroup.az
              </p>
            </div>
          </div>
        </div>
        <Question grid />
      </div>
    </div>
  );
};

export default Contact;
