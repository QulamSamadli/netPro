import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderBottom from '../../Components/HeaderBottom'

const _url = "https://netpro-db.vercel.app/blog"

const Blog = () => {
  const [blog,setBlog] = useState([])

  useEffect(()=>{
axios.get(_url).then(({data})=>{
  setBlog(data)
})

  },[])
  return (

    <div>
<HeaderBottom title1={"Qalereya və Bloq"} title2={"Əsas səhifə"} title3={"Qalereya və Bloq"}/>
  <h2 className='text-center my-4 text-[#435072] text-[40px] font-bold'>Qalereya</h2>
<div className='flex flex-wrap gap-4 justify-center my-6'>
      {
        blog.map(({id,img})=>{
          return <div >
             <img key={id} src={img} alt={""} />
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Blog