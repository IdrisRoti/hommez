"use client"

import { useContext } from "react";

import CustomSelect from "@/components/CustomSelect"
import {  propertyType } from "@/constants"
import { CreateNewListContext } from "@/context/CreateNewListContext";

const PropertyType = () => {
    const {state, dispatch} = useContext(CreateNewListContext);

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property type</h2>
        <p className='text-sm text-textlight'>Choose the type of property you want to list</p>

        <div className="flex items-center gap-2 mt-3">
        {
            propertyType.map(({id, type, icon: Icon}) => (
                <CustomSelect onClick={() => dispatch({ type: "SELECT_PROPERTY_TYPE", payload: type})} key={id} isSelected={state.propertyType === type}>
                    <div className="flex flex-col gap-3">
                        <span className="grid place-items-center size-8 border border-black/10 rounded-full"><Icon className='size-4 opacity-80' /></span>
                        <h3 className='font-medium text-sm '>{type}</h3>
                    </div>
                </CustomSelect>
            )
            )
        }
        </div>
  </div>
  )
}

export default PropertyType;