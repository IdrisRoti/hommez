"use client"

import { AnimatePresence, motion } from 'framer-motion';

type TModal = {
    children: React.ReactNode;
    showModal: boolean;
    className?: string;
}

const CustomModal = ({children, showModal, className}: TModal) => {

  return (
    <AnimatePresence>
      {showModal && (
        <div className='fixed inset-0 w-screen h-screen z-[900] bg-black/30 backdrop-blur-[2px] grid place-items-center'>
          <div className='cursor-not-allowed pointer-events-none'>
            <motion.aside
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: .3}}
              className={`pointer-events-auto cursor-auto z-[999] ${className}`}>
              {children}
            </motion.aside>
          </div>
        </div>
        )}
    </AnimatePresence> 
  )
}

export default CustomModal;