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
    <div className="container">
      <HeaderBottom
        title1={"VERTIV"}
        title2={"Əsas səhifə"}
        title3={"Vertiv"}
        title4={"-->Fasiləsiz Enerji Təchizatı"}
      />

      <div>
        <Category />
        <div>
          <h2>Fasiləsiz Enerji Təchizatı (UPS)</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac,
            massa nec pulvinar nunc, nulla a sed. Sapien massa lacus, mi,
            egestas metus, vitae non metus. Cras lorem quisque in iaculis tortor
            pharetra est dolor. Enim ipsum hac pulvinar dolor. Congue ut viverra
            id sagittis vulputate sed posuere.
          </p>

          {vertiv2.map(({title,id,img,description}) => {
            return (
              <div key={id}>
                <img src={img} alt="" />
                <div>
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
                <div>
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
