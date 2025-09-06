import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  ArrowRight,
  Eye,
  Palette,
  Layers,
  Target,
  Clock,
  Users,
  Award,
  Play,
  Pause,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import portfolio01 from "@/assets/portfolio-01.jpg";
import portfolio02 from "@/assets/portfolio-02.jpg";
import portfolio03 from "@/assets/portfolio-03.jpg";
import portfolio04 from "@/assets/portfolio-04.jpg";
import portfolio05 from "@/assets/portfolio-05.jpg";
import portfolio06 from "@/assets/portfolio-06.jpg";

interface PortfolioProject {
  id: number;
  title: string;
  client: string;
  duration: string;
  team: string;
  awards: string;
  challenge: string;
  solution: string;
  process: string[];
  tools: string[];
  images: string[];
  stats: string;
  category: string;
  year: string;
  description: string;
}

const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "Brand Identity System",
    client: "TechStart Inc.",
    duration: "3 weeks",
    team: "Solo Designer",
    awards: "Design Excellence Award 2024",
    challenge:
      "Create a comprehensive brand identity that reflects the company's innovative approach while maintaining professional credibility in the competitive tech market.",
    solution:
      "Developed a modern, scalable brand system featuring a geometric logo that represents connectivity and growth, accompanied by a sophisticated color palette and typography hierarchy that ensures consistency across all touchpoints.",
    process: [
      "Discovery & Research: Analyzed market trends and competitor positioning",
      "Concept Development: Created multiple logo concepts and visual directions",
      "Refinement: Iterated on feedback to perfect the final design",
      "Implementation: Developed comprehensive brand guidelines and assets",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign"],
    images: [portfolio01, portfolio02, portfolio03],
    stats: "Brand recognition increased by 40% within 6 months",
    category: "Branding",
    year: "2024",
    description:
      "Complete business card system with multiple variations and premium finishes for a tech startup. The project included primary and secondary card designs, die-cut options, and various printing specifications.",
  },
  {
    id: 2,
    title: "Digital Marketing Campaign",
    client: "Fashion Forward",
    duration: "6 weeks",
    team: "3 designers",
    awards: "Marketing Excellence Award",
    challenge:
      "Design a cohesive digital marketing campaign that maintains brand consistency while adapting to different social media platforms and formats.",
    solution:
      "Created a flexible design system with modular components that could be easily adapted for various platforms, ensuring visual consistency while optimizing for each medium's unique requirements.",
    process: [
      "Strategy Development: Defined campaign goals and target audience",
      "Visual System Creation: Designed modular components and templates",
      "Platform Adaptation: Optimized designs for each social media platform",
      "Asset Delivery: Provided organized files and usage guidelines",
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
    images: [portfolio02, portfolio03, portfolio01],
    stats: "Engagement increased by 65% across all platforms",
    category: "Digital",
    year: "2024",
    description:
      "Comprehensive digital marketing campaign with social media graphics, email templates, and web banners.",
  },
  {
    id: 3,
    title: "Product Packaging Design",
    client: "EcoBeauty",
    duration: "4 weeks",
    team: "2 designers",
    awards: "Packaging Innovation Award",
    challenge:
      "Design sustainable packaging that balances environmental responsibility with luxury appeal and functional requirements.",
    solution:
      "Created packaging using recycled materials with innovative folding techniques that reduced material waste while maintaining premium aesthetics and protecting product integrity.",
    process: [
      "Material Research: Investigated sustainable packaging options",
      "Structural Design: Developed innovative folding and assembly methods",
      "Visual Design: Created luxury aesthetic using sustainable materials",
      "Prototyping: Built and tested multiple packaging iterations",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "3D Modeling Software",
      "Physical Prototyping",
    ],
    images: [portfolio03, portfolio01, portfolio02],
    stats: "Sales increased by 28% with new packaging design",
    category: "Packaging",
    year: "2024",
    description:
      "Innovative packaging design for a premium skincare line, focusing on sustainability and luxury appeal.",
  },
];

