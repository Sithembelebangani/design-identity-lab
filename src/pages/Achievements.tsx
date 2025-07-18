
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Cloud, Fullscreen, Linkedin, Medal, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const Achievements = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  useEffect(() => {
    // Initialize animation observers for fade-in effects
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.opacity-0');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    // Clean up observer on unmount
    return () => {
      const elements = document.querySelectorAll('.opacity-0');
      const observer = new IntersectionObserver(() => {});
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Handle fullscreen viewing of certificate
  const toggleFullScreen = (imageSrc: string) => {
    if (!isFullScreen) {
      const fullScreenView = document.createElement('div');
      fullScreenView.id = 'certificate-fullscreen';
      fullScreenView.className = 'fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center';
      fullScreenView.onclick = () => {
        document.body.removeChild(fullScreenView);
        setIsFullScreen(false);
      };
      
      const image = document.createElement('img');
      image.src = imageSrc;
      image.className = 'max-h-[90vh] max-w-[90vw] object-contain';
      
      fullScreenView.appendChild(image);
      document.body.appendChild(fullScreenView);
      setIsFullScreen(true);
    }
  };

  const achievements = [
    {
      name: "LinkedIn Profile",
      icon: Linkedin,
      color: "bg-blue-600",
      description: "Connect with me on LinkedIn to see my professional experience, skills, and recommendations.",
      year: "2023",
      url: "https://www.linkedin.com/in/sithembele-bangani-2323a3300/"
    },
    {
      name: "Google Cloud Certificate",
      icon: Cloud,
      color: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
      description: "Successfully completed 'Developing Applications with Google Cloud: Foundations' course offered through Coursera.",
      year: "2023",
      image: "/lovable-uploads/d950da79-45a9-4d1e-8b11-a79191c8f3cf.png"
    },
    {
      name: "Project Leadership",
      icon: Medal,
      color: "bg-emerald-600",
      description: "Acknowledgment for successfully leading multiple high-impact projects to completion.",
      year: "2022",
      url: "https://example.com/leadership"
    },
    {
      name: "Industry Recognition",
      icon: Trophy,
      color: "bg-indigo-700",
      description: "Selected as one of the top professionals in the technology industry.",
      year: "2021",
      url: "https://www.linkedin.com/in/sithembele-bangani-2323a3300/"
    },
    {
      name: "Technical Excellence",
      icon: Award,
      color: "bg-rose-600",
      description: "Awarded for demonstrating exceptional technical skills and problem-solving abilities.",
      year: "2020",
      url: "https://example.com/technical"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-blue mb-6">Achievements</h1>
          <p className="text-xl text-portfolio-lightBlue">
            Explore my professional achievements, awards, and recognition that highlight my dedication and expertise
            in the technology field over the years.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.name}
              className="opacity-0 border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${achievement.color} text-white`}>
                    <achievement.icon size={24} />
                  </div>
                  <CardTitle>{achievement.name}</CardTitle>
                </div>
                <CardDescription className="text-sm text-portfolio-lightBlue mt-2">
                  {achievement.name === "LinkedIn Profile" ? "Professional Profile" : 
                   achievement.name === "Google Cloud Certificate" ? "Apr 2023" : 
                   `Awarded in ${achievement.year}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {achievement.image && (
                  <div className="mb-4 border rounded-md overflow-hidden cursor-pointer" onClick={() => toggleFullScreen(achievement.image!)}>
                    <img 
                      src={achievement.image} 
                      alt={`${achievement.name} Certificate`}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <p className="text-portfolio-lightBlue mb-4">{achievement.description}</p>
                {achievement.name === "Google Cloud Certificate" ? (
                  <Button 
                    variant="outline"
                    className="w-full border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    onClick={() => toggleFullScreen(achievement.image!)}
                  >
                    <Fullscreen size={16} className="mr-2" /> Full Screen
                  </Button>
                ) : achievement.url && (
                  <Button 
                    variant="outline"
                    className="w-full border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    onClick={() => window.open(achievement.url, '_blank', 'noopener,noreferrer')}
                  >
                    {achievement.name === "LinkedIn Profile" ? "View Profile" : "View Certificate"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md opacity-0">
          <h2 className="text-2xl font-bold text-portfolio-blue mb-4">Professional Growth</h2>
          <p className="text-portfolio-lightBlue mb-4">
            These achievements represent key milestones in my professional journey. Each award and recognition
            reflects not just personal accomplishment, but also successful collaboration with talented teams
            and organizations.
          </p>
          <p className="text-portfolio-lightBlue">
            I believe in continuous learning and pushing boundaries to deliver exceptional results.
            These achievements serve as motivation to keep innovating and excelling in future endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
