import React from 'react'
import { Link } from "react-router-dom";

export default function RouterSystem() {
    return (
        <div className='flex w-full h-[10%] bg-[#aaa] flex items-center justify-between'>
            <Link to={'/'} className='p-[15px] hover:underline font-mono tracking-wide text-[1.2rem]'>Sea Turtle</Link>
            <Link to={'/touristsagangebo'} className='p-[15px] hover:underline font-mono tracking-wide text-[1.2rem]'>Tourist Sagangebo</Link>
            <Link to={'/gamingstore'} className='p-[15px] hover:underline font-mono tracking-wide text-[1.2rem]'>Gaming Store</Link>
            <Link to={'/batman'} className='p-[15px] hover:underline font-mono tracking-wide text-[1.2rem]'>Batman Website</Link>
            <Link to={'/nature'} className='p-[15px] hover:underline font-mono tracking-wide text-[1.2rem]'>Nature Website</Link>
        </div>
    )
}
