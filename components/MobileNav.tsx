"use client"

import { NavLinks } from '@/constants'

import { AnimatePresence, motion } from 'framer-motion'

import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type TMobileNav = {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
}

export default function MobileNav({setShowMobileMenu, showMobileMenu}: TMobileNav) {
  return (
      <motion.nav 
      className='fixed w-[90vw] mx-auto top-20 bg-white rounded-[1.25rem] shadow-2xl z-[999] flex flex-col'
      initial={{ opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: .3}}
    >
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
    </motion.nav>
  )
}
