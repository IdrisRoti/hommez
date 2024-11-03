import Link from 'next/link'

import ListCard from '../ListCard'

export default function Listings() {
  return (
    <section id="listings" className='contain mt-14 md:mt-32'>
        <div className='flex flex-col sm:flex-row items-center justify-between mb-5'>
            <div className='flex flex-col w-full'>
                <h2 className="text-secondary text-lg md:text-xl font-medium tracking-wider">CHECKOUT OUR NEW</h2>
                <h3 className="font-semibold text-2xl md:text-4xl mb-2 md:mt-2">Latest Listed Properties</h3>
                <p className="text-textlight lg:w-[70%]">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
            </div>
            <div className='flex items-center gap-3 w-full justify-start sm:justify-end my-6 sm:my-0'>
                <button className='w-20 h-12 rounded-[1.875rem] text-primary border border-primary font-medium'>All</button>
                <button className='w-20 h-12 rounded-[1.875rem] bg-primary text-white font-medium'>Sell</button>
                <button className='w-20 h-12 rounded-[1.875rem] text-primary border border-primary font-medium'>Rent</button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
        <Link href="/" className='mt-8 mb-20 md:mb-28 block w-fit mx-auto px-8 py-3 hover:bg-primary hover:text-white transition sm:py-5 rounded-[1.875rem] text-primary border border-primary font-medium'>View more properties</Link>
    </section>
  )
}
