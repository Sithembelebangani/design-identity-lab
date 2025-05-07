
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, githubUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <p className="text-gray-500">Project Image</p>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-portfolio-blue">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-portfolio-lightBlue mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-gray-100 text-portfolio-blue text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-4 pt-2">
        {liveUrl && (
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink size={16} />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github size={16} />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
