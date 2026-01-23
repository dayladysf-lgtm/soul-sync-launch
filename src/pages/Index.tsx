import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import WhoIsForSection from "@/components/landing/WhoIsForSection";
import WhatYouReceiveSection from "@/components/landing/WhatYouReceiveSection";
import CTASection from "@/components/landing/CTASection";
import BonusesSection from "@/components/landing/BonusesSection";
import AboutSection from "@/components/landing/AboutSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <WhatYouLearnSection />
      <WhoIsForSection />
      <WhatYouReceiveSection />
      <CTASection />
      <BonusesSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
