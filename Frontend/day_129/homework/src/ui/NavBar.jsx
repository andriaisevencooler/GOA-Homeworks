import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='w-full h-[10%] p-[15px] flex items-center justify-between bg-lime-400'>
        <h1>Goal Oriented Academy</h1>
        <div className='flex gap-[20px] items-center'>
            <Link to={'/'} className='hover:underline'>Dashboard</Link>
            <Link to={'/login'} className='hover:underline'>Login</Link>
            <Link to={'/guide'} className='hover:underline'>Guide</Link>
        </div>
    </div>
  )
}
