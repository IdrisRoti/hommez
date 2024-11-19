"use client"

import { testimonials } from "@/constants"

import { motion, useMotionValue } from "framer-motion"

import Image from "next/image"

import {  MdOutlineStar  } from "react-icons/md";


type TestimonialCarouselTypes = {
    slideIndex: number;
    setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DRAG_BUFFER = 20;

export default function TestimonialCarousel({slideIndex, setSlideIndex}: TestimonialCarouselTypes) {
    // const [isDragging, setIsDragging] = useState(false)
    const dragX = useMotionValue(0)

    // const onDragStart = () => {
    //     setIsDragging(true)
    // }

    const onDragEnd = () => {
        // setIsDragging(false)

        const x = dragX.get();
        console.log(x)

        if(x < -DRAG_BUFFER){
            setSlideIndex((prev) => prev < testimonials.length - 1 ? prev + 1 : testimonials.length - 1)
        } else if (x > DRAG_BUFFER) {
            setSlideIndex((prev) => prev > 0 ? prev - 1 : 0)
        }
    }

  return (
    <div className="flex flex-col md:flex-row gap-6">
        <div className='overflow-hidden md:w-[25rem] lg:w-[31.25rem] rounded-[1.25rem] lg:rounded-[1.875rem] cardShadow'>
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
                type : "spring",
                mass: 3,
                stiffness: 300,
                damping: 50
            }}
            style={{
                x: dragX
            }}
            className="flex h-[22.375rem]">
            {
                testimonials.map((testimony)=> (
                    <article 
                        key={testimony.id}
                        className="w-full bg-white flex flex-col justify-center flex-shrink-0 md:w-[25rem] lg:w-[31.25rem] h-full px-8 lg:px-14 py-6 lg:py-8"
                    >
                        <Image
                            src="/quote.png" 
                            alt="double quote"
                            width={60}
                            height={40}
                            className="w-[3.75rem] h-[2.25rem] object-cover"
                        />
                        <p className="mt-4 md:leading-relaxed text-lg md:text-xl font-medium">{testimony.comment}</p>
                        <hr className="bg-textGray my-4 md:my-6" />
                        <div className="flex items-center gap-4">
                            <Image
                                src={testimony.image}
                                className="w-[3.125rem] aspect-square object-cover rounded-full"
                                alt={testimony.name}
                                width={100}
                                height={100}
                            />
                            <div className="lg:flex w-full lg:justify-between lg:ml-auto">
                                <h2 className="font-medium text-xl ">{testimony.name}</h2>
                                <div className="flex items-center ml-auto mt-2 lg:mt-0">
                                    {[...Array(4)].map((_, i)=>(
                                        <MdOutlineStar key={i} className="text-[#FFC700] size-4" />
                                    ))}
                                    <MdOutlineStar className="text-textGray size-4" />
                                </div>
                            </div>
                        </div>
                    </article>
                ))
            }
        </motion.div>
        </div>
        {/* ********** CAROUSEL PAGINATION *********** */}
        <div className="flex md:flex-col items-center justify-center gap-3.5">
            {testimonials.map((_, i) => (
                <div
                    key={i}
                    className="h-1 md:h-[2.2rem] w-[2.2rem] md:w-1 rounded-full bg-textGray relative"
                >
                    {i === slideIndex && <motion.span 
                        layoutId="slideIndex"
                        className="h-1 md:h-[2.2rem] w-[2.2rem] md:w-1 rounded-full bg-textlight absolute inset-0 z-10"></motion.span>}
                </div>
            ))}
        </div>
    </div>
  )
}
