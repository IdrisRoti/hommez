import Image from "next/image";
import CustomForm from "./custom-form";
import { HiArrowLongLeft } from "react-icons/hi2";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#d4d4d4] bg-opacity-30 py-8">
        <div className="contain flex flex-col items-start md:flex-row">
            <div className="w-full flex md:flex-col lg:flex-row items-start gap-4 md:gap-6">
                <Image
                    src="/customer2.jpg"
                    alt=""
                    width={100}
                    height={128}
                    className="w-[4rem] h-[6rem] md:w-[6rem] md:h-[8rem] object-cover"
                />
                <div className="md:-order-1 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6">Aviero Dos Santos</h2>
                    <h3 className="uppercase tracking-widest text-sm text-textlight font-semibold">Real Estate Professional</h3>
                    <p className="font-serif">+41 22 365 20 55</p>
                    <p className="font-serif">+41 22 345 34 56</p>
                    <p className="font-serif mt-4 md:text-lg tracking-widest">avierodossantos@gmail.com</p>
                    <div className="w-16 h-[1px] bg-textlighter mt-8 md:mt-12 mb-4" />
                    <h2 className="uppercase tracking-widest text-sm text-textlight font-semibold">OFFICE</h2>
                    <h3 className="text-xl md:text-2xl font-serif">Hommez International Realty</h3>
                    <p className="w-2/3 mt-3 font-serif font-thin text-textlight">Rue de Rive 26Nyon, Vaud, 1260 Switzerland</p>
                </div>
            </div>
            {/* *********** CONTACT FORM ************ */}
            <div className="w-full mt-8 md:mt-0">
                <h2 className="text-3xl text-textlight font-serif font-thin mb-6">Get in touch with Agent</h2>
                <form>
                    <div className="flex items-center gap-6 lg:gap-10 mb-6">
                        <CustomForm name="firstName" label="First Name" formType="input" />
                        <CustomForm name="lastName" label="Last Name" formType="input" />
                    </div>
                    <div className="flex items-center gap-6 lg:gap-10 mb-6">
                        <CustomForm name="email" label="Email Address" type="email" formType="input" />
                        <CustomForm name="phone" label="Phone Number" type="phone" formType="input" />
                    </div>
                    <div className="">
                        <CustomForm name="message" label="Message" formType="textarea" />
                    </div>
                    <p className="mt-6 mb-3 text-sm font-thin">By submitting this form, you acknowledge that you accept the Hommez&apos;s International Realty <b>Privacy Policy</b> and <b>Terms of Use</b>.</p>
                    <button className='w-fit md:ml-auto uppercase tracking-widest bg-primary px-5 py-4 text-white flex items-center gap-3 group'>
                        <HiArrowLongLeft className='size-6 rotate-[30deg] group-hover:rotate-0 transition' />
                        <span>send message</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;