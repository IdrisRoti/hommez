"use client"

import { heroCarouselHomeImages } from "@/constants"

import { motion, useMotionValue } from "framer-motion"

import Image from "next/image"


type ListImagesCarouselTypes = {
    slideIndex: number;
    setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DRAG_BUFFER = 20;

export default function ListImagesCarousel({slideIndex, setSlideIndex}: ListImagesCarouselTypes) {
    const dragX = useMotionValue(0)

    const onDragEnd = () => {
        // setIsDragging(false)

        const x = dragX.get();

        if(x < -DRAG_BUFFER){
            setSlideIndex((prev) => prev < heroCarouselHomeImages.length - 1 ? prev + 1 : heroCarouselHomeImages.length - 1)
        } else if (x > DRAG_BUFFER) {
            setSlideIndex((prev) => prev > 0 ? prev - 1 : 0)
        }
    }

  return (
    <div className="max-md:h-[80vh] mt-5">
        <div className='overflow-hidden h-full w-screen md:w-[80vw]'>
            <motion.div
                drag="x"
                dragConstraints= {{
                    left: 0,
                    right: 0
                }} 
                // onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                animate={{
                    translateX: `-${slideIndex * 100}%`
                }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 300,
                    damping: 50
                }}
                style={{
                    x: dragX
                }}
                className="flex h-full cursor-grab active:cursor-grabbing items-center">
                {
                            heroCarouselHomeImages.map((url)=>(
                                <div className='group relative h-[30vh] lg:h-[80vh] scale-[98%] w-full shrink-0 transition after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[rgba(0,0,0,.3)] after:to-transparent' key={url}>
                                    <Image 
                                        className='object-cover pointer-events-none h-full w-full' 
                                        src={url} 
                                        width={400} 
                                        height={400} 
                                        alt="" 
                                    />
                                    <div className="flex items-center gap-3 absolute bottom-6 left-6 z-50">
                                        <div className="w-20 h-[1.5px] bg-white/60" />
                                        <p className="text-white/70 uppercase font-serif">Swipe to see next image</p>
                                    </div>
                                </div>
                            ))
                }
            </motion.div>
        </div>
    </div>
  )
}
