import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Behance } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border relative overflow-hidden" aria-label="Footer">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg" style={{ background: "var(--gradient-hero)" }} />
              <span className="text-2xl font-bold tracking-tight">Your Brand</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Crafting bold, modern visuals that help brands stand out. 
              From strategic design systems to impactful campaigns, we create 
              visual solutions that drive results.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild size="sm" variant="outline" className="border-sidebar-border hover:border-sidebar-primary">
                <a href="/#contact">Start a Project</a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <a href="/portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { href: "/#work", label: "Portfolio" },
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/#contact", label: "Contact" }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="block text-muted-foreground hover:text-sidebar-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <nav className="space-y-3">
              {[
                "Brand Identity",
                "Print Design", 
                "Web Visuals",
                "Packaging",
                "Social Media"
              ].map((service) => (
                <span 
                  key={service}
                  className="block text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pt-8 border-t border-sidebar-border/30">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-sidebar-primary" />
                <a href="mailto:hello@yourbrand.design" className="hover:text-sidebar-primary transition-colors duration-300">
                  hello@yourbrand.design
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-sidebar-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-sidebar-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Behance, href: "#", label: "Behance" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-all duration-300 flex items-center justify-center text-sidebar-foreground hover:text-sidebar-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest design insights and project updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-sidebar-accent border border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sidebar-primary transition-colors duration-300"
              />
              <Button size="sm" className="bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-sidebar-border/30">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Your Brand — Graphic Designer</p>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-sidebar-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-sidebar-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
