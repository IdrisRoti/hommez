"use client";

import PropertyListContext from "@/context/PropertyListContext";

import { useState } from "react";

const PropertyListProvider = ({children}: {children: React.ReactNode}) => {

        // FOR LISTINGS PROPERTIES FILTER - LISTINGS PAGE
    const [search, setSearch] = useState("");
    const [priceRange, setPriceRange] = useState<string | null>(null);
    const [propertyType, setPropertyType] = useState<"Buy" | "Rent">("Buy");
    const [bedsValue,setBedsValue] = useState<string | null>(null);
    const [bathsValue,setBathsValue] = useState<string | null>(null);
    const [selectedHomeTypes, setSelectedHomeTypes] = useState<string[]>([]);

        // FOR LIST IMAGES - LIST DETAIL PAGE
    const [ showImages, setShowImages ] = useState(false);

    return <PropertyListContext.Provider value={{
            search, 
            setSearch, 
            propertyType, 
            setPropertyType, 
            priceRange, 
            setPriceRange,
            bedsValue,
            setBedsValue,
            bathsValue,
            setBathsValue,
            selectedHomeTypes,
            setSelectedHomeTypes,

            showImages,
            setShowImages
    }}>
            {children}
    </PropertyListContext.Provider>
}

export default PropertyListProvider;