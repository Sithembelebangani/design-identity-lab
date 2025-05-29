
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
      {/* Top-right profile image with 2.5cm (~95px) radius */}
      <div className="absolute top-4 right-4 w-[95px] h-[95px] rounded-full overflow-hidden border-2 border-green-400 z-20">
        <img
          src="/lovable-uploads/JDKF2211-Enhanced-NR%20(1).JPG"
          alt="Sithembele Bangani"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 opacity-0 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-green-300 mb-6 text-shadow">
          Hello, I'm <span className="text-green-400">Sithembele Bangani</span>
        </h1>
