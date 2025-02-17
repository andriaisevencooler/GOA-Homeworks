import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import RouterLinks from './resources/RouterLinks'
import Dashboard from './components/Dashboard'
import Login from './components/Login'


export default function App() {
  return (
    <div className='flex flex-col w-full h-screen'>
        <RouterLinks />
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}
