import React from 'react'
import RouterSystem from './components/RouterSystem'
import { Route, Routes } from 'react-router-dom'
import Samsung from './components/Samsung'
import TouristAgency from './components/TouristAgency'
import CarSales from './components/CarSales'
import PcShop from './components/PcShop'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <RouterSystem />
      <div className='w-full h-[85%] flex items-center justify-center text-center bg-purple-700'>
        <Routes>
          <Route path={'/'} element={<h1 className='text-3xl'>Switch around different routes!</h1>}></Route>
          <Route path={'/Samsung'} element={<Samsung />}></Route>
          <Route path={'/TouristAgency'} element={<TouristAgency />}></Route>
          <Route path={'/CarSales'} element={<CarSales />}> </Route>
          <Route path={'/PCShop'} element={<PcShop />}></Route>
        </Routes>
      </div>
    </div>
  )
}
