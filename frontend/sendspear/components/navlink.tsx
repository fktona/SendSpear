'use client'
import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { NavLinkProps } from '@/types'


 const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const segment = useSelectedLayoutSegment()

  console.log(segment)

  const isActive = segment === children.toLowerCase() 
  return (
    <Link href={href} className={` w-full transition-all duration-300 relative px-16 py-2 ${isActive ? 'bg-white text-black ' : ''}`}>
        {children}
    </Link>
  )
}

export default NavLink
