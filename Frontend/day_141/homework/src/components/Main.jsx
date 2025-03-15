import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[50%] p-[2rem] flex gap-[20px] sm:flex-row flex-col justify-between items-center'>
        <div className='bg-slate-400 w-[200px] h-[150px] p-[25px] flex flex-col text-white'>
            <h1 className='text-lg font-bold'>Computer 1</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            <button className='mt-[10px] p-[5px] bg-green-400 rounded-[5px] text-white cursor-pointer'>Buy Now</button>
        </div>
        <div className='bg-slate-400 w-[200px] h-[150px] p-[25px] flex flex-col text-white'>
            <h1 className='text-lg font-bold'>Computer 2</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            <button className='mt-[10px] p-[5px] bg-green-400 rounded-[5px] text-white cursor-pointer'>Buy Now</button>
        </div>
        <div className='bg-slate-400 w-[200px] h-[150px] p-[25px] flex flex-col text-white'>
            <h1 className='text-lg font-bold'>Computer 3</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            <button className='mt-[10px] p-[5px] bg-green-400 rounded-[5px] text-white cursor-pointer'>Buy Now</button>
        </div>
    </div>
  )
}
