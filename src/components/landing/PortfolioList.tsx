import { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  ArrowUpRight,
  Eye,
  Calendar,
  Tag,
  Star,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import portfolio01 from "@/assets/portfolio-01.jpg";
import portfolio02 from "@/assets/portfolio-02.jpg";
import portfolio03 from "@/assets/portfolio-03.jpg";
import portfolio04 from "@/assets/portfolio-04.jpg";
import portfolio05 from "@/assets/portfolio-05.jpg";
import portfolio06 from "@/assets/portfolio-06.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  featured: boolean;
  team: string;
  duration: string;
  awards: string;
  stats: string;
  image: string;
}

const PortfolioList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("PortfolioList - Component mounted");
    setIsVisible(true);
  }, []);

  const portfolioItems = useMemo(
    () => [
      {
        id: 1,
        title: "Brand Identity System",
        category: "Branding",
        year: "2024",
        description:
          "Complete brand identity system including logo, color palette, typography, and comprehensive guidelines for a tech startup.",
        tags: ["Branding", "Identity", "Guidelines"],
        featured: true,
        team: "Solo Designer",
        duration: "3 weeks",
        awards: "Design Excellence Award 2024",
        stats: "Brand recognition +40%",
        image: portfolio01,
      },
      {
        id: 2,
        title: "Digital Marketing Campaign",
        category: "Digital",
        year: "2024",
        description:
          "Comprehensive digital marketing campaign with social media graphics, email templates, and web banners.",
        tags: ["Digital", "Marketing", "Social Media"],
        featured: false,
        team: "3 designers",
        duration: "6 weeks",
        awards: "Marketing Excellence",
        stats: "Engagement +65%",
        image: portfolio02,
      },
      {
        id: 3,
        title: "Product Packaging Design",
        category: "Packaging",
        year: "2024",
        description:
          "Innovative packaging design for a premium skincare line, focusing on sustainability and luxury appeal.",
        tags: ["Packaging", "Sustainability", "Luxury"],
        featured: true,
        team: "2 designers",
        duration: "4 weeks",
        awards: "Packaging Innovation",
        stats: "Sales +28%",
        image: portfolio03,
      },
      {
        id: 4,
        title: "Website Redesign",
        category: "Web",
        year: "2024",
        description:
          "Complete website redesign for a financial services company, improving user experience and conversion rates.",
        tags: ["Web", "UI/UX", "Finance"],
        featured: false,
        team: "4 designers",
        duration: "8 weeks",
        awards: "Web Design Award",
        stats: "Conversion +45%",
        image: portfolio04,
      },
      {
        id: 5,
        title: "Print Advertising",
        category: "Print",
        year: "2023",
        description:
          "Series of print advertisements for a retail brand, maintaining consistency across multiple formats and sizes.",
        tags: ["Print", "Advertising", "Retail"],
        featured: false,
        team: "Solo Designer",
        duration: "2 weeks",
        awards: "Print Excellence",
        stats: "Response +32%",
        image: portfolio05,
      },
      {
        id: 6,
        title: "Social Media Graphics",
        category: "Social",
        year: "2023",
        description:
          "Comprehensive social media graphics package including posts, stories, and profile optimization for various platforms.",
        tags: ["Social Media", "Graphics", "Branding"],
        featured: true,
        team: "2 designers",
        duration: "5 weeks",
        awards: "Social Media Award",
        stats: "Reach +55%",
        image: portfolio06,
      },
    ],
    []
  );

  const categories = useMemo(
    () => ["All", "Branding", "Digital", "Packaging", "Web", "Print", "Social"],
    []
  );
  const years = useMemo(() => ["All", "2024", "2023", "2022"], []);

  const filteredItems = useMemo(() => {
    const filtered = portfolioItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "" ||
        selectedCategory === "All" ||
        item.category === selectedCategory;
      const matchesYear =
        selectedYear === "" ||
        selectedYear === "All" ||
        item.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });

    console.log("PortfolioList - filteredItems:", filtered);
    console.log("PortfolioList - portfolioItems:", portfolioItems);
    console.log("PortfolioList - searchTerm:", searchTerm);
    console.log("PortfolioList - selectedCategory:", selectedCategory);
    console.log("PortfolioList - selectedYear:", selectedYear);

    return filtered;
  }, [searchTerm, selectedCategory, selectedYear, portfolioItems]);

  const EmptyState = () => (
    <div className="text-center py-16 md:py-24">
      <Search className="h-12 w-12 md:h-16 md:w-16 text-brand-forest/60 mx-auto mb-4 md:mb-6" />
      <h3 className="text-lg md:text-xl font-semibold text-brand-forest mb-2 md:mb-4">
        No projects found
      </h3>
      <p className="text-brand-forest/60 mb-4 md:mb-6 text-sm md:text-base">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        onClick={() => {
          setSearchTerm("");
          setSelectedCategory("");
          setSelectedYear("");
        }}
        className="text-brand-green hover:text-brand-olive transition-colors duration-300 font-medium"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-cream text-brand-forest">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-b from-brand-cream via-brand-cream/95 to-brand-olive/10 border-b border-brand-forest/20 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-brand-olive/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20">
          <div
            className={cn(
              "text-center max-w-4xl mx-auto transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-forest mb-6 md:mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-olive bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-forest/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our curated collection of projects that showcase strategic
              thinking, creative excellence, and measurable results across
              various design disciplines.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 py-12 md:py-16">
        {/* Search and Filters */}
        <div className="mb-12 md:mb-16">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-brand-forest/60 transition-colors group-focus-within:text-brand-green" />
            <input
              type="text"
              placeholder="Search projects, categories, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-4 py-4 md:py-6 text-base md:text-lg border-2 border-brand-forest/20 focus:border-brand-green transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 border-2 border-brand-forest/20 hover:border-brand-green transition-all duration-300 w-full sm:w-auto justify-center group rounded-xl p-2">
              <Filter className="h-4 w-4 md:h-5 md:w-5 text-brand-forest group-hover:text-brand-green transition-colors duration-300" />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-brand-forest group-hover:text-brand-green transition-colors duration-300 font-medium"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>

            <div className="flex items-center gap-2 border border-brand-forest/20 rounded-lg p-1 w-full sm:w-auto justify-center bg-white/50 backdrop-blur-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-brand-green text-white"
                    : "text-brand-forest hover:text-brand-green"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-brand-green text-white"
                    : "text-brand-forest hover:text-brand-green"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-lg border border-brand-forest/20 bg-white/50 backdrop-blur-sm text-brand-forest focus:border-brand-green transition-colors duration-300 text-sm md:text-base"
              >
                <option value="">All Categories</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-lg border border-brand-forest/20 bg-white/50 backdrop-blur-sm text-brand-forest focus:border-brand-green transition-colors duration-300 text-sm md:text-base"
              >
                <option value="">All Years</option>
                {years.slice(1).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Featured Projects */}
        {filteredItems.filter((item) => item.featured).length > 0 && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems
                .filter((item) => item.featured)
                .map((item, index) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    viewMode="grid"
                    delay={index * 100}
                  />
                ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-8">
            All Projects
          </h2>
          {filteredItems.length === 0 ? (
            <EmptyState />
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  viewMode="grid"
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  viewMode="list"
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PortfolioCard = ({
  item,
  viewMode,
  delay,
}: {
  item: PortfolioItem;
  viewMode: "grid" | "list";
  delay: number;
}) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.opacity = "1";
          cardRef.current.style.transform = "translateY(0)";
        }
      }, delay);
    }
  }, [delay]);

  if (viewMode === "grid") {
    return (
      <article
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-xl md:rounded-2xl border border-brand-forest/20 bg-white/80 backdrop-blur-sm hover:border-brand-green/30 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]",
          "transition-all duration-700"
        )}
        style={{
          transitionDelay: `${delay}ms`,
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brand-green to-brand-olive text-white border border-brand-green/20">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={`${item.title} — graphic design portfolio piece`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-brand-forest border border-brand-forest/20">
              {item.category}
            </span>
          </div>

          {/* View Detail Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
            <a
              href={`/portfolio/${item.id}`}
              className="bg-white/90 hover:bg-white text-brand-forest border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 w-full sm:w-auto group/btn rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2"
            >
              <Eye className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-brand-forest group-hover:text-brand-green transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-brand-forest/60 group-hover:text-brand-green transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-2" />
          </div>

          <p className="text-xs sm:text-sm text-brand-forest/70 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Meta Information */}
          <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 text-xs text-brand-forest/60">
              <Calendar className="h-3 w-3" />
              <span>{item.year}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-brand-forest/60">
              <Clock className="h-3 w-3" />
              <span>{item.duration}</span>
            </div>
          </div>

          {/* Team Info */}
          <div className="flex items-center gap-1 text-xs text-brand-forest/60 mb-3 sm:mb-4">
            <Users className="h-3 w-3" />
            <span>{item.team}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {item.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-brand-olive/10 text-brand-forest border border-brand-olive/20"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-brand-forest/10 text-brand-forest border border-brand-forest/20">
                +{item.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  // List View
  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-xl md:rounded-2xl border border-brand-forest/20 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-brand-green/30",
        "transition-all duration-700"
      )}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative overflow-hidden w-full sm:w-48 md:w-64 aspect-[4/3] sm:aspect-square">
          <img
            src={item.image}
            alt={`${item.title} — graphic design portfolio piece`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Featured Badge */}
          {item.featured && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brand-green to-brand-olive text-white border border-brand-green/20">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-brand-forest border border-brand-forest/20">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-brand-forest group-hover:text-brand-green transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-brand-forest/60 group-hover:text-brand-green transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-2" />
          </div>

          <p className="text-xs sm:text-sm text-brand-forest/70 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-brand-forest/60">
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="h-3 w-3" />
              <span>{item.year}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Clock className="h-3 w-3" />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Users className="h-3 w-3" />
              <span>{item.team}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-brand-olive/10 text-brand-forest border border-brand-olive/20"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-brand-forest/10 text-brand-forest border border-brand-forest/20">
                +{item.tags.length - 3}
              </span>
            )}
          </div>

          {/* View Button */}
          <div className="mt-4">
            <a
              href={`/portfolio/${item.id}`}
              className="inline-flex items-center gap-2 text-brand-green hover:text-brand-olive transition-colors duration-300 font-medium text-sm"
            >
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioList;
