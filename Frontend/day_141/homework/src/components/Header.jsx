import React from 'react'
import { Laptop } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full h-[10%] p-[1rem] bg-slate-400 flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
            <Laptop color="#000000" />
            <Link to={'/'} className='text-2xl font-bold'>PC Store</Link>
        </div>
        <div className='flex items-center gap-[20px]'>
            <Link className='text-white'>About Us</Link>
            <Link className='text-white'>Contact</Link>
            <Link className='text-white'>Login</Link>
            <Link className='text-white p-[5px] bg-green-400 rounded-[5px] hover:bg-green-600 transition-all duration-500 hover:scale-105'>Get Started</Link>
        </div>
        <form className='hidden sm:block'>
            <input type="text" className='w-[300px] p-[5px] pl-[10px] rounded-[5px] rounded-r-none bg-slate-200 outline-none' placeholder='Search...' />
            <button type='submit' className='p-[5px] bg-green-400 rounded-[5px] rounded-l-none text-white cursor-pointer'>Search</button>
        </form>
    </div>
  )
}
