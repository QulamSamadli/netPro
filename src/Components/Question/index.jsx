import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";

const _url = "https://netpro-db.vercel.app/collabrators";

const Question = ({ grid = false }) => {
  const data = { fullname: "", email: "", tel: "", text: "" };
  const [input, setInput] = useState([]);
  const handleData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios.post(_url, input).then((res) => {
      console.log(res);
      setInput({ ...data });
      alert("Ugurla sonlandir");
    });
  };

  return (
    <div className={`${grid ? "" : "bg-questionBg"}  `}>
      <div className="container flex  flex-col items-center gap-3 p-4">
        <h2 className="text-4xl text-[#435072] font-bold">Suallarınız var?</h2>
        <p className="text-xl text-center font-normal text-[#435072] ">
          Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.
        </p>
        <div
          className={`gap-3 grid grid-rows-1 ${
            grid ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          } `}
        >
          <div className="grid gap-2">
            <input
              name="fullname"
              value={input.fullname}
              onChange={handleData}
              className="p-8 border rounded-lg"
              type="text"
              placeholder="Adınız və Soyadınız"
            />
            <input
              name="email"
              value={input.email}
              onChange={handleData}
              className="p-8 border rounded-lg"
              type="email"
              placeholder="Email ünvanı"
            />
            <input
              name="tel"
              value={input.tel}
              onChange={handleData}
              className="p-8 border rounded-lg"
              type="tel"
              placeholder="Əlaqə nömrəsi"
            />
          </div>
          <div>
            <textarea
              name="text"
              value={input.text}
              onChange={handleData}
              className="border rounded-lg p-4"
              placeholder="Mesajınız"
              cols={`${grid ? "40" : "30"}`}
              rows="10"
            ></textarea>
          </div>
        </div>
        <button
          className=" flex items-center justify-center transition duration-300 min-h-[3.1875rem] w-[11.625rem] font-medium text-[1.125rem] border rounded-md hover:bg-[white] hover:text-[#435072]  text-[white] bg-[#435072] border-[#435072]"
          onClick={handleClick}
        >
          Gonder
        </button>
       
      </div>
    </div>
  );
};

export default Question;
