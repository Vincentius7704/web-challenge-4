"use client"
import Image from 'next/image'
import React from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'
import { inflate } from 'zlib'


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
    className="relative justify-center h-screen py-16 bg-gradient-to-tl from-black to-gray-950 ">
      <motion.div 
      style={{scale , position}}
      className='flex justify-center w-full '>
        <motion.h1 
        
        transition={{
          repeat: Infinity , 
          duration : 1
        }}     
        className='max-w-3xl py-8 text-7xl'>Beautifully <br /> Styled Website</motion.h1>
      </motion.div>
    </motion.main>
    
</>
  )
}
