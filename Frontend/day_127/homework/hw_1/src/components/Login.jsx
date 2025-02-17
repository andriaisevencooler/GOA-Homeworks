import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-[90%] flex items-center justify-center bg-gray-300'>
            <form className='sm:w-[20%] w-[50%] h-[60%] border-[2px] border-black rounded-[10px] flex flex-col p-[25px] gap-[15px]'>
                <input type="email" placeholder='Enter Email' className='outline-none focus:border-b-[2px] focus:border-b-black w-[80%] bg-gray-400 p-[3px]' />
                <input type="password" placeholder='Enter Password' className='outline-none focus:border-b-[2px] focus:border-b-black w-[80%] bg-gray-400 p-[3px]' />
                <button type='submit' className='bg-black text-white cursor-pointer py-[5px]'>Done!</button>
            </form>
    </div>
  )
}
