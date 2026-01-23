import { Heart, AlertCircle, Lightbulb } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 leading-tight">
            If you want healthy relationships,{" "}
            <span className="text-gradient">it starts with knowing yourself first</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl card-elevated">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Most people want stable love, good friendships, support, and connection.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl card-elevated">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-highlight/20 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-highlight" />
              </div>
              <p className="text-muted-foreground">
                The problem is many people are trying to build relationships on shaky ground.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl card-elevated">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <p className="text-muted-foreground">
                They want closeness but do not fully know who they are.
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Your program <strong className="text-primary">Developing Identity and Relationships with Personal Values</strong> helps people slow down, learn themselves, and build confidence so they stop choosing relationships from fear, confusion, or low self esteem.
            </p>
            <p className="text-xl md:text-2xl font-display text-primary font-semibold">
              This Launchpad gives people a clear path to become grounded, confident, and ready for the healthy relationships they want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
