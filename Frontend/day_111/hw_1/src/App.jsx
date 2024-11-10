import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter Program! Click the button to increase the counter</h1>
      <button onClick={() => setCount(count + 1)} className='bg-teal-600 p-[10px] text-[1.5rem] text-white'>Counter: {count}</button>
    </div>
  )
}

export default App
