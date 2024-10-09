'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Hanken_Grotesk } from 'next/font/google'
const hankengrotesk=Hanken_Grotesk({weight:'700', subsets:['latin']})
const marque = () => {
  return (
    <div className='py-10 w-full bg-[#77f877] whitespace-nowrap'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-24'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className={` ${hankengrotesk.className} uppercase text-8xl text-[1-vw] leading-none font-semibold space-x-3`}>we are ochi</motion.h1>

            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className={` ${hankengrotesk.className} uppercase text-8xl text-[1-vw] leading-none font-semibold space-x-3`}>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className={` ${hankengrotesk.className} uppercase text-8xl text-[1-vw] leading-none font-semibold space-x-3`}>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default marque