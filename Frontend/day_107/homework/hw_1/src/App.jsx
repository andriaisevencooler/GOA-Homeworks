import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header />
      <Main />
      <Contacts />
    </div>
  )
}

export default App
