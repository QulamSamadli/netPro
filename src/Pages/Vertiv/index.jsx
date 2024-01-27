import React, { useEffect, useState } from 'react'

import HeaderBottom from '../../Components/HeaderBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
const _url = "https://neon-twilight-78fb1a.netlify.app/vertiv2"

const Vertiv = () => {

const [vertivs,setVertivs]=useState([])

useEffect(()=>{

axios.get(_url).then(({data})=>{
    setVertivs(data)
})

},[])

  return (
    <div className="">
    <HeaderBottom
      title1="Əsas səhifə"
      title2="Əsas səhifə"
      title3="Vertiv"
    />

    <div className="bg-[#F4F4F4] p-6 container flex flex-col">
      <h2 className=" text-center  text-[32px] text-[#435072] font-bold ">
        Vertiv
      </h2>

      <div className="flex flex-wrap justify-center gap-5  ">
       
         
            {vertivs.map(({id, img,title1,description})=>{

                return <Link
                to={`/vertiv/${id}`}
                key={id}
                className="border-[#D4DAEA] w-[290px] p-4 flex flex-col gap-2 border-[1px] rounded-[10px]"
              >
                <img src={img} alt="" />
                <h2 className="text-[18px] h-14 text-[#435072] font-bold">
                  {title1}
                </h2>
                <hr />
  
                <p className="text-[13px]  text-[#606F84] font-normal">
                  {description}
                </p>
              </Link>

            })}
       
     
      </div>
    </div>
  </div>
  )
}

export default Vertiv