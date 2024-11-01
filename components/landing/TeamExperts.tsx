import { teamExperts } from "@/constants";
import Image from "next/image";

export default function TeamExperts() {
  return (
    <section className="contain mt-4 text-center">
        <h2 className="text-secondary text-lg md:text-xl md:mb-2 lg:mb-4 text-center font-medium tracking-wider uppercase">Introduce yourself to</h2>
        <h3 className="mb-3 md:mb-5 font-semibold text-2xl md:text-4xl text-center">Our Team of Experts</h3>
        <div className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[4rem] mt-12">
            {
                teamExperts.map((expert) => (
                    <div key={expert.id} className="flex flex-col items-center">
                        <div className="relative w-[7.5rem] md:w-[12.5rem] h-[10.5rem] md:h-[17.5rem] mb-3 rounded-[1.5rem] md:rounded-[3rem] rounded-tl-[60%] md:rounded-tl-[50%] overflow-hidden after:absolute after:inset-0 after:bg-black after:bg-opacity-30">
                            <Image
                                className="object-cover"
                                src={expert.image}
                                fill
                                alt={expert.name}
                            />
                        </div>
                        <h2 className="text-textDarker font-semibold md:mt-6 md:mb-3 md:text-3xl">{expert.name}</h2>
                        <h3 className="text-secondary text-xs">{expert.title}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
