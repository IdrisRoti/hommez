"use client"

import SearchBox from './search-box'
import Filters from './filters'
import { useGetWindowScrollPosition } from '@/helpers/use-get-window-scroll-position'

const SearchFilter = () => {
const {y} = useGetWindowScrollPosition()

  return (
    <section className={`sticky top-0 z-50 ${y > 130 ? "shadow-md bg-transparent backdrop-blur-lg" : "shadow-none bg-white"}`}>
      <div className={`contain flex flex-col lg:flex-row items-end gap-3 py-4`}>
        <SearchBox />
        <Filters />
      </div>
    </section>
  )
}

export default SearchFilter