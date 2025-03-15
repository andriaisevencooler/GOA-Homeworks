import React from 'react'
import LinksSystem from './components/LinksSystem'
import { Route, Routes } from 'react-router-dom'
import Tourism from './components/Tourism'
import Photography from './components/Photography'
import ROG from './components/ROG'

export default function App() {
  return (
    <div>
      <LinksSystem />
      <div className='w-full h-[90%] flex items-center justify-center'>
        <Routes>
          <Route path="/" element={<h1 className='text-3xl'>Start Navigating with React Routes!</h1>}></Route>
          <Route path="/tourism" element={<Tourism />}></Route>
          <Route path="/photography" element={<Photography />}></Route>
          <Route path="/rog" element={<ROG />}></Route>
        </Routes>
      </div>
    </div>
  )
}
