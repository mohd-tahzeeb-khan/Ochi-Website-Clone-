import React from 'react'
import './global.css'
import { Schibsted_Grotesk } from 'next/font/google'
import { SlArrowRightCircle } from "react-icons/sl";
const grotesk=Schibsted_Grotesk({weight:'500', subsets:['latin']})
const landingpage = () => {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 border-t-2'>
        
        <div className='textstructure mt-52 px-20'>
            
            {["we create", "eye opening", "presentations"].map((item, index)=>{
                return <div className={`maskers ${grotesk.className} uppercase flex`}>{index===1 && (<div className='w-[9vw] h-[5vw] bg-red-500 '></div>)}
                <h1  key={index} className={`${index===1 && 'move'} text-8xl leading-[5.5vw] font-semibold`}>{item}</h1>
            </div>
            })}
            
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {["for public and private companies", "from the first pitch to IPO", "start the project"].map((item, index)=>{
                    return <p key={index} className={`text-md font-light tracking-tight leading-none capitalize ${index===2 && 'border-[1px] border-zinc-300 rounded-full border-spacing-8 px-5 py-2 hover:text-black hover:bg-white uppercase'}`}>{item} </p>
                })}
                
            </div>
        </div>
        
            

    </div><div className='right-column-tag flex absolute top-56 right-0 bg-red-400 items-center -rotate-90 px-0'>
            <h4 className=' text-black py-2 px-2 font-semibold'>site of the year</h4>
            <h3 className='text-black rotate-90 py-2 px-2 text-2xl font-bold'>W.</h3></div>
    </>
  )
}

export default landingpage