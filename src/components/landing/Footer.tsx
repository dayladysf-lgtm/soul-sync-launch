import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center">
          <p className="font-display text-2xl font-bold text-primary mb-4">
            Edifiers
          </p>
          <p className="text-muted-foreground mb-6">
            Building identity. Building relationships. Building you.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-highlight fill-highlight" />
            <span>© {new Date().getFullYear()} Edifiers. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
