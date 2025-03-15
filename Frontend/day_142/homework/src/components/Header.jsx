import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-[10%] flex items-center justify-between p-[10px]'>
        <h1 className='text-2xl font-bold'>SAMSUNG</h1>
        <p>Smart Watch7</p>
        <form className='hidden sm:flex'>
            <input type="text" placeholder='Search here...' className='border border-black p-[2px] rounded-md outline-none rounded-r-none' />
            <button type='submit' className='bg-black text-white p-[2px] rounded-md rounded-l-none border border-black'>Search</button>
        </form>
    </div>
  )
}
