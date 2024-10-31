import { BsSearch } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { LuBed } from "react-icons/lu";

export const NavLinks = [
    {
        id: 1,
        label: "Home",
        href: "#home"       
    },
    {
        id: 2,
        label: "About",
        href: "#about"       
    },
    {
        id: 3,
        label: "Listings",
        href: "#listings"       
    },
    {
        id: 4,
        label: "Services",
        href: "#services"       
    },
    {
        id: 5,
        label: "Blogs",
        href: "#blogs"       
    },
]

export const searchTypeTabs = [
    {
        label: "For Sale",
        value: "sale",
    },
    {
        label: "For Rent",
        value: "rent",
    },
]

export const heroCarouselHomeImages = ["/home1.jpg", "/home2.jpg", "/home3.jpg", "/home4.jpg"]

export const happyCustormersImages = ["/customer1.jfif", "/customer2.jfif", "/customer3.jfif", "/customer4.jfif", "/customer5.jfif", "/customer6.jfif"]

export const trustedByLogos = [
    "/google.png",
    "/amazon.png",
    "/logitech.png",
    "/spotify.png",
    "/samsung.png",
    "/netflix.png",
    "/google.png",
    "/amazon.png",
    "/logitech.png",
    "/spotify.png",
    "/samsung.png",
    "/netflix.png",
]

export const services = [
    {
        id: 1,
        title: "Buy a New Home",
        content: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
        icon: BsSearch,
    },
    {
        id: 2,
        title: "Sell a House",
        content: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
        icon: GoHomeFill,
    },
    {
        id: 3,
        title: "Rent a House",
        content: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
        icon: LuBed,
    },
]