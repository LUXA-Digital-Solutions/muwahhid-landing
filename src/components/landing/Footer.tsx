import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-forest text-brand-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-forest via-brand-forest to-brand-green/20" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-brand-olive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10">
                <img src="/assets/AM_LW.png" alt="Muwahhid Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-brand-cream">Muwahhid</span>
            </div>
            <p className="text-brand-cream/80 text-lg mb-6 max-w-md">
              Crafting exceptional graphic designs that elevate brands and inspire audiences. 
              Let's create something extraordinary together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300" aria-label="Dribbble">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-cream mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#work", label: "Portfolio" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-brand-cream mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Brand Identity",
                "Print Design",
                "Digital Design",
                "Packaging",
                "Web Graphics"
              ].map((service) => (
                <li key={service}>
                  <span className="text-brand-cream/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Newsletter Section */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-brand-green/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-brand-cream mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-green" />
                  <a href="mailto:hello@muwahhid.design" className="text-brand-cream/80 hover:text-brand-green transition-colors duration-300">
                    hello@muwahhid.design
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-green" />
                  <span className="text-brand-cream/80">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-green" />
                  <span className="text-brand-cream/80">+234 703 757 4762</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-brand-cream mb-6">Stay Updated</h3>
              <p className="text-brand-cream/80 mb-4">
                Subscribe to our newsletter for design insights and project updates.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-brand-cream/10 border border-brand-green/20 rounded-lg text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-green focus:bg-brand-cream/20 transition-all duration-300"
                />
                <Button className="bg-gradient-to-r from-brand-green to-brand-olive hover:from-brand-green/90 hover:to-brand-olive/90 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-brand-green/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-brand-cream/70 text-sm">
            © 2024 Muwahhid. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-cream/70 hover:text-brand-green transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-brand-green to-brand-olive text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
