import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PortfolioGrid from "@/components/landing/PortfolioGrid";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Your Brand",
    description:
      "Modern graphic designer specializing in branding, posters, and web visuals.",
    url: typeof window !== "undefined" ? window.location.origin : "/",
    areaServed: "Worldwide",
    sameAs: [] as string[],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Graphic Designer Portfolio | Your Brand</title>
        <meta
          name="description"
          content="Modern graphic designer for branding, posters, and web visuals. Explore selected works and start your project with Your Brand."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <section id="services" className="py-12 md:py-16" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading" className="text-2xl font-bold md:text-3xl">Services</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              From brand identities to campaign visuals, I deliver systems that scale and communicate clearly across touchpoints.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 elevated">
                <h3 className="font-semibold">Brand Identity</h3>
                <p className="mt-2 text-sm text-muted-foreground">Logos, color systems, typography, and guidelines.</p>
              </div>
              <div className="rounded-lg border bg-card p-6 elevated">
                <h3 className="font-semibold">Print & Posters</h3>
                <p className="mt-2 text-sm text-muted-foreground">Editorial layouts, poster series, and packaging.</p>
              </div>
              <div className="rounded-lg border bg-card p-6 elevated">
                <h3 className="font-semibold">Web Visuals</h3>
                <p className="mt-2 text-sm text-muted-foreground">Landing visuals, hero graphics, and campaign assets.</p>
              </div>
            </div>
          </div>
        </section>

        <PortfolioGrid />

        <section id="about" className="py-12 md:py-16" aria-labelledby="about-heading">
          <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 id="about-heading" className="text-2xl font-bold md:text-3xl">About</h2>
              <p className="mt-3 text-muted-foreground">
                I blend Swiss precision with contemporary aesthetics, building visual systems that are as strategic as they are striking.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 elevated">
              <ul className="grid gap-3 text-sm">
                <li>• 6+ years experience in brand and visual design</li>
                <li>• Cross-discipline: print, digital, motion</li>
                <li>• Toolset: Figma, Adobe CC, Webflow</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16" aria-labelledby="contact-heading">
          <div className="container text-center">
            <h2 id="contact-heading" className="text-2xl font-bold md:text-3xl">Let’s build something bold</h2>
            <p className="mt-2 text-muted-foreground">Tell me about your project and timeline. I’ll get back within 24 hours.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="mailto:hello@yourbrand.design" aria-label="Email Your Brand">Email Me</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#work" aria-label="See more work">See Work</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
