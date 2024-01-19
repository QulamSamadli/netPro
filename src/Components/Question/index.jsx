import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";

const _url = "http://localhost:5005/collabrators";

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
    });
    setInput({ ...data });
  };

  return (
    <div className="bg-questionBg">
      <div className="container flex justify-center flex-col items-center gap-3 p-4">
        <h2 className="text-4xl text-[#435072] font-bold">Suallarınız var?</h2>
        <p className="text-xl font-normal text-[#435072] ">
          Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.
        </p>
        <div
          className={`gap-3 grid grid-rows-1 ${
            grid ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div className="grid gap-2">
            <input
              name="fullname"
              value={input.fullname}
              onChange={handleData}
              className="p-4 border rounded-lg"
              type="text"
              placeholder="Adınız və Soyadınız"
            />
            <input
              name="email"
              value={input.email}
              onChange={handleData}
              className="p-4 border rounded-lg"
              type="email"
              placeholder="Email ünvanı"
            />
            <input
              name="tel"
              value={input.tel}
              onChange={handleData}
              className="p-4 border rounded-lg"
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
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <button onClick={handleClick}>Gonder</button>
        {/* <Button  title="Gonder" to="/contact" darkMode /> */}
      </div>
    </div>
  );
};

export default Question;
