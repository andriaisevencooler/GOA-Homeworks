import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Header />
      <Main />
    </div>
  )
}

export default App