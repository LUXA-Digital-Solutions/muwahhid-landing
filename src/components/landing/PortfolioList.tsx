import { useState, useMemo, useEffect } from "react";
import { Search, Filter, Grid3X3, List, ArrowUpRight, Eye, Calendar, Tag, Star, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import p1 from "@/assets/portfolio-01.jpg";
import p2 from "@/assets/portfolio-02.jpg";
import p3 from "@/assets/portfolio-03.jpg";
import p4 from "@/assets/portfolio-04.jpg";
import p5 from "@/assets/portfolio-05.jpg";
import p6 from "@/assets/portfolio-06.jpg";

// Portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  team: string;
  duration: string;
  awards?: string;
  stats: {
    engagement: string;
    production: string;
    recognition: string;
  };
}

// Enhanced portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Poster — Bold Geometry",
    category: "Print Design",
    year: "2024",
    client: "Contemporary Art Gallery",
    description: "A series of geometric posters exploring bold shapes and vibrant colors for a contemporary art exhibition.",
    tags: ["Typography", "Geometry", "Print", "Exhibition"],
    image: p1,
    featured: true,
    team: "Solo Designer",
    duration: "3 weeks",
    awards: "Design Excellence Award 2024",
    stats: { engagement: "40%", production: "50+", recognition: "3 Awards" }
  },
  {
    id: 2,
    title: "Branding — Business Cards",
    category: "Brand Identity",
    year: "2024",
    client: "TechStart Inc.",
    description: "Complete business card system with multiple variations and premium finishes for a tech startup.",
    tags: ["Branding", "Print", "Identity", "Business Cards"],
    image: p2,
    featured: true,
    team: "Design Team (3)",
    duration: "4 weeks",
    awards: "Best Brand Identity 2024",
    stats: { engagement: "65%", production: "1000+", recognition: "2 Awards" }
  },
  {
    id: 3,
    title: "Album Cover — Abstract",
    category: "Music Design",
    year: "2023",
    client: "Indie Band Collective",
    description: "Abstract album artwork featuring organic shapes and a sophisticated color palette for an indie band.",
    tags: ["Music", "Abstract", "Digital", "Album Art"],
    image: p3,
    featured: false,
    team: "Solo Designer",
    duration: "2 weeks",
    stats: { engagement: "25%", production: "1", recognition: "1 Award" }
  },
  {
    id: 4,
    title: "Web Hero — CTA Focus",
    category: "Web Design",
    year: "2024",
    client: "SaaS Company",
    description: "Hero section design with compelling call-to-action elements for a SaaS company landing page.",
    tags: ["Web", "UI/UX", "Digital", "Landing Page"],
    image: p4,
    featured: true,
    team: "Design Team (2)",
    duration: "3 weeks",
    awards: "Web Design Excellence",
    stats: { engagement: "55%", production: "1", recognition: "1 Award" }
  },
  {
    id: 5,
    title: "Poster Series — System",
    category: "Print Design",
    year: "2023",
    client: "Design Festival",
    description: "Cohesive poster series maintaining visual consistency while exploring different themes and layouts.",
    tags: ["Series", "Print", "System", "Festival"],
    image: p5,
    featured: false,
    team: "Solo Designer",
    duration: "5 weeks",
    stats: { engagement: "30%", production: "25", recognition: "0 Awards" }
  },
  {
    id: 6,
    title: "Identity — Guidelines",
    category: "Brand Identity",
    year: "2023",
    client: "Corporate Client",
    description: "Comprehensive brand identity system with detailed guidelines for consistent application across all touchpoints.",
    tags: ["Branding", "Guidelines", "System", "Corporate"],
    image: p6,
    featured: true,
    team: "Design Team (4)",
    duration: "6 weeks",
    awards: "Brand Excellence Award",
    stats: { engagement: "70%", production: "1", recognition: "2 Awards" }
  },
  {
    id: 7,
    title: "Packaging — Product Design",
    category: "Product Design",
    year: "2023",
    client: "Eco Brand",
    description: "Sustainable packaging design that balances environmental responsibility with visual appeal and functionality.",
    tags: ["Packaging", "Product", "Sustainable", "Eco-friendly"],
    image: p1,
    featured: false,
    team: "Design Team (2)",
    duration: "4 weeks",
    stats: { engagement: "45%", production: "500+", recognition: "1 Award" }
  },
  {
    id: 8,
    title: "Social Media — Campaign",
    category: "Digital Marketing",
    year: "2024",
    client: "Fashion Brand",
    description: "Comprehensive social media campaign with consistent visual language across multiple platforms.",
    tags: ["Social Media", "Campaign", "Digital", "Fashion"],
    image: p2,
    featured: false,
    team: "Design Team (3)",
    duration: "3 weeks",
    stats: { engagement: "60%", production: "15", recognition: "0 Awards" }
  }
];

