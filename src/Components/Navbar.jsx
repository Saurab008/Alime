import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='bg-black bg-opacity-45 shadow-md absolute top-0 w-full z-50 '>
        <div className='flex relative justify-between items-center px-11 py-5 text-white'>
            <h1 className='text-3xl font-bold '>Alime<span className='text-[#fc6060]'>.</span></h1>
            <ul className='flex gap-7'>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-primary '>Home</li>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'>Pages</li>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'>About</li>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'>Gallery</li>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'>Blog</li>
                <li className='px-3 font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'>Contact</li>
            </ul>
            <button className='font-bold px-6'><FaSearch /></button>
        </div>
    </div>
  )
}
