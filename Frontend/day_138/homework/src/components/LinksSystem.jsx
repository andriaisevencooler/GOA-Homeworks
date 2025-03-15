import React from 'react'
import { Link } from 'react-router-dom'

export default function LinksSystem() {
  return (
    <div className='w-full h-[10%] flex items-center justify-between font-mono p-[15px]'>
        <Link to={'/tourism'} className='text-2xl hover:underline'>Tourism</Link>
        <Link to={'/photography'} className='text-2xl hover:underline'>Photography</Link>
        <Link to={'/rog'} className='text-2xl hover:underline'>ROG Tech</Link>
    </div>
  )
}
