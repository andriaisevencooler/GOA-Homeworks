import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className='flex flex-col gap-[20px] p-[1rem] items-center'>
      <h1>Hello, this is my counter project in React + TailwindCSS, Enjoy :D</h1>
      <button className='bg-teal-600 p-[15px] rounded-[10px] hover:scale-[1.05] text-white' onClick={() => setCounter(counter + 1)}>Counter is {counter}!</button>
    </div>
  )
}

export default App
