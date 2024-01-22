import React, { useEffect, useState } from "react";
import HeaderBottom from "../HeaderBottom";
import Category from "../common/Category";
import axios from "axios";

const _url = "http://localhost:5392/vertiv2";

const Vertiv = () => {
  const [vertiv2, setVertiv2] = useState([]);

  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setVertiv2(data);
    });
  }, []);

  return (
    <div>
      <HeaderBottom
        title1={"VERTIV"}
        title2={"Əsas səhifə"}
        title3={"Vertiv"}
        title4={"-->Fasiləsiz Enerji Təchizatı"}
      />

      <div className="flex container  my-6  ">
        <Category />
        <div className="mx-10" >
          <h2 className="">Fasiləsiz Enerji Təchizatı (UPS)</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac,
            massa nec pulvinar nunc, nulla a sed. Sapien massa lacus, mi,
            egestas metus, vitae non metus. Cras lorem quisque in iaculis tortor
            pharetra est dolor. Enim ipsum hac pulvinar dolor. Congue ut viverra
            id sagittis vulputate sed posuere.
          </p>

          {vertiv2.map(({title,id,img,description}) => {
            return (
              <div className=" bg-[#F4F4F4] rounded-lg border-2 m-2 flex items-center p-4 gap-3" key={id}>
                <img src={img} alt="" />
                <div className="border-r-2 flex flex-col gap-4 border-[#D4DAEA]">
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <p>download</p>
                  <p>File</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vertiv;
