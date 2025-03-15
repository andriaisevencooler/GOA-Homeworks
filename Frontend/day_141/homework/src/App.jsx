import React from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import Main from './components/Main'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <Featured />
      <Main />
    </div>
  )
}
