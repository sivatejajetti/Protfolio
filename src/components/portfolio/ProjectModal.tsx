import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// Define the type for a single project, which should be imported from Projects.tsx in a real scenario
// For now, we define it here to avoid import issues in this isolated step.
type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ProjectModal = ({ project, isOpen, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl glass-card p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4 gradient-text">{project.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base">
                  {project.longDescription || project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="my-6">
                <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="code-font text-xs px-3 py-1 bg-secondary rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              {project.github && (
                <Button asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button variant="outline" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover w-full h-full rounded-r-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
