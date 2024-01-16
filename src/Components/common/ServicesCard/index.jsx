import React from 'react'
import { cards } from '../ServicesRoute'

const ServicesCard = () => {
  return (
    <div className='bg-servicesBg py-10'>
        <div className="container flex flex-col gap-4 ">
        <h2 className='text-4xl py-6 font-bold text-[#435072]'>Xidmətlər</h2>
        <div className=' grid grid-rows-2 grid-flow-col gap-4'>
            {
                cards.map(({title,id,description,img})=>{
                   return <div className='border border-white bg-white  rounded-2xl w-[400px] h-[240px] flex flex-col justify-around p-4' id={id}>
                        <div className='rounded-full bg-slate-300 w-[55px] h-[55px] flex items-center justify-center'><img src="./cardsImg.png" alt="" /></div>
                        <h2 className='text-xl font-bold text-[#435072]' >{title}</h2>
                        <p className='text-sm font-normal text-[#606F84]'>{description}</p>
                    </div>
                })
            }
        </div>
    </div>
    </div>
  )
}

export default ServicesCard