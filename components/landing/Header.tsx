"use client"

import { NavLinks } from "@/constants";

import Link from "next/link";
import { useState } from "react";

import { CiLocationOn, CiMail  } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { PiWarehouseDuotone } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { motion } from "framer-motion";

import MobileNav from "../MobileNav";
import HamburgerMenu from "../HamburgerMenu";


export default function Header({className}:{className?: string}) {
    const [activeSection, setActiveSection] = useState("#home")
    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header id="#home" className={`z-[999] ${className}`}>
        <div className='bg-primary h-10 text-white hidden md:block'>
            <div className='contain h-full flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <CiLocationOn className="w-4 h-4" />
                    <p className="text-xs">Rezilla, 18 Grattan St, Brooklyn</p>
                </div>
                <div className='flex items-center gap-2 justify-end'>
                    <div className='flex items-center gap-2'>
                        <IoCallOutline className="w-4 h-4" />
                        <p className="text-xs">+1 206-214-2298</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiMail className="w-4 h-4" />
                        <p className="text-xs">support@hommez.com</p>
                    </div>
                </div>
            </div>
        </div>
            <nav className="contain h-20 flex items-center justify-between gap-2 text-dark">    
                <ul className="items-center hidden lg:flex">
                    {
                        NavLinks.map((link)=>{
                            return ( 
                                <li     
                                    key={link.id} 
                                    className= "font-medium relative">
                                    <Link 
                                        onClick={()=>setActiveSection(link.href)} 
                                        className="h-full w-full block px-4 py-2 rounded-full hover:bg-[#4361ee] hover:bg-opacity-30 transition" href={link.href}>
                                            {link.label}
                                    </Link>
                                    {link.href === activeSection && (
                                        <motion.span 
                                            className="absolute rounded-full -z-10 inset-0 bg-[#4361ee] bg-opacity-30"
                                            layoutId="activeSection"
                                            ></motion.span>)}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-10 aspect-square grid place-items-center rounded-full">
                        <PiWarehouseDuotone className="text-white w-6 h-6" />
                    </div>
                    <h2 className="font-semibold text-[#1e1e1e] text-xl">Hommez</h2>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <button className="px-4 py-1 flex items-center gap-2">
                        <HiOutlineUserCircle className="w-5 h-5" />
                        <span>Login/Register</span>
                    </button>
                    <button className="px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2">
                        <PiWarehouseDuotone className="w-5 h-5" />
                        <span>Add Listing</span>
                    </button>
                </div>
                {/* *****************************MOBILE MENU********************************* */}
                    <div className="lg:hidden" onClick={() => setShowMobileMenu(prev=>!prev)}>
                        <HamburgerMenu showMobileMenu={showMobileMenu}/>
                    </div>
                    {
                            showMobileMenu && <MobileNav setShowMobileMenu={setShowMobileMenu} />
                    }
            </nav>
    </header>
  )
}
