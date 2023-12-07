
import NavLink from "./navlink"

export default function Sidebar() {
  return (
    <div className='fixed left-0 h-full top-0 bg-slate-900 text-white'>
      <nav className='shadow-md flex flex-col 
      relative h-full justify-evenly py-20  w-full text-12 font-bold'>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/campaign">Campaign</NavLink>
        <NavLink href="/audience">Audience</NavLink>
        <NavLink href="/analytics">Analytics</NavLink>
        <NavLink href="/developer">Developer</NavLink>
      </nav>
    </div>
  )
} 