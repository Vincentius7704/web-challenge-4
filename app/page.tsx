"use client"
import Image from 'next/image'
import React from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'
import Hero from './Hero'
import Collab from './Collab'
import SamePage from './SamePage'
import End from './End'
{/* this program will return a beautiful presentation with the input of user scrolling in order to satisfy the user  */}

export default function Home() {
  return(
   <>
    <Hero></Hero>
    <div className='relative z-10 w-full overflow-x-clip'>
      <Collab></Collab>
      <SamePage></SamePage>
      <End></End>
    </div>
    
   </> 
  
  )
}
