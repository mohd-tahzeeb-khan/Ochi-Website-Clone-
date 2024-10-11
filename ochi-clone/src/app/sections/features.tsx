import React from 'react'
import { Hanken_Grotesk } from 'next/font/google'
const hankengrotesk=Hanken_Grotesk({weight:"500",subsets:['latin'] })
const features = () => {
  return (
    <>
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-20'>
            <h1 className={`${hankengrotesk.className} text-7xl tracking-tight`}>Featured Projects</h1>
        </div>
        <div className='px-20'><div className="card flex gap-10">
         
            <div className="cards-container w-1/2 h-[80vh]  rounded-xl relative">
            <h1 className='absolute z-[0] mb-10 uppercase leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 left-full text-6xl'><h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 '></h1>
            {"Fade".split('').map((item, index)=><span>{item}</span>)}</h1>
            <div className='h-full w-full bg-green-600 overflow-hidden rounded-xl'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" /></div> </div>
            <div className="cards-container w-1/2 h-[80vh] bg-red-500 rounded-xl relative">
            <h1 className='absolute z-[0] mb-10 uppercase leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 left-full text-6xl'><h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 '></h1>
            {"Fade".split('').map((item, index)=><span>{item}</span>)}</h1>
            <div className='h-full w-full bg-green-600 overflow-hidden rounded-xl'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="Image" /></div> </div>
        </div></div>
        
    </div>
    
    </>
  )
}

export default features