
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 pt-16 px-4"
    >
      <div className="container mx-auto max-w-4xl text-center opacity-0 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-portfolio-blue mb-6">
          Hello, I'm <span className="text-portfolio-accent">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-portfolio-lightBlue mb-8 max-w-2xl mx-auto">
          I'm a creative developer crafting beautiful digital experiences with attention to detail.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-portfolio-blue hover:bg-portfolio-accent text-white"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ArrowDown size={32} className="text-portfolio-accent" />
      </div>
    </section>
  );
};

export default Hero;
