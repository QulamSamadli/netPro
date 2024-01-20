import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center pt-2">
        <Link to="/">
          <img src="./headerLogo.png" alt="" />
        </Link>
        <nav className="text-[#435072;] text-sm font-bold flex space-x-5">
          <NavLink className={"group flex items-center relative py-4"} to="/">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Əsas səhifə
           
          </NavLink>
          <NavLink className={"group flex items-center relative py-4"} to="/about">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Haqqımızda
          
          </NavLink>
          <NavLink className={"group flex items-center relative py-4"} to="/products">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Məhsullar
            <ul className="absolute left-0 space-y-5 top-12 z-10 bg-white w-32 p-2 hidden group-hover:block">
              <li ><img src="./vertiv.png" alt="" /></li>
              <hr />
              <li><img src="./maklesan.png" alt="" /></li>
              <hr />
              <li><img src="./long.png" alt="" /></li>
              
            </ul>
          </NavLink>
          <NavLink className={"group flex items-center relative py-4"} to="/services">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Xidmətlər və Həllər
            
          </NavLink>
          <NavLink className={"group flex items-center relative py-4"} to="/blog">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Qalereya və Bloq
           
          </NavLink>
          <NavLink className={"group flex items-center relative py-4"} to="/contact">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Əlaqə
           
          </NavLink>

          <div className="burger">---</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
