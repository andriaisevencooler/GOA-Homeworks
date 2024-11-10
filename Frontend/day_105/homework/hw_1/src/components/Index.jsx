import React from 'react'

const listItems = ['Home', 'About', 'Contact', 'Registration']

const Index = () => {
  return (
    <ul className="flex text-white gap-[15px] text-[1.5rem]">
      {listItems.map((item, index) => (
        <li key={index} className="font-bold hover:underline cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Index
