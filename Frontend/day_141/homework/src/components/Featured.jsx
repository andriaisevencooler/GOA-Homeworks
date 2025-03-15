import React from 'react'
import bundle from '../assets/bundle.jpg'

export default function Featured() {
  return (
    <div className='w-full h-[40%] flex sm:flex-row flex-col gap-[10px]'>
        <div className='flex flex-col sm:w-[50%] w-full sm:h-full h-[50%]'><img src={bundle} alt="" className='h-full sm:self-start self-center' /></div>
        <div className='flex flex-col sm:w-[50%] w-full sm:h-full h-[50%] items-center p-[15px] gap-[10px]'>
            <h1 className='text-4xl font-bold'>Our Featured Product</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
            <p>Contains:</p>
            <ul className='list-none'>
                <li>lorem 1</li>
                <li>lorem 2</li>
            </ul>
        </div>
    </div>
  )
}
