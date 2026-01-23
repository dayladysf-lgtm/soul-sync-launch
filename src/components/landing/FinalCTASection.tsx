import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import funnelDiagram from "@/assets/funnel-diagram.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-highlight rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            IDENTITY & RELATIONSHIP
            <br />
            <span className="italic">LAUNCHPAD</span>™
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            A clear path to help you stop repeating old patterns and become confident enough to build healthy relationships
          </p>

          <p className="text-2xl font-display text-highlight font-semibold mb-10">
            Starting with who you are
          </p>

          {/* Funnel Diagram */}
          <div className="mb-12 bg-card/10 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto">
            <img 
              src={funnelDiagram} 
              alt="LaunchPad Program Journey: Awareness, Application, Consultation, Enrollment, Program Start, Completion" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          <Button 
            size="lg"
            className="cta-gradient text-highlight-foreground font-bold text-xl px-14 py-8 rounded-full hover:scale-105 transition-transform animate-pulse-glow"
          >
            Start Your Journey Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Footer wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTASection;
