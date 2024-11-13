"use client"

import { motion } from "framer-motion"

const ScrollDownLine = () => {
  return (
    <motion.div 
        initial={{ height: "0px", opacity: 0}}
        animate={{ height: "80px", opacity: 1}}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, ease: "easeInOut"}}
        className='w-[2.5px] rounded-full absolute bg-red-400'/>
  )
}

export default ScrollDownLine