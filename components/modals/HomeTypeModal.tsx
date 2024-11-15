"use client"

import React, { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from 'react'
import { useRouter } from 'next/navigation';

import CustomModal from '../custom-modal'
import PropertyListContext from '@/context/PropertyListContext';

import { BiSearch, BiX } from 'react-icons/bi';
import { homeTypes } from '@/constants';

type THomeTypeModal = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const HomeTypeModal = ({showModal, setShowModal}: THomeTypeModal) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredHomeTypes, setFilteredHomeType] = useState(homeTypes);

    const router = useRouter(); 

    const {selectedHomeTypes, setSelectedHomeTypes, search, bedsValue, bathsValue, propertyType, priceRange, setPriceRange} = useContext(PropertyListContext)

    const applyFilter = () => {
        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(priceRange && {maxprice: priceRange}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("_")}),
            propertyType,
         })}`)

         setShowModal(false);
    }

    const clearFilter = () => {
        setSelectedHomeTypes([]);

        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(priceRange && {maxprice: priceRange}),
            propertyType,
         })}`)

         setShowModal(false);
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);

        const filteredHomes = homeTypes.filter((hType) => hType.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredHomeType(filteredHomes)
    }

    const selectHomeType = (type: string) => {
        setSelectedHomeTypes(
            prev => prev.some((h) => h === type) 
                ? prev.filter((h) => h !== type) 
                : [...prev, type]
            )
    } 

  return (
    <CustomModal className='p-6 bg-primary text-white w-screen md:w-[30rem]' showModal={showModal}>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-serif tracking-widest'>Home Type</h2>
            <button onClick={clearFilter}><BiX className='size-6 text-textlight' /></button>
        </div>
        <form onSubmit={() => {}} className='w-full mt-6 bg-transparent flex items-center gap-3 border-b border-white h-10'>
            <BiSearch className='size-6 text-white' />
            <input 
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Search for property type' 
                type="search" 
                className='bg-transparent h-full w-full outline-none placeholder:font-serif'
            />
        </form>
        <div className='mt-8 max-h-60 overflow-y-auto scroll-bar-y'>
            {
                filteredHomeTypes.length ? (
                    filteredHomeTypes.map((homeType) => {
                        const isSelected = selectedHomeTypes.some((hType) => hType === homeType)
    
                        return (
                            <div onClick={() => selectHomeType(homeType)} key={homeType} className='flex items-center gap-3 cursor-pointer mb-3 last-of-type:mb-0'>
                                <div className='w-4 aspect-square border border-white grid place-items-center'>
                                   {isSelected && <div className='w-2 aspect-square bg-white' />}
                                </div>
                                <h3 className='text-sm'>{homeType}</h3>
                            </div>
                        )
                    })
                ) : (
                    <p className='text-sm italic text-textGray'>Nothing like that here, unfortunately. 😎</p>
                )
            }
        </div>
        <div className='mt-10 pt-3 border-t border-textlight flex justify-end'>
            <button onClick={clearFilter} className='uppercase text-xs tracking-widest text-textlighter hover:text-white transition px-4 py-2'>Clear</button>
            <button disabled={selectedHomeTypes.length < 1} onClick={applyFilter} className='uppercase disabled:opacity-60 disabled:pointer-events-none text-xs tracking-widest border-[1.3px] border-brightPink px-4 py-2 hover:bg-brightPink hover:text-white transition'>Apply</button>
        </div>
    </CustomModal>
  )
}

export default HomeTypeModal;