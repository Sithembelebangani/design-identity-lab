
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import CloudExplanation from './CloudExplanation';
import projectsData from '@/data/projectsData';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
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
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <div key={index} className="opacity-0" style={{ animation: `fade-in 0.5s ease-out forwards ${index * 0.15}s` }}>
                <ProjectCard {...project}>
                  {project.cloudContent && <CloudExplanation />}
                </ProjectCard>
              </div>
            ))}
          </div>
          
          {visibleProjects < projectsData.length ? (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreProjects}
                className="bg-portfolio-blue hover:bg-portfolio-accent text-white"
              >
                Load More Projects
              </Button>
            </div>
          ) : projectsData.length > 3 ? (
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
