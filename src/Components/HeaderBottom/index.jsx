import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../Routing'


const HeaderBottom = ({title1,title2,title3}) => {
    
  return (
    <div>
     <h2> {title3}</h2>
     <div className='flex'>
    <p>{title1}</p> 9ox9 <p>{title2}</p>
     </div>

    </div>
  )
}

export default HeaderBottom