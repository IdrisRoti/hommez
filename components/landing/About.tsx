"use client"

import Image from "next/image";

import GradientBall from "../gradient-ball";
import AboutUsCards from "./AboutUsCards";
import CircularText from "../circular-text";
import { useEffect, useState } from "react";

export default function About() {
    const [windowWindth, setWindowWidth] = useState<number>()

    useEffect(()=>{
        if(typeof window != "undefined"){
            setWindowWidth(window.innerWidth)
        }
    }, [])

    console.log(windowWindth)

  return (
    <section className="contain mt-14 md:mt-32">
        <h2 className="text-secondary text-lg md:text-xl mb-2 md:mb-6 md:text-center lg:text-left font-medium tracking-wide ">WHO ARE WE</h2>
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[45%] md:text-center lg:text-left">
                <h3 className="mb-3 md:mb-5 font-semibold text-2xl md:text-4xl md:w-[60%] lg:w-full md:mx-auto lg:text-left">Assisting individuals in locating the appropriate real estate.</h3>
                <p className="text-textlight mb-5 md:mb-8 md:w-[70%] lg:w-full md:mx-auto">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                <div className="hidden lg:block"><AboutUsCards /></div>
            </div>
            <div className="w-full max-lg:h-[33rem] max-md:h-[18rem] lg:w-[55%] flex gap-3 md:gap-5 relative">
                <div className="relative self-end h-[16.25rem] md:h-[30rem] w-full rounded-[1.25rem] md:rounded-[1.9rem] overflow-hidden">
                    <Image
                         className="object-cover hover:scale-110 transition"
                        src="/home1.jpg"
                        alt="house image"
                        fill
                    />                    
                </div>
                <div className="w-full h-[16rem] md:h-[28rem]">
                    <div className="relative self-start mb-3 md:mb-5 h-3/5 w-full rounded-[1.25rem] md:rounded-[1.9rem] overflow-hidden">
                        <Image
                            className="object-cover hover:scale-110 transition"
                            src="/home2.jpg"
                            alt="house image"
                            fill
                        />                    
                    </div>
                    <div className="relative h-2/5 w-full rounded-[1.25rem] md:rounded-[1.9rem] overflow-hidden">
                        <Image
                            className="object-cover hover:scale-110 transition"        
                            src="/home3.jpg"
                            alt="house image"
                            fill
                        />                    
                    </div>
                </div>
                <GradientBall 
                    className="w-[3.75rem] absolute -bottom-7 right-1/4 opacity-50" 
                />
                <div className="absolute -top-[20%] md:-top-[10%] lg:-top-[20%] right-1/2 translate-x-1/2 z-30">
                    <CircularText 
                        text="Real Estate Since 2022 - Real Estate Since 2022 -"
                        width={windowWindth && windowWindth > 768 ? 206 : 150}
                        className="text-secondary text-xs md:text-sm"
                    />
                </div>
            </div>
            <div className="lg:hidden"><AboutUsCards /></div>
        </div>
    </section>
  )
}
