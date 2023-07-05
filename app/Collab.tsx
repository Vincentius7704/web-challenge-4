"use client"
import Image from 'next/image'
import React from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'

const Collab = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target : targetRef , 
    offset : ["start end" , "end start"]
   } )
   const scale = useTransform(scrollYProgress , [0.1 , 0.4] , [1 , 2.5])
   const x = useTransform(scrollYProgress ,
    [0.1 , 0.25 , 0.7  , 1] , ["0%" , "-50%" , "-65%" , "-50%"])
   const opacity = useTransform(scrollYProgress , [0.8 , 1] , [1 , 0])
   const TextX = useTransform(scrollYProgress , 
    [0 , 0.4 , 0.9 , 1] , 
    ["180%" , "0%" , "-130%" , "-160%"])
  return (
    <section className='mt-[-30vh]'>
        <div ref={targetRef}  className='h-[300vh] w-full'>
          <div className='sticky top-[40vh]'>
            <div className='flex justify-center'>
              <div className='flex justify-center w-full origin-top'>
                <motion.div 
                style={{scale , x , opacity}}
                className='flex justify-end w-2/3 font-medium bg-gradient-to-tl from-orange-500 to-yellow-500 h-96 rounded-3xl'>
                  <motion.h1 
                  style={{x : TextX}}
                  className='m-20 text-black text-7xl'>Styled  Styled Styled Styled </motion.h1>
                </motion.div>
                
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Collab