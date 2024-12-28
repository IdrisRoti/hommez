import Header from '@/components/landing/Header'
import ListingsMap from '@/components/listings/listings-map'
import SearchFilter from '@/components/listings/search-filter'

const ListingsPage = async ({searchParams}: { searchParams: Promise<{[key: string]: string | undefined}>}) => {
  const {propertyType} = await searchParams;
  const {bed} = await searchParams;
  const {bath} = await searchParams;
  const {maxprice} = await searchParams;
  const {homeTypes} = await searchParams;

  console.log(propertyType)
  
  return (
    <div>
      <Header className='border-b border-primary'/>
      <SearchFilter bath={bath} bed={bed} homeTypes={homeTypes} maxprice={maxprice} />
      <ListingsMap />
    </div>
  )
}

export default ListingsPage;