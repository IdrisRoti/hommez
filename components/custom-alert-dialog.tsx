"use client"

import CustomAlertDialogContext from "@/context/CustomAlertDialogContext";
import { motion } from "framer-motion";
import { useContext } from "react";

type TCustomAlertDialog = {
    title: string;
    description: string;
    action: (() => void);
}

const CustomAlertDialog = ({ 
        title, 
        description,
        action
    }: TCustomAlertDialog
) => {

    const {dispatch} = useContext(CustomAlertDialogContext);

    const handleDialogContinue = () => {
        dispatch({type: "CLOSE_DIALOG"})
        action();
    }

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: .3, ease: "easeInOut"}}
        className="bg-white/20 backdrop-blur-[4px] fixed inset-0 z-[1000] grid place-items-center">
        <motion.div 
            initial={{y: 20}}
            animate={{y: 0}}
            exit={{y: 20}}
            transition={{duration: .3, ease: "easeInOut"}}
            className="rounded-lg border py-8 px-6 max-w-[95%] md:max-w-[70%] lg:max-w-[50vw] bg-white shadow-lg">
            <h1 className="font-semibold md:text-xl">{title}</h1>
            <p className="mb-4 text-textlight text-sm md:text-base">{description}</p>
            <div className="flex w-full gap-2 items-center justify-end">
                <button onClick={() => dispatch({type: "CLOSE_DIALOG"})} className="border px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition">Cancel</button>
                <button onClick={handleDialogContinue} className="border border-primary bg-primary text-white px-4 py-2 font-medium rounded-lg hover:opacity-70 transition">Continue</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default CustomAlertDialog