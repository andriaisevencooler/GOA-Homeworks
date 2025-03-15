import React from 'react'
import { Link } from "react-router-dom";

export default function RouterSystem() {
  return (
    <div className='w-full h-[15%] flex items-center justify-between p-[15px] bg-purple-800 font-mono tracking-wide text-[1.2rem]'>
      <Link to={"/Samsung"}>Samsung</Link>
      <Link to={"/TouristAgency"}>Tourist Agency</Link>
      <Link to={"/CarSales"}>Car Sales</Link>
      <Link to={"/PCShop"}>PC Shop</Link>
    </div>
  )
}
