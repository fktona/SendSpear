'use client'

import Image from 'next/image'
import Signup from '@/components/authorization/signup'
import Login from '@/components/authorization/login'
import Button from '@/components/button'
import { useState } from 'react'
export default function Home() {

  const [switchAuth , setSwitchAuth] = useState<boolean>(false)
  const handleSwitchAuth = () => {
    setSwitchAuth(o => !o)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {switchAuth ? <Signup
     handleSwitchAuth={handleSwitchAuth} /> :
      <Login
      handleSwitchAuth = {handleSwitchAuth} />}
    </main>
  )
}
