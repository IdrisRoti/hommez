import Image from "next/image";
import GradientBall from "../gradient-ball";

export default function BecomeAgent() {
  return (
    <section className="contain">
          <div className='relative bg-primary md:h-[15rem] lg:h-[16.25rem] rounded-[1.25rem] md:rounded-[1.875rem] lg:rounded-[2.5rem] text-white my-16 md:my-28 max-md:flex max-md:flex-col max-md:gap-3'>
              <div className="w-[16.875rem] mx-auto md:w-[18rem] lg:w-[22.375rem] h-[16.375rem] md:h-[18.94rem] relative md:absolute bottom-0 z-50">
                <Image
                  src="/agent.png" 
                  alt="become an agent"
                  fill
                  className="object-cover"
                />
                <GradientBall className="w-[3rem] md:w-[6.25rem] absolute top-1/2 left-4 md:right-3 max-md:rotate-45 opacity-50" />
              </div>
              <div className="md:flex relative overflow-hidden md:gap-2 lg:gap-10 h-full md:w-[60%] lg:w-[65%] items-center ml-auto max-md:-order-1 max-md:pt-24 max-md:px-6">
                <div className="lg:w-[50%]">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 ">Become a Agent.</h2>
                  <p className="opacity-90">Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.</p>
                </div>
                <button className="text-primary hover:opacity-85 transition bg-white font-medium rounded-[1.875rem] px-[1.875rem] py-3 max-md:mt-4">Register Now</button>
                <GradientBall className="w-[15.75rem] md:w-[6.25rem] absolute -top-1/3 md:-top-10 -right-10 md:right-10 opacity-20 z-10" />
              </div>
          </div>
    </section>
  )
}
