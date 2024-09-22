import Achievements from "@/components/Home/Achievements";
import Blogs from "@/components/Home/Blogs";
import CarouselItem from "@/components/Home/CarouselItem";
import ChooseUs from "@/components/Home/ChooseUs";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Pricing from "@/components/Home/Pricing";
import Solution from "@/components/Home/Solution";
import Manage from "@/components/Home/Manage";
import * as React from "react";
import ContentSources from "@/components/Home/ContentSources";
import FAQ from "@/components/Home/FAQ";
import Review from "@/components/Home/Review";

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
