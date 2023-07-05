"use client"
import Image from 'next/image'
import React, { use } from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'

const TextVariant = {
    hidden :{
        opacity : 0 ,
       
    } , 
    show : {
        opacity:1 , 
   
        transition : {
            type : 'spring' , 
            delay : 0.5
        }
    }
}


const End = () => {
  return (
    <div  className='flex items-center justify-center w-full h-screen bg-white'>
        <motion.h1 
        variants={TextVariant}
        initial = 'hidden'
        whileInView='show'
        className='font-semibold text-black text-9xl'>The End</motion.h1>
    </div>
  )
}

export default End