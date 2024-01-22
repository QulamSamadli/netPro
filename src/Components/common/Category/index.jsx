import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const _url = "http://localhost:5382/category1";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCategory(data);
    });
  }, []);

  return (
    <div >
      <div className="w-[356px] border-solid border-[#D4DAEA] rounded-lg border-2">
        <h2 className="text-[24px] font-bold p-4 border-solid border-[##D4DAEA] bg-[#435072] text-white ">
          Category
        </h2>
        <div  className="flex gap-2 flex-col items-start px-4" >
          {category.map(({ title }) => {
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
  );
};

export default Category;
