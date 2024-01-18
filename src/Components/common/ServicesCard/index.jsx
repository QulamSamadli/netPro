import React, { useEffect, useState } from "react";
// import { cards } from '../ServicesRoute'
import axios from "axios";

const _link = "http://localhost:3000/services";

const ServicesCard = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    axios
      .get(_link)
      .then(({ data }) => {
        setService(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // axios.post("url", {
  //   fullname: "lorem",
  //   email: "test",
  //   number: 123,
  //   msg: "lorem",
  // });

  // grid-template-columns: repeat(auto-fit, minmax(280px,1fr));

  return (
    <div className="bg-servicesBg py-10">
      <div className="container flex flex-col gap-4 ">
        <h2 className="text-4xl py-6 font-bold text-[#435072]">Xidmətlər</h2>
        <div
          className=" grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {service.map(({ title, id, description, img }) => {
            return (
              <div
                className="border border-white bg-white  rounded-2xl flex flex-col justify-around p-4"
                key={id}
              >
                <div className="rounded-full bg-slate-300 w-[55px] h-[55px] flex items-center justify-center">
                  <img src="./cardsImg.png" alt="" />
                </div>
                <h2 className="text-xl font-bold text-[#435072]">{title}</h2>
                <p className="text-sm font-normal text-[#606F84]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
