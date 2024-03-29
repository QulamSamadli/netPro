import React, { useEffect, useState } from "react";
import HeaderBottom from "../../Components/HeaderBottom";
import axios from "axios";
import { Link } from "react-router-dom";

const _url = "https://netpro-db.vercel.app/solutions";

const Services = () => {
  const [solution, setSolution] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setSolution(data);
    });
  }, []);
  return (
    <div className="">
      <HeaderBottom
        title1="Əsas səhifə"
        title2="Əsas səhifə"
        title3="Xidmətlər və Həllər"
      />

      <div className="bg-[#F4F4F4] p-6 container flex flex-col flex-wrap">
        <h2 className=" text-center  text-[32px] text-[#435072] font-bold ">
          Xidmətlər və Həllərin növləri
        </h2>

        <div className="flex flex-wrap justify-center gap-5  ">
          {solution.map(({ id, img, title, description, to }) => {
            return (
              <Link
                to={`/services/${id}`}
                key={id}
                className="border-[#D4DAEA] w-[290px] p-4 flex flex-col gap-2 border-[1px] rounded-[10px]"
              >
                <img src={img} alt="" />
                <h2 className="text-[18px] h-14 text-[#435072] font-bold">
                  {title}
                </h2>
                <hr />

                <p className="text-[13px]  text-[#606F84] font-normal">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
