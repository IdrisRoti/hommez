"use client"

import { useContext } from "react"

import CustomSelect from "@/components/CustomSelect"
import { propertyOfferType } from "@/constants"
import { CreateNewListContext } from "@/context/CreateNewListContext"

const OfferType = () => {
const {state, dispatch} = useContext(CreateNewListContext)

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Offer type</h2>
        <p className='text-sm text-textlight'>Do you want to sell your house permanently or temporarily?</p>

        <div className="flex flex-col gap-2 mt-3">
        {
            propertyOfferType.map(({id, subHead, type, icon: Icon}) => (
                <CustomSelect onClick={() => dispatch({type: "SELECT_OFFER_TYPE", payload: type})} key={id} isSelected={state.selectedOfferType === type}>
                    <div className="flex item-center gap-3">
                        <span className="grid place-items-center size-8 border border-black/10 rounded-full"><Icon className='size-4 opacity-80' /></span>
                        <div className="">
                            <h3 className='font-medium text-sm'>{type}</h3>
                            <p className='text-xs text-textlight'>{subHead}</p>
                        </div>
                    </div>
                </CustomSelect>
            )
            )
        }
        </div>
  </div>
  )
}

export default OfferType;