"use client"

import { BiHome } from 'react-icons/bi'

import { useContext } from 'react';

import OfferType from './OfferType'
import PropertyType from './PropertyType';
import PropertyDetails from './PropertyDetails';
import PropertyName from './PropertyName';
import { CreateNewListContext } from '@/context/CreateNewListContext';
import PropertyPrice from './PropertyPrice';
import PropertyPhotos from './PropertyPhotos';

const CreateNewListForm = () => {
  const {state} = useContext(CreateNewListContext)

  return (
    <div className=''>
      <header className='p-3 flex items-center gap-2 border-b border-black/10'>
        <span className='size-8 rounded-full bg-[#f72585]/10 grid place-items-center'><BiHome className='text-brightPink size-4' /></span>
        <h2 className='font-medium text-sm'>Add property</h2>
      </header>
      <OfferType  />
      <PropertyType  />
      <PropertyDetails  />
      <PropertyName />
      <PropertyPhotos />
      <PropertyPrice />
      <button className='py-2 px-6 text-white mt-8 rounded-md bg-brightPink' onClick={() =>console.log(state)}>Submit</button>
    </div>
  )
}

export default CreateNewListForm;