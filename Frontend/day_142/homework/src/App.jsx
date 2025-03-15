import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <Main />
    </div>
  )
}
