import React from "react";
import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" container flex items-center justify-between pt-6">
        <div><img src="./headerLogo.png" alt="" /></div>
      <nav className="text-[#435072;] text-sm font-bold flex space-x-5">
        <NavLink className="flex  items-center" to="/"><FaCaretRight />Əsas səhifə</NavLink>
        <NavLink className="flex  items-center" to="/about"><FaCaretRight />Haqqımızda</NavLink>
        <NavLink className="flex  items-center" to="/products"><FaCaretRight />Məhsullar</NavLink>
        <NavLink className="flex  items-center" to="/services"><FaCaretRight />Xidmətlər və Həllər</NavLink>
        <NavLink className="flex  items-center" to="/blog"><FaCaretRight />Qalereya və Bloq</NavLink>
        <NavLink className="flex  items-center" to="/contact"><FaCaretRight />Əlaqə</NavLink>
      </nav>
    </div>
  );
};

export default Header;
