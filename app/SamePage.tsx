"use client"
import Image from 'next/image'
import React, { use } from 'react'
import { motion , useScroll , useTransform  } from 'framer-motion'
import { useRef } from 'react'


const SamePage = () => {
  const Event = {
    initial : 0 , 
    FadeInDone : 0.13 , 
    ShowParagraph1 : 0.2 , 
    ShowParagraph1End :0.3 , 
    ShowParagraph2 : 0.35 , 
    ShowParagraph2End : 0.45 ,
    StartCreateBranch : 0.5,
    EndCreateBranch  : 0.6 , 
    BranchFadeIn : 0.65, 
    BranchFadeOut : 0.75,
    EndTextStart : 0.85,
    EndTextEnd : 0.95,

  }
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target : targetRef , 
    offset : ["start end" , "end start"]
   } )
  const scale = useTransform(scrollYProgress , 
   [Event.initial , Event.FadeInDone , Event.StartCreateBranch , Event.EndCreateBranch] , 
   [4 , 1 , 1 , 0.5] )
  const x = useTransform(scrollYProgress , 
    [Event.initial , 
      Event.FadeInDone   , 
      Event.ShowParagraph1  , 
      Event.ShowParagraph1End  , 
      Event.ShowParagraph2   , 
      Event.ShowParagraph2End   ,
      Event.StartCreateBranch ,
      Event.EndCreateBranch   , 
      Event.BranchFadeIn  , 
      Event.BranchFadeOut  ,
      Event.EndTextStart  ,
      Event.EndTextEnd],
      ["-60%" , "-60%" ,"0%" ,"10%" ,"-130%" ,"-150%" ,"-40%" ,"-40%" ,"-40%" ,"-40%" ,"-40%" ,"-40%" ,])
  const opacity = useTransform(scrollYProgress , 
    [Event.initial , Event.FadeInDone] , 
    [0  , 1])

  const Text1Y = useTransform(scrollYProgress , [Event.initial , Event.ShowParagraph1  , Event.ShowParagraph1End ] , ["150%" ,"0%" , "-150%"])
  const Text2Y = useTransform(scrollYProgress , [Event.initial , Event.ShowParagraph2 , Event.ShowParagraph2End] , ["150%" , "0%" , "-150%"])
  const Text1Opacity = useTransform(scrollYProgress , 
    [0.18 , Event.ShowParagraph1  , Event.ShowParagraph1End , 0.31 ] , ["0" ,"100%" , "100%"  , "0%"])
  const Text2Opacity = useTransform(scrollYProgress , 
    [0.32 , Event.ShowParagraph2 , Event.ShowParagraph2End , 0.47] , ["0%" , "100%" , "100%" , "0%"])

  const BoxOpacity = useTransform(scrollYProgress , 
      [Event.initial , Event.StartCreateBranch , Event. EndCreateBranch] , 
      [0 , 0  , 1])
 
  const Box = useTransform(scrollYProgress , 
        [Event.initial ,     
          Event.StartCreateBranch ,
          Event.EndCreateBranch   , 
          Event.BranchFadeIn  , 
          Event.BranchFadeOut  ,
          Event.EndTextStart  ,
          Event.EndTextEnd],
          ["-60%" , "-40%" ,"-40%" ,"-40%" ,"-40%" ,"-40%" ,"-40%" ,])
   
  const TextGlideX = useTransform(scrollYProgress , [Event.EndCreateBranch , Event.BranchFadeIn , Event.EndTextStart] , ["-100%","0%" , "300%"])

  
  return (
   <div ref={targetRef} className='relative h-[800vh]'>
    <motion.div     
    className='sticky flex origin-center -translate-y-1/2 top-1/2'>

     <div className=' absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2  flex-col items-center justify-center '>
      <motion.div 
      style={{scale , opacity , x }}
      className='w-2/3 bg-gradient-to-tr from-pink-500 to-cyan-300 h-96 rounded-3xl '></motion.div>
     </div>

     <div className=' absolute left-1/4 top-1/2 flex w-[50vw] -translate-y-1/2  flex-col items-center justify-center'>
      <motion.div 
      style={{scale , opacity : BoxOpacity , x: Box }}
      className='w-2/3 bg-gradient-to-t from-red-700 to-yellow-500 h-96 rounded-3xl '></motion.div>
     </div>

     <div className=' absolute left-3/4 top-1/2 flex w-[50vw] -translate-y-1/2  flex-col items-center justify-center '>
      <motion.div 
      style={{scale ,opacity : BoxOpacity , x: Box}}
      className='w-2/3 bg-gradient-to-tl from-green-700 to-cyan-300 h-96 rounded-3xl'></motion.div>
     </div>

     <div className=' absolute left-5 top-1/2 flex w-[50vw] -translate-y-1/2  flex-col items-center justify-center   '>
      <motion.div 
      style={{scale ,opacity : BoxOpacity , x: Box}}
      className='w-2/3 bg-gradient-to-tr from-violet-600 to-violet-300 h-96 rounded-3xl'></motion.div>
     </div>

     
 
     
 
    
     <motion.div
      style={{y : Text1Y , opacity : Text1Opacity}}
      className='absolute text-3xl font-medium text-white opacity-0 left-1/4 top-1/2'>
          <h1>"The image is moving around! <br /> that's really cool!"</h1>
      </motion.div>

      <motion.div
      style={{y:Text2Y , opacity : Text2Opacity}}
      className='absolute text-3xl font-medium text-white opacity-0 left-2/3 top-1/2'>
          <h1>"wOw now the image is moving to the right! <br />How is that possible "</h1>
      </motion.div>

      <motion.div 
      style = {{x: TextGlideX}}
      className='absolute font-semibold text-black text-7xl top-1/2'>
        <h1>Unlimited Possiblity</h1>
      </motion.div>

    </motion.div>
    </div>
  )
}

export default SamePage