import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Vimico</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering businesses with innovative solutions and strategic guidance for sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2 text-background/70">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="flex flex-col gap-2 text-background/70">
              <span>Business Strategy</span>
              <span>Digital Transformation</span>
              <span>Brand Development</span>
              <span>Growth Consulting</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="flex flex-col gap-3 text-background/70">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@vimico.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© 2024 Vimico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
