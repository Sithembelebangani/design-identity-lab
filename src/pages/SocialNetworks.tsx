
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect } from "react";

const SocialNetworks = () => {
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

  const networks = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600",
      description: "Connect with friends, family, and other people you know. Share photos and videos, send messages and get updates.",
      users: "2.9 billion monthly active users",
      url: "https://facebook.com"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
      description: "Share your photos, videos, and messages with friends, family, and other people you know.",
      users: "1.4 billion monthly active users",
      url: "https://instagram.com"
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-sky-500",
      description: "See what's happening in the world right now. Join the conversation.",
      users: "397 million monthly active users",
      url: "https://twitter.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-blue-700",
      description: "Connect with professionals, find job opportunities, and build your career.",
      users: "875 million total users",
      url: "https://linkedin.com"
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "bg-red-600",
      description: "Watch, share, and upload videos including music, vlogs, education, and entertainment.",
      users: "2.5 billion monthly active users",
      url: "https://youtube.com"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-blue mb-6">Social Networks</h1>
          <p className="text-xl text-portfolio-lightBlue">
            Explore the most popular social media platforms that connect millions of people worldwide. 
            These platforms enable sharing content, connecting with others, and building communities in the digital space.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((network, index) => (
            <Card 
              key={network.name}
              className="opacity-0 border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${network.color} text-white`}>
                    <network.icon size={24} />
                  </div>
                  <CardTitle>{network.name}</CardTitle>
                </div>
                <CardDescription className="text-sm text-portfolio-lightBlue mt-2">
                  {network.users}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-lightBlue mb-4">{network.description}</p>
                <Button 
                  variant="outline"
                  className="w-full border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                  onClick={() => window.open(network.url, '_blank', 'noopener,noreferrer')}
                >
                  Visit {network.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md opacity-0">
          <h2 className="text-2xl font-bold text-portfolio-blue mb-4">Why Social Media Matters</h2>
          <p className="text-portfolio-lightBlue mb-4">
            Social media platforms have revolutionized how we communicate, share information, and build communities. 
            They offer powerful tools for businesses, creators, and individuals to reach global audiences, 
            build brands, and connect with people who share similar interests.
          </p>
          <p className="text-portfolio-lightBlue">
            Whether for personal use, business marketing, or content creation, understanding these platforms
            and their unique strengths can help you leverage them effectively in today's digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworks;
