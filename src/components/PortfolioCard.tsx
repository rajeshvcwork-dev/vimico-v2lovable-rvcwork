import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  index?: number;
}

const PortfolioCard = ({ image, title, category, description, link, index = 0 }: PortfolioCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-primary text-sm font-medium mb-2">{category}</span>
          <h3 className="text-background text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-background/70 text-sm line-clamp-2">{description}</p>
          {link && (
            <a
              href={link}
              className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View Project <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Static Info (visible by default) */}
      <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-primary text-sm font-medium">{category}</span>
        <h3 className="text-foreground text-lg font-display font-semibold mt-1">{title}</h3>
      </div>

      {/* Glowing Border on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default PortfolioCard;
