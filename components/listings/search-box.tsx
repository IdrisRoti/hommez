"use client"

import { ChangeEvent, useContext } from 'react'
import { useRouter } from 'next/navigation';

import PropertyListContext from '@/context/PropertyListContext';

import { BiSearch } from 'react-icons/bi'

const SearchBox = () => {
    const router = useRouter()
    const {search, setSearch, propertyType} = useContext(PropertyListContext)

   const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!search) return
    router.push(`?${new URLSearchParams({search, propertyType})}`)
   }

  return (
    <form onSubmit={onSubmit} className='w-full lg:w-1/2 bg-transparent flex items-center gap-3 border-b border-textDark h-10'>
        <BiSearch className='size-6 text-textDark' />
        <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Country, City or Address' 
            type="search" 
            className='bg-transparent h-full w-full outline-none placeholder:font-serif'
        />
    </form>
  )
}

export default SearchBox