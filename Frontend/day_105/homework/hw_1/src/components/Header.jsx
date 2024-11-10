import React from 'react'
import Index from './Index.jsx'

const Header = () => {
  return (
    <header className='bg-gray-700 w-full h-[10%] p-10 flex items-center justify-between'>
        <h1 className='text-white font-bold'>Goal Oriented Academy</h1>
        <form className='rounded-[10px] overflow-hidden w-fit'>
          <input type="search" placeholder='Search Here...' className='outline-none'/>
          <button type='submit' className='bg-green-700 text-white'>Search</button>
        </form>
        <Index />
    </header>
  )
}

export default Header 