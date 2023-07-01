"use client"
import Image from 'next/image'
import React from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'


{/* this program will return a beautiful presentation with the input of user scrolling in order to satisfy the user  */}

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target : targetRef , 
    offset : ["end end" , "end start"]
   } )
   const opacity = useTransform(scrollYProgress , [0 , 0.5] , [1 , 0])
   const scale = useTransform(scrollYProgress , [0 , 1] , [1 , 0])
   const position = useTransform(scrollYProgress , (pos) =>{
    return pos === 1 ? "relative" :  "fixed"
   })
  return (
  <>
    <motion.main 
    style={{opacity }}
    ref = {targetRef} 
    className="py-16 h-screen relative justify-center bg-gradient-to-tl from-black to-gray-950 ">
      <motion.div 
      style={{scale , position}}
      className=' flex w-full justify-center'>
        <h1 className='text-white py-8 text-6xl '>Beautifully Styled Website</h1>
      </motion.div>
    </motion.main>
    
</>
  )
}
