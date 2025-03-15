import React from 'react'
import RouterSystem from './components/RouterSystem'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import TouristSaagento from './components/TouristSaagento'
import GamingStore from './components/GamingStore'
import Batman from './components/Batman'
import Nature from './components/Nature'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <RouterSystem />
      <div className='w-full h-[90%] flex items-center justify-center bg-[#aab] text-center'>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='touristsaagento' element={<TouristSaagento />}></Route>
          <Route path='/gamingstore' element={<GamingStore />}></Route>
          <Route path='/batman' element={<Batman />}></Route>
          <Route path='/nature' element={<Nature />}></Route>
        </Routes>
      </div>
    </div>
  )
}
