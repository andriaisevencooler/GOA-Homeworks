import React from 'react'

const Contacts = () => {
  return (
    <div className='hidden w-full h-[30%] bg-orange-500 md:flex'>
        <div className='h-[100%] w-[50%] flex flex-col p-[20px] items-center text-white'>
            <p>Contact: +1-543-123-4567</p>
            <p>Address: lorem ipsum</p>
            <p>Email: name@example.com</p>
        </div>
        <div className='h-[100%] w-[50%] flex flex-col p-[20px] items-center text-white'>
            <p>Facebook: lorem ipsum</p>
            <p>Twitter: lorem ipsum</p>
            <p>Instagram: lorem ipsum</p>
        </div>
    </div>
  )
}

export default Contacts
