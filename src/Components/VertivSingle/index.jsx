import React, { useEffect, useState } from "react";
import HeaderBottom from "../HeaderBottom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const _url = "http://localhost:5312/vertiv2/";

const VertivSingle = () => {
  const [category, setCategory] = useState([]);
  const [vertiv2, setVertiv2] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCategory(data);
    });
  }, []);

  useEffect(() => {
    axios.get(_url + id).then(({ data }) => {
      setVertiv2(data);
    });
  }, [id]);
  return (
    <div>
      <HeaderBottom
        title1={"VERTIV"}
        title2={"Əsas səhifə"}
        title3={"Vertiv"}
        title4={"-->Fasiləsiz Enerji Təchizatı"}
      />

      <div className="grid grid-cols-2 container   my-6  ">
        <div>
          <div className="w-[356px] border-solid border-[#D4DAEA] rounded-lg border-2">
            <h2 className="text-[24px] rounded-t-lg font-bold p-4 border-solid border-[##D4DAEA] bg-[#435072] text-white ">
              Kateqoriya
            </h2>
            <div className="flex  gap-2 flex-col  px-4">
              {category.map(({ id, title1 }) => {
                return (
                  <Link
                    key={id}
                    to={`/vertiv/${id}`}
                  
                    className={`${
                        +id === +vertiv2.id ? "text-[#435072]" : "text-gray-400"
                      } text-[#435072] my-2 text-[18px] font-bold `}
                  >
                    {title1} <hr />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-[24px] text-[#435072] font-bold m-2">
            {vertiv2.title1}
          </h2>
          <p className=" text-[#606F84] ">
            {id}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac,
            massa nec pulvinar nunc, nulla a sed. Sapien massa lacus, mi,
            egestas metus, vitae non metus. Cras lorem quisque in iaculis tortor
            pharetra est dolor. Enim ipsum hac pulvinar dolor. Congue ut viverra
            id sagittis vulputate sed posuere.
          </p>

          {category.map(({ title, id, img, description }) => {
            return (
              <div
                className=" bg-[#F4F4F4] rounded-lg border-2 m-2 flex  items-center p-2 gap-3"
                key={id}
              >
                <img src={img} alt={title} />
                <div className="border-r-2 flex flex-col  gap-4 border-[#D4DAEA]">
                  <p className="text-[18px] text-[#435072] font-medium">
                    {title}
                  </p>
                  <p className="text-[14px] text-[#606F84] ">{description}</p>
                </div>
                <div className="flex flex-col  gap-6">
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

export default VertivSingle;
