"use client"

import { propertyTypeArr } from '@/constants'
import PropertyListContext from '@/context/PropertyListContext'

import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import PriceRangeModal from '../modals/PriceRangeModal'
import BedsAndBathsModal from '../modals/BedsAndBathsModal'
import HomeTypeModal from '../modals/HomeTypeModal'

type TFilters = {
    bed: string | undefined;
    bath: string | undefined;
    maxprice: string | undefined;
    homeTypes: string | undefined;
}

const Filters = ({bath,bed,homeTypes,maxprice}: TFilters) => {
    const [openPriceModal, setOpenPriceModal] = useState(false);
    const [openBedsModal, setOpenBedsModal] = useState(false);
    const [openHomeTypeModal, setOpenHomeTypeModal] = useState(false);

    const {setPropertyType, propertyType, search, bedsValue, priceRange, bathsValue, selectedHomeTypes} = useContext(PropertyListContext)
    const router = useRouter()

    const handlePropertyType = (selectedType: "Buy" | "Rent") => {
        setPropertyType(selectedType);
        router.push(`?${new URLSearchParams({ 
            ...(search && {search}),
            ...(bedsValue && {bed: bedsValue}),
            ...(bathsValue && {bath: bathsValue}),
            ...(priceRange && {maxprice: priceRange}),
            ...(selectedHomeTypes.length && {homeTypes: selectedHomeTypes.join("-")}),
            ...(propertyType === "Buy" ? { propertyType: "Rent"} :  { propertyType: "Buy"}),
         })}`)
    }

  return (
    <div className='w-full'>
       <div className='w-full flex items-center lg:justify-center gap-2 overflow-auto scroll-bar-x [mask-image:linear-gradient(to_right,black_5%,black_90%,transparent)]'>
            <div className='flex items-center'>               
                {
                    propertyTypeArr.map((type) => {
                        const isSelected = type === propertyType;

                       return (
                                <button 
                                    key={type}
                                    onClick={() => handlePropertyType(type)}
                                    className={`text-xs border border-primary px-5 py-2 hover:opacity-70 uppercase tracking-wider font-semibold ${isSelected ? "bg-primary text-white" : "text-primary bg-transparent"}`}
                                >
                                    {type}
                                </button>
                            )
                    })
                }
            </div> 
            <button onClick={() => setOpenPriceModal(true)} className={`uppercase tracking-wider hover:bg-primary hover:text-white transition font-semibold text-xs border border-primary px-5 py-2 flex-shrink-0 ${maxprice ? "text-white bg-primary" : "text-primary"}`}>{maxprice ? `max - ${Number(maxprice)/1000}k` : "price range"}</button>
            <button onClick={() => setOpenBedsModal(true)} className={`uppercase tracking-wider hover:bg-primary hover:text-white transition font-semibold text-xs border border-primary px-5 py-2 flex-shrink-0 ${bed || bath ? "text-white bg-primary" : "text-primary"}`}>{bed && bed+"+ Beds"} {bed && bath && "-"} {bath && bath+"+ Baths"} {!bed && !bath && "BEDS & BATH"}</button>
            <button onClick={() => setOpenHomeTypeModal(true)} className={`uppercase tracking-wider hover:bg-primary hover:text-white transition font-semibold text-xs border border-primary px-5 py-2 flex-shrink-0 ${homeTypes?.split("_").length ? "text-white bg-primary" : "text-primary"}`}>home type {homeTypes?.split("_").length && homeTypes?.split("_").length}</button>
            <button className='uppercase tracking-wider hover:bg-primary hover:text-white transition font-semibold border border-primary text-primary px-5 py-2 text-xs flex-shrink-0'>FILTERS</button>
       </div>
       <PriceRangeModal showModal={openPriceModal} setShowModal={setOpenPriceModal} />
       <BedsAndBathsModal showModal={openBedsModal} setShowModal={setOpenBedsModal} />
       <HomeTypeModal showModal={openHomeTypeModal} setShowModal={setOpenHomeTypeModal} />
    </div>
  )
}

export default Filters;