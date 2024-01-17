import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../Routing'


const HeaderBottom = () => {
     const {id}= useParams()
  return (
    <div>
     <h2>Title {id}</h2>
     <div>
    
     </div>

    </div>
  )
}

export default HeaderBottom