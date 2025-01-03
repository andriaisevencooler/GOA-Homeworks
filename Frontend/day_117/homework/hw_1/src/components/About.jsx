import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../constants/Layout'
import Projects from './Projects'
import Contacts from './Contacts'

export default function About() {
  return (
    <div>
        <div className='w-full h-[10%]'>
            <Routes>
                <Route path='/' element={<Layout></Layout>} />
                <Route path='/about' element={<About></About>} />
                <Route path='/projects' element={<Projects></Projects>} />
                <Route path='/contacts' element={<Contacts></Contacts>} />
            </Routes>
        </div>
        <div className='w-full h-[55vh] flex items-center justify-center gap-2 flex-col'>
            <h1 className='text-3xl font-bold'>Hello 👋</h1>
            <p className='text-center max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio, quam voluptate a facilis repellat libero laboriosam ducimus similique molestiae perspiciatis eius sit iure hic ipsa quo aliquam, est suscipit!</p>
        </div>
    </div>
  )
}