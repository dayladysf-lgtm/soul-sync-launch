import { ListChecks, Shield, Video, Gift } from "lucide-react";

const bonuses = [
  {
    icon: ListChecks,
    title: "Relationship Patterns Checklist",
    description: "See your patterns clearly so you stop repeating them."
  },
  {
    icon: Shield,
    title: "How To Know If Someone Is Safe For You",
    description: "Simple questions to ask yourself before connecting with someone."
  },
  {
    icon: Video,
    title: "Confidence Reset Video",
    description: "A short video to help you stop shrinking and remind you to take up space."
  }
];

const BonusesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="section-container">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-8 h-8 text-highlight" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            Bonuses
          </h2>
        </div>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          To Help You Move Forward Fast
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 card-elevated text-center group hover:-translate-y-2 transition-transform"
            >
              {/* Bonus badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-highlight text-highlight-foreground text-sm font-bold px-4 py-1 rounded-full">
                BONUS #{index + 1}
              </div>

              <div className="w-16 h-16 mx-auto rounded-2xl hero-gradient flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform">
                <bonus.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
