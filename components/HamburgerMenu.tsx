import { animate, motion } from 'framer-motion'

export default function HamburgerMenu({showMobileMenu}:{showMobileMenu: boolean}) {
    const variants = {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1
        }
    }

  return (
    <div className='flex flex-col gap-1 cursor-pointer'>
        <motion.div 
            animate={showMobileMenu ? { rotate: -45, y: "300%"} : {rotate: 0}}
            className='h-[2px] w-6 rounded-full bg-textDarker' />
        <motion.div
            variants={variants} 
            animate={showMobileMenu ? "initial" : "animate"}
            className='h-[2px] w-6 rounded-full bg-textDarker' 
        />
        <motion.div 
            animate={showMobileMenu ? { rotate: 45, y: "-300%"} : {rotate: 0}}
            className='h-[2px] w-6 rounded-full bg-textDarker' />
    </div>
  )
}
