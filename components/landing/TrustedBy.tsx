"use client"

import { trustedByLogos } from "@/constants";

import { motion } from "framer-motion";

import Image from "next/image";
import GradientBall from "../gradient-ball";

export default function TrustedBy() {
  return (
    <section className="contain mt-[1rem] sm:mt-[5rem] relative w-full max-sm:-order-1">
        <h3 className="text-textlight mb-10 sm:mb-14 text-center w-[60%] sm:w-full mx-auto">Trusted by 100+ Companies across the globe! </h3>
        <div className="w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                initial={{ translateX: "-50%"}}
                animate={{ translateX: "0%"}}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
                className="flex gap-12 pr-12 sm:gap-24 sm:pr-24 -translate-x-1/2">
                {
                    trustedByLogos.map((logo, i)=>(
                       <div className="w-[7.5rem] h-10 relative" key={i}>
                            <Image
                                src={logo}
                                alt={logo}
                                fill
                                className="grayscale"
                            />
                       </div>
                    ))
                }
            </motion.div>
        </div>
        <GradientBall className="w-24 opacity-40 absolute -top-1/2 left-[10%] hidden sm:block" />
    </section>
  )
}
