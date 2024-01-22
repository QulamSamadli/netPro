import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBottom from "../HeaderBottom";

const _url ="http://localhost:5322/services2"

const Services2 = () => {
    const [services2, setServices2] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setServices2(data);
    });
  }, []);
  return (
    <div >
      <HeaderBottom title1="Xidmətlər və Həllər" title2="Əsas səhifə " title3="Xidmətlər və Həllər" title4="-->Avadanlıqların quraşdırılması"/>
      <div className="w-[356px] border-solid border-[#D4DAEA] rounded-lg border-2 my-4">
        <h2 className="text-[24px] font-bold p-4 border-solid border-[##D4DAEA] bg-[#435072] text-white ">
        Xidmətlər və Həllər
        </h2>
        <div  className="flex gap-2 flex-col items-start px-4" >
          {services2.map(({ title }) => {
            return (
              <Link
                to="/"
                className="text-[#435072] my-2 text-[18px] font-bold"
              >
                {title} <hr />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Services2