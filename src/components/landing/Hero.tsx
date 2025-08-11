import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

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
        "relative overflow-hidden bg-hero",
        "pt-24 pb-16 md:pt-28 md:pb-20"
      )}
      aria-label="Hero"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Modern • Minimal • Impactful
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Graphic Designer crafting bold, modern visuals
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            I help brands stand out with clean systems, strong typography, and purposeful color. Explore selected works below.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-md glow">
              <a href="#work" aria-label="View portfolio">View Portfolio</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="shadow-md">
              <a href="#contact" aria-label="Contact designer">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
    </section>
  );
};

export default Hero;
