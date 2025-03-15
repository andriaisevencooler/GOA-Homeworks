import React from 'react'
import { PawPrint } from "lucide-react"

export default function Header() {
  return (
    <div className='w-full h-[10%] p-[10px] flex gap-[25px] justify-between items-center'>
        <div className='flex gap-[10px] flex-row-reverse'>
            <h1>Animal Information!</h1>
            <PawPrint color="#c10b0b" className='size-5' />
        </div>
        <p className='font-semibold'>Explore the world of animals!</p>
    </div>
  )
}
