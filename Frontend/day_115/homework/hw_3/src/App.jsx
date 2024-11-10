import React from 'react'

export default function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-orange-500' >
        <div className='w-[50%] flex flex-col border-black border-[3px] rounded-[1rem] bg-orange-300 gap-5 p-5'>
            <h1 className='text-[1.5rem] font-bold'>Registration</h1>
            <form action="" className='flex flex-col gap-5'>
              <input type="email" placeholder='Enter Email' className='w-full outline-none border-b-black border-b-[2px] p-2' />
              <input type="password" placeholder='Enter Password' className='w-full outline-none border-b-black border-b-[2px] p-2' />
              <button type='submit' className='bg-black text-white px-4 rounded-[5px] py-1 hover:bg-black/70 transition-all hover:scale-[1.03] duration-300 tracking-wide'>Submit</button>
            </form>
            
            <p>Already have an account? <a href="" className=' font-bold'>Login</a></p>

        </div>
    </div>
  )
}
