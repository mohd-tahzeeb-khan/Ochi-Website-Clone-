import React from 'react'
import Image from 'next/image'
const cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
        <div className='cardcontainer w-1/2 h-[50vh] flex'> 
            <div className='card w-full h-full bg-[#004D43] rounded-lg flex justify-center items-center relative'> 
                <div className='px-2 flex-row align-bottom absolute top-[90%] left-[5%] border-zinc-300 border-2 rounded-full'>@2019-2022</div>
                <Image src={'https://ochi.design/wp-content/uploads/2022/04/logo001.svg'} height='200' width='200' alt='Images'></Image>
            </div>
        </div>
        <div className='cardcontainer w-1/4 h-[50vh]'>
            <div className='card w-full h-full bg-[#d5f8f3] rounded-lg relative flex justify-center items-center'>
            <div className='px-2 flex-row align-bottom absolute top-[90%] left-[5%] border-zinc-900 border-2 rounded-full text-black'>Rating 5.0 on CLuthch</div>
            <Image src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 405.7 115'%3E%3Ccircle cx='299.2' cy='75.3' r='13.3' fill='%23E62415'/%3E%3Cpath fill='%2317313B' d='M105.6 0h17.6v113.5h-17.6zm81.7 78.5c0 17.6-14.4 19-18.8 19-11 0-12.6-10.3-12.6-16.5V37.1h-17.7v43.8c-.1 10.9 3 19.9 9 25.9a32.1 32.1 0 0 0 40.1 2.1v4.6H205V37.1h-17.7zm55.9-67.1h-17.7v25.7h-12.3v16.7h12.3v59.7h17.7V53.8h14.5V37.1h-14.5zM315 91.8c-4 3.6-9.3 5.6-15.1 5.6a21.6 21.6 0 0 1-22.2-22.3c0-12.9 9.1-21.9 22.2-21.9 5.7 0 11.1 1.9 15.2 5.5l2.8 2.4 12.4-12.4-3.1-2.8a40.6 40.6 0 0 0-27.3-10.3c-23 0-39.7 16.6-39.7 39.4a39 39 0 0 0 39.7 39.9c10.5 0 20.3-3.7 27.5-10.4l3-2.8-12.6-12.4zm81.7-48a32.1 32.1 0 0 0-40.1-2.1V0h-17.7v113.5h17.7V72.2c0-17.6 14.4-19 18.8-19 11 0 12.6 10.3 12.6 16.5v43.9h17.7V69.7a36 36 0 0 0-9-25.9M79.5 86.3A36.7 36.7 0 0 1 53 97.4c-20.5 0-35.4-16.1-35.4-38.2C17.6 37 32.5 20.9 53 20.9c9.9 0 19.3 3.9 26.4 11l2.8 2.8 12.3-12.3-2.7-2.8A54.2 54.2 0 0 0 52.9 3.4C22.8 3.4 0 27.4 0 59.3 0 91 22.8 115 52.9 115c14.9 0 28.7-5.8 38.9-16.3l2.7-2.8-12.2-12.5z'/%3E%3C/svg%3E" height='200' width='200' alt='Images'></Image>
            </div>
        </div>
        <div className='cardcontainer w-1/3 h-[50vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-lg relative flex justify-center items-center'>
            <div className='px-2 flex-row align-bottom absolute top-[90%] left-[5%] border-zinc-300 border-2 rounded-full'>Business Bootcamp Alumni</div>
            <Image src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" height='200' width='200' alt='Images'></Image>
            </div>
        </div>
    </div>
  )
}

export default cards