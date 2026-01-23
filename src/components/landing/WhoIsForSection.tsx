import { Check } from "lucide-react";

const qualifications = [
  "Feel lost in relationships",
  "Feel like they always choose the wrong people",
  "Want better friendships, healthier partners, or stronger support",
  "Feel unsure of who they are or what they want",
  "Struggle with confidence and self worth",
  "Are in therapy but still need direction, structure, and coaching",
  "Want to stop settling",
  "Want to learn how to take up space in love, career, family, and friendships",
  "Want to understand their patterns so they stop repeating them"
];

const WhoIsForSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
            Who This Is For
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            This program is designed for people who:
          </p>

          <div className="bg-secondary rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              {qualifications.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-6 h-6 rounded-full accent-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
