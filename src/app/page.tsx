import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import CarouselItem from "@/components/CarouselItem";
import ChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Solution from "@/components/Solution";
import Manage from "@/components/ui/Manage";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <HowItWorks />
      <Solution />
      <Pricing />
      <Manage />
      <Achievements />
      <Blogs />
    </div>
  );
}
