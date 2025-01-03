import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
    const navItems = [
        {
            href: '/about',
            text: 'About Me'
        },
        {
            href: '/projects',
            text: 'Projects'
        },
        {
            href: '/contacts',
            text: 'Contacts'
        }
    ]
  return (
    <div>
        <ul className='w-full p-2.5 flex justify-evenly bg-slate-500 text-white'>
            {navItems.map((item, index) => (
                <Link to={item.href}  key={index}><li>{item.text}</li></Link>
            ))}
        </ul>
    </div>
  )
}
