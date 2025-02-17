import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <form className='sm:w-[25%] w-[50%] h-[70%] border-black border-[2px] rounded-[5px] bg-white flex flex-col gap-[15px] p-[20px]'>
            <input type="email" required placeholder='Enter Email' className='outline-none focus:border-b-[2px] focus:border-b-black w-[100%] bg-gray-400 p-[3px]' />
            <input type="password" required placeholder='Enter Password' className='outline-none focus:border-b-[2px] focus:border-b-black w-[100%] bg-gray-400 p-[3px]' />
            <button type='submit' className='bg-black text-white cursor-pointer py-[5px]'>Done!</button>
            <p>Forgot Password? <span className='font-bold cursor-pointer '>Reset</span></p>
        </form>
    </div>
  )
}
