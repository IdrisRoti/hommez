"use client"

import { happyCustormersImages } from '@/constants'

import { motion } from 'framer-motion'

import Image from 'next/image'

import { BiPlus } from 'react-icons/bi'

export default function Customers() {
  return (
    <section    
        className='w-full contain flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-10 gap-8'>
        <motion.div 
             initial={{ y: 50, opacity: 0}}     
             whileInView={{ y: 0, opacity: 1}} 
             transition={{duration: .5}}
            className='h-24 w-full sm:w-[22.5rem] bg-white rounded-full flex items-center justify-center gap-3 boxShadow'>
            <div className='flex items-center relative'>
                {
                    happyCustormersImages.map((url, i)=>(
                        <div className='w-9 aspect-square rounded-full border-4 border-white -ml-[12px] overflow-hidden relative' key={url}>
                            <Image 
                                src={url}  
                                alt="Customer Image"
                                fill
                                className='object-cover'
                            />
                            {
                                i === happyCustormersImages.length -1 && (
                                <button className='flex items-center justify-center bg-black bg-opacity-70 text-white absolute inset-0'>
                                    <BiPlus className='size-4' />
                                </button>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <h2 className='text-lg sm:text-xl font-semibold'>72k+ Happy<br /> 
            Customers</h2>
        </motion.div>
        <motion.div 
         initial={{ y: 50, opacity: 0}}     
         whileInView={{ y: 0, opacity: 1}} 
         transition={{duration: .5, delay: .3}}
         className='h-24 w-full sm:w-[20rem] bg-white rounded-full flex items-center justify-center gap-3 boxShadow'>
            <div className='relative w-[3.8rem] aspect-square rounded-full overflow-hidden'>
                <Image
                    src="/home2.jpg"
                    alt="house image"
                    fill
                    className='object-cover'
                />
            </div>
            <h2 className='text-lg sm:text-xl font-semibold'>200+ New<br /> 
            Listings Everyday!</h2>
        </motion.div>
    </section>
  )
}
