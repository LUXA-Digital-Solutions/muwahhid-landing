import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a 
          href="#home" 
          className="inline-flex items-center gap-3 font-bold tracking-tight text-2xl group"
        >
          <div className="relative">
            <div 
              className="h-8 w-8 rounded-lg transition-all duration-300 group-hover:scale-110" 
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Brand
          </span>
        </a>
        
        <nav className="hidden gap-8 text-sm md:flex">
          {[
            { href: "#work", label: "Work" },
            { href: "#services", label: "Services" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="relative group font-medium transition-colors hover:text-secondary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href="#contact" aria-label="Start a project">
              Start a Project
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
