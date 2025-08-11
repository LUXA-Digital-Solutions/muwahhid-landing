const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border" aria-label="Footer">
      <div className="container py-8 md:py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Your Brand — Graphic Designer</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-secondary transition-colors">Work</a>
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
