import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Content */}
      <div className="relative z-10 section-container py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            IDENTITY & RELATIONSHIP
            <br />
            <span className="italic text-highlight">LAUNCHPAD</span>™
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-10 max-w-2xl mx-auto">
            A guided path for people who want healthy relationships but feel unsure of themselves
          </p>

          {/* Video Placeholder */}
          <div className="relative max-w-3xl mx-auto mb-10 rounded-3xl overflow-hidden animate-fade-up delay-200">
            <div className="aspect-video bg-primary/30 backdrop-blur-sm flex items-center justify-center relative group cursor-pointer rounded-3xl border border-primary-foreground/10">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors rounded-3xl" />
              <div className="w-20 h-20 rounded-full bg-highlight flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                <Play className="w-8 h-8 text-highlight-foreground ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-primary-foreground/80 text-sm z-10">
                <span>Watch the Introduction</span>
                <span>1:33</span>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="cta-gradient text-highlight-foreground font-semibold text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform animate-pulse-glow"
          >
            Get Started Today
          </Button>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
