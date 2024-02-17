import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  bg-footerBg ">
      <div className=" container flex flex-wrap gap-2 py-4 justify-between  ">
        <div className="flex ">
          <div className=" flex gap-2 flex-col justify-between">
            <div>
              <img src="./footerLogo.png" alt="" />
            </div>
            <div className="flex flex-wrap gap-4">
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
        <div className="flex flex-wrap flex-col gap-2">
          <h2 className=" text-2xl font-bold text-[white]">Saytın xəritəsi</h2>
          <div className="text-[#ffffff8c] flex flex-wrap   flex-col gap-2 ">
            <Link to="/"> Əsas səhifə</Link>
            <Link to="/services"> Haqqımızda</Link>
            <Link to="/about"> Məhsullar</Link>
            <Link to="/products"> Xidmətlər və Həllər</Link>
            <Link to="/blog">Qalereya və Bloq</Link>
            <Link to="/contact"> Əlaqə</Link>
          </div>
        </div>
        <div className=" flex flex-wrap ">
          <div className="flex flex-wrap  gap-4 text-[#ffffff81] ">
            <div className="flex flex-col">
              <h2 className=" text-[24px] font-bold text-[white] ">Əlaqə</h2>
              <div className="flex flex-col ">
                <h2 className="text-bold text-[18px] text-[white]">Telefon</h2>
                <div>
                  <p>+99450 5754080</p>
                  <p>+99450 5754080</p>
                </div>
              </div>
              <div className="flex flex-col py-3 gap-2">
                <h2 className="text-bold text-[18px] text-[white]">Email</h2>
                <p>info@netprogroup.az </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-bold text-[18px] text-[white]">Ünvan</h2>
              <p>
                Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
              </p>
              <img src="./map.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex justify-between container text-[white] items-center py-4">
        <p>Copyright © NETPRO GROUP MMC - 2022</p>
        <p className="flex gap-4 items-center">
          Site by <img className="w-[60px] h-[60px]" src="./qs.jpg" alt="Səmədli Qulam" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
