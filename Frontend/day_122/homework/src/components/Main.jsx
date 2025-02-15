import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[85%] flex items-center justify-center flex-col gap-[15px] pt-[100px]'>
        <h1 className='text-4xl font-bold text-center'>Create beautiful React <br /> templates 10x faster</h1>
        <p className='text-center text-[1.2rem]'>React Builder simplifies React template creation to just a few clicks, <br /> empowering developers of all levels to create powerful and <br /> sophisticated templates with ease.</p>
        <button className='bg-black text-white px-4 rounded-[5px] py-1 hover:bg-black/70 transition-all hover:scale-[1.03] duration-300 tracking-wide'>Try Demo</button>
    </div>
  )
}
