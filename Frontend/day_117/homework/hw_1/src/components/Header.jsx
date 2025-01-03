import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../constants/Layout'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'

export default function Header() {
  
  return (
    <div className='flex flex-col'>
        <div className='w-full h-[10%]'>
            <p className='ml-2'>Routers:</p>
            <Routes>
                <Route path='/' element={<Layout></Layout>} />
                <Route path='/about' element={<About></About>} />
                <Route path='/projects' element={<Projects></Projects>} />
                <Route path='/contacts' element={<Contacts></Contacts>} />
            </Routes>
        </div>
    </div>
  )
}
