"use client"

import { motion } from "framer-motion";

type TCircularText = {
    text: string;
    width?: number;
    className?: string;
}

export default function CircularText({text, width = 200, className}: TCircularText) {
    const textChar = text.split("");
    
  return (
    <motion.div
    style={{
      width: `${width}px`,
      height: `${width}px`
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
    className={`flex justify-center relative rounded-full mx-auto text-sm ${className}`}>
    <p className='w-full h-full absolute'>
      {
        textChar.map((char, i) => (
          <span 
            className='absolute left-1/2 font-medium' 
            style={{ transform: `rotate(${i * 7.3}deg)`, transformOrigin: `0 ${width / 2}px`}} 
            key={i}>{char}
          </span>
        ))
      }
    </p>
  </motion.div>
  )
}
