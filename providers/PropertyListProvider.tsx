"use client";

import PropertyListContext from "@/context/PropertyListContext";

import { useState } from "react";

const PropertyListProvider = ({children}: {children: React.ReactNode}) => {
    const [search, setSearch] = useState("");
    const [propertyType, setPropertyType] = useState<"Buy" | "Rent">("Buy");

    return <PropertyListContext.Provider value={{search, setSearch, propertyType, setPropertyType}}>
            {children}
    </PropertyListContext.Provider>
}

export default PropertyListProvider;