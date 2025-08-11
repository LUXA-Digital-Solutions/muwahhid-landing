import { useState } from "react";
import { ArrowLeft, Calendar, Tag, ExternalLink, ArrowRight, Eye, Palette, Layers, Target } from "lucide-react";
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
    results: "Successfully created a cohesive poster series that enhanced the gallery's visual identity and improved visitor engagement by 40%."
  },
  2: {
    id: 2,
    title: "Branding — Business Cards",
    category: "Brand Identity",
    year: "2024",
    client: "TechStart Inc.",
    duration: "4 weeks",
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
    results: "Delivered a professional business card system that became a key element of the company's brand identity and helped establish credibility with potential investors and clients."
  }
};

interface PortfolioDetailProps {
  projectId: number;
}

const PortfolioDetail = ({ projectId }: PortfolioDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = portfolioData[projectId as keyof typeof portfolioData];

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/#work">Back to Portfolio</a>
        </Button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-background to-muted/20 border-b border-border">
        <div className="container py-12">
          <Button 
            asChild 
            variant="ghost" 
            className="mb-8 hover:bg-background/80"
          >
            <a href="/#work" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </a>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                  {project.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.year}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground border border-border/20">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Challenge & Solution */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Challenge</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl font-semibold text-foreground">Solution</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Layers className="h-6 w-6 text-secondary" />
                Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">Results</h3>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                <p className="text-lg text-foreground leading-relaxed">{project.results}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tools Used */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tools Used</h3>
              <div className="space-y-2">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative overflow-hidden rounded-lg border-2 transition-all duration-300",
                      currentImageIndex === index 
                        ? "border-secondary" 
                        : "border-border/20 hover:border-secondary/50"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ready to start your project?</h3>
              <p className="text-muted-foreground mb-4">Let's discuss how we can bring your vision to life.</p>
              <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                <a href="/#contact">Start a Project</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
