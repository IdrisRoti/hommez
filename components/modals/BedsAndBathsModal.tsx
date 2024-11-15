"use client"

import React, { Dispatch, SetStateAction, useContext } from 'react'
import { useRouter } from 'next/navigation';

import CustomModal from '../custom-modal'
import PropertyListContext from '@/context/PropertyListContext';

import { BiX } from 'react-icons/bi';

type TBedsAndBathsModal = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const BedsAndBathsModal = ({showModal, setShowModal}: TBedsAndBathsModal) => {
    const router = useRouter();

    const {selectedHomeTypes, bedsValue, bathsValue, setBathsValue, setBedsValue, search, propertyType, priceRange} = useContext(PropertyListContext)

    const applyFilter = () => {
        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(priceRange && {maxprice: priceRange}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("-")}),
            propertyType,
         })}`)

         setShowModal(false);
    }

    const clearFilter = () => {
        setBathsValue(null);
        setBedsValue(null);

        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(priceRange && {maxprice: priceRange}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("-")}),
            propertyType,
         })}`)

         setShowModal(false);
    }

  return (
    <CustomModal className='p-3 bg-primary text-white w-screen md:w-[25rem]' showModal={showModal}>
        <div className='flex items-center justify-end'>
            <button onClick={clearFilter}><BiX className='size-6 text-textlight' /></button>
        </div>
        <div className='pb-6 border-b border-textlight'>
            <span className='font-serif mb-6'>Min - {bedsValue} Bedroom{bedsValue === "1" ? "" : "s"}</span> 
            <input step={1} className='w-full' value={bedsValue ?? "1"} onChange={(e) => setBedsValue(e.target.value)} min={1} max={10} type="range" />
        </div>
        <div className='py-6'>
            <span className='font-serif mb-6'>Min - {bathsValue} Bathroom{bedsValue === "1" ? "" : "s"}</span> 
            <input step={1} className='w-full' value={bathsValue ?? "1"} onChange={(e) => setBathsValue(e.target.value)} min={1} max={10} type="range" />
        </div>
        <div className='mt-10 pt-3 border-t border-textlight flex justify-end'>
            <button onClick={clearFilter} className='uppercase text-xs tracking-widest text-textlighter hover:text-white transition px-4 py-2'>Clear</button>
            <button onClick={applyFilter} className='uppercase text-xs tracking-widest border-[1.3px] border-brightPink px-4 py-2 hover:bg-brightPink hover:text-white transition'>Apply</button>
        </div>
    </CustomModal>
  )
}

export default BedsAndBathsModal;