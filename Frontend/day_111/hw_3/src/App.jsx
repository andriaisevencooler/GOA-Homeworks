import React, { useState } from 'react'

const App = () => {
  const [products, setProducts] = useState()
  return (
    <div className='flex flex-col gap-[10px]'>
        <p className='text-[1.5rem] p-1 border-[1px] rounded-[10px]' onClick={() => setProducts(['Milk, ', 'Cheese, ', 'Bread, ', 'Butter, ', 'Eggs'])}>Click me to get products</p>
        <p className='text-[1.5rem] p-1 border-[1px] rounded-[10px]' onClick={() => setProducts('null')}>Click me to set value to 'null'</p>
        <p>Output: {products}</p>
    </div>
  )
}

export default App
