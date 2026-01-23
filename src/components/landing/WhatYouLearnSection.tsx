import { Repeat, Search, Sparkles, Eye, Users, Target } from "lucide-react";

const lessons = [
  {
    icon: Repeat,
    title: "What You Want and Why You Keep Choosing the Same Patterns",
    description: "Participants learn why they repeat relationships that drain them, overwhelm them, or pull them away from who they are."
  },
  {
    icon: Search,
    title: "How To Understand Yourself Clearly",
    description: "Identity is the foundation. Participants learn their values, patterns, needs, emotional triggers, and strengths so they can choose relationships from a place of clarity."
  },
  {
    icon: Sparkles,
    title: "How To Build Confidence and Stop Playing Small",
    description: "Many people feel like they do too much or not enough. They shrink, avoid asking for what they need, or settle. This program helps them take up space, speak honestly, and believe they deserve healthy love."
  },
  {
    icon: Eye,
    title: "How To Recognize Traits in Others Before You Attach",
    description: "Participants learn how to see who a person truly is, not who they hope they will become. They learn what to look for, what to avoid, and what a healthy relationship actually feels like."
  },
  {
    icon: Users,
    title: "Social Learning and Real Conversations",
    description: "Participants learn from each other through group discussions and sharing. Hearing how others think makes them feel less alone and more confident."
  },
  {
    icon: Target,
    title: "How To Build Relationships That Match Their Identity",
    description: "Once they know themselves, everything becomes easier. Participants learn to spot alignment, set better boundaries, and choose people who respect them."
  }
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
          What You Will Learn
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          A comprehensive journey to understanding yourself and building meaningful connections
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {lessons.map((lesson, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 card-elevated hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <lesson.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {lesson.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
