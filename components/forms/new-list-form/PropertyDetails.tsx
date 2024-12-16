import React from 'react'
import { BiBath, BiBed, BiMinus, BiPlus } from 'react-icons/bi';
import { TpropertyDetails } from './CreateNewListForm';

type TOfferType = {
    propertyDetails: TpropertyDetails;
    setPropertyDetails: React.Dispatch<React.SetStateAction<TpropertyDetails>>;
}

const PropertyDetails = ({propertyDetails: {propertyDetails: {noOfBaths, noOfBeds}}, setPropertyDetails}: TOfferType) => {
  console.log(noOfBeds, noOfBaths)
  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium uppercase font-serif'>Property  details</h2>
        <p className='text-sm text-textlight'>Enter the fundamental details about your property.</p>

        <div className="flex items-center gap-3 mt-3">
          <div className="w-full border-[2.5px] rounded-lg p-2 flex flex-col gap-3">
            <span className="grid place-items-center size-8 border border-black/10 rounded-full"><BiBed className='size-4 opacity-80' /></span>
            <h3 className='font-medium text-sm uppercase font-serif'>Bedrooms</h3>
            <div className="flex items-center">
              <button onClick={() => setPropertyDetails((prev) => ({...prev, propertyDetails: {noOfBeds: noOfBeds > 1 ? noOfBeds-- : 1, noOfBaths} }))} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiMinus /></button>
              <div className='text-sm font-semibold px-4'>{noOfBeds}</div>
              <button onClick={() => setPropertyDetails((prev) => ({...prev, propertyDetails: {noOfBeds: noOfBeds++, noOfBaths} }))} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiPlus /></button>
            </div>
          </div>
          <div className="w-full border-[2.5px] rounded-lg p-2 flex flex-col gap-3">
            <span className="grid place-items-center size-8 border border-black/10 rounded-full"><BiBath className='size-4 opacity-80' /></span>
            <h3 className='font-medium text-sm uppercase font-serif'>Bathrooms</h3>
            <div className="flex items-center">
              <button  onClick={() => setPropertyDetails((prev) => ({...prev, propertyDetails: {noOfBaths: noOfBaths > 1 ? noOfBaths-- : 1, noOfBeds} }))} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiMinus /></button>
              <div className='text-sm font-semibold px-4'>{noOfBaths}</div>
              <button onClick={() => setPropertyDetails((prev) => ({...prev, propertyDetails: {noOfBaths: noOfBaths++, noOfBeds} }))} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiPlus /></button>
            </div>
          </div>
        </div>

        <section className='mt-10'>
          <h2 className='font-medium text-sm'>Add other amenities that are present on your property</h2>
          <div className="flex items-center h-10 w-full mt-3">
            <input 
              className='bg-transparent outline-none text-sm h-full w-full border-2 border-black/10 focus:border-brightPink px-3 rounded-l-lg placeholder:text-xs' 
              placeholder='eg: Pool, Tennis Court, Gym, Doorman etc...' 
              type="text" />
            <button className='h-full px-4 bg-brightPink text-white text-sm uppercase font-serif rounded-r-lg hover:opacity-70 transition'>Add</button>
          </div>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <div className="relative px-4 py-1.5 text-xs rounded-lg border-2 group cursor-pointer">
              <span>In-house gym</span>
              <div className="bg-[#1e1e1e]/80 text-white rounded-md py-1.5 px-2 text-[10px] absolute -top-8 whitespace-nowrap hidden group-hover:block transition">
                Tap to remove
              </div>
            </div>
          </div>
        </section>
    </div> 
  )
}

export default PropertyDetails