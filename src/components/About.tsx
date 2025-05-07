
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Code, Database, BarChart2, Cloud, MessageSquare, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Web Development', icon: <Code className="w-4 h-4 mr-1" /> },
    { name: 'SQL', icon: <Database className="w-4 h-4 mr-1" /> },
    { name: 'Analysis', icon: <BarChart2 className="w-4 h-4 mr-1" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-4 h-4 mr-1" /> },
    { name: 'Communication', icon: <MessageSquare className="w-4 h-4 mr-1" /> },
    { name: 'Leadership', icon: <Users className="w-4 h-4 mr-1" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-blue mb-16">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="w-full h-full">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="/lovable-uploads/4b8f6aa5-0a51-4d5e-9034-917ea5380361.png" 
                    alt="Profile picture" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-4">Who I Am</h3>
              <p className="text-portfolio-lightBlue mb-6">
                I'm a passionate web developer with 5 years of experience creating modern, responsive websites and applications. 
                My goal is to build digital products that are not only visually appealing but also provide an exceptional user experience.
              </p>
              
              <p className="text-portfolio-lightBlue mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing my knowledge through writing technical articles and mentoring new developers.
              </p>
              
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    className="bg-portfolio-accent hover:bg-portfolio-blue py-2 px-3 flex items-center"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
