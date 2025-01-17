"use client"

import { AnimatePresence, motion } from 'framer-motion';

type TModal = {
    children: React.ReactNode;
    showModal: boolean;
    closeModal?: () => void;
    className?: string;
}

const CustomModal = ({children, showModal, closeModal, className}: TModal) => {

  return (
    <AnimatePresence>
      {showModal && (
        <div 
          {...(closeModal && {onClick: closeModal})}
          className='fixed inset-0 w-screen h-screen z-[1000] bg-black/30 backdrop-blur-[2px] grid place-items-center'>
          <div onClick={(e) => e.stopPropagation()} className='cursor-not-allowed pointer-events-none'>
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