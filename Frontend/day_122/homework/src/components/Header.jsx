import React from 'react'

export default function Header() {
  return (
    <div className='flex w-full p-[20px] justify-between h-[15%]'>
        <h3 className='font-bold'>@reactbuilder</h3>
        <div className='flex gap-[20px] items-center'>
            <p className='text-[14px] sm:text-[16px]'>Create Project</p>
            <p className='underline text-[14px] sm:text-[16px]'>Marcel</p>
        </div>
    </div>
  )
}
