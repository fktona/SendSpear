import React from 'react'
import Image from 'next/image'
import Sidebar from './sidebar'
import Topbar from './topbar'

export default function nav() {
  return (
      <div>
        <Topbar />
        <Sidebar />
      </div>
  )
}

