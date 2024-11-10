import React from 'react'
import navLinks from '../constants.js'

const Header = () => {
  return (
    <div className='p-[1rem] flex items-center justify-between'>
        <h1 className='text-[1.5rem]'>InfoNews</h1>
        <ul className='flex list-none gap-[2rem] hidden sm:hidden md:flex lg:flex'>
          {navLinks.map((item, index) => {
          return (
            <li key={index} className='text-[1rem] hover:underline cursor-pointer'>
              {item}
            </li>
          )
          })}
        </ul>
        <form className='lg:flex md:flex sm:flex'>
          <input type="search" placeholder='Search Info Here...' className='outline-none p-[10px] border-[1px] rounded-l-[10px]' />
          <button type='submit' className='bg-green-700 text-white p-[10px] rounded-r-[10px] hidden sm:hidden lg:inline md:inline'>Search </button>
        </form>
    </div>
  )
}

export default Header
