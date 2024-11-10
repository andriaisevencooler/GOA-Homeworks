import React from 'react'
import pcLogo from '../assets/pc.png'
import micLogo from '../assets/mic.png'
import mouseLogo from '../assets/mouse.png'

const Main = () => {

    const boxStyles = [
        'border-black',
        'border-[1px]',
        'flex',
        'w-[33%]',
        'flex-col',
        'items-center',
        'rounded-[10px]',
        'p-[10px]',
        'gap-[20px]'
    ]

  return (
    <div className='h-[88%] w-full flex flex-col md:flex-row items-center md:items-start gap-[30px] p-[10px]'>
        <div className={boxStyles.join(' ')}>
            <img src={pcLogo} alt=""/>
            <p>Here, you will see PC's that you can buy, they are cheap and the quality is perfect for either gaming or working.</p>
            <a className='text-blue-600 cursor-pointer hover:underline'>See more...</a>
        </div>
        <div className={boxStyles.join(' ')}>
            <img src={micLogo} alt=""/>
            <p>Here, you will see microphones that you can buy, they are cheap and the quality is perfect for either gaming or working. They are on sale for 1 week!</p>
            <a className='text-blue-600 cursor-pointer hover:underline'>See more...</a>
        </div>
        <div className={boxStyles.join(' ')}>
            <img src={mouseLogo} alt=""/>
            <p>Here, you will see mic that you can buy, they are cheap and the quality is perfect for either gaming or working.</p>
            <a className='text-blue-600 cursor-pointer hover:underline'>See more...</a>
        </div>
    </div>
  )
}

export default Main
