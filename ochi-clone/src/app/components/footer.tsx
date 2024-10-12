import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
    <>
    <div className='flex justify-between px-5 h-11 items-center'>
      <div className="1"><Image src={'https://ochi.design/wp-content/uploads/2022/04/logo001.svg'} height='50' width='50' alt='Images'></Image></div>
      <div className="2 text-zinc-500">ochi designed @2024 legal terms</div>
      <div className="3 text-zinc-500">website by obys</div>
    </div>
    </>
  )
}

export default footer