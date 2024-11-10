"use client"

import { useState } from 'react'
import { motion } from "framer-motion";

import Listings from './listings'
import ListsMap from './ListsMap'

import { BsStarFill } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

const ListingsMap = () => {
    const [showMap, setShowMap] = useState(true);

  return (
    <div className='contain flex gap-4 relative'>
        <Listings showMap={showMap} />
        <ListsMap showMap={showMap}/>
        <motion.div 
          initial={{ x: 200, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: .8}}
          className='fixed bottom-6 right-4 group hidden lg:block'>
            {
                showMap ? (
                    <button
                      onClick={() => setShowMap(false)} 
                      className='py-1.5 px-4 bg-white group-hover:bg-primary group-hover:text-white border border-primary flex items-center gap-2 justify-center transition'>
                      <CiBoxList className='text-primary size-4 group-hover:text-white transition'/>
                      <span className="text-primary text-sm group-hover:text-white transition">Hide map</span>
                    </button>
                ) : (
                  <button
                    onClick={() => setShowMap(true)} 
                    className='py-1.5 px-4 bg-white group-hover:bg-primary group-hover:text-white border border-primary transition flex items-center gap-2 justify-center'>
                    <BsStarFill className='text-primary size-4 group-hover:text-white transition'/>
                    <span className="text-primary text-sm group-hover:text-white transition">Show map</span>
                  </button>
                )
            }
        </motion.div>
    </div>
  )
}

export default ListingsMap