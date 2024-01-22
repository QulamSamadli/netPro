import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../Routing'


const HeaderBottom = ({title1,title2,title3,title4}) => {
    
  return (
    <div className='bg-bgRoute flex flex-col items-center text-white'>
     <h2 className='text-[36px] font-bold'> {title1}</h2>
     <div className='flex  text-[18px] font-medium'>
    <p>{title2}</p>{"-->"} <p>{title3}</p> <p>{title4}</p>
     </div>

    </div>
  )
}

export default HeaderBottom