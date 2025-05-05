import React from 'react';
import { projects, Project } from '@/data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Code as CodeIcon } from 'lucide-react'; // Use CodeIcon alias to avoid conflict

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                {project.imageUrl && (
                  <div className="aspect-video relative">
                     <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                      />
                  </div>
                )}
                 <div className="p-6 pb-2">
                    <CardTitle className="text-xl mb-1 text-primary">{project.title}</CardTitle>
                     <Badge variant="outline" className="text-xs">{project.category}</Badge>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription className="mb-4 text-card-foreground/80">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                {project.link && (
                  <Button asChild variant="outline" size="sm" className="group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
                 {/* Placeholder for potential source code link */}
                 {/* <Button variant="ghost" size="sm" className="ml-auto group">
                   Source Code <CodeIcon className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                 </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
