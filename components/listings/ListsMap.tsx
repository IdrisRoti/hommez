"use client"

import { motion } from "framer-motion";

type TListMap = {
  showMap: boolean;
}

const ListsMap = ({showMap}: TListMap) => {
  return (
    <motion.div
      animate={showMap ? { width: "100%"} : { width: 0}}
      transition={{ duration: .6}}
      className={`w-full relative hidden lg:block`}>
        <div className={`sticky top-[8rem] w-full bg-gray-300 h-80`}>
            
        </div>
    </motion.div>
  )
}

export default ListsMap