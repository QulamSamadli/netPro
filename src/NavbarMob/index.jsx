import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavbarMob = ( hamburger=false) => {
  return (
    
      <nav className={`containertext-[#435072;] flex flex-col w-[25%] items-center  hidden  absolute left-[75%] z-10 justify-evenly h-[100vh]  bg-[white] text-sm font-bold ${hamburger ? "block" : "hidden"}`}>
        <NavLink className={"group flex items-center "} to="/">
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Əsas səhifə
        </NavLink>
        <NavLink
          className={"group flex items-center "}
          to="/about"
        >
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Haqqımızda
        </NavLink>
        <NavLink
          className={"group flex items-center "}
          to="/products"
        >
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Məhsullar
          
        </NavLink>
        <NavLink
          className={"group flex items-center"}
          to="/services"
        >
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Xidmətlər və Həllər
        </NavLink>
        <NavLink className={"group flex items-center "} to="/blog">
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Qalereya və Bloq
        </NavLink>
        <NavLink
          className={"group flex items-center "}
          to="/contact"
        >
          <FaCaretRight className="group-hover:rotate-90 duration-300" />
          Əlaqə
        </NavLink>
      </nav>
   
  );
};

export default NavbarMob;


// <ul className="absolute left-0 space-y-5 top-12 z-10 bg-white w-32 p-2 hidden group-hover:block">
//             <li>
//               <img src="./vertiv.png" alt="" />
//             </li>
//             <hr />
//             <li>
//               <img src="./maklesan.png" alt="" />
//             </li>
//             <hr />
//             <li>
//               <img src="./long.png" alt="" />
//             </li>
//           </ul>