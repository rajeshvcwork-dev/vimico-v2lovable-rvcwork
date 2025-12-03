import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import PortfolioCard from "@/components/PortfolioCard";
import heroPortfolio from "@/assets/hero-portfolio.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroServices from "@/assets/hero-services.jpg";
import heroContact from "@/assets/hero-contact.jpg";

const categories = ["All", "Branding", "Digital", "Strategy", "Consulting"];

const projects = [
  {
    image: heroPortfolio,
    title: "TechStart Rebrand",
    category: "Branding",
    description: "Complete brand overhaul for a leading tech startup, including visual identity and brand strategy.",
    link: "#",
  },
  {
    image: heroHome,
    title: "GrowthMax Platform",
    category: "Digital",
    description: "Full-stack SaaS platform development for business analytics and growth tracking.",
    link: "#",
  },
  {
    image: heroServices,
    title: "FinServ Transformation",
    category: "Strategy",
    description: "Digital transformation strategy for a traditional financial services company.",
    link: "#",
  },
  {
    image: heroContact,
    title: "RetailPro Expansion",
    category: "Consulting",
    description: "Market entry strategy and operational planning for retail chain expansion.",
    link: "#",
  },
  {
    image: heroPortfolio,
    title: "HealthTech Identity",
    category: "Branding",
    description: "Brand identity design for an innovative healthcare technology startup.",
    link: "#",
  },
  {
    image: heroHome,
    title: "EduLearn App",
    category: "Digital",
    description: "Mobile learning platform with AI-powered personalized education paths.",
    link: "#",
  },
  {
    image: heroServices,
    title: "LogiTech Optimization",
    category: "Strategy",
    description: "Supply chain optimization and digital workflow implementation.",
    link: "#",
  },
  {
    image: heroContact,
    title: "StartUp Accelerator",
    category: "Consulting",
    description: "Business consulting for early-stage startups in the accelerator program.",
    link: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <HeroSection
        backgroundImage={heroPortfolio}
        subtitle="Our Work"
        title="Portfolio"
        description="Explore our collection of successful projects and transformative solutions."
        height="small"
        overlay="gradient"
      />

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <PortfolioCard key={`${project.title}-${index}`} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "25+", label: "Industries Served" },
              { value: "10+", label: "Awards Won" },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Client Feedback</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Vimico transformed our business strategy and helped us achieve 200% growth in just one year.",
                author: "Sarah Johnson",
                role: "CEO, TechStart",
              },
              {
                quote: "Their digital transformation expertise was invaluable. We've never been more efficient.",
                author: "Michael Chen",
                role: "COO, FinServ Inc.",
              },
              {
                quote: "The branding work exceeded all expectations. Our new identity perfectly captures our vision.",
                author: "Emily Davis",
                role: "Founder, HealthTech",
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="glass-card p-8 hover-lift"
              >
                <p className="text-foreground text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to see your project in our portfolio? Let's discuss how we can bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
