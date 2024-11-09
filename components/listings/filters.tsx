"use client"

import { propertyTypeArr } from '@/constants'
import PropertyListContext from '@/context/PropertyListContext'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const Filters = () => {
    const {setPropertyType, propertyType, search} = useContext(PropertyListContext)
    const router = useRouter()

    const handlePropertyType = (type: "Buy" | "Rent") => {
        setPropertyType(type);
        router.push(`?${new URLSearchParams({...(search && {search}), propertyType})}`);
    }

  return (
    <div className='w-full'>
       <div className='hideScrollBar w-full flex items-center lg:justify-center gap-4 overflow-auto [mask-image:linear-gradient(to_right,black_5%,black_90%,transparent)]'>
            <div className='flex items-center'>               
                {
                    propertyTypeArr.map((type) => {
                        const isSelected = type === propertyType

                       return (
                                <button 
                                    key={type}
                                    onClick={() => handlePropertyType(type)}
                                    className={`border border-primary font-medium px-5 py-1 text-sm hover:opacity-70 transition ${isSelected ? "bg-primary text-white" : "text-primary bg-transparent"}`}
                                >
                                    RENT
                                </button>
                            )
                    })
                }
            </div> 
            <button className='border border-primary text-primary font-medium px-5 py-1 text-sm flex-shrink-0'>PRICE RANGE</button>
            <button className='border border-primary text-primary font-medium px-5 py-1 text-sm flex-shrink-0'>BEDS & BATHS</button>
            <button className='border border-primary text-primary font-medium px-5 py-1 text-sm flex-shrink-0'>HOME TYPE</button>
            <button className='border border-primary text-primary font-medium px-5 py-1 text-sm flex-shrink-0'>FILTERS</button>
       </div>
    </div>
  )
}

export default Filters