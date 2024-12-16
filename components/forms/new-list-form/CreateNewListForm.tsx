import React, { useState } from 'react'
import { BiHome } from 'react-icons/bi'
import OfferType from './OfferType'
import PropertyType from './PropertyType';
import PropertyDetails from './PropertyDetails';

export type TpropertyDetails = {
  selectedOfferType: string;
  propertyType: string;
  propertyDetails: {
    noOfBeds: number;
    noOfBaths: number;
  }
}

const CreateNewListForm = () => {
  const [propertyDetails, setPropertyDetails ] = useState<TpropertyDetails>({
    selectedOfferType: "Sell",
    propertyType: "House",
    propertyDetails: {
      noOfBeds: 1,
      noOfBaths: 1
    }
  });

  return (
    <div className=''>
      <header className='p-3 flex items-center gap-2 border-b border-black/10'>
        <span className='size-8 rounded-full bg-[#f72585]/10 grid place-items-center'><BiHome className='text-brightPink size-4' /></span>
        <h2 className='font-medium text-sm font-serif uppercase'>Add property</h2>
      </header>
      <OfferType propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />
      <PropertyType propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />
      <PropertyDetails propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />
    </div>
  )
}

export default CreateNewListForm;