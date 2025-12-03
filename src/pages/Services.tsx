import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import heroServices from "@/assets/hero-services.jpg";
import {
  Lightbulb,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Rocket,
  Shield,
  Globe,
  Zap,
  Award,
  LineChart,
  Briefcase,
} from "lucide-react";

const mainServices = [
  {
    icon: Lightbulb,
    title: "Business Strategy",
    description: "Transform your vision into actionable strategies that drive measurable growth and sustainable success.",
    features: ["Market Analysis", "Competitive Strategy", "Growth Planning", "Risk Assessment"],
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions that boost efficiency and innovation.",
    features: ["Technology Audit", "Process Automation", "Cloud Migration", "Digital Workflows"],
  },
  {
    icon: Target,
    title: "Brand Development",
    description: "Build a powerful brand identity that resonates with your audience and sets you apart from competition.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Market Positioning"],
  },
  {
    icon: Users,
    title: "Team Coaching",
    description: "Empower your team with skills and mindset for peak performance and collaborative excellence.",
    features: ["Leadership Training", "Team Building", "Performance Coaching", "Culture Development"],
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Gain deep insights into market trends, customer behavior, and competitive landscape.",
    features: ["Consumer Research", "Trend Analysis", "Competitor Mapping", "Market Sizing"],
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "Successfully bring your products to market with strategic planning and flawless execution.",
    features: ["Go-to-Market Strategy", "Launch Planning", "Channel Strategy", "Performance Tracking"],
  },
];

const additionalServices = [
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate business risks with comprehensive strategies.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Navigate international markets and expand your global footprint.",
  },
  {
    icon: Zap,
    title: "Innovation Labs",
    description: "Foster innovation with dedicated research and development initiatives.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Ensure excellence with robust quality management systems.",
  },
  {
    icon: LineChart,
    title: "Financial Advisory",
    description: "Optimize financial performance with expert guidance and planning.",
  },
  {
    icon: Briefcase,
    title: "M&A Advisory",
    description: "Navigate mergers and acquisitions with strategic expertise.",
  },
];

const Services = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage={heroServices}
        subtitle="What We Offer"
        title="From Project Chaos to Predictable Success"
        description="Empowering Tech Teams to Deliver Better, Faster, and Smarter — the Vimico Way"
        height="small"
        overlay="gradient"
      />

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Core Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg">
              Our flagship services are designed to address your most critical business challenges with proven methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business, challenges, and goals." },
              { step: "02", title: "Strategy", desc: "Develop customized solutions and actionable roadmaps." },
              { step: "03", title: "Execution", desc: "Implement strategies with precision and agility." },
              { step: "04", title: "Growth", desc: "Measure results and optimize for continuous improvement." },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                  <span className="text-2xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors">
                    {item.step}
                  </span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Specialized Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Complementary services to support your comprehensive business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss which services are right for your business and create a customized plan for success.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
