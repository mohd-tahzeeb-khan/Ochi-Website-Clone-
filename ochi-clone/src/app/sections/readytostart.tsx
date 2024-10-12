'use client'
import React from 'react'

import { useState, useEffect } from 'react'
import Eyes from '../components/eyes'
const readytostart = () => {

  return (
    <>
        <div className='h-[120vh] bg-[#47f52f] flex flex-col justify-center relative'>
            <Eyes />
            <div className='pt-[20px]'>
                <h1 className='text-9xl text-blacks font-extrabold text-center'>Ready</h1>
                <h1 className='text-9xl text-blacks font-extrabold text-center'>to start</h1>
                <h1 className='text-9xl text-blacks font-extrabold text-center'>the project ?</h1>
            </div>
            
        </div>
    </>
  )
}

export default readytostart