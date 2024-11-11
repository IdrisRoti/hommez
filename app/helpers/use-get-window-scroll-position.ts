import { useEffect, useState } from "react"

export const useGetWindowScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleScroll = () => {
            if(typeof window != undefined) {
                setScrollPosition({x: window.scrollX, y: window.scrollY})
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return {...scrollPosition}
}