import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-footerBg ">
      <div className="container flex py-10 justify-between ">
        <div className="flex">
          <div className="left1 flex flex-col justify-between">
            <div>
              <img src="./footerLogo.png" alt="" />
            </div>
            <div className="flex gap-4">
              <img
                className="border-2 p-2 rounded-md"
                src="./footerFb.png"
                alt=""
              />
              <img
                className="border-2 p-2 rounded-md"
                src="./footerInsta.png"
                alt=""
              />
              <img
                className="border-2 p-2 rounded-md"
                src="./footerWp.png"
                alt=""
              />
              <img
                className="border-2 p-2 rounded-md"
                src="./footerLn.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className=" text-2xl font-bold text-[white]">Saytın xəritəsi</h2>
          <div className="text-[#ffffff8c] flex flex-col gap-5 ">
            <Link to="/"> Əsas səhifə</Link>
            <Link to="/services"> Haqqımızda</Link>
            <Link to="/about"> Məhsullar</Link>
            <Link to="/products"> Xidmətlər və Həllər</Link>
            <Link to="/blog">Qalereya və Bloq</Link>
            <Link to="/contact"> Əlaqə</Link>
          </div>
        </div>
        <div className="right flex flex-col">
          <h2 className=" text-2xl font-bold text-[white] ">Əlaqə</h2>
          <div className="flex  gap-10 text-[#ffffff81] py-4">
          <div className="flex flex-col  " >
            <div className="flex flex-col gap-2">
              <h2 className="text-bold text-[18px] text-[white]">Telefon</h2>
              <div >
                <p>+99450 5754080</p>
                <p>+99450 5754080</p>
              </div>
            </div>
            <div className="flex flex-col py-6 gap-2">
              <h2  className="text-bold text-[18px] text-[white]">Email</h2>
              <p>info@netprogroup.az </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2  className="text-bold text-[18px] text-[white]">Ünvan</h2>
            <p>Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025</p>
            <img src="./map.png" alt="" />
          </div>
          </div>
        </div>
    
      </div>
      <hr />
      
      <div className="flex justify-between container text-[white] items-center py-4">
        <p>Copyright © NETPRO GROUP MMC - 2022</p>
        <p>Site by JEDAI</p>
      </div>
    </div>
  );
};

export default Footer;
