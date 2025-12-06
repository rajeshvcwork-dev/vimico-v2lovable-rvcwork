import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import heroContact from "@/assets/hero-contact.jpg";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "care@vimico.in",
    description: "We are here to serve and we'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Whatsapp",
    content: "+91 8297753746",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Vimico Office, Cybertowers, 5th floor-5011",
    description: "Hyderabad, Telangana" "INDIA-500081",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage={heroContact}
        subtitle="Get in Touch"
        title="Contact Us"
        description="Have a question or want to work together? We'd love to hear from you."
        height="small"
        overlay="gradient"
      />

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-primary font-medium">Reach Out</span>
              <h2 className="text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Whether you have a question about our services, need a quote, or want to explore partnership opportunities, our team is ready to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card p-6 hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground">Send a Message</h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you shortly</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">FAQ</span>
            <h2 className="text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I get started with Vimico?",
                a: "Simply fill out our contact form or give us a call. We'll schedule a free consultation to understand your needs and propose tailored solutions.",
              },
              {
                q: "What industries do you work with?",
                a: "We work with businesses across various industries including technology, healthcare, finance, retail, and more. Our expertise adapts to your unique challenges.",
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope and complexity. A typical consulting engagement ranges from 4-12 weeks, while larger transformations may take 6-12 months.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer flexible support packages to ensure long-term success, including monthly retainers, quarterly reviews, and on-demand consulting.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-muted h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Visit Us
              </h3>
              <p className="text-muted-foreground">
                Vimico Office, Cybergate, 5th floor-5011<br />
                Hyderabad, Telangana, INDIA-500081
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
