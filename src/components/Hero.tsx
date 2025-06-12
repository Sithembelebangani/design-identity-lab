
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
      
      <div className="container mx-auto max-w-6xl relative z-10 opacity-0 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl text-green-200 leading-relaxed">
              Hello, I'm Sithembele Bangani. I am a Business Analyst and Cloud Associate creating modern digital solutions. I have a diploma in Business Application and willing to grow both in technical and business side.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-green-400 text-green-300 hover:bg-green-500/10"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/6304ebf6-b28d-498d-9c07-b8e46c7440f1.png"
              alt="Sithembele Bangani"
              className="w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce cursor-pointer z-10" onClick={() => scrollToSection('about')}>
        <ArrowDown size={32} className="text-green-300" />
      </div>
    </section>
  );
};

export default Hero;
