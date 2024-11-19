"use client"

import { useContext, useState } from 'react';

import ListDetail from '@/components/list/ListDetail';
import ListHeader from '@/components/list/ListHeader';
import ScrollDownLine from '@/components/scroll-down-line'
import ListImagesModal from '../modals/list-images-modal/list-images-modal';

import { HiPhoto } from 'react-icons/hi2'
import PropertyListContext from '@/context/PropertyListContext';

const PropertyList = () => {
    const {showImages, setShowImages} = useContext(PropertyListContext)
    const backgroundImage = "url('/home1.jpg')";

  return (
    <div className=''>
        {!showImages && <ListHeader />}
        <div
            className='relative h-[50vh] lg:h-[80vh] after:absolute after:h-full md:after:h-2/3 after:w-full after:bottom-0 after:bg-gradient-to-t after:from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.1)]'
            style={{
                background: backgroundImage,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <section className='absolute top-[30%] md:top-[50%] lg:top-[60%] left-0 right-0 z-10'>
                <div className='contain flex flex-col lg:flex-row justify-between gap-3 md:gap-0'>
                    <h1 className='text-2xl md:text-3xl text-white w-full md:w-[60%] lg:w-full font-serif'>Hacienda Canalete Cartagena, Bolivar, 130002 Colombia</h1>
                    <div className='w-full flex justify-center items-start self-end h-[100px] max-lg:order-2'>
                        <ScrollDownLine />
                    </div>
                    <div className='w-full flex justify-end lg:self-end group'>
                    <button
                        onClick={() => setShowImages(prev => !prev)}
                        className='py-1.5 px-4 bg-white group-hover:bg-primary group-hover:text-white border border-primary transition flex items-center gap-2 justify-center'>
                        <HiPhoto className='text-textlighter size-4 group-hover:text-white transition'/>
                        <span className="uppercase tracking-widest text-[10px] font-semibold group-hover:text-white transition">12 Images</span>
                    </button>
                    {
                        showImages && <ListImagesModal />
                    }
                    </div>
                </div>
            </section>
        </div>
        {!showImages && <ListDetail />}
    </div>
  )
}

export default PropertyList