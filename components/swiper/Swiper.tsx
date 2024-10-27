"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { heroCarouselHomeImages } from '@/constants'

import { motion, useMotionValue } from 'framer-motion'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

const DRAG_BUFFER = 50;
const SWIPE_AUTO_DELAY = 5000;

export default function SwiperCarousel() {
    const [slideIndex, setSlideIndex] = useState(0)
    const [dragging, setDragging] = useState(false)

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true)
    }

    const onDragEnd = () => {
        setDragging(false)

        const x = dragX.get();

        if(x <= -DRAG_BUFFER && slideIndex < heroCarouselHomeImages.length - 1){
            setSlideIndex(prev => prev + 1)
        } else if(x >= DRAG_BUFFER && slideIndex > 0){
            setSlideIndex(prev => prev - 1)
        }
    }

    useEffect(() => {
      if(!dragging){
        const swipeInterval = setInterval(()=> {
            setSlideIndex(prev=> prev < heroCarouselHomeImages.length - 1 ? prev + 1 : 0)
          }, SWIPE_AUTO_DELAY)
        
          return () => {
            clearInterval(swipeInterval)
          }
      }
    }, [dragging])

  return ( 
    <div 
        onMouseEnter={()=> 
        setDragging(true)} 
        onMouseLeave={()=> 
        setDragging(false)} 
        className='sm:w-[80%] max-lg:sm:mx-auto lg:w-[36rem] w-full relative'>
        <div className="w-full overflow-hidden">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                animate={{
                    translateX: `-${slideIndex * 100}%`
                }}
                style={{
                    x: dragX
                }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 300,
                    damping: 50
                }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className='flex items-center rounded-[20px] h-52 sm:h-[22rem] w-full cursor-grab active:cursor-grabbing'> 
                    {
                        heroCarouselHomeImages.map((url)=>(
                            <div className='h-full w-full shrink-0 scale-[98%]' key={url}>
                                <Image 
                                    className='object-cover pointer-events-none h-full w-full rounded-[20px]' 
                                    src={url} 
                                    width={400} 
                                    height={400} 
                                    alt="Home image" 
                                />
                            </div>
                        ))
                    }
            </motion.div>
        </div>
        {/* ********** CAROUSEL BUTTONS ************* */}
        <button 
            onClick={()=>{setSlideIndex(prev => prev >= 1 ? prev - 1 : 0)}}
            className='boxShadow z-[999] absolute -left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition rounded-full w-10 aspect-square'>
            <CgChevronLeft />
        </button>
        <button 
            onClick={()=>{setSlideIndex(prev => prev < (heroCarouselHomeImages.length - 1) ? prev + 1 : heroCarouselHomeImages.length - 1)}}
            className='boxShadow z-[999] absolute -right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition rounded-full w-10 aspect-square'>
            <CgChevronRight />
        </button> 
               {/* ********** CAROUSEL PAGINATION ************* */}
        <div className='flex gap-6 h-1 px-4'>
            {heroCarouselHomeImages.map((url, i)=>(
                <div className='w-full h-full' key={url}>
                    <button        
                        onClick={()=> setSlideIndex(i)}
                        className={`w-full h-full relative rounded-full  bg-white shadow`} 
                    >                   
                        {slideIndex === i && (
                            <motion.span
                                layoutId='swiperPagination'
                                className='absolute bg-primary inset-0 rounded-full z-10'></motion.span>
                        )}
                    </button>
                </div>
            ))}
        </div>
    </div>


  )
}

// w-[34rem] h-[21rem] relative overflow-hidden rounded-[20px]