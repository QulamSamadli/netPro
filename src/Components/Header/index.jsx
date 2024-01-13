import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center pt-2">
        <Link to="/">
          <img src="./headerLogo.png" alt="" />
        </Link>
        <nav className="text-[#435072;] text-sm font-bold flex space-x-5">
          <NavLink className={"group flex items-center relative py-4"} to="/">
            <FaCaretRight className="group-hover:rotate-90 duration-300" />
            Əsas səhifə
            <ul className="absolute left-0 top-12 z-10 bg-black w-52 hidden group-hover:block">
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </NavLink>
          <NavLink className="flex  items-center" to="/about">
            <FaCaretRight className="hover:rotate-90 duration-300" />
            Haqqımızda
          </NavLink>
          <NavLink className="flex  items-center" to="/products">
            <FaCaretRight className="hover:rotate-90 duration-300" />
            Məhsullar
          </NavLink>
          <NavLink className="flex  items-center" to="/services">
            <FaCaretRight className=" hover:rotate-90 duration-300" />
            Xidmətlər və Həllər
          </NavLink>
          <NavLink className="flex  items-center" to="/blog">
            <FaCaretRight className="hover:rotate-90 duration-300" />
            Qalereya və Bloq
          </NavLink>
          <NavLink className="flex  items-center" to="/contact">
            <FaCaretRight className="hover:rotate-90 duration-300" />
            Əlaqə
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
