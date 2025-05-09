
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with cart functionality, product filtering, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      imageUrl: "",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A comprehensive showcase for a Business Analyst and Cloud Associate professional with expertise in creating cloud storage buckets, containers, and differentiating between public, private, and hybrid cloud architectures. Features interactive demonstrations of business applications skills backed by a formal diploma in Business Applications.",
      tags: ["React", "Tailwind CSS", "Cloud Services"],
      imageUrl: "/lovable-uploads/4f46a399-12a8-4a4c-ba54-970eb9a4facf.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks with drag-and-drop functionality and smart priorities.",
      tags: ["React", "TypeScript", "Firebase"],
      imageUrl: "/lovable-uploads/98b426d6-0600-4c33-afce-c118244687d2.png",
      heading: "Code Creator",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays forecast data with beautiful visualizations and location search.",
      tags: ["React", "API Integration", "Chart.js"],
      imageUrl: "/lovable-uploads/e5c74fb6-c867-4136-b4c7-cc55e08f8a4e.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recipe Finder",
      description: "A web app that helps users discover recipes based on ingredients they already have in their kitchen.",
      tags: ["JavaScript", "API Integration", "CSS Grid"],
      imageUrl: "/lovable-uploads/e5c74fb6-c867-4136-b4c7-cc55e08f8a4e.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics with customizable widgets and data visualization.",
      tags: ["React", "Redux", "D3.js"],
      imageUrl: "/lovable-uploads/e5c74fb6-c867-4136-b4c7-cc55e08f8a4e.png",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-blue mb-16">
            My Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div key={index} className="opacity-0" style={{ animation: `fade-in 0.5s ease-out forwards ${index * 0.15}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          {visibleProjects < projects.length ? (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreProjects}
                className="bg-portfolio-blue hover:bg-portfolio-accent text-white"
              >
                Load More Projects
              </Button>
            </div>
          ) : projects.length > 3 ? (
            <div className="text-center mt-12">
              <Button 
                onClick={showLessProjects}
                variant="outline"
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
              >
                Show Less
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;
