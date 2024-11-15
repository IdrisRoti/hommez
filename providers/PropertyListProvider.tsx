"use client";

import PropertyListContext from "@/context/PropertyListContext";

import { useState } from "react";

const PropertyListProvider = ({children}: {children: React.ReactNode}) => {
    const [search, setSearch] = useState("");
    const [priceRange, setPriceRange] = useState<string | null>(null);
    const [propertyType, setPropertyType] = useState<"Buy" | "Rent">("Buy");
    const [bedsValue,setBedsValue] = useState<string | null>(null);
    const [bathsValue,setBathsValue] = useState<string | null>(null);
    const [selectedHomeTypes, setSelectedHomeTypes] = useState<string[]>([]);

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
            setSelectedHomeTypes
    }}>
            {children}
    </PropertyListContext.Provider>
}

export default PropertyListProvider;