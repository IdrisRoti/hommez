import { createContext, Dispatch, SetStateAction } from "react";

type TPropertyListContext = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    propertyType: "Buy" | "Rent";
    setPropertyType: Dispatch<SetStateAction<"Buy" | "Rent">>;
    priceRange: string | null;
    setPriceRange: Dispatch<SetStateAction<null | string>>;
    bedsValue: null | string;
    setBedsValue: Dispatch<SetStateAction<string | null>>;
    bathsValue: null | string;
    setBathsValue: Dispatch<SetStateAction<string | null>>;
    selectedHomeTypes: string[];
    setSelectedHomeTypes: Dispatch<SetStateAction<string[]>>;
}

const PropertyListContext = createContext<TPropertyListContext>({
    search: "", 
    setSearch: () => null,
    propertyType: "Rent",
    setPropertyType: () => null,
    priceRange: null,
    setPriceRange: () => null,
    bedsValue: "",
    setBedsValue: () => null,
    bathsValue: "",
    setBathsValue: () => null,
    selectedHomeTypes: [],
    setSelectedHomeTypes: () => null
})

export default PropertyListContext;