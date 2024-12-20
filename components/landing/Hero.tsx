"use client"

import { motion } from "framer-motion";

import { PropertySearchForm } from "../forms/PropertySearchForm";
import GradientBall from "../gradient-ball";
import HeroSwiperCarousel from "../swiper/hero-swiper";

export default function Hero() {
  return (
    <section className='contain flex flex-col lg:flex-row items-center gap-3 mt-[2rem] sm:mt-[5rem] lg:mt-[10rem]'>
        <div className="w-full lg:w-[60%] lg:pl-14 relative">
          <motion.h2 
            initial={{ y: -20, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: .5, delay: .2 }}
            className="sm:text-xl text-secondary font-medium tracking-wider sm:text-center lg:text-left">REAL ESTATE</motion.h2>
          <motion.h1 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .5 }}
            className="text-textDarker font-semibold text-4xl sm:text-6xl mt-2 mb-3 sm:text-center lg:text-left">Find a perfect <br />home you love..!</motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: .5, delay: .4 }}
            className="sm:w-[70%] sm:mx-auto lg:mx-0 lg:w-[90%] text-textlight mb-5 sm:text-center lg:text-left">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</motion.p>
          <HeroSwiperCarousel />
          {/* ***** GRADIENT BALL */}
          <GradientBall className="absolute top-[47%] sm:top-1/3 right-10 sm:right-10 lg:right-5 w-10 sm:w-[3.8rem] opacity-70" />
        </div>
        <div className="w-full lg:w-[40%] lg:pr-14 mt-12 lg:mt-0">
          <motion.div 
            initial={{ x: 40, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: .5, delay: .7 }}
            className="bg-white w-full sm:w-[80%] max-lg:mx-auto lg:w-[26rem] h-[28rem] sm:h-[36.5rem] rounded-[20px] boxShadow">
            <PropertySearchForm />
          </motion.div>
        </div>
    </section>
  )
}
