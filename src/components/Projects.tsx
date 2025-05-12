import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Database, 
  Server, 
  HardDrive, 
  Code
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce Website",
      description: "When I was doing my studies at Walter Sisulu University, we were once given a project to go to small and medium businesses to ask about their business and ask if we can help them to create an online platform so that their business can grow and accommodate different target groups. Our website was created using WordPress. Anyone who visited our webpage could see the things that we were selling, the price, and be able to buy online using different payment methods with free delivery if the customer is less than 10km.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      imageUrl: "/lovable-uploads/1a207bed-0d20-42ac-9762-b22688008ffa.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A comprehensive showcase for a Business Analyst and Cloud Associate professional with expertise in cloud computing solutions.",
      tags: ["React", "Tailwind CSS", "Cloud Services"],
      imageUrl: "/lovable-uploads/4f46a399-12a8-4a4c-ba54-970eb9a4facf.png",
      liveUrl: "#",
      githubUrl: "#",
      cloudContent: true
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

  const CloudExplanation = () => (
    <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="cloud-models">
          <AccordionTrigger className="font-semibold text-portfolio-blue">
            <div className="flex items-center gap-2">
              <Cloud size={18} />
              Cloud Deployment Models
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Cloud size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Public Cloud</h4>
                  <p className="text-portfolio-lightBlue">Cloud resources owned and operated by third-party providers delivered over the internet. Offers scalability and cost-effectiveness with shared infrastructure among multiple organizations. Examples include AWS, Microsoft Azure, and Google Cloud.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  <HardDrive size={16} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Private Cloud</h4>
                  <p className="text-portfolio-lightBlue">Cloud infrastructure exclusively used by a single organization, either managed internally or by a third party. Provides greater control, security, and customization but requires significant investment in hardware and expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-teal-100 p-2 rounded-full">
                  <Server size={16} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Hybrid Cloud</h4>
                  <p className="text-portfolio-lightBlue">Combines private and public cloud resources with orchestration between them. Allows organizations to maintain sensitive workloads in private infrastructure while leveraging public cloud benefits for less sensitive operations or during peak demands.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="aws-services">
          <AccordionTrigger className="font-semibold text-portfolio-blue">
            <div className="flex items-center gap-2">
              <Server size={18} />
              AWS Core Services
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Server size={16} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">EC2 (Elastic Compute Cloud)</h4>
                  <p className="text-portfolio-lightBlue">Provides scalable computing capacity in the AWS cloud. Allows users to launch virtual servers (instances) with customizable CPU, memory, storage, and networking capabilities. Supports multiple operating systems and enables users to scale capacity up or down as computing requirements change.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <HardDrive size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">S3 (Simple Storage Service)</h4>
                  <p className="text-portfolio-lightBlue">Object storage service offering industry-leading scalability, availability, security, and performance. Store and retrieve any amount of data from anywhere on the web. Features include versioning, lifecycle policies, encryption, and fine-grained access controls. Commonly used for backup, archiving, content distribution, and data lakes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Database size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">RDS (Relational Database Service)</h4>
                  <p className="text-portfolio-lightBlue">Managed relational database service supporting multiple database engines like MySQL, PostgreSQL, Oracle, and SQL Server. Simplifies database administration tasks such as provisioning, patching, backup, recovery, and scaling. Provides high availability options with Multi-AZ deployments and read replicas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Code size={16} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Lambda</h4>
                  <p className="text-portfolio-lightBlue">Serverless compute service that runs code in response to events without provisioning or managing servers. Automatically scales applications by running code in response to triggers like HTTP requests, database changes, file uploads, or scheduled events. Pay only for the compute time consumed with no charges when code isn't running.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

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
                <ProjectCard {...project}>
                  {project.cloudContent && <CloudExplanation />}
                </ProjectCard>
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
