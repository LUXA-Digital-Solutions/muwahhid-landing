import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Filter } from "lucide-react";

// Import images from public assets
const mutoonhub = "/assets/mutoonhub.png";
const ayyub = "/assets/ayyub.png";
const square = "/assets/square.png";
const okiki = "/assets/okiki.png";
const halal = "/assets/halal.png";
const cway = "/assets/cway.png";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  year?: string;
  tools?: string[];
  link?: string;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Extended portfolio items for the full portfolio page
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Essence of Nature",
    category: "Brand Identity",
    image: mutoonhub,
    description: "A minimalist branding project for an organic skincare line",
    client: "Botanical Beauty Co.",
    year: "2025",
    tools: ["Illustrator", "Photoshop", "Figma"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Urban Rhythm",
    category: "Motion Design",
    image: ayyub,
    description: "Dynamic animated series for a music festival",
    client: "SoundWave Events",
    year: "2025",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
  },
  {
    id: 3,
    title: "Minimal Living",
    category: "Web Design",
    image: square,
    description: "Clean, modern e-commerce design for furniture brand",
    client: "Nordic Furniture",
    year: "2024",
    tools: ["Figma", "Webflow", "Principle"],
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Food Stories",
    category: "Editorial Design",
    image: okiki,
    description: "Magazine layout and typography for culinary publication",
    client: "Taste Magazine",
    year: "2024",
    tools: ["InDesign", "Photoshop", "Lightroom"],
  },
  {
    id: 5,
    title: "Digital Dreams",
    category: "3D Design",
    image: halal,
    description: "Abstract 3D art series for tech company",
    client: "Future Labs",
    year: "2025",
    tools: ["Blender", "Octane", "Photoshop"],
    link: "https://example.com/project5",
  },
  {
    id: 6,
    title: "Eco Vision",
    category: "Packaging Design",
    image: cway,
    description: "Sustainable packaging solution for eco-friendly products",
    client: "Green Earth Co.",
    year: "2024",
    tools: ["Illustrator", "Dimension", "KeyShot"],
  },
  // Additional portfolio items for the full portfolio page
  {
    id: 7,
    title: "Modern Workspace",
    category: "Interior Design",
    image: mutoonhub,
    description: "Contemporary office space design visualization",
    client: "WorkFlex Solutions",
    year: "2025",
    tools: ["3ds Max", "V-Ray", "Photoshop"],
  },
  {
    id: 8,
    title: "Tech Harmony",
    category: "UI/UX Design",
    image: ayyub,
    description: "Mobile app interface design for music streaming",
    client: "MusicStream Inc.",
    year: "2025",
    tools: ["Figma", "Principle", "After Effects"],
  },
  {
    id: 9,
    title: "Natural Flow",
    category: "Motion Graphics",
    image: square,
    description: "Animated product showcase for wellness brand",
    client: "Zen Wellness",
    year: "2024",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
  },
];

// Available categories for filtering
const categories = [
  "All",
  "Brand Identity",
  "Motion Design",
  "Web Design",
  "UI/UX Design",
  "3D Design",
  "Editorial Design",
  "Packaging Design",
];

const PortfolioPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = portfolioItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="container px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-forest mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-forest/70 max-w-3xl mx-auto"
          >
            Explore my collection of creative projects spanning various design
            disciplines
          </motion.p>
        </div>

        {/* Filter and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="h-5 w-5 text-brand-forest/40 flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={cn(
                    "rounded-full px-6 text-sm whitespace-nowrap transition-all duration-300",
                    selectedCategory === category
                      ? "bg-brand-forest text-white shadow-lg"
                      : "text-brand-forest/70 hover:text-brand-forest"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0 w-full md:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-forest/40" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-brand-forest/10 focus:border-brand-forest/20 focus:ring-2 focus:ring-brand-forest/5 outline-none transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="wait">
            {isLoading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    className="rounded-3xl bg-gray-50 shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-[400px] bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
                    <div className="p-8 space-y-4">
                      <div className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse" />
                      <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse w-3/4" />
                      <div className="h-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse" />
                    </div>
                  </motion.div>
                ))
              : filteredProjects.map((item, index) => (
                  <motion.article
                    key={item.id}
                    className="group relative overflow-hidden rounded-3xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                    variants={cardVariants}
                    layoutId={`project-${item.id}`}
                    whileHover="hover"
                  >
                    <div className="relative h-[400px] overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.645, 0.045, 0.355, 1.0],
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-brand-forest/60">
                          {item.category}
                        </span>
                        <span className="text-sm font-medium text-brand-forest/60">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-brand-forest mb-3 group-hover:text-brand-green transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-brand-forest/70 mb-6 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="space-y-4">
                        {item.client && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-brand-forest">
                              Client:
                            </span>
                            <span className="text-sm text-brand-forest/70">
                              {item.client}
                            </span>
                          </div>
                        )}
                        {item.tools && (
                          <div className="flex flex-wrap gap-2">
                            {item.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 text-xs font-medium text-brand-forest/70 bg-brand-forest/5 rounded-full"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                        {item.link && (
                          <motion.a
                            href={item.link}
                            className="inline-flex items-center text-brand-green font-medium hover:text-brand-forest transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold text-brand-forest mb-4">
              No projects found
            </h3>
            <p className="text-brand-forest/70">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
