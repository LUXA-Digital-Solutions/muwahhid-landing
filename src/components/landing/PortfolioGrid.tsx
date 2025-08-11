import p1 from "@/assets/portfolio-01.jpg";
import p2 from "@/assets/portfolio-02.jpg";
import p3 from "@/assets/portfolio-03.jpg";
import p4 from "@/assets/portfolio-04.jpg";
import p5 from "@/assets/portfolio-05.jpg";
import p6 from "@/assets/portfolio-06.jpg";

const items = [
  { src: p1, title: "Poster — Bold Geometry" },
  { src: p2, title: "Branding — Business Cards" },
  { src: p3, title: "Album Cover — Abstract" },
  { src: p4, title: "Web Hero — CTA Focus" },
  { src: p5, title: "Poster Series — System" },
  { src: p6, title: "Identity — Guidelines" },
];

const PortfolioGrid = () => {
  return (
    <section id="work" className="py-16 md:py-20" aria-labelledby="work-heading">
      <div className="container">
        <h2 id="work-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Selected Work
        </h2>
        <p className="mt-2 text-muted-foreground">A curated look at recent projects and explorations.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure key={i} className="group overflow-hidden rounded-lg border bg-card elevated">
              <img
                src={item.src}
                alt={`${item.title} — graphic design portfolio piece`}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="flex items-center justify-between p-4 text-sm">
                <span className="font-medium">{item.title}</span>
                <span className="text-secondary">View</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
