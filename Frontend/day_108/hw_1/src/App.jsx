import React from 'react'

const App = () => {

  const boxStyle = [
    'bg-slate-500',
    'text-white',
    'font-bold',
    'flex',
    'items-center',
    'justify-center',
    'rounded-[5px]',
    'p-[10px]',
    'cursor-pointer'
  ]

  const box = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    'x',
    '0',
    '.',
    '=',
    '/',
    'RESET'
  ]

  function appendToDisplay(item) {
    console.log(item)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-blue-900 gap-[20px]'>
        <header className='bg-slate-900 text-white font-bold w-[30%] p-[25px] rounded-[10px]'>

        </header>

        <main className='grid grid-cols-4  grid-rows-4 gap-4 w-[30%] bg-slate-700 p-[10px]'>
          {box.map((item, index) => {
            return (
              <div key={index} className={boxStyle.join(' ')}>{item}</div>
            )
          })}
          
        </main>
    </div>
  )
}

export default App
