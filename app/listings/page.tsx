import Header from '@/components/landing/Header'
import ListingsMap from '@/components/listings/listings-map'
import SearchFilter from '@/components/listings/search-filter'

const ListingsPage = () => {
  return (
    <div>
      <Header className='border-b border-primary'/>
      <SearchFilter />
      <ListingsMap />
    </div>
  )
}

export default ListingsPage