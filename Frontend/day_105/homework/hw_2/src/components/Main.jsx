import React from 'react'
import Card from './Card'
import ball from '../assets/ball.jpeg'

const Main = () => {
  return (
    <div className='p-[25px] flex flex-col gap-[20px] items-center '>
        <Card />
        <img src={ball} alt="" className='w-[300px] h-[300px] rounded-[10px]'/>
    </div>
  )
}

export default Main