"use client"

import { CreateNewListContext } from "@/context/CreateNewListContext"
import { useContext } from "react"

const PropertyName = () => {
    const {dispatch} = useContext(CreateNewListContext)

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property Name</h2>
        <p className='text-sm text-textlight'>Write a short and catchy name for your property.</p>
        <textarea 
            onChange={(e) => dispatch({type: "ADD_PROPERTY_NAME", payload: e.target.value})} 
            className='mt-3 border-[2.5px] rounded-lg p-2 focus:border-brightPink outline-none w-full placeholder:text-xs' 
            placeholder="Write"></textarea>
    </div>
  )
}

export default PropertyName