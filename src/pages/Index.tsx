import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ResultsSection from "@/components/ResultsSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ResultsSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
