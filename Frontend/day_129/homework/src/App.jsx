import React from 'react'
import NavBar from './ui/NavBar'
import { Link, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Guide from './components/Guide'
import Login from './components/Login'

export default function App() {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <div className='w-full h-[90%] flex gap-[20px] flex-col pt-[50px] px-[20px]  bg-green-400'>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/guide' element={<Guide />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </div>
  )
}
