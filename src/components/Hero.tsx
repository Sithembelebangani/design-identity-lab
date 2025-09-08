
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
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden font-poppins bg-background"
    >
      {/* Subtle corporate background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Left Side */}
          <div className="text-left space-y-8 opacity-0 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Hello, I'm <span className="text-secondary">Sithembele Bangani</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-accent font-medium">
                Business Analyst & Cloud Associate
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Creating modern digital solutions with expertise in cloud computing. I bridge the gap between technical teams and business stakeholders, specializing in scalable cloud-based solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                variant="secondary"
                className="font-semibold px-8 py-4 rounded-xl shadow-[var(--shadow-button)] hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                See My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/6304ebf6-b28d-498d-9c07-b8e46c7440f1.png"
                alt="Sithembele Bangani - Business Analyst and Cloud Associate"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-2 border-muted"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 animate-bounce cursor-pointer z-10 opacity-0 animate-fade-in" 
        style={{ animationDelay: '1s' }}
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown size={32} className="text-accent hover:text-primary transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
