import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Calendar, Tag, ExternalLink, ArrowRight, Eye, Palette, Layers, Target, Star, Clock, Users, Award, ChevronDown, ChevronUp, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import p1 from "@/assets/portfolio-01.jpg";
import p2 from "@/assets/portfolio-02.jpg";
import p3 from "@/assets/portfolio-03.jpg";

// Enhanced portfolio data with full details
const portfolioData = {
  1: {
    id: 1,
    title: "Poster — Bold Geometry",
    category: "Print Design",
    year: "2024",
    client: "Contemporary Art Gallery",
    duration: "3 weeks",
    team: "Solo Designer",
    awards: "Design Excellence Award 2024",
    description: "A series of geometric posters exploring bold shapes and vibrant colors for a contemporary art exhibition. The project focused on creating visual impact through minimalist design principles while maintaining readability and artistic integrity.",
    challenge: "Balancing bold geometric elements with the need for clear information hierarchy and artistic expression.",
    solution: "Developed a systematic approach using consistent geometric patterns, strategic color placement, and careful typography selection to create both visually striking and functionally effective posters.",
    process: [
      "Research and concept development",
      "Geometric pattern exploration",
      "Color palette selection",
      "Typography system design",
      "Layout variations and testing",
      "Final production and quality control"
    ],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
    images: [p1, p2, p3],
    tags: ["Typography", "Geometry", "Print", "Exhibition", "Contemporary Art"],
    results: "Successfully created a cohesive poster series that enhanced the gallery's visual identity and improved visitor engagement by 40%.",
    stats: {
      engagement: "40%",
      production: "50+",
      recognition: "3 Awards"
    }
  },
  2: {
    id: 2,
    title: "Branding — Business Cards",
    category: "Brand Identity",
    year: "2024",
    client: "TechStart Inc.",
    duration: "4 weeks",
    team: "Design Team (3)",
    awards: "Best Brand Identity 2024",
    description: "Complete business card system with multiple variations and premium finishes for a tech startup. The project included primary and secondary card designs, die-cut options, and various printing specifications.",
    challenge: "Creating a business card system that reflected the company's innovative tech focus while maintaining professional credibility and ensuring cost-effective production.",
    solution: "Designed a modular card system with interchangeable elements, premium finishes, and multiple variations that could be produced efficiently while maintaining high quality standards.",
    process: [
      "Brand analysis and positioning",
      "Design concept development",
      "Card layout variations",
      "Material and finish selection",
      "Prototype testing",
      "Production specifications"
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    images: [p2, p1, p3],
    tags: ["Branding", "Print", "Identity", "Business Cards", "Tech"],
    results: "Delivered a professional business card system that became a key element of the company's brand identity and helped establish credibility with potential investors and clients.",
    stats: {
      engagement: "65%",
      production: "1000+",
      recognition: "2 Awards"
    }
  }
};

interface PortfolioDetailProps {
  projectId: number;
}

const PortfolioDetail = ({ projectId }: PortfolioDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const project = portfolioData[projectId as keyof typeof portfolioData];
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!project) {
    return (
      <div className="container py-16 md:py-20 text-center px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/#work">Back to Portfolio</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Hero Header with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/20 border-b border-border">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container py-8 md:py-12 px-4 sm:px-6">
          {/* Back Button */}
          <Button 
            asChild 
            variant="ghost" 
            className={cn(
              "mb-6 md:mb-8 hover:bg-background/80 transition-all duration-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
          >
            <a href="/#work" className="flex items-center gap-2 group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </a>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project Info */}
            <div className={cn(
              "space-y-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              {/* Category & Year Badge */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium bg-secondary/10 text-secondary border border-secondary/20">
                  {project.category}
                </span>
                <span className="text-muted-foreground hidden sm:inline">•</span>
                <span className="text-muted-foreground text-sm md:text-base">{project.year}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-xs text-muted-foreground">Team</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{project.team}</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Duration</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{project.duration}</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-xs text-muted-foreground">Awards</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{project.awards}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={cn(
                      "inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105",
                      "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Image with Enhanced Gallery */}
            <div className={cn(
              "relative group order-first lg:order-last transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm shadow-2xl">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Navigation Controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </>
                )}

                {/* Auto-play Controls */}
                {project.images.length > 1 && (
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <button
                      onClick={toggleAutoPlay}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      {isAutoPlaying ? <Pause className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
                    </button>
                  </div>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-background/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base text-muted-foreground border border-border/20">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105",
                      currentImageIndex === index 
                        ? "border-secondary shadow-lg" 
                        : "border-border/20 hover:border-secondary/50"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-16 md:h-20 object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container px-4 sm:px-6">
          <nav className="flex space-x-1 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: Eye },
              { id: "process", label: "Process", icon: Layers },
              { id: "challenge", label: "Challenge", icon: Target },
              { id: "solution", label: "Solution", icon: Palette },
              { id: "results", label: "Results", icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-300 whitespace-nowrap",
                  activeSection === tab.id
                    ? "text-secondary border-b-2 border-secondary bg-secondary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-12 md:py-20 px-4 sm:px-6">
        {/* Overview Section */}
        <section 
          ref={(el) => (sectionRefs.current.overview = el)}
          className={cn(
            "mb-20 transition-all duration-700",
            activeSection === "overview" ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              
              {/* Project Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border border-secondary/20">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{project.stats.engagement}</div>
                  <div className="text-sm text-muted-foreground">Engagement Increase</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{project.stats.production}</div>
                  <div className="text-sm text-muted-foreground">Units Produced</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border border-secondary/20">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{project.stats.recognition}</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Tools Used</h3>
                <div className="space-y-3">
                  {project.tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-sm md:text-base">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Meta */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Details</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team:</span>
                    <span className="font-medium">{project.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Awards:</span>
                    <span className="font-medium">{project.awards}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          ref={(el) => (sectionRefs.current.process = el)}
          className={cn(
            "mb-20 transition-all duration-700",
            activeSection === "process" ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {project.process.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "group relative p-6 md:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-secondary/30",
                  "hover:bg-gradient-to-br hover:from-secondary/5 hover:to-primary/5"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-secondary to-primary text-white text-lg md:text-xl font-bold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Step {index + 1}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section 
          ref={(el) => (sectionRefs.current.challenge = el)}
          className={cn(
            "mb-20 transition-all duration-700",
            activeSection === "challenge" ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Challenge & Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section 
          ref={(el) => (sectionRefs.current.results = el)}
          className={cn(
            "mb-20 transition-all duration-700",
            activeSection === "results" ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Results & Impact</h2>
          <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-secondary/20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Project Success</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{project.results}</p>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{project.stats.engagement}</div>
                  <div className="text-sm text-muted-foreground">Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{project.stats.production}</div>
                  <div className="text-sm text-muted-foreground">Units Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{project.stats.recognition}</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to start your project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same level of creativity and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300">
                <a href="/#contact">Start a Project</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 hover:border-secondary hover:bg-secondary/5 transition-all duration-300">
                <a href="/portfolio">View More Work</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioDetail;
