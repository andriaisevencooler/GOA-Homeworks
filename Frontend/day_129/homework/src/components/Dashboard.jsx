import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-[20px]'>
        <h1 className='text-[1.5rem] font-bold italic'>Welcome to GOA Dashboard!</h1>
        <p>To get started, please sign in/register to get full experience of GOA.</p>
        <p>You can find more information about GOA in the <Link to={'/guide'} className='underline font-bold text-blue-600 hover:text-blue-800'>Guide</Link> page.</p>
    </div>
  )
}
