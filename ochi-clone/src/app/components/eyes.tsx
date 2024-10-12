import React from 'react'
import { useState, useEffect } from 'react'
const eyes = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(() => {
      window.addEventListener("mousemove", (e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;
        let deltaX=mouseX- window.innerWidth/2;
        let deltaY=mouseY-window.innerHeight/2;
        var angle=Math.atan2(deltaY, deltaX)*(180/Math.PI);
        setrotate(angle-180)
      })
    })
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 flex justify-between'>
    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '> 
            <div className='line w-full h-10 bg-transparent absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]' style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}>
                <div className='eye-circle flex h-10 w-10 bg-white rounded-full'></div>
            </div>
            
        </div>
       
    </div>
    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
        <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
            <div className='line w-full h-10 bg-transparent absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}>
                <div className=' eye-circle flex w-10 h-10 bg-white rounded-full' ></div>
            </div>
            
        </div>
        
    </div>
</div>
  )
}

export default eyes