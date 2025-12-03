import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) => {
  return (
    <div
      className="service-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
        </div>
        <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-4 border-t border-border pt-4">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
    </div>
  );
};

export default ServiceCard;
