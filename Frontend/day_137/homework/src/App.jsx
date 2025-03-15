import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
      <Header />
      <Main />
    </div>
  )
}
