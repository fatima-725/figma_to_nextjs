import Image from "next/image";
import Navbar from "./comp/Navbar";
import HeroSection from "./comp/HeroSection";
import Section1 from "./comp/Section1";
import Section3 from "./comp/Section3";
import Section4 from "./comp/Section4";
import Section5 from "./comp/Section5";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
