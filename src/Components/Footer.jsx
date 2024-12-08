import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";



export default function Footer() {
  return (
    <div>
        {/* Footer Section */}
        <div className='flex justify-between mt-2 py-5 px-14 items-center'>
            <p className='text-1xl'>Copyright ©2024 All rights reserved | This template is made as a <span className='text-[#fc6060]'>Project.</span></p>
            <h1 className='text-3xl font-bold'>Alime<span className='text-[#fc6060]'>.</span></h1>
            {/* Scocial Media Icons */}
            <ul className='flex gap-8 mr-5'>
                <li className='font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'><FaFacebookF /></li>
                <li className='font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'><FaTwitter /> </li>
                <li className='font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'><FaLinkedinIn /></li>                <li className='font-semibold cursor-pointer delay-75 duration-300 ease-in-out hover:text-[#fc6060]'><FaPinterestP /></li>

            </ul>
        </div>
    </div>
  )
}
