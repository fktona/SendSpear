import React from 'react'
import Image from 'next/image'
import spear from '../public/asset/spear.png'
import {IoNotifications , IoNotificationsOutline , IoPerson} from "react-icons/io5"

export default function nav() {
  return (
    <>
    <header className='fixed   w-full top-0
     md:px-12 lg:px-20 shadow-white/[0.13]
      px-10 py-4 shadow-md bg-black text-white flex justify-between '>
       <div className=' flex flex-row-reverse gap-6 w-fit relative z-10 items-center'>
         <span>SendSpear</span>
         <Image src={spear} width={30} height={30} alt='logo'></Image>
       </div>
           <div className='flex justify-between gap-6 items-center'>
            <div className='cursor-pointer'>
                <IoNotifications className='text-whit' size={20} />
            </div>
            <div>
                <IoPerson className='text-white' size={20} />
            </div>
            
            </div> 

    </header>
    <div className='mb-28 bg-white'></div>
    </>
  )
}

