"use client"

import React, { Dispatch, SetStateAction, useContext } from 'react'
import { useRouter } from 'next/navigation';

import CustomModal from '../custom-modal'
import PropertyListContext from '@/context/PropertyListContext';

import { BiX } from 'react-icons/bi';

type TPriceRangeModal = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const PriceRangeModal = ({showModal, setShowModal}: TPriceRangeModal) => {
    const router = useRouter();

    const {selectedHomeTypes, search, bedsValue, bathsValue, propertyType, priceRange, setPriceRange} = useContext(PropertyListContext)
    
    const applyFilter = () => {        
        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(priceRange && {maxprice: priceRange}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("-")}),
            propertyType,
         })}`)

         setShowModal(false);
    }

    const clearFilter = () => {
        setPriceRange(null)

        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("-")}),
            propertyType,
         })}`)

         setShowModal(false);
    }

  return (
    <CustomModal className='p-3 bg-primary text-white w-screen md:w-96' showModal={showModal}>
        <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-serif tracking-widest'>Price</h2>
            <button onClick={clearFilter}><BiX className='size-6 text-textlight' /></button>
        </div>
        <div className=''>
            <span>Max of <span className='font-serif'>{Number(priceRange) / 1000}</span>K</span>
        </div>
        <div className='mt-14'>
            <input step={1000} className='w-full' value={priceRange ?? "1000"} onChange={(e) => setPriceRange(e.target.value)} min={1000} max={100000} type="range" />
        </div>
        <div className='mt-10 pt-3 border-t border-textlight flex justify-end'>
            <button onClick={clearFilter} className='uppercase text-xs tracking-widest text-textlighter hover:text-white transition px-4 py-2'>Clear</button>
            <button onClick={applyFilter} className='uppercase text-xs tracking-widest border-[1.3px] border-brightPink px-4 py-2 hover:bg-brightPink hover:text-white transition'>Apply</button>
        </div>
    </CustomModal>
  )
}

export default PriceRangeModal;