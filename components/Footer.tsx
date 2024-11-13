import { discoveryLinks, NavLinks } from '@/constants'

import Link from 'next/link'

import { BiPhone } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { PiWarehouseDuotone } from 'react-icons/pi'

export default function Footer() {
  return (
    <footer className='bg-[#4361ee]/10 pt-8 md:pt-14'>
        <div className='contain flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10 text-textDark max-md:text-center'>
            <div className='w-[70%] md:w-auto lg:w-1/4'>
                <div className="flex items-center max-md:justify-center gap-2 mb-4 md:mb-6">
                    <div className="bg-primary w-10 aspect-square grid place-items-center rounded-full">
                        <PiWarehouseDuotone className="text-white w-6 h-6" />
                    </div>
                    <h2 className="font-semibold text-[#1e1e1e] text-lg">Hommez</h2>
                </div>
                <p className='mb-4 md:mb-8'>2728 Hickory StreetSalt 
                Lake City, UT 84104</p>
                <div className='my-4 items-center max-md:justify-center gap-2 flex '><BiPhone className='size-6 text-textlight' /> <span>+1 206-214-2298</span></div>
                <div className='my-4 items-center max-md:justify-center gap-2 flex'><CgMail className='size-6 text-textlight' /> <span>support@rezilla.com</span></div>
            </div>
            <div className='w-1/4 hidden lg:block'>
                <h2 className='text-lg font-semibold mb-6'>Quick Links</h2>
                <div className='flex flex-col gap-2'>
                    {
                        NavLinks.map((link) => (
                            <Link key={link.id} href={link.href}>{link.label}</Link>
                        ))
                    }
                    <Link href="">Become a Agent</Link>
                </div>
            </div>
            <div className=' w-1/4 hidden lg:block'>
                <h2 className='text-lg font-semibold mb-6'>Discovery</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            discoveryLinks.map((link) => (
                                <Link key={link} href="/">{link}</Link>
                            ))
                        }
                    </div>
            </div>
            <div className='lg:w-2/5'>
                <h2 className='text-lg font-semibold'>Subscribe to our Newsletter!</h2>
                <div className='my-6 w-[19rem] lg:w-[21.875rem] h-[3.75rem] rounded-full bg-white overflow-hidden flex items-center boxShadow px-[5px]'>
                    <input className='ml-4 w-full h-full bg-transparent placeholder:text-textlighter outline-none' type="email" placeholder='Email Address' />
                    <button className='w-[3.125rem] rounded-full aspect-square bg-primary ml-auto text-white grid place-items-center flex-shrink-0'><BsArrowRight className='size-5' /></button>
                </div>
                <h3 className='text-lg font-semibold'>Follow Us on</h3>
                <div className='flex items-center max-md:justify-center gap-3 mt-5'>
                    <FaLinkedin className='text-primary size-7' />
                    <FaFacebook className='text-primary size-7' />
                    <FaInstagram className='text-primary size-7' />
                </div>
            </div>
        </div>
        <section className='bg-textDarker mt-8 md:mt-14 text-textlighter'>
            <div className='max-w-[75rem] mx-auto px-6 py-2 text-xs md:text-sm flex justify-between items-center'>
                <p>Hommez - All rights reserved</p>
                <div className='flex items-center gap-2 md:gap-6'>
                    <p>Built by IdriRoti</p>
                    <p className='md:block hidden'>+2348108835144</p>
                </div>
            </div>
        </section>
    </footer>
  )
}
