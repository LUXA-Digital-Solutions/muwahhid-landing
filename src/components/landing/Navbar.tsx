import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };
  const closeMobileMenu = () => { setIsMobileMenuOpen(false); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-forest/20 shadow-lg' : 'bg-transparent'}`}>
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 md:gap-3 font-bold tracking-tight text-xl md:text-2xl group" onClick={closeMobileMenu}>
          <div className="relative h-8 w-8 md:h-10 md:w-10 transition-all duration-300 group-hover:scale-110">
            <img src="/assets/AM_LW.png" alt="Muwahhid Logo" className="w-full h-full object-contain" />
          </div>
          <span className="bg-gradient-to-r from-brand-forest to-brand-forest/70 bg-clip-text text-transparent">Muwahhid</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm">
          {[{ href: "#work", label: "Work" }, { href: "#services", label: "Services" }, { href: "#about", label: "About" }, { href: "#contact", label: "Contact" }].map((item) => (
            <a key={item.href} href={item.href} className="relative group font-medium transition-colors hover:text-brand-green text-brand-forest">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button asChild size="lg" className="bg-gradient-to-r from-brand-green to-brand-olive hover:from-brand-green/90 hover:to-brand-olive/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <a href="#contact" aria-label="Start a project">Start a Project</a>
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-brand-forest hover:text-brand-green transition-colors" aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-brand-cream/95 backdrop-blur-md border-t border-brand-forest/20">
          <nav className="container py-6 space-y-4">
            {[{ href: "#work", label: "Work" }, { href: "#services", label: "Services" }, { href: "#about", label: "About" }, { href: "#contact", label: "Contact" }].map((item) => (
              <a key={item.href} href={item.href} className="block py-3 text-lg font-medium text-brand-forest hover:text-brand-green transition-colors border-b border-brand-forest/10 last:border-b-0" onClick={closeMobileMenu}>{item.label}</a>
            ))}
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-brand-green to-brand-olive hover:from-brand-green/90 hover:to-brand-olive/90 text-white" onClick={closeMobileMenu}>
                <a href="#contact" aria-label="Start a project">Start a Project</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
