import React from 'react'

const Box = () => {
  return (
    
    <div className='p-[50px] flex flex-col gap-[30px] items-center rounded-[10px] bg-slate-800'>
        <div className='w-[100px] h-[100px] rounded-[50%] bg-red-600'></div>
        <div className='w-[100px] h-[100px] rounded-[50%] bg-yellow-600'></div>
        <div className='w-[100px] h-[100px] rounded-[50%] bg-green-600'></div>
    </div>
  )
}

export default Box
