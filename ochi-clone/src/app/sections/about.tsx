import React from 'react'
import { Familjen_Grotesk } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const familjen_grotesk = Familjen_Grotesk({ weight: '400', subsets: ['latin'] })
const about = () => {
    return (
        <>
            <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl leading-[3.5vw] bg-[#CDEA68] text-black'>

                <h1 className={`${familjen_grotesk.className} text-[4vw] tracking-tight`}>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple</h1>
                <div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-7 flex pb-36'>
                    <div className='w-1/2 '><h1>What you can expect:</h1></div>
                    <div className='w-1/3 flex flex-col gap-6 px-10'>  <p className='leading-normal'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                                <p className='leading-normal'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p></div>
                    <div className='w-1/4'>
                        <h2>S.</h2>
                        <div className='flex flex-col '>
                            <Link className='h-7' href={"https://www.instagram.com/accounts/login/"}>instagram</Link>
                            <Link className='h-7' href={"https://www.instagram.com/accounts/login/"}>behance</Link>
                            <Link className='h-7' href={"https://www.instagram.com/accounts/login/"}>facebook</Link>
                            <Link className='h-7' href={"https://www.instagram.com/accounts/login/"}>linkedin</Link>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-between px-5 border-t-[1px] border-[#a1b562]'>
                    <div className='pt-4'>
                        <h1 className='text-6xl'>Our approach:</h1>
                        <button className='w-52 mt-4 bg-zinc-800 rounded-full text-white uppercase py-1 px-1 flex justify-around items-center gap-5'>read more <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
                    </div>
                    <div>
                        <Image src='/images/about-page.jpg'
                        width={700}
                        height={700}
                        alt='Images' className='mt-4 rounded-xl' ></Image>
                    </div>

                </div>
            </div>
        </>
    )
}

export default about