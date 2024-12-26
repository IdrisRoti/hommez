"use client"

import { useContext } from "react";

import {  homeTypes } from "@/constants"
import { CreateNewListContext } from "@/context/CreateNewListContext";

const PropertyType = () => {
    const {state, dispatch} = useContext(CreateNewListContext);

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property type</h2>
        <p className='text-sm text-textlight'>Choose the type of property you want to list</p>
        <div className='mt-8 max-h-60 overflow-y-auto scroll-bar-y'>
            {
                homeTypes.length ? (
                    homeTypes.map((homeType) => {
                        const isSelected = state.propertyType === homeType;
    
                        return (
                            <div onClick={() => dispatch({ type: "SELECT_PROPERTY_TYPE", payload: homeType})} key={homeType} className='flex items-center gap-3 cursor-pointer mb-3 last-of-type:mb-0'>
                                <div className='w-4 aspect-square border border-brightPink grid place-items-center'>
                                   {isSelected && <div className='w-2 aspect-square bg-brightPink' />}
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
  </div>
  )
}

export default PropertyType;