"use client"

import React, { useState } from 'react'

import TestimonialCarousel from '../swiper/testimonial-swiper'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { testimonials } from '@/constants'
import GradientBall from '../gradient-ball'

export default function Testimonials() {
    const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className='contain mt-14 md:mt-28 flex flex-col md:flex-row items-center'>
        <div className='w-full'>
            <h2 className="text-secondary text-lg md:text-xl md:mb-2 lg:mb-4 font-medium tracking-wider uppercase">TESTIMONIALS</h2>
            <h3 className="mb-3 md:mb-5 text-textDark font-semibold text-2xl md:text-4xl">Look at What Our <br />Customers Say!</h3>
            <p className='mt-5 text-textDark md:w-[90%] lg:w-2/3'>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </p>
            {/* *********** CAROUSEL PAGINATION BUTTONS ***************** */}
            <div className='hidden mt-10 md:flex items-center gap-10'>
                <button 
                    disabled={slideIndex === 0}
                    onClick={() => setSlideIndex(prev => prev > 0 ? prev - 1 : 0)}
                    className='w-[3.125rem] aspect-square grid place-items-center border border-secondary rounded-full hover:bg-secondary transition disabled:opacity-50 disabled:pointer-events-none group'
                >
                        <BsArrowLeft className='size-6 text-secondary group-hover:text-white transition' />
                </button>
                <button 
                    disabled={slideIndex === testimonials.length - 1}
                    onClick={() => setSlideIndex(prev => prev < testimonials.length - 1 ? prev + 1 : testimonials.length - 1)}
                    className='w-[3.125rem] aspect-square grid place-items-center border border-secondary rounded-full hover:bg-secondary transition group disabled:opacity-50 disabled:pointer-events-none'
                >
                    <BsArrowRight className='size-6 text-secondary group-hover:text-white transition' />
                </button>
            </div>
        </div>
        <div className='relative w-full mt-6 md:mt-0'>
            <TestimonialCarousel slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            <GradientBall className='absolute w-10 md:w-[3.75rem] opacity-30 -top-6 md:-top-8 md:-left-8 right-1/4'/>
        </div>
    </section>
  )
}
