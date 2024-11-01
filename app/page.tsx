import About from "@/components/landing/About";
import Customers from "@/components/landing/Customers";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LatestBlogs from "@/components/landing/LatestBlogs";
import Listings from "@/components/landing/Listings";
import Locations from "@/components/landing/Locations";
import Services from "@/components/landing/Services";
import TeamExperts from "@/components/landing/TeamExperts";
import TrustedBy from "@/components/landing/TrustedBy";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[120rem] lg:h-[113rem] w-full absolute -top-[60rem] sm:-top-[48rem] lg:-top-[57rem] -z-10 rounded-full bg-gradient-to-b from-white from-50% to-secondary opacity-30" />
        <Header />
        <Hero />
        <div className="flex flex-col">
          <Customers />
          <TrustedBy />
        </div>
        <About />
        <Listings />
        <Services />
        <Locations />
        <TeamExperts />
        <LatestBlogs />
    </div>
  );
}
