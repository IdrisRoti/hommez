"use client"

import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import { CgShare } from 'react-icons/cg';
import { HiArrowLongLeft, HiPhoto } from "react-icons/hi2";

const ListDetail = () => {
  return (
    <div>
        <section className='h-14 bg-white z-10 border-b border-black/20 sticky top-0'>
            <div className='flex items-center contain h-full w-full'>
                <button className='flex items-center gap-2 h-14 pr-10 border-r border-black/20 group'>
                    <HiArrowLongLeft className='size-6 text-textDark group-hover:-translate-x-3 transition' />
                    <span className='text-[10px] uppercase tracking-wider font-semibold'>Back</span>
                </button>
                <div className='pl-10 flex items-center justify-between w-full'>
                    <h2 className='text-textlight hidden md:block'>Hacienda Canalete, Cartagena, Bolivar, 130002 Colombia</h2>
                    <div className='flex items-center h-full max-md:ml-auto '>
                        <button className='flex items-center gap-2 h-14 pl-10 group'>
                            <BsStarFill className='size-4 text-textlighter group-hover:text-secondary transition' />
                            <span className='text-[10px] uppercase tracking-wider font-semibold group-hover:text-secondary transition'>Save</span>
                        </button>
                        <button className='flex items-center gap-2 h-14 pl-10 group'>
                            <CgShare className='size-4 text-textlighter group-hover:text-secondary transition' />
                            <span className='text-[10px] uppercase tracking-wider font-semibold group-hover:text-secondary transition'>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className='mt-4 md:mt-8 contain'>
          <section className='flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full mb-5'>
              <h1 className='text-2xl md:text-3xl font-serif'>Hacienda Canalete
            Cartagena, Bolivar, 130002 Colombia</h1>
            </div>
            <div className='w-full md:w-[50%] lg:w-full'>
              <button className='md:ml-auto uppercase tracking-widest bg-primary px-5 py-4 text-white flex items-center gap-3 group'>
                <HiArrowLongLeft className='size-6 rotate-[30deg] group-hover:rotate-0 transition' />
                <span>send message</span>
              </button>
            </div>
          </section>
          <div className='mt-6 pt-6 border-t border-black/20 flex items-center h-20'>
              <article className=' w-full h-full border-r border-black/20'>
                <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>Price</h2>
                <div className='flex items-end gap-2'>
                  <span>$</span>
                  <p className='text-3xl text-textDark font-serif font-medium'>3, 320, 00</p>
                </div>
              </article>
              <article className=' w-full h-full pl-6'>
                <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>Status</h2>
                <p className='text-3xl text-textDark font-serif font-medium'>Available</p>
              </article>
          </div>
        </div>
        {/* ********* IMAGES ************** */}
        <section className='contain mt-8'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='h-[15rem] w-full relative group'>
              <Image
                src="/home1.jpg"
                alt=""
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/20 backdrop-blur-[5px] grid place-items-center opacity-0 group-hover:opacity-100 transition duration-500'>
                  <button 
                      className='py-1.5 px-4 bg-white hover:bg-primary hover:text-white border border-primary flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition duration-500' >
                        <HiPhoto className='text-textlighter size-4 hover:text-white transition'/>
                        <span className="uppercase tracking-widest text-[10px] font-semibold hover:text-white transition">View more photos</span>
                  </button>
              </div>
            </div>
            <div className='h-[15rem] w-full relative group'>
              <Image
                src="/home2.jpg"
                alt=""
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/20 backdrop-blur-[5px] grid place-items-center opacity-0 group-hover:opacity-100 transition duration-500'>
                  <button 
                      className='py-1.5 px-4 bg-white hover:bg-primary hover:text-white border border-primary flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition duration-500 ' >
                        <HiPhoto className='text-textlighter size-4 hover:text-white transition'/>
                        <span className="uppercase tracking-widest text-[10px] font-semibold hover:text-white transition">View more photos</span>
                  </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ListDetail