import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBottom from "../HeaderBottom";

const _url = "http://localhost:5322/services2";

const Services2 = () => {
  const [services2, setServices2] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setServices2(data);
    });
  }, []);
  return (
    <div>
      <HeaderBottom
        title1="Xidmətlər və Həllər"
        title2="Əsas səhifə "
        title3="Xidmətlər və Həllər"
        title4="-->Avadanlıqların quraşdırılması"
      />
      <div className="container">
        <div className="w-[356px] border-solid border-[#D4DAEA] rounded-lg border-2 my-4">
          <h2 className="text-[24px] font-bold p-4 border-solid border-[##D4DAEA] bg-[#435072] text-white ">
            Xidmətlər və Həllər
          </h2>
          <div className="flex gap-2 flex-col items-start px-4">
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
        <div>
          <h2>Avadanlıqların quraşdırılması və konfiqurasiyası</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac, massa nec pulvinar nunc, nulla a sed. Sapien massa lacus, mi, egestas metus, vitae non metus. Cras lorem quisque in iaculis tortor pharetra est dolor. Enim ipsum hac pulvinar dolor. Congue ut viverra id sagittis vulputate sed posuere.</p>
          <img src="./services2-1.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit id urna ultricies consectetur cursus. Urna, cursus pharetra quam pretium tincidunt a praesent. Risus in in consequat lobortis consectetur. Cum amet sit netus auctor eu posuere. Duis sit mattis cras sagittis, consectetur suscipit sapien imperdiet. Non, ultricies semper magna sit auctor donec eu. Etiam tortor est cum gravida facilisi pretium dui, massa volutpat. Diam erat mattis fringilla quis bibendum adipiscing viverra. Et dolor elementum et, venenatis eu enim. Maecenas et lectus lacus amet arcu senectus. Tristique blandit vulputate ante odio neque consectetur dictumst et imperdiet. Venenatis ut dui nec nulla elementum enim id sollicitudin sed. Felis eget leo, nisl, magna eget. Nunc neque netus tincidunt donec aliquet vel bibendum cras fringilla. Laoreet elementum, ut blandit id malesuada tincidunt risus lacus ipsum. Auctor aliquam proin euismod auctor morbi velit volutpat scelerisque.</p>
          <h2>Nə üçün biz?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper risus nibh quam id tortor tellus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper risus nibh quam id tortor tellus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper risus nibh quam id tortor tellus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper risus nibh quam id tortor tellus.</p>
          <div>
            <img src="./services2-2.png" alt="" />
            <img src="./services2-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
