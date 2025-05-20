
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-light">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-portfolio-light hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-portfolio-light hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-portfolio-light hover:text-white transition-colors">
              Projects
            </a>
            <Link to="/achievements" className="text-portfolio-light hover:text-white transition-colors">
              Achievements
            </Link>
            <a href="#contact" className="text-portfolio-light hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
