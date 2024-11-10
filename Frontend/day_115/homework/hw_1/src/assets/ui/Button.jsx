import React from 'react'

export default function Button({children}) {
  return (
    <div>
        <button className='bg-black text-white px-4 rounded-[5px] py-1 hover:bg-black/70 transition-all hover:scale-[1.1] duration-300 tracking-wide'>
            {children}
        </button>
    </div>
  )
}
