import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import heroImage from "@/assets/hero-home.jpg";
import heroPortfolio from "@/assets/hero-portfolio.jpg";
import {
  Lightbulb,
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Business Strategy",
    description: "Transform your vision into actionable strategies that drive measurable growth.",
  },
  {
    icon: TrendingUp,
    title: "Agile Transformation",
    description: "Modernize and Empower your delivery team using Agile Methodologies.",
  },
  {
    icon: Target,
    title: "Brand Development",
    description: "Build a powerful brand identity that resonates with your audience.",
  },
  {
    icon: Users,
    title: "Team Coaching",
    description: "Empower your team with skills and mindset for peak performance.",
  },
];

const featuredProjects = [
  {
    image: heroPortfolio,
    title: "TechStart Rebrand",
    category: "Branding",
    description: "Complete brand overhaul for a leading tech startup.",
  },
  {
    image: heroImage,
    title: "GrowthMax Platform",
    category: "Digital Product",
    description: "SaaS platform development for business analytics.",
  },
];

const stats = [
  { value: "27+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "20+", label: "Team Experts" },
  { value: "2+", label: "Decades Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/20 rounded-full animate-fade-up backdrop-blur-sm">
              Welcome to VIMICO
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-background mb-6 animate-fade-up-delay-1 leading-tight">
              Your Path to{" "}
              <span className="text-gradient-accent">Success</span>
            </h1>
            <p className="text-xl text-background/80 mb-8 animate-fade-up-delay-2 leading-relaxed">
              We partner with ambitious businesses to unlock their full potential through strategic consulting, innovative solutions, and transformative growth.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link 
                to="/portfolio" className="px-8 py-4 rounded-full border-2 border-background/30 text-background font-medium hover:bg-background/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive services tailored to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium">Why Choose Vimico</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
                Excellence in Every Project
              </h2>
              <p className="text-background/70 text-lg mb-8 leading-relaxed">
                We combine strategic thinking with creative execution to deliver
                results that exceed expectations. Our team of experts brings
                decades of combined experience across industries.
              </p>
              <ul className="space-y-4">
                {[
                  "Tailored strategies for your unique challenges",
                  "Data-driven decisions and measurable outcomes",
                  "Dedicated support throughout your journey",
                  "Proven track record of client success",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-background/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={heroPortfolio}
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 glass-card bg-card max-w-xs">
                <div className="text-3xl font-display font-bold text-gradient mb-2">10+</div>
                <p className="text-muted-foreground">Years of excellence in business consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into our portfolio of successful transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your goals and take your
            business to new heights.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
