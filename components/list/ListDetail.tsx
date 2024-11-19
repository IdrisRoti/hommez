"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import Link from 'next/link';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { CgShare } from 'react-icons/cg';
import { HiArrowLongLeft, HiPhoto } from "react-icons/hi2";

import Amenities from './Amenities';
import ContactSection from './ContactSection';
import PropertyListContext from '@/context/PropertyListContext';

const ListDetail = () => {
  const [clampTexts, setClampTexts] = useState(true);

  const {setShowImages} = useContext(PropertyListContext)
  const router = useRouter();

  return (
    <div>
        {/* ********** LIST DETAIL HEADER */}
        <section className='h-14 bg-white z-10 border-b border-black/20 sticky top-0'>
            <div className='flex items-center contain h-full w-full'>
                <button onClick={() => router.back()} className='flex items-center gap-2 h-14 pr-5 md:pr-10 border-r border-black/20 group'>
                    <HiArrowLongLeft className='size-6 text-textDark group-hover:-translate-x-3 transition' />
                    <span className='text-[10px] uppercase tracking-wider font-semibold'>Back</span>
                </button>
                <div className='pl-5 md:pl-10 flex items-center justify-between w-full'>
                    <h2 className='text-textlight hidden md:block'>Hacienda Canalete, Cartagena, Bolivar, 130002 Colombia</h2>
                    <div className='flex items-center h-full max-md:ml-auto '>
                        <button className='flex items-center gap-2 h-14 pl-5 md:pl-10 group'>
                            <BsStarFill className='size-4 text-textlighter group-hover:text-secondary transition' />
                            <span className='text-[10px] uppercase tracking-wider font-semibold group-hover:text-secondary transition'>Save</span>
                        </button>
                        <button className='flex items-center gap-2 h-14 pl-5 md:pl-10 group'>
                            <CgShare className='size-4 text-textlighter group-hover:text-secondary transition' />
                            <span className='text-[10px] uppercase tracking-wider font-semibold group-hover:text-secondary transition'>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* ********** LIST TITLE & DETAIL */}
        <div className='contain'>
          <section className='flex flex-col py-4 md:py-8  md:flex-row justify-between items-center md:border-b border-black/20'>
            <div className='w-full mb-5'>
              <h1 className='text-2xl md:text-3xl font-serif'>Hacienda Canalete
            Cartagena, Bolivar, 130002 Colombia</h1>
            </div>
            <div className='w-full md:w-[50%] lg:w-full'>
              <Link href={`/list/some-list#contact`} className='w-fit md:ml-auto uppercase tracking-widest bg-primary px-5 py-4 text-white flex items-center gap-3 group'>
                <HiArrowLongLeft className='size-6 rotate-[30deg] group-hover:rotate-0 transition' />
                <span>send message</span>
              </Link>
            </div>
          </section>
                  {/* ********** LIST DETAIL */}
          <div className='md:h-20 mt-6 max-md:pt-6 max-md:border-t border-black/20 md:flex items-center '>
              <div className='flex items-center w-full max-md:h-20 mb-6 md:mb-0'>
                <article className='w-full h-full max-md:pb-6 max-md:border-b md:border-r border-black/20'>
                  <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>Price</h2>
                  <div className='flex items-end gap-2'>
                    <span>$</span>
                    <p className='text-2xl md:text-3xl text-textDark font-serif font-medium'>3, 320, 00</p>
                  </div>
                </article>
                <article className='w-full h-full max-md:border-b md:border-r border-black/20 md:pl-6'>
                  <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>Status</h2>
                  <p className='text-2xl md:text-3xl text-textDark font-serif font-medium'>Available</p>
                </article>
              </div>
              <div className='flex items-center w-full max-md:h-20'>
                <article className='w-full h-full md:border-r border-black/20 md:pl-6'>
                  <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>bedroom</h2>
                  <p className='text-2xl md:text-3xl text-textDark font-serif font-medium'>3</p>
                </article>
                <article className='w-full h-full border-black/20 md:pl-6'>
                  <h2 className='uppercase tracking-widest text-xs text-secondary font-medium mb-2'>bathroom</h2>
                  <p className='text-2xl md:text-3xl text-textDark font-serif font-medium'>4</p>
                </article>
              </div>
          </div>
        </div>
        {/* ********* IMAGES ************** */}
        <section className='contain mt-8'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div 
              onClick={() => setShowImages(true)}
              className='h-[15rem] w-full relative group'>
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
            <div 
              onClick={() => setShowImages(true)}
              className='h-[15rem] w-full relative group'>
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
        {/* ******** DETAIL & MAP ********* */}
        <div className='contain relative flex flex-col md:flex-row gap-6'>
            <div className='w-full'>
              <div className={`max-w-3xl ${clampTexts ? "line-clamp-[9] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" : ""}`}>
                <h2 className='text-2xl md:text-3xl font-serif mb-6'>An exceptional property near Geneva</h2>
                <p className='mb-6 text-textlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a nulla, deserunt temporibus ratione doloremque illum optio, at autem quae illo nemo perferendis! Modi dolores quisquam accusamus quia saepe ad sit rem odit minima aperiam officia mollitia, eveniet dolore in.</p>
                <p className='mb-6 text-textlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi sint exercitationem! Est porro dolorum sit veritatis omnis enim non, repellat ipsum? Dolores quia recusandae quae dignissimos unde debitis vitae quasi a. Molestiae modi delectus veritatis deserunt consequatur aliquid a facilis, praesentium consequuntur enim iste earum sunt quod, fugiat suscipit vero veniam ut? Architecto accusamus fugit pariatur repudiandae quod rem.</p>
                <p className='mb-6 text-textlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a nulla, deserunt temporibus ratione doloremque illum optio, at autem quae illo nemo perferendis! Modi dolores quisquam accusamus quia saepe ad sit rem odit minima aperiam officia mollitia, eveniet dolore in.</p>
                <p className='mb-6 text-textlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi sint exercitationem! Est porro dolorum sit veritatis omnis enim non, repellat ipsum? Dolores quia recusandae quae dignissimos unde debitis vitae quasi a. Molestiae modi delectus veritatis deserunt consequatur aliquid a facilis, praesentium consequuntur enim iste earum sunt quod, fugiat suscipit vero veniam ut? Architecto accusamus fugit pariatur repudiandae quod rem.</p>
              </div>
              {clampTexts ? (
                <button onClick={() => setClampTexts(false)} className='flex items-center gap-1'>
                  <span className='text-[10px] uppercase tracking-widest outline-none'>See more</span>
                  <BiChevronDown className='text-textlight' />
                </button>
              ) : (
                  <button onClick={() => setClampTexts(true)} className='flex items-center gap-1'>
                    <span className='text-[10px] uppercase tracking-widest outline-none'>See less</span>
                    <BiChevronUp className='text-textlight' />
                  </button>
              )}
            </div>
            <div className='w-full h-80 bg-gray-200 sticky top-20'>

            </div>
        </div>
        {/* ********* AMENITIES AND FEATURES ********** */}
        <Amenities />
        {/* ********* CONTACT FORM ********** */}
        <ContactSection />
    </div>
  )
}

export default ListDetail