import CustomSelect from "@/components/CustomSelect"
import { propertyOfferType, propertyType } from "@/constants"
import { TpropertyDetails } from "./CreateNewListForm"

type TPropertyType = {
    propertyDetails: TpropertyDetails;
    setPropertyDetails: React.Dispatch<React.SetStateAction<TpropertyDetails>>;
}

const PropertyType = ({propertyDetails, setPropertyDetails}: TPropertyType) => {
  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium uppercase font-serif'>Property  type</h2>
        <p className='text-sm text-textlight'>Choose the type of property you want to list</p>

        <div className="flex items-center gap-2 mt-3">
        {
            propertyType.map(({id, type, icon: Icon}) => (
                <CustomSelect onClick={() => setPropertyDetails((prev) => ({...prev, propertyType: type}))} key={id} isSelected={propertyDetails.propertyType === type}>
                    <div className="flex flex-col gap-3">
                        <span className="grid place-items-center size-8 border border-black/10 rounded-full"><Icon className='size-4 opacity-80' /></span>
                        <h3 className='font-medium text-sm uppercase font-serif'>{type}</h3>
                    </div>
                </CustomSelect>
            )
            )
        }
        </div>
  </div>
  )
}

export default PropertyType;