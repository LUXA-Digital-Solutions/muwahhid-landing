import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PortfolioGrid from "@/components/landing/PortfolioGrid";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Muwahhid",
    description:
      "Modern graphic designer specializing in branding, posters, and web visuals.",
    url: typeof window !== "undefined" ? window.location.origin : "/",
    areaServed: "Worldwide",
    sameAs: [] as string[],
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-forest">
      <Helmet>
        <title>Graphic Designer Portfolio | Muwahhid</title>
        <meta
          name="description"
          content="Modern graphic designer for branding, posters, and web visuals. Explore selected works and start your project with Muwahhid."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <motion.section
          id="services"
          className="py-16 md:py-20 bg-gradient-to-br from-brand-cream via-brand-cream to-brand-olive/5"
          aria-labelledby="services-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-forest mb-4"
              >
                Our{" "}
                <span className="bg-gradient-to-r from-brand-green to-brand-olive bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-lg md:text-xl text-brand-forest/80 max-w-3xl mx-auto">
                From brand identities to campaign visuals, we deliver systems
                that scale and communicate clearly across touchpoints.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-brand-forest/10 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-olive rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h3 className="font-bold text-xl text-brand-forest mb-4">
                  Brand Identity
                </h3>
                <p className="text-brand-forest/70 leading-relaxed">
                  Logos, color systems, typography, and comprehensive brand
                  guidelines that ensure consistency across all touchpoints.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-forest/10 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-olive to-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="font-bold text-xl text-brand-forest mb-4">
                  Print & Posters
                </h3>
                <p className="text-brand-forest/70 leading-relaxed">
                  Editorial layouts, poster series, packaging designs, and print
                  materials that make lasting impressions.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-forest/10 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-olive rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <h3 className="font-bold text-xl text-brand-forest mb-4">
                  Web Visuals
                </h3>
                <p className="text-brand-forest/70 leading-relaxed">
                  Landing visuals, hero graphics, campaign assets, and digital
                  designs that engage and convert.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <PortfolioGrid />

        <motion.section
          id="about"
          className="py-16 md:py-20 bg-gradient-to-br from-brand-olive/5 via-brand-cream to-brand-cream"
          aria-labelledby="about-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2
                  id="about-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-forest mb-6"
                >
                  About{" "}
                  <span className="bg-gradient-to-r from-brand-green to-brand-olive bg-clip-text text-transparent">
                    Muwahhid
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-brand-forest/80 leading-relaxed mb-6">
                  We blend Swiss precision with contemporary aesthetics,
                  building visual systems that are as strategic as they are
                  striking. Our approach combines timeless design principles
                  with modern innovation.
                </p>
                <p className="text-base text-brand-forest/70 leading-relaxed">
                  Every project is an opportunity to create something
                  extraordinary that not only looks beautiful but also serves a
                  strategic purpose for your brand.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-forest/10 bg-white/80 backdrop-blur-sm p-8 shadow-lg">
                <h3 className="font-bold text-xl text-brand-forest mb-6">
                  Our Expertise
                </h3>
                <ul className="space-y-4 text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-forest/80">
                      6+ years experience in brand and visual design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-forest/80">
                      Cross-discipline: print, digital, motion, and packaging
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-forest/80">
                      Professional toolset: Figma, Adobe CC, Webflow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-forest/80">
                      Award-winning designs recognized for excellence
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-16 md:py-20 bg-gradient-to-br from-brand-forest to-brand-forest/95 text-brand-cream"
          aria-labelledby="contact-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 sm:px-6 text-center">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Let's build something{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-olive bg-clip-text text-transparent">
                extraordinary
              </span>
            </h2>
            <p className="text-lg md:text-xl text-brand-cream/80 max-w-2xl mx-auto mb-8">
              Tell us about your project and timeline. We'll get back within 24
              hours with a personalized proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-green to-brand-olive hover:from-brand-green/90 hover:to-brand-olive/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
              >
                <a
                  href="mailto:hello@muwahhid.design"
                  aria-label="Email Muwahhid"
                >
                  Start Your Project
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-brand-cream/30 hover:border-brand-green hover:bg-brand-green/5 text-brand-cream hover:text-brand-green transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                <a href="#work" aria-label="See more work">
                  View Portfolio
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
