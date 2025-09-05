import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Star, Clock, Users, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import portfolio01 from "@/assets/portfolio-01.jpg";
import portfolio02 from "@/assets/portfolio-02.jpg";
import portfolio03 from "@/assets/portfolio-03.jpg";
import portfolio04 from "@/assets/portfolio-04.jpg";
import portfolio05 from "@/assets/portfolio-05.jpg";
import portfolio06 from "@/assets/portfolio-06.jpg";

const PortfolioGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      image: portfolio01,
      featured: true,
      team: "Solo",
      duration: "3 weeks",
      awards: "Design Award 2024",
      stats: "Brand recognition +40%",
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      category: "Digital",
      image: portfolio02,
      featured: false,
      team: "3 designers",
      duration: "6 weeks",
      awards: "Marketing Excellence",
      stats: "Engagement +65%",
    },
    {
      id: 3,
      title: "Product Packaging Design",
      category: "Packaging",
      image: portfolio03,
      featured: true,
      team: "2 designers",
      duration: "4 weeks",
      awards: "Packaging Innovation",
      stats: "Sales +28%",
    },
    {
      id: 4,
      title: "Website Redesign",
      category: "Web",
      image: portfolio04,
      featured: false,
      team: "4 designers",
      duration: "8 weeks",
      awards: "Web Design Award",
      stats: "Conversion +45%",
    },
    {
      id: 5,
      title: "Print Advertising",
      category: "Print",
      image: portfolio05,
      featured: false,
      team: "Solo",
      duration: "2 weeks",
      awards: "Print Excellence",
      stats: "Response +32%",
    },
    {
      id: 6,
      title: "Social Media Graphics",
      category: "Social",
      image: portfolio06,
      featured: true,
      team: "2 designers",
      duration: "5 weeks",
      awards: "Social Media Award",
      stats: "Reach +55%",
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-brand-cream via-brand-cream to-brand-olive/5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-forest mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-olive bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg md:text-xl text-brand-forest/80 max-w-2xl mx-auto">
            A curated selection of projects that showcase strategic thinking and
            creative excellence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {isLoading
            ? // Loading skeletons
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  className="rounded-2xl bg-white shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-64 md:h-72 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse" />
                    <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-3/4" />
                    <div className="flex gap-4">
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-1/3" />
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-1/4" />
                    </div>
                  </div>
                </motion.div>
              ))
            : items.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-brand-green to-brand-olive text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block bg-brand-olive/10 text-brand-forest px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {item.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-forest mb-3 group-hover:text-brand-green transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-brand-forest/70 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{item.team}</span>
                      </div>
                    </div>

                    {/* Awards & Stats */}
                    <div className="space-y-2 mb-4">
                      {item.awards && (
                        <div className="flex items-center gap-2 text-sm text-brand-green">
                          <Award className="h-4 w-4" />
                          <span>{item.awards}</span>
                        </div>
                      )}
                      {item.stats && (
                        <div className="text-sm text-brand-forest/80 font-medium">
                          {item.stats}
                        </div>
                      )}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </motion.article>
              ))}
        </div>

        {/* View All Button */}
        <div
          className={cn(
            "text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-green to-brand-olive hover:from-brand-green/90 hover:to-brand-olive/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
          >
            <a href="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioGrid;
