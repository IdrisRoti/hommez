import { TbSmartHome } from "react-icons/tb";
import { RiShieldUserLine } from "react-icons/ri";

export default function AboutUsCards() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center lg:justify-start lg:flex-col gap-6">
        <article className="flex items-center gap-4 sm:gap-6 w-full sm:w-[25rem] rounded-[1.25rem] sm:rounded-[1.9rem] p-4 sm:p-6 boxShadow">
           <TbSmartHome className="size-12 text-secondary" />
             <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-secondary">Donec porttitor euismod</h3>
                <p className="text-textlight">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
               </div>
        </article>
        <article className="flex items-center gap-4 sm:gap-6 w-full sm:w-[25rem] rounded-[1.25rem] sm:rounded-[1.9rem] p-4 sm:p-6 boxShadow">
           <RiShieldUserLine className="size-12 text-secondary" />
            <div className="flex flex-col gap-1">
               <h3 className="text-lg font-semibold text-secondary">Donec porttitor euismod</h3>
                <p className="text-textlight">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
        </article>
    </div>
  )
}
