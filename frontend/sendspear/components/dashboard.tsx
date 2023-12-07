import Link from 'next/link'
import React from 'react'

export default function dashboard() {
  return (


    <div className='grid grid-col-1 md:grid-cols-2 px-8 gap-6 lg:grid-cols-3 w-[75%] right-0 '>
        <div className=' shadow-md rounded-md p-4  bg-blue-700 text-white'>
            <div className=' flex  flex-col justify-between font-bold text-2xl items-center h-[150px]'>
            <span className=''>Total Credits</span>
            <span className=''>100</span>
            </div>
        </div>
        <div className=' shadow-md rounded-md p-4  bg-green-700 text-white'>
            <div className=' flex  flex-col justify-between font-bold text-2xl items-center h-[150px]'>
            <span className=''>Total Email Sent</span>
            <span className=''>100</span>
            </div>
        </div>
        <div className=' shadow-md rounded-md p-4  bg-orange-700 text-white'>
            <div className=' flex  flex-col justify-between font-bold text-2xl items-center h-[150px]'>
            <span className=''>Pending Messages</span>
            <span className=''>100</span>
            </div>
        </div>
       <div className='absolute bottom-6 right-5'>

        <Link href='/campaign' className='text-blue-800 py-3 px-4 font-semibold text-2xl border-blue-800 border-2 rounded-3xl '>Create Campaign</Link>

       </div>
    </div>
  )
}