const PortfolioDetail = ({ projectId }: { projectId: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("challenge");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const project = portfolioData.find((p) => p.id === projectId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % (project?.images.length || 1)
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, project?.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (project?.images.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (project?.images.length || 1) - 1 : prev - 1
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shareProject = () => {
    if (navigator.share) {
      navigator.share({
        title: project?.title,
        text: project?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
    setShowShareMenu(false);
  };

  const downloadProject = () => {
    // This would typically download project assets or a PDF
    console.log("Download project assets");
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-cream text-brand-forest flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-forest mb-4">
            Project Not Found
          </h1>
          <p className="text-brand-forest/80 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-brand-olive text-white px-6 py-3 rounded-lg hover:from-brand-green/90 hover:to-brand-olive/90 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream text-brand-forest">
      {/* Header */}
      <motion.div
        ref={heroRef}
        className="relative bg-gradient-to-b from-brand-cream via-brand-cream/95 to-brand-olive/10 border-b border-brand-forest/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-brand-olive/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-brand-green/5 to-brand-olive/5 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button and Actions */}
            <div className="flex items-center justify-between mb-8">
              <motion.a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-brand-forest/70 hover:text-brand-green transition-colors duration-300 group"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </motion.a>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isLiked
                      ? "bg-red-100 text-red-600"
                      : "bg-white/80 text-brand-forest/70 hover:text-red-500"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Like project"
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                </motion.button>

                <motion.button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-full bg-white/80 text-brand-forest/70 hover:text-brand-green transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Share project"
                >
                  <Share2 className="h-4 w-4" />
                </motion.button>

                <motion.button
                  onClick={downloadProject}
                  className="p-2 rounded-full bg-white/80 text-brand-forest/70 hover:text-brand-green transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Download project"
                >
                  <Download className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Share Menu */}
          {showShareMenu && (
            <motion.div
              className="absolute top-20 right-4 bg-white rounded-lg shadow-xl border border-brand-forest/20 p-3 z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <button
                onClick={shareProject}
                className="w-full text-left px-3 py-2 text-sm text-brand-forest hover:bg-brand-cream rounded transition-colors duration-200"
              >
                Copy Link
              </button>
            </motion.div>
          )}

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium bg-brand-olive/10 text-brand-forest border border-brand-olive/20">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 text-brand-forest/70">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-brand-forest/70">
              <Clock className="h-4 w-4" />
              {project.duration}
            </span>
            <span className="inline-flex items-center gap-1 text-brand-forest/70">
              <Users className="h-4 w-4" />
              {project.team}
            </span>
            {project.awards && (
              <span className="inline-flex items-center gap-1 text-brand-green">
                <Award className="h-4 w-4" />
                {project.awards}
              </span>
            )}
          </div>

          {/* Title and Description */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-forest mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-forest/80 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-forest/10">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-brand-green" />
              <h3 className="font-semibold text-brand-forest">
                Project Results
              </h3>
            </div>
            <p className="text-brand-forest/80">{project.stats}</p>
          </div>
        </div>
      </motion.div>

      <div className="container px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-2xl bg-brand-forest/5">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 md:h-[500px] object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brand-forest p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brand-forest p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-brand-forest/80 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>

                {/* Auto-play Controls */}
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="bg-brand-forest/80 hover:bg-brand-forest text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={
                      isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                    }
                  >
                    {isAutoPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 mt-6 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-brand-green scale-110"
                        : "border-brand-forest/20 hover:border-brand-olive"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Challenge */}
              <section ref={(el) => (sectionRefs.current["challenge"] = el)}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-6 flex items-center gap-3">
                  <Target className="h-6 w-6 text-brand-green" />
                  The Challenge
                </h2>
                <p className="text-brand-forest/80 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </section>

              {/* Solution */}
              <section ref={(el) => (sectionRefs.current["solution"] = el)}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-6 flex items-center gap-3">
                  <Palette className="h-6 w-6 text-brand-green" />
                  Our Solution
                </h2>
                <p className="text-brand-forest/80 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </section>

              {/* Process */}
              <section ref={(el) => (sectionRefs.current["process"] = el)}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-6 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-brand-green" />
                  Our Process
                </h2>
                <div className="space-y-4">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-green to-brand-olive text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-brand-forest/80 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tools Used */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-forest/10">
              <h3 className="font-semibold text-brand-forest mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5 text-brand-green" />
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-olive/10 text-brand-forest rounded-lg text-sm border border-brand-olive/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-forest/10">
              <h3 className="font-semibold text-brand-forest mb-4 flex items-center gap-2">
                <Eye className="h-5 w-5 text-brand-green" />
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="aspect-square rounded-lg overflow-hidden border border-brand-forest/20 hover:border-brand-green transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand-green to-brand-olive text-white rounded-2xl p-6 text-center">
              <h3 className="font-semibold mb-3">
                Ready to start your project?
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Let's create something extraordinary together.
              </p>
              <a
                href="mailto:hello@muwahhid.design"
                className="inline-flex items-center gap-2 bg-white text-brand-forest px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
              >
                Start a Project
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
