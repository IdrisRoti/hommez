import Image from "next/image";
import Link from "next/link";

import { FaFireFlameCurved } from "react-icons/fa6";
import { LuBed, LuBath } from "react-icons/lu";
// import { GoHomeFill } from "react-icons/go";
// import { FaDollarSign } from "react-icons/fa6";

export default function ListCard() {
  return (
    <article>
        <Link className="" href="/">
            <div className="relative overflow-hidden h-[13.75rem] sm:h-[21.25rem] sm:w-[21.25rem] rounded-[1.875rem]">
                <Image
                    src="/home4.jpg" 
                    alt=""
                    fill
                    className="object-cover hover:scale-110 transition"
                />
                <div className="flex items-center gap-2 bg-lightRed text-darkRed px-6 py-2.5 rounded-[1.25rem] absolute bottom-6 left-6 font-medium">
                    <FaFireFlameCurved className="size-4 sm:size-6" />
                    <p className="text-sm sm:text-base">Popular</p>
                </div>
            </div>
            <div className="mt-3">
                <h2 className="font-semibold sm:font-bold text-textDark text-2xl mb-2">$ 5, 970</h2>
                <p className="text-textDark text-lg font-semibold">Tranquil Haven in the Woods</p>
                <p className="text-textlight text-sm my-2">103 Wright CourtBurien, WA 98168</p>
                <div className="flex gap-6 items-center text-textDark">
                    <div className="flex items-center gap-2">
                        <LuBed className="size-4 sm:size-6" />
                        <span className="text-sm sm:text-base">4 Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuBath className="size-4 sm:size-6" />
                        <span className="text-sm sm:text-base">3 Bath</span>
                    </div>
                </div>
            </div>
        </Link>
    </article>
  )
}
