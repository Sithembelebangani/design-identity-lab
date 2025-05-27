
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
      className="min-h-screen flex flex-col justify-center items-center px-4 relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/e99b3c9b-9711-4b13-b646-a87ea4899006.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 opacity-0 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-green-300 mb-6 text-shadow">
          Hello, I'm <span className="text-green-400">Sithembele Bangani</span>
        </h1>
        <p className="text-xl md:text-2xl text-green-200 mb-8 max-w-2xl mx-auto">
          I'm a Business Analyst & Cloud Associate creating modern digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-green"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-green-400 text-pink-300 hover:bg-green-500/10"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce cursor-pointer z-10" onClick={() => scrollToSection('about')}>
        <ArrowDown size={32} className="text-green-300" />
      </div>
    </section>
  );
};

export default Hero;
