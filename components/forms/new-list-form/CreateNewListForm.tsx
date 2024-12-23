"use client"

import { BiHome } from 'react-icons/bi'

import { useContext } from 'react';

import OfferType from './OfferType'
import PropertyType from './PropertyType';
import PropertyDetails from './PropertyDetails';
import PropertyName from './PropertyName';
import { CreateNewListContext } from '@/context/CreateNewListContext';

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

      <button onClick={() =>console.log(state)}>Submit</button>
    </div>
  )
}

export default CreateNewListForm;