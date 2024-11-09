import { createContext, Dispatch, SetStateAction } from "react";

type TPropertyListContext = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    propertyType: "Buy" | "Rent";
    setPropertyType: Dispatch<SetStateAction<"Buy" | "Rent">>;
}

const PropertyListContext = createContext<TPropertyListContext>({
    search: "", 
    setSearch: () => null,
    propertyType: "Rent",
    setPropertyType: () => null
})

export default PropertyListContext;