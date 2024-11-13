import React from 'react'

const Amenities = () => {
  return (
        <section className='mt-10 bg-primary py-8 text-white'>
          <div className='contain'>
            <h1 className='text-3xl md:text-5xl font-serif lg:text-center text-white mb-16'>Amenities and Features</h1>
            <div className='grid grid-cols-6 gap-2'>
                <div className='flex col-span-6 lg:col-span-4 items-start gap-10'>
                    <div>
                        <h2 className='w-fit font-serif text-lg mb-8 capitalize relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:w-2/3 after:h-[1px] after:bg-textGray'>Listing Details</h2>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Property Id</h2>
                                <p className='text-xl font-serif'>P46MDB</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>price</h2>
                                <p className='text-xl font-serif'>$ 3, 300, 000</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>property type</h2>
                                <p className='text-xl font-serif'>Single Family Homes</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Marketed by</h2>
                                <p className='text-xl font-serif'>Hommez International Realty
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='w-fit font-serif text-lg mb-8 capitalize relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:w-2/3 after:h-[1px] after:bg-textGray'>Utilities and building</h2>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Year built</h2>
                                <p className='text-xl font-serif'>1970</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>total sqft</h2>
                                <p className='text-xl font-serif'>18,298</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Lot Size Unit</h2>
                                <p className='text-xl font-serif'>Acre(s)</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Parking</h2>
                                <p className='text-xl font-serif'>Garage</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-lg:mt-16 col-span-6 md:col-span-4 lg:col-span-2'>
                        <h2 className='w-fit font-serif text-lg mb-8 capitalize relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:w-2/3 after:h-[1px] after:bg-textGray'>Features</h2>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Amenities</h2>
                                <p className='text-xl font-serif'>19Balcony, Doorman, Tennis Court, Walk-in Closet, Gardens, In-Home Fitness Center, Terrace / Outdoor Space, Outdoor Pool, Marble Flooring, 1 Fireplace70</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>Bedrooms</h2>
                                <p className='text-xl font-serif'>3</p>
                            </div>
                            <div>
                                <h2 className='uppercase text-xs tracking-widest text-white/80 md:mb-1'>bathrooms</h2>
                                <p className='text-xl font-serif'>4</p>
                            </div>
                        </div>
                </div>
            </div>
          </div>
        </section>
  )
}

export default Amenities