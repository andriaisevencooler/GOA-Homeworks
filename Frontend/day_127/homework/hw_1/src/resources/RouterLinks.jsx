import React from 'react'
import { Link } from 'react-router-dom'

export default function RouterLinks() {
  return (
    <div className='w-full h-[10%] bg-gray-500 flex items-center justify-between p-[15px] text-white'>
        <h1 className='text-[1.3rem]'>GOA</h1>
        <div className='flex gap-[20px] items-center'>
            <Link to='/'>Dashboard</Link>
            <Link to='/login'>Login</Link>
        </div>
    </div>
  )
}
