import Customers from "@/components/landing/Customers";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[120rem] lg:h-[113rem] w-full absolute -top-[60rem] sm:-top-[48rem] lg:-top-[57rem] -z-10 rounded-full bg-gradient-to-b from-white from-50% to-secondary opacity-30" />
        <Header />
        <Hero />
        <Customers />
      </div>
  );
}
