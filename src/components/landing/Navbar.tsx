import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-sidebar text-sidebar-foreground border-b border-sidebar-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm" style={{ background: "var(--gradient-hero)" }} />
          <span>Your Brand</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#work" className="hover:text-secondary transition-colors">Work</a>
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact" aria-label="Start a project">Start a Project</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
