'use client'

import React, { useEffect } from 'react'
import {LuChevronsDown , LuChevronsUp} from 'react-icons/lu'



export default function Campaign () {

  return (
    <div className='text-white w-full  relative text-center lg:px-24'>
       <h1></h1>
       <div className=''>
        <div className='flex justify-between cursor-pointer'>
          <div className=' lg:px-8 lg:py-4 rounded-lg shadow-md bg-white flex gap-6 justify-between text-black font-semibold text-lg items-center'>
            <h1>Current Campaign</h1>
              <LuChevronsDown size={20} />
          </div>
          
          <div className=' lg:px-8 lg:py-4 rounded-lg  gap-6 shadow-md bg-white flex justify-between text-black font-semibold text-lg items-center'>   
           <h1>Upcoming Campaign</h1>
           <LuChevronsDown size={20} />
            </div>
          <div className=' lg:px-8 lg:py-4 rounded-lg shadow-md bg-white gap-6 flex justify-between text-black font-semibold text-lg items-center'>
              <h1>Closed Campaign</h1>
              <LuChevronsDown size={20} />
            
          </div>
       </div>

    </div>
    </div>
  )
}
