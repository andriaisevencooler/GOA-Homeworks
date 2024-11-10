import React from 'react'
import Card from './components/Card'

export default function App() {
  return (
    <div className='w-full h-screen flex items-center p-[30px] justify-between gap-[30px]'>
        <Card />
        <Card />
        <Card />
    </div>
  )
}