const categories = ["All", "Print Design", "Brand Identity", "Music Design", "Web Design", "Product Design", "Digital Marketing"];
const years = ["All", "2024", "2023", "2022"];

const PortfolioList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter and search logic
  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesYear = selectedYear === "All" || item.year === selectedYear;
      
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear]);

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Enhanced Header with Background Elements */}
      <div className="relative bg-gradient-to-b from-background via-background/95 to-muted/20 border-b border-border overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container py-12 md:py-16 px-4 sm:px-6 relative z-10">
          <div className={cn(
            "text-center mb-8 md:mb-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore a diverse collection of projects showcasing strategic design thinking, 
              technical expertise, and creative innovation across various mediums and industries.
            </p>
          </div>

          {/* Enhanced Search and Filters */}
          <div className={cn(
            "max-w-4xl mx-auto space-y-4 md:space-y-6 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground transition-colors group-focus-within:text-secondary" />
              <Input
                type="text"
                placeholder="Search projects, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 md:pl-12 pr-4 py-4 md:py-6 text-base md:text-lg border-2 border-border/20 focus:border-secondary transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 border-2 border-border hover:border-secondary transition-all duration-300 w-full sm:w-auto justify-center group"
                >
                  <Filter className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  Filters
                </Button>
                
                {showFilters && (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full sm:w-auto px-3 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-foreground focus:border-secondary transition-colors duration-300 text-sm md:text-base"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full sm:w-auto px-3 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-foreground focus:border-secondary transition-colors duration-300 text-sm md:text-base"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 border border-border rounded-lg p-1 w-full sm:w-auto justify-center bg-background/50 backdrop-blur-sm">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0 transition-all duration-300"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0 transition-all duration-300"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center text-muted-foreground text-sm md:text-base">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredItems.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {featuredItems.map((item, index) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  viewMode={viewMode} 
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">All Projects</h2>
          
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {regularItems.map((item, index) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  viewMode={viewMode} 
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {regularItems.map((item, index) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  viewMode={viewMode} 
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="container py-16 md:py-20 text-center px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <Search className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground mx-auto mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">No projects found</h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedYear("All");
              }}
              className="w-full sm:w-auto"
            >
              Clear all filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Portfolio Card Component
const PortfolioCard = ({ item, viewMode, delay = 0 }: { item: PortfolioItem; viewMode: "grid" | "list"; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (viewMode === "list") {
    return (
      <article className={cn(
        "group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm hover:border-secondary/30 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]",
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="flex-shrink-0 w-full sm:w-32 h-24 sm:h-24 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">
              {item.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-2" />
          </div>
          
          <p className="text-muted-foreground mb-3 line-clamp-2 text-sm md:text-base">{item.description}</p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {item.year}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3 w-3" />
              {item.team}
            </span>
          </div>
        </div>
        
        <Button asChild size="sm" className="flex-shrink-0 w-full sm:w-auto group/btn">
          <a href={`/portfolio/${item.id}`} className="flex items-center justify-center gap-2">
            <Eye className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
            View
          </a>
        </Button>
      </article>
    );
  }

  return (
    <article className={cn(
      "group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-secondary/30",
      "transition-all duration-700",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    )}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/90 text-yellow-900 border border-yellow-600/20">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground border border-border/20">
            {item.category}
          </span>
        </div>

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

        {/* Project Meta */}
        <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{item.year}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{item.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {item.tags.slice(0, 2).map((tag: string, index: number) => (
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
    </article>
  );
};

export default PortfolioList;
