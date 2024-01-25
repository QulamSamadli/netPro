import React from 'react'
import Button from '../../Components/common/Button'

const Error = () => {
  return (
    <div className='flex justify-center items-center gap-6'>

<div className='flex flex-col gap-6'>
  <img src="./not404.png" alt="" />
  <p>Axtardığınız Səhifə 
Tapılmadı!</p>
 <Button title={"Əsas səhifəyə qayıt"} to="/"/>
</div>
<div><img src="./build.png" alt="" /></div>

    </div>
  )
}

export default Error