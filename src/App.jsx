import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Follow from './Components/Follow'
import Footer from './Components/Footer'
import Photos from './Components/Photos'

export default function App() {
  return (
    <div className='flex flex-col gap-24'>
      <Navbar/>
      <Home/>
      <Photos/>
      <Follow/>
      <Footer/>
    </div>
  )
}
