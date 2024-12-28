"use client"

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import ListImagesCarousel from "@/components/swiper/list-images-swiper";
import PropertyListContext from "@/context/PropertyListContext";
import { heroCarouselHomeImages } from "@/constants";

import { BiImage, BiX } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";

const ListImagesModal = () => {
    const [isGrid, setIsGrid] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const {setShowImages} = useContext(PropertyListContext);

    const openSingleView = (index: number) => {
        setIsGrid(false);
        setSlideIndex(index)
    }

    const handleSlideChange = (type: "Next" | "Back") => {
        if(type ==="Next") {
            setSlideIndex(prev => prev < heroCarouselHomeImages.length - 1 ? prev + 1 : heroCarouselHomeImages.length - 1)
        }

        if(type === "Back") {
            setSlideIndex(prev => prev > 0 ? prev - 1 : 0)
        }
    }

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if(e.key === "ArrowLeft") handleSlideChange("Back")
            if(e.key === "ArrowRight") handleSlideChange("Next")
        }

        if(typeof window !== "undefined"){
            window.addEventListener("keydown", handleKeydown)
        }

        return () => window.removeEventListener("keydown", handleKeydown)
    }, [])

  return (
        <motion.div
            initial={{  opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: .5, ease: "easeInOut" }}
            className='fixed inset-0 top-0 w-screen h-screen z-[999] bg-primary grid grid-rows-10'>
            {/* ******* GRID TOGGLE BUTTON *********** */}
            <div className="row-span-8 grid place-items-center">
                {
                    !isGrid ? (
                        <ListImagesCarousel slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
                    ) : (
                        <div className="h-full overflow-y-auto scroll-bar-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-6 px-5">
                    {
                        heroCarouselHomeImages.map((image, i) => (
                            <div
                                onClick={() => openSingleView(i)}
                                key={image} 
                                className="relative transition cursor-pointer max-md:w-[90vw] aspect-video hover:after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[rgba(0,0,0,.3)] after:to-transparent">
                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                                <div className="flex items-center gap-3 absolute bottom-3 left-3 z-50">
                                    <div className="w-20 h-[1.5px] bg-white/60" /> 
                                    <p className="text-white/70 uppercase font-serif">CLICK TO VIEW IMAGE</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    )
                }
            </div>
            <div className="row-span-2 w-screen md:w-[80vw] mx-auto pt-10">
                <div className="flex items-center justify-center md:justify-end gap-3 md:gap-10 w-full">
                    {
                        isGrid ? (
                            <button 
                                onClick={() => setIsGrid(false)} 
                                className="flex items-center gap-2 text-white/70 hover:text-white transition">
                                <BiImage className="md:size-4" />
                                <span className="text-[10px] md:text-sm uppercase font-serif">Single View</span>
                            </button>
                        ) : (
                            <button 
                                onClick={() => setIsGrid(true)} 
                                className="flex items-center gap-2 text-white/70 hover:text-white transition">
                                <BsGrid className="size-4" />
                                <span className="text-[10px] md:text-sm uppercase font-serif">Grid View</span>
                            </button>
                        )
                    }
                    {/* ******* PAGINATION BUTTONS *********** */}
                    {!isGrid && <div className="flex items-center md:gap-5">
                        <button 
                            disabled={slideIndex === 0}
                            onClick={() => handleSlideChange("Back")}
                            className="p-2 rotate-180 disabled:opacity-50">
                            <div className="flex items-center w-14 md:w-20 relative"> 
                                <div className="absolute right-[.5px] h-[1.5px] w-12 md:w-24 bg-textlighter" />
                                <div className="absolute h-[1.5px] w-2.5 bg-textlighter rotate-45 -top-[4.5px] right-0" />
                                <div className="absolute h-[1.5px] w-2.5 bg-textlighter -rotate-45 top-[3px] right-0" />
                            </div>
                        </button>
                        <span className="font-serif text-white text-lg md:text-2xl">{slideIndex + 1}</span>
                        <button 
                            disabled={slideIndex === heroCarouselHomeImages.length - 1}
                            onClick={() => handleSlideChange("Next")}
                            className="p-2 disabled:opacity-50">
                            <div className="flex items-center w-14 md:w-20 relative"> 
                                <div className="absolute right-[.5px] h-[1.5px] w-12 md:w-24 bg-textlighter" />
                                <div className="absolute h-[1.5px] w-2.5 bg-textlighter rotate-45 -top-[4.5px] right-0" />
                                <div className="absolute h-[1.5px] w-2.5 bg-textlighter -rotate-45 top-[3px] right-0" />
                            </div>
                        </button>
                    </div>}
                    {/* ******* CLOSE BUTTON *********** */}
                    <button onClick={() => setShowImages(false)} className="flex items-center gap-1 text-white/70 hover:text-white transition">
                        <BiX className="size-6" />
                        <span className="text-[10px] md:text-sm uppercase font-serif">Close</span>
                    </button>
                </div>
            </div>
        </motion.div>
  )
}

export default ListImagesModal;