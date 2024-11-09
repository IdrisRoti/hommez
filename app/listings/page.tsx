import Header from '@/components/landing/Header'
import Filters from '@/components/listings/filters'
import SearchBox from '@/components/listings/search-box'

const ListingsPage = () => {
  return (
    <div>
      <Header className='border-b border-primary'/>
      <div className='contain flex flex-col lg:flex-row items-end gap-3 bg-white py-4 sticky top-0'>
        <SearchBox />
        <Filters />
      </div>
      {/* <div className='min-h-screen'></div>
      <div className='min-h-screen'></div> */}
    </div>
  )
}

export default ListingsPage