import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import CarouselItem from "@/components/CarouselItem";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Solution from "@/components/Solution";
import Manage from "@/components/Manage";
import * as React from "react";
import ContentSources from "@/components/ContentSources";
import FAQ from "@/components/FAQ";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <HowItWorks />
      <Solution />
      <Pricing />
      <Manage />
      <ContentSources />
      <Achievements />
      <Review />
      <FAQ />
      <Blogs />
      <Footer />
    </div>
  );
}
