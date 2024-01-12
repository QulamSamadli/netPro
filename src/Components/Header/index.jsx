import React from "react";
import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" m-0 p-0 container flex justify-between items-center pt-2">
        <NavLink to="/" ><img src="./headerLogo.png" alt="" /></NavLink>
      <nav className="text-[#435072;] text-sm font-bold flex space-x-5">
        <NavLink className="flex  items-center" to="/"><FaCaretRight className="hover:rotate-90 duration-300" />Əsas səhifə</NavLink>
        <NavLink className="flex  items-center" to="/about"><FaCaretRight className="hover:rotate-90 duration-300" />Haqqımızda</NavLink>
        <NavLink className="flex  items-center" to="/products"><FaCaretRight className="hover:rotate-90 duration-300" />Məhsullar</NavLink>
        <NavLink  className="flex  items-center" to="/services"><FaCaretRight className=" hover:rotate-90 duration-300" />Xidmətlər və Həllər</NavLink>
        <NavLink className="flex  items-center" to="/blog"><FaCaretRight className="hover:rotate-90 duration-300" />Qalereya və Bloq</NavLink>
        <NavLink className="flex  items-center" to="/contact"><FaCaretRight className="hover:rotate-90 duration-300" />Əlaqə</NavLink>
      </nav>
    </div>
  );
};

export default Header;
