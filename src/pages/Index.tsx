import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import PuritySection from "@/components/PuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import CinematicSection from "@/components/CinematicSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProductSection />
        <PuritySection />
        <FeaturesSection />
        <CinematicSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
