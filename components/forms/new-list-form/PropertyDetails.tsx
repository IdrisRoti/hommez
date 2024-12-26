"use client"

import React, { useContext, useState } from 'react'

import { CreateNewListContext } from '@/context/CreateNewListContext';
import { BiBath, BiBed, BiMinus, BiPlus } from 'react-icons/bi';

const PropertyDetails = () => {
  const [newAmenity, setNewAmenity] = useState("")
  const {state, dispatch} = useContext(CreateNewListContext);

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property details</h2>
        <p className='text-sm text-textlight'>Enter the fundamental details about your property.</p>

        <div className="flex items-center gap-3 mt-3">
          <div className="w-full border-[2.5px] rounded-lg p-2 flex flex-col gap-3">
            <span className="grid place-items-center size-8 border border-black/10 rounded-full"><BiBed className='size-4 opacity-80' /></span>
            <h3 className='font-medium text-sm '>Bedrooms</h3>
            <div className="flex items-center">
              <button onClick={() => dispatch({type: "ADD_NUMBER_OF_BEDS", payload:{ action: "REMOVE" }})} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiMinus /></button>
              <div className='text-sm font-semibold px-4'>{state.propertyDetails.noOfBeds}</div>
              <button onClick={() => dispatch({type: "ADD_NUMBER_OF_BEDS", payload:{ action: "ADD" }})} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiPlus /></button>
            </div>
          </div>
          <div className="w-full border-[2.5px] rounded-lg p-2 flex flex-col gap-3">
            <span className="grid place-items-center size-8 border border-black/10 rounded-full"><BiBath className='size-4 opacity-80' /></span>
            <h3 className='font-medium text-sm '>Bathrooms</h3>
            <div className="flex items-center">
              <button  onClick={() => dispatch({type: "ADD_NUMBER_OF_BATHS", payload:{ action: "REMOVE" }})} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiMinus /></button>
              <div className='text-sm font-semibold px-4'>{state.propertyDetails.noOfBaths}</div>
              <button onClick={() => dispatch({type: "ADD_NUMBER_OF_BATHS", payload:{ action: "ADD" }})} className='size-8 grid place-items-center rounded-md border border-black/10 hover:bg-black/5 transition'><BiPlus /></button>
            </div>
          </div>
        </div>

        <section className='mt-10'>
          <h2 className='font-medium text-sm'>Add other amenities that are present on your property</h2>
          <div className="flex items-center h-10 w-full mt-3">
            <input 
              onChange={(e) => setNewAmenity(e.target.value)}
              className='bg-transparent outline-none text-sm h-full w-full border-2 border-r-0 border-black/10 focus:border-brightPink px-3 rounded-l-lg placeholder:text-xs' 
              placeholder='eg: Pool, Tennis Court, Gym, Doorman etc...' 
              type="text" />
            <button
              onClick={() => dispatch({ type: "ADD_AMENITY", payload: { action: "ADD", amenity: newAmenity}})}
              className='h-full px-4 bg-brightPink text-white text-sm  rounded-r-lg hover:opacity-70 transition'>Add</button>
          </div>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            
              {
                state.amenities.map((amenity, i) => (
                  <div 
                    onClick={() => dispatch({ type: "ADD_AMENITY", payload: { action: "REMOVE", amenity: amenity}})}
                    key={i} 
                    className="relative px-4 py-1.5 text-xs rounded-lg border-2 group cursor-pointer">
                    <span>{amenity}</span>
                    <div
                      className="bg-[#1e1e1e]/80 text-white rounded-md py-1.5 px-2 text-[10px] absolute -top-8 whitespace-nowrap hidden group-hover:block transition">
                      Tap to remove
                    </div>
                  </div>
                ))
              }
          </div>
        </section>
    </div> 
  )
}

export default PropertyDetails