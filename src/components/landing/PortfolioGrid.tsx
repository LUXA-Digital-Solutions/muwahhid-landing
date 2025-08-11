import { useState } from "react";
import { ArrowUpRight, Eye, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import p1 from "@/assets/portfolio-01.jpg";
import p2 from "@/assets/portfolio-02.jpg";
import p3 from "@/assets/portfolio-03.jpg";
import p4 from "@/assets/portfolio-04.jpg";
import p5 from "@/assets/portfolio-05.jpg";
import p6 from "@/assets/portfolio-06.jpg";

// Enhanced portfolio data with more details
const items = [
  {
    id: 1,
    src: p1,
    title: "Poster — Bold Geometry",
    category: "Print Design",
    year: "2024",
    description: "A series of geometric posters exploring bold shapes and vibrant colors for a contemporary art exhibition.",
    tags: ["Typography", "Geometry", "Print"]
  },
  {
    id: 2,
    src: p2,
    title: "Branding — Business Cards",
    category: "Brand Identity",
    year: "2024",
    description: "Complete business card system with multiple variations and premium finishes for a tech startup.",
    tags: ["Branding", "Print", "Identity"]
  },
  {
    id: 3,
    src: p3,
    title: "Album Cover — Abstract",
    category: "Music Design",
    year: "2023",
    description: "Abstract album artwork featuring organic shapes and a sophisticated color palette for an indie band.",
    tags: ["Music", "Abstract", "Digital"]
  },
  {
    id: 4,
    src: p4,
    title: "Web Hero — CTA Focus",
    category: "Web Design",
    year: "2024",
    description: "Hero section design with compelling call-to-action elements for a SaaS company landing page.",
    tags: ["Web", "UI/UX", "Digital"]
  },
  {
    id: 5,
    src: p5,
    title: "Poster Series — System",
    category: "Print Design",
    year: "2023",
    description: "Cohesive poster series maintaining visual consistency while exploring different themes and layouts.",
    tags: ["Series", "Print", "System"]
  },
  {
    id: 6,
    src: p6,
    title: "Identity — Guidelines",
    category: "Brand Identity",
    year: "2023",
    description: "Comprehensive brand identity system with detailed guidelines for consistent application across all touchpoints.",
    tags: ["Branding", "Guidelines", "System"]
  },
];

const PortfolioGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-16 md:py-20 lg:py-28" aria-labelledby="work-heading">
      <div className="container px-4 sm:px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            id="work-heading" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Selected Work
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A curated collection of recent projects showcasing strategic design thinking, 
            technical expertise, and creative innovation across various mediums.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item) => (
            <article 
              key={item.id}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-secondary/30"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.src}
                  alt={`${item.title} — graphic design portfolio piece`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground border border-border/20">
                    {item.category}
                  </span>
                </div>

                {/* View Detail Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white/90 hover:bg-white text-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 w-full sm:w-auto"
                  >
                    <a href={`/portfolio/${item.id}`} className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">View</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-2" />
                </div>
                
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Tag className="h-3 w-3" />
                    <span className="hidden sm:inline">{item.category}</span>
                    <span className="sm:hidden">{item.category.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={cn(
                "absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent transition-all duration-500",
                hoveredId === item.id ? "border-secondary/50" : ""
              )} />
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-2 border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold"
          >
            <a href="/portfolio" className="flex items-center justify-center gap-2">
              View All Projects
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
