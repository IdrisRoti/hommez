
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ListCard from '../ListCard'

type TListings = {
  showMap: boolean;
}

const Listings = ({showMap}: TListings) => {
  return (
    <div className='w-full'>
        <h2 className='text-textDark text-xl font-semibold lg:w-[90%]'>Viewing 5 of 30 Homes for Sale in All locations</h2>
        <p className='text-textlight mt-2'>Showing listings marketed by all brokers in the searched area.</p>
        <div className={`grid grid-cols-1 mt-6 gap-6 ${showMap ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
        <div className='mt-16 flex items-center justify-center'>
            <button className='w-8 aspect-square grid place-items-center'><BiChevronLeft className='size-6' /></button>
            <button className='w-8 aspect-square grid place-items-center border-b-2 border-transparent hover:border-textGray transition'>1</button>
            <button className='w-8 aspect-square grid place-items-center border-b-2 border-secondary'>2</button>
            <button className='w-8 aspect-square grid place-items-center border-b-2 border-transparent hover:border-textGray transition'>3</button>
            <button className='w-8 aspect-square grid place-items-center'><BiChevronRight className='size-6' /></button>
        </div>
    </div>
  )
}

export default Listings