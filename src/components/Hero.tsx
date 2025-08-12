
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
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden font-poppins"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))`
      }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Left Side */}
          <div className="text-left space-y-8 opacity-0 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hello, I'm <span className="text-cyan-300">Sithembele Bangani</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-200 font-medium">
                Business Analyst & Cloud Associate
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              Creating modern digital solutions with expertise in cloud computing. I bridge the gap between technical teams and business stakeholders, specializing in scalable cloud-based solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                See My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/6304ebf6-b28d-498d-9c07-b8e46c7440f1.png"
                alt="Sithembele Bangani - Business Analyst and Cloud Associate"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))' }}
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
        <ArrowDown size={32} className="text-white/80 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
