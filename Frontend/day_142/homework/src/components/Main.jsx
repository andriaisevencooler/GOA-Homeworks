import React from 'react'
import watch from '../assets/watch.jpg'

export default function Main() {
  return (
    <div className='w-full h-[90%] flex sm:flex-row flex-col'>
        <div className='sm:w-[50%] sm:h-full w-full h-[50%] flex flex-col p-[10px] justify-center gap-[10px] px-[50px]'>
            <p className='text-3xl font-semibold tracking-wider'>Galaxy Watch7</p>
            <p className='text-2xl'>Galaxy AI is here</p>
            <p className='text-lg font-bold'>Know your score and save</p>
            <p>Discover your Energy Score on Galaxy Watch7 with up to $200 instant trade-in credit or up to $60 off without trade-in.θ Plus, get a select band on us with select purchase.∝</p>
            <button className='bg-black text-white p-[2px] rounded-md w-[125px] py-[5px] cursor-pointer'>Buy Now</button>
        </div>
        <div className='hidden w-[50%] h-full sm:flex flex-col justify-center items-center'>
            <img src={watch} className='w-[50%]' />
        </div>
    </div>
  )
}
