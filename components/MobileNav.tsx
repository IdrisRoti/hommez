"use client"

import { NavLinks } from '@/constants'

import { motion } from 'framer-motion'

import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { PiWarehouseDuotone } from 'react-icons/pi'

type TMobileNav = {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  setOpenNewListDrawer: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({setShowMobileMenu, setOpenNewListDrawer}: TMobileNav) {

  const handleNewListDrawer = () => {
    setShowMobileMenu(false);
    setOpenNewListDrawer(true);
  }
  
  return (
      <motion.nav 
        className='fixed w-[90vw] mx-auto top-20 bg-white rounded-[1.25rem] shadow-2xl z-[999]'
        initial={{ opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: .3}}
      >
        <div className='flex flex-col'>
          {
            NavLinks.map((link, i) => {
              return (
                <Link
                  onClick={() => setShowMobileMenu(false)} 
                  key={link.id} 
                  href={link.href}
                  className='px-8 py-6 border-b overflow-y-hidden'
                >
                    <motion.div 
                      initial={{y: 50}}
                      animate={{y: 0}}
                      transition={{
                        duration: .3,
                        delay: (.2 * i)
                      }}
                      className='font-medium text-textDark hover:text-textDarker '>{link.label}</motion.div>
                </Link>
              )
            })
          }
        </div>
        <div className='px-4 py-3'>
          <button 
            onClick={handleNewListDrawer}
            className="px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2">
              <PiWarehouseDuotone className="w-5 h-5" />
              <span>Add Listing</span>            
          </button>
        </div>
      </motion.nav>
  )
}
