import React from "react";
import Button from "../common/Button";

const Question = ({ grid = false }) => {
  return (
    <div className="bg-questionBg">
      <div className="container flex justify-center flex-col items-center gap-3 p-4">
        <h2 className="text-4xl text-[#435072] font-bold">Suallarınız var?</h2>
        <p className="text-xl font-normal text-[#435072] ">Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</p>
        <div
          className={`gap-3 grid grid-rows-1 ${
            grid ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div className="grid gap-2">
            <input className="p-4 border rounded-lg" type="text" placeholder="Adınız və Soyadınız" />
            <input className="p-4 border rounded-lg" type="email" placeholder="Email ünvanı" />
            <input className="p-4 border rounded-lg" type="tel" placeholder="Əlaqə nömrəsi" />
          </div>
          <div>
            <textarea className="border rounded-lg p-4" placeholder="Mesajınız" cols="30" rows="10"></textarea>
          </div>
        </div>
        <Button title="Gonder" to="/products" darkMode />
      </div>
    </div>
  );
};

export default Question;
