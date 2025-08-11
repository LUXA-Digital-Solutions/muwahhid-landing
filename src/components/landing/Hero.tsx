import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, Palette, Zap } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--cursor-x", `${x}%`);
    el.style.setProperty("--cursor-y", `${y}%`);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden bg-hero min-h-screen flex items-center",
        "pt-32 pb-20 md:pt-36 md:pb-24"
      )}
      aria-label="Hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border/20 bg-background/10 backdrop-blur-sm px-6 py-3 text-sm tracking-wide text-muted-foreground mb-8",
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Sparkles className="h-4 w-4 text-secondary" />
            <span>Modern • Minimal • Impactful</span>
            <Palette className="h-4 w-4 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className={cn(
            "text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight",
            "transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Graphic Designer
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              crafting bold, modern visuals
            </span>
          </h1>

          {/* Description */}
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed",
            "transition-all duration-700 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            I help brands stand out with clean systems, strong typography, and purposeful color. 
            Explore selected works below and discover how strategic design can transform your brand.
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col items-center justify-center gap-4 sm:flex-row",
            "transition-all duration-700 delay-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg font-semibold"
            >
              <a href="#work" aria-label="View portfolio" className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <a href="#contact" aria-label="Contact designer" className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className={cn(
            "mt-16 flex flex-col items-center gap-2 text-muted-foreground/60",
            "transition-all duration-700 delay-1200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="text-sm">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
    </section>
  );
};

export default Hero;
