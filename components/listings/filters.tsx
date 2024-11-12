"use client"

import { propertyTypeArr } from '@/constants'
import PropertyListContext from '@/context/PropertyListContext'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const Filters = () => {
    const {setPropertyType, propertyType, search} = useContext(PropertyListContext)
    const router = useRouter()

    const handlePropertyType = (selectedType: "Buy" | "Rent") => {
        setPropertyType(selectedType);
        router.push(`?${new URLSearchParams({...(search && {search}), propertyType: selectedType})}`);
    }

  return (
    <div className='w-full'>
       <div className='hideScrollBar w-full flex items-center lg:justify-center gap-2 overflow-auto [mask-image:linear-gradient(to_right,black_5%,black_90%,transparent)]'>
            <div className='flex items-center'>               
                {
                    propertyTypeArr.map((type) => {
                        const isSelected = type === propertyType;
                        console.log("type", type)
                       return (
                                <button 
                                    key={type}
                                    onClick={() => handlePropertyType(type)}
                                    className={`text-xs border border-primary px-5 py-1 hover:opacity-70 uppercase tracking-wider font-semibold ${isSelected ? "bg-primary text-white" : "text-primary bg-transparent"}`}
                                >
                                    {type}
                                </button>
                            )
                    })
                }
            </div> 
            <button className='uppercase tracking-wider font-semibold text-xs border border-primary text-primary px-5 py-1 flex-shrink-0'>PRICE RANGE</button>
            <button className='uppercase tracking-wider font-semibold border border-primary text-primary px-5 py-1 text-xs flex-shrink-0'>BEDS & BATHS</button>
            <button className='uppercase tracking-wider font-semibold border border-primary text-primary px-5 py-1 text-xs flex-shrink-0'>HOME TYPE</button>
            <button className='uppercase tracking-wider font-semibold border border-primary text-primary px-5 py-1 text-xs flex-shrink-0'>FILTERS</button>
       </div>
    </div>
  )
}

export default Filters