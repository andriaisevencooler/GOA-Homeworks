import React from 'react'


const Header = () => {

    const pages = [
        {
            id: "/Home",
            link: "Home"
        },
        {
            id: "/About",
            link: "About"
        },
        {
            id: "/Contact",
            link: "Contact"
        },
        {
            id: "/Registration",
            link: "Registration"
        }
    ]


  return (
    <div className='w-full h-[12%] bg-orange-500 flex p-[15px] items-center gap-[20px] justify-between'>
        <h1 className='text-[1.5rem] text-white'>Shop Website</h1>

        <ul className='flex list-none gap-[40px] text-white'>
            {pages.map((item, index) => (
                <a href={item.id} key={index}>{item.link}</a>
            ))}
        </ul>

        <form className='overflow-hidden w-fit rounded-[10px]  border-[1px] border-black'>
            <input type="search" placeholder='Search Here...' className='outline-none p-[5px]'/>
            <button type='submit' className='bg-green-700 text-white p-[5px]'>Search</button>
        </form>
    </div>
  )
}

export default Header
