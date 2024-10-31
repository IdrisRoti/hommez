import { services } from '@/constants'
import React from 'react'

export default function Services() {
  return (
    <section className='py-16 md:py-24 bg-[#d4d4d4] bg-opacity-30 text-center'>
        <div className='contain'>
            <h2 className='text-textDark text-lg md:text-xl tracking-wider font-medium'>OUR SERVICES</h2>
            <h3 className='text-textDarker mt-2 md:mt-5 mb-10 md:mb-16 text-2xl md:text-4xl font-semibold'>Donec porttitor euismod dignissim</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10'>
                {
                    services.map((service)=>{
                        const {icon: Icon, title, content, id} = service;
                        return (
                            <article key={id} className='bg-white rounded-[1.25rem] lg:rounded-[1.875rem] flex flex-col items-center justify-center py-14 mb-4 md:mb-0'>
                                <span className='bg-secondary w-[3.75rem] lg:w-[5.65rem] aspect-square rounded-full grid place-items-center boxShadow'>
                                    <Icon className='text-white size-6 lg:size-10' />
                                </span>
                                <h4 className='mt-5 lg:mt-8 mb-2 text-textDark font-semibold text-lg'>{title}</h4>
                                <p className='text-textlight w-[80%] lg:w-[55%]'>{content}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
