"use client"

import { motion, useAnimate, useDragControls, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { BiX } from "react-icons/bi";

type TCustomDrawer = {
    position: "right" | "bottom";
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: boolean; 
}

const CustomDrawer = ({position, children, isOpen, setIsOpen, className}: TCustomDrawer) => {
const [scope, animate] = useAnimate()

    const controls = useDragControls()
    const y = useMotionValue(0);

    const yStart = typeof y.get() === "number" ? y.get() : 0

    const closeDrawer = async () => {
        if(position === "bottom"){
            animate(scope.current, {opacity: [1, 0]});
            await animate("#drawer", {y: [yStart, 200]}, {duration: 1});
        }
        
        if(position === "right"){
            animate(scope.current, {opacity: [1, 0]});
            await animate("#drawer", {x: ["0%", "100%"]});
        }

        setIsOpen(false)
    }

  switch (position) {
    case "bottom":
        return (
            isOpen && <motion.div
                ref={scope}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                onClick={closeDrawer} 
                className="bg-white/20 backdrop-blur-[2px] fixed inset-0 z-[999]"
            >
                <motion.div
                    id="drawer"
                    drag="y"
                    dragControls={controls}
                    dragListener={false}
                    dragConstraints={{
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={{
                        top: 0,
                        bottom: 0.5
                    }}
                    style={{y}}
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: "easeInOut"}}
                    onDragEnd={() => y.get() > 100 && setIsOpen(false)}
                    onClick={(e) => e.stopPropagation()} 
                    className={`absolute bottom-0 h-[70vh] w-full bg-white rounded-t-2xl overflow-hidden p-1 ${className}`}
                >
                        <button
                            onClick={closeDrawer} 
                            className="z-10 absolute right-4 top-4 bg-white size-6 rounded-md grid place-items-center shadow-sm hover:opacity-70 transition"
                        >
                            <BiX className="size-4" />
                        </button>
                    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#000]/5 to-30% rounded-t-xl">
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        )

    case "right":
        return (
            isOpen && <motion.div
                ref={scope}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                onClick={closeDrawer} 
                className="bg-black/20 backdrop-blur-[2px] fixed inset-0 z-[999]"
            >
                <motion.div
                    id= "drawer"
                    initial={{ x: "100%"}}
                    animate={{ x: "0%"}}
                    transition={{ ease: "easeInOut"}}
                    onClick={(e) => e.stopPropagation()} 
                    className={`
                        absolute right-0 w-[70vw] lg:w-[40vw] bg-white h-full shadow-2xl rounded-l-xl p-1
                        ${className}
                        `}
                >
                        <button
                            onClick={closeDrawer} 
                            className="z-10 absolute right-4 top-4 bg-white size-6 rounded-md grid place-items-center shadow-sm hover:opacity-70 transition"
                        >
                            <BiX className="size-4" />
                        </button>
                        <div className="h-full overflow-y-auto scroll-bar-y bg-gradient-to-b from-[#000]/10 to-30% rounded-l-lg">
                            {children}
                        </div>
                </motion.div>
            </motion.div>
        )
  
    default:
        break;
  }
}

export default CustomDrawer;