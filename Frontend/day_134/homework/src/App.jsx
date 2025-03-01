import React from 'react'
import RouterSystem from './components/RouterSystem'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <RouterSystem />
      <div className='w-full h-[90%] flex items-center justify-center bg-[#aab]'>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='touristsagangebo' element={<TouristSagangebo />}></Route>
          <Route path='/gamingstore' element={<GamingStore />}></Route>
          <Route path=''></Route>
        </Routes>
      </div>
    </div>
  )
}
