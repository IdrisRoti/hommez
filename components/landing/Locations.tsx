"use client"

import { locationsArr } from "@/constants";
import Image from "next/image";
import GradientBall from "../gradient-ball";
import { motion } from "framer-motion";

export default function Locations() {
  return (
   <section className="contain relative">
    <h2 className="text-secondary text-lg md:text-xl md:mb-2 lg:mb-4 md:text-center lg:text-left mt-[3.5rem] md:mt-[7rem] font-medium tracking-wider">AREAS ACROSS THE TOWN</h2>
    <h3 className="mb-3 md:mb-5 font-semibold text-2xl md:text-4xl  md:text-center lg:text-left">Neighborhood Properties</h3>
    {/* ************ FOR LARGE SCREENS ************* */}
    <div className="mt-14 mb-24 lg:mb-28 hidden md:block">
        <div className="flex items-center gap-6 lg:gap-12 h-[13rem] lg:h-[20rem]">
            {
                locationsArr.slice(0, 3).map((location, i) => (
                    <div key={location.id} className="relative h-full w-[30%] last-of-type:w-[40%] rounded-[1.875rem] overflow-hidden after:bg-gradient-to-t after:from-[rgba(0,0,0,.6)]  after:absolute after:inset-0 group">
                        <Image
                            src={location.image} 
                            alt={location.location}
                            fill
                            className="group-hover:scale-110 transition duration-500 object-cover"
                        />
                        <motion.div
                            initial={{ y: 100}} 
                            whileInView={{ y: 0}} 
                            transition={{ duration: .5, delay: .3 * i}} 
                            className="absolute bottom-6 left-6 z-10 text-white">
                            <h2 className="text-6xl font-semibold opacity-60">{location.amount}</h2>
                            <h3 className="text-lg">{location.location}</h3>
                        </motion.div> 
                    </div>
                ))
            }
        </div>
        <div className="flex items-center gap-6 lg:gap-12 h-[13rem] lg:h-[20rem] mt-6 lg:mt-12">
            {
                locationsArr.slice(3, 5).map((location, i) => (
                    <div 
                        key={location.id} 
                        className="relative h-full w-[40%] last-of-type:w-[60%] rounded-[1.875rem] overflow-hidden after:bg-gradient-to-t after:from-[rgba(0,0,0,.6)]  after:absolute after:inset-0 group">
                        <Image
                            src={location.image} 
                            alt={location.location}
                            fill
                            className="group-hover:scale-110 transition duration-500 object-cover"
                        />
                        <motion.div
                            initial={{ y: 100}} 
                            whileInView={{ y: 0}} 
                            transition={{ duration: .5, delay: .3 * i}} 
                            className="absolute bottom-6 left-6 z-10 text-white">
                            <h2 className="text-6xl font-semibold opacity-60">{location.amount}</h2>
                            <h3 className="text-lg">{location.location}</h3>
                        </motion.div> 
                    </div>
                ))
            }
        </div>
    </div>
        {/* ************ FOR MOBILE ************* */}
        <div className="mt-10 mb-16 grid grid-cols-2 items-center gap-5  md:hidden">
            {
                locationsArr.map((location) => (
                    <div 
                        key={location.id} 
                        className="relative w-full h-[9.7rem] rounded-[1.25rem] overflow-hidden after:bg-gradient-to-t after:from-[rgba(0,0,0,.6)] after:absolute after:inset-0 group">
                        <Image
                            src={location.image} 
                            alt={location.location}
                            fill
                            className="group-hover:scale-110 transition duration-500 object-cover"
                        />
                        <motion.div
                            initial={{ y: 100}} 
                            whileInView={{ y: 0}} 
                            transition={{ duration: .5}} 
                            className="absolute bottom-4 left-4 z-10 text-white">
                            <h2 className="text-3xl font-semibold opacity-60">{location.amount}</h2>
                            <h3 className="text-sm">{location.location}</h3>
                        </motion.div> 
                    </div>
                ))
            }
        </div>
    <GradientBall className="w-[3.125rem] absolute -top-5 md:top-10 left-1/2 opacity-50" />
    <GradientBall className="w-[5rem] lg:w-[6.25rem] absolute bottom-14 right-1/4 opacity-30" />
   </section>
  )
}
