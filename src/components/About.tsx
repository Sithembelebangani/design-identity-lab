
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
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/a7770f64-f1e2-4a36-9169-ef3a03934b41.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden h-96 flex items-center justify-center border border-white/20">
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
            
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-blue-100 mb-6">
                My name is Sithembele Bangani, I have a diploma in Business Application and looking forward to engage with an upgraded technologies to enhance my skills and knowledge.
              </p>
              
              <p className="text-blue-100 mb-8">
                I am currently doing learnership at Capaciti as Cloud Associate and I can assure that I have gained lot experiences in technical side as well as personal side. I am now ready to take on or kick start my career.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    className="bg-blue-600 hover:bg-blue-700 py-2 px-3 flex items-center"
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
