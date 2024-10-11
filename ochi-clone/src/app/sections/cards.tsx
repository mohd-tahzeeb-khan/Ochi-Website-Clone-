import React from 'react'

const cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-6'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-lg'></div>
        </div>
        <div className='cardcontainer w-1/4 h-[50vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-lg'></div>
        </div>
        <div className='cardcontainer w-1/3 h-[50vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-lg'></div>
        </div>
    </div>
  )
}

export default cards