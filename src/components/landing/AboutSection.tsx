import shardayPhoto from "@/assets/sharday-fields.jpg";

const testimonials = [
  "I don't know myself anymore.",
  "I keep choosing people who don't value me.",
  "I don't know what I want.",
  "I want healthy love but I feel unsure."
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={shardayPhoto} 
                  alt="Sharday Fields, LCSW" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 hero-gradient rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-highlight/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-accent font-semibold uppercase tracking-wider mb-2">
                Meet Your Guide
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Sharday Fields, LCSW
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Creator of Developing Identity and Relationships with Personal Values
                <br />
                <span className="text-primary font-medium">Founder of Edifiers</span>
              </p>

              <p className="text-foreground mb-6 leading-relaxed">
                Sharday Fields has been supporting people since 2011 who say things like:
              </p>

              <div className="space-y-3 mb-8">
                {testimonials.map((quote, index) => (
                  <div 
                    key={index}
                    className="bg-secondary rounded-xl px-5 py-3 italic text-muted-foreground"
                  >
                    "{quote}"
                  </div>
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                Sharday helps people understand themselves, build confidence, and make better decisions in relationships, work, family, and friendships.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                Her approach is honest, clear, faith-based when needed, and grounded in real life experiences.
              </p>
              <p className="text-primary font-semibold text-lg">
                She teaches people how to stand firm in their identity so they can build relationships that support them, not drain them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
