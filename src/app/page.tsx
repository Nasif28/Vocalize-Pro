import CarouselItem from "@/components/CarouselItem";
import ChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Solution from "@/components/Solution";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <HowItWorks />
      <Solution />
    </div>
  );
}
