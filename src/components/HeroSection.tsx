interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  height?: "full" | "medium" | "small";
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  overlay?: "dark" | "gradient";
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  height = "medium",
  showCta = false,
  ctaText = "Get Started",
  ctaLink = "/contact",
  overlay = "dark",
}: HeroSectionProps) => {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === "dark"
            ? "bg-foreground/70"
            : "bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {subtitle && (
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full animate-fade-up">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-background mb-6 animate-fade-up-delay-1">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8 animate-fade-up-delay-2">
            {description}
          </p>
        )}
        {showCta && (
          <a
            href={ctaLink}
            className="inline-block btn-primary animate-fade-up-delay-3"
          >
            {ctaText}
          </a>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
