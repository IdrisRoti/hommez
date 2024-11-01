import Image from 'next/image'
import Link from 'next/link'

import { BsArrowRight } from 'react-icons/bs'

export default function 
() {
  return (
    <article className='w-full relative'>
        <div className='relative h-[12.5rem] lg:h-[15rem] rounded-[1.25rem] lg:rounded-[1.875rem] overflow-hidden after:absolute after:inset-0 after:bg-black after:opacity-30'>
            <Image
                src="/location1.jpg"
                className='object-cover'
                fill
                alt=""
             />
             <div className='w-[3.6rem] h-[3.15rem] flex flex-col justify-center bg-white rounded-b-md absolute top-0 left-[8%] md:left-[15%] text-center z-10 shadow-lg'>
                <h2 className='text-textDark text-xl font-semibold leading-[0.5]'>26</h2>
                <p className='text-textlight'>Wed</p>
             </div>
        </div>
        <div className='mb-8 md:mb-0'>
            <h2 className='font-medium hidden md:block text-xl md:text-2xl lg:text-3xl mt-4'>Top 10 Home Buying Mistakes to Avoid</h2>
            <Link href="/" className='block font-medium md:hidden text-xl md:text-2xl lg:text-3xl mt-4'>Top 10 Home Buying Mistakes to Avoid</Link>
            <p className='text-textGray mt-1 md:mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
        </div>
        <Link href="/" className='w-[2.8rem] lg:w-[3.125rem] aspect-square rounded-full hidden md:grid place-items-center bg-white ml-auto mt-8 bg-opacity-80 hover:bg-opacity-100 transition duration-500'>
            <BsArrowRight className='size-5 lg:size-6 text-textDarker' />
        </Link>
    </article>
  )
}
