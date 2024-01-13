import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, to, darkMode, arrow }) => {
  return (
    <Link
      to={to}
      className={` flex items-center justify-center transition duration-300 min-h-[3.1875rem] w-[11.625rem] font-medium text-[1.125rem] border rounded-md ${
        darkMode
          ? "hover:bg-[white] hover:text-[#435072]  text-[white] bg-[#435072] border-[#435072]"
          : "hover:bg-[#435072] hover:text-[white]  text-[#435072] bg-[white] border-[#435072]`"
      }`}
    >
      {title} {arrow && "ox"}
    </Link>
  );
};

export default Button;
