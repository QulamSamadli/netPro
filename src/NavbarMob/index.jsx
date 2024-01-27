import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const NavbarMob = ({ setOpen, hamburger = false }) => {
  const closeMenu=()=>{
    setOpen(false)
  }
  return (
    <nav
      className={`container text-[#435072;] flex flex-col w-[100%] items-center top-0 fixed  left-[0]  z-10 justify-evenly h-[100vh]  bg-[white] text-sm font-bold transition ${
        hamburger ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <button
       onClick={closeMenu}
      >
       <RxCross2 />
      </button>
      <NavLink onClick={closeMenu} className={"group flex items-center "} to="/" >
        <FaCaretRight className="group-hover:rotate-90 duration-300" />
        Əsas səhifə
      </NavLink>
      <NavLink onClick={closeMenu} className={"group flex items-center "} to="/about">
        <FaCaretRight className="group-hover:rotate-90 duration-300" />
        Haqqımızda
      </NavLink>
      <NavLink onClick={closeMenu} className={"group flex items-center "} to="/products">
        <FaCaretRight className="group-hover:rotate-90 duration-300" />
        Məhsullar
      </NavLink>
      <NavLink onClick={closeMenu} className={"group flex items-center"} to="/services">
        <FaCaretRight className="group-hover:rotate-90 duration-300" />
        Xidmətlər və Həllər
      </NavLink>
      <NavLink onClick={closeMenu} className={"group flex items-center "} to="/blog">
        <FaCaretRight className="group-hover:rotate-90 duration-300" />
        Qalereya və Bloq
      </NavLink>
      <NavLink onClick={closeMenu} className={"group flex items-center "} to="/contact">
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
