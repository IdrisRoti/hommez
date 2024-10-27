"use client"

import { useState } from "react"

import { searchTypeTabs } from "@/constants"

import { GiSettingsKnobs } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

export function PropertySearchForm() {
    const [selectedTab, setSelectedTab] = useState("sale")

  return (
        <div className="w-full h-full flex flex-col">
            {/* *********** TABS *************** */}
            <div className="border-b h-[3.8rem] sm:h-20 w-full flex items-center">
                {
                    searchTypeTabs.map(tab => {
                        return (
                            <div key={tab.value} onClick={()=> setSelectedTab(tab.value)} 
                                className={`w-full h-full flex justify-center ${selectedTab === tab.value ? "text-primary" : "text-textlight"}`}
                            >
                                <button key={tab.value} className={`h-full w-[70%] border-b-2 ${selectedTab === tab.value ? "border-primary" : "border-transparent"}`}>{tab.label}</button>
                            </div>
                        )
                    })
                }
            </div>
            {/* ************* INPUTS ******************* */}
            <form className="w-full h-full flex flex-col items-center justify-center p-5 sm:p-10">
                <input className="w-full h-12 sm:h-[3.8rem] px-4 bg-[#D4D4D4] bg-opacity-20 rounded-[20px] placeholder:text-textlighter text-sm mb-8" placeholder="New York, San Francisco, etc" type="text" />
                <select className="w-full h-12 sm:h-[3.8rem] px-4 bg-[#D4D4D4] bg-opacity-20 rounded-[20px] mb-8" >
                    <option className="text-textlighter text-sm" value="">Select Property type</option>
                </select>
                <select className="w-full h-12 sm:h-[3.8rem] px-4 bg-[#D4D4D4] bg-opacity-20 rounded-[20px] mb-6" >
                    <option className="text-textlighter text-sm" value="">Select Property type</option>
                </select>
                <button className="flex gap-2 items-center text-primary text-xs self-start"><GiSettingsKnobs className="size-4" /><span>Advance Search</span></button>
                <button className="w-full h-12 sm:h-[3.8rem] mt-10 sm:mt-16 flex items-center justify-center gap-2 bg-primary rounded-full text-white"><BiSearch className="size-6" /><span>Search</span></button>
            </form>
        </div>
  )
}
