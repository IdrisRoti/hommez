import { CreateNewListContext } from '@/context/CreateNewListContext'
import { useContext } from 'react'

const PropertyPrice = () => {
const {dispatch} = useContext(CreateNewListContext);

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property Price</h2>
        <p className='text-sm text-textlight'>If left empty, it would appear as &quot;price upon request&quot;</p>
        <div className="flex items-center h-10 border-[2.5px] rounded- gap-3 mt-3 rounded-md">
            <div className="grid place-items-center text-brightPink bg-[#f72585]/10 text-sm font-semibold h-7 aspect-square ml-[3px] rounded-sm">$</div>
            <input 
                type="number"
                onChange={(e) => dispatch({ type: "ADD_PROPERTY_PRICE", payload: e.target.value})} 
                className='h-full outline-none w-full placeholder:text-xs' 
                placeholder="3, 000, 000" 
            />
        </div>
    </div>
  )
}

export default PropertyPrice