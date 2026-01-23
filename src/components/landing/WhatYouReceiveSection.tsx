import { BookOpen, Route, FileText, Map, Users } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Short lessons that are easy to understand",
    description: "So you don't feel overwhelmed."
  },
  {
    icon: Route,
    title: "Step by step guidance",
    description: "Clear direction so you can grow at your own pace."
  },
  {
    icon: FileText,
    title: "Identity and Relationship Worksheets",
    description: "Know yourself. Know what you need. Know what to stop accepting."
  },
  {
    icon: Map,
    title: "Complete Relationship Foundations Roadmap",
    description: "Understand your identity, values, patterns, and emotional needs before choosing partners."
  },
  {
    icon: Users,
    title: "Real Support Through Group Learning",
    description: "Hear other people's experiences. Learn from different viewpoints. Social learning helps you grow faster."
  }
];

const WhatYouReceiveSection = () => {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-highlight rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-4">
          What You Receive
        </h2>
        <p className="text-primary-foreground/80 text-center text-lg mb-16 max-w-2xl mx-auto">
          Everything you need to build a strong foundation for healthy relationships
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-card/20 transition-colors ${
                index === 4 ? 'lg:col-span-1 md:col-span-2 lg:mx-auto lg:max-w-md' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-highlight flex items-center justify-center mb-5">
                <benefit.icon className="w-7 h-7 text-highlight-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceiveSection;
