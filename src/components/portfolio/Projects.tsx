import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Vital Me - Personal fitness tracker that can connect with your wearables",
    description: "How is it different from other health trackers ? - See how it works (Fully deployed)--->",
    longDescription: "Google fit data transfer, AI analytics, AI pushup counter, Task manager, sleep tracker, AI chatbot for health",
    tech: ["React", "Node.js", "MongoDB", "Google AUTH", "Google Fitness API"],
    github: "https://github.com/mrsivateja/VitalMe",
    live: "https://vitalme.vercel.app",
    image: "/vitalme.png",
    featured: true,
  },
  {
    title: "College Management System (college360)",
    description: "AI-Powered University ERP with Geofenced Attendance & Real-time Analytics.-Team project",
    longDescription: "College360 is a modern, full-stack ERP solution designed to automate university operations using advanced AI (Gemini Pro) and real-time data analytics. Features include RBAC (Admin/Student roles), geofencing-verified attendance, automated ID generation, an intelligent campus assistant, and an academic resource hub. The system uses a sleek Glassmorphism UI and a robust Node.js/SQLite backend.",
    tech: ["React", "Node.js", "SQLite3", "Gemini AI", "Framer Motion", "Recharts"],
    github: "https://github.com/sandeep2409-gitch/college360",
   
    image: "/college360.png",
    featured: true,
  },

  {
    title: "Farm Direct - D2C Agriculture Platform",
    description: "Modern D2C app for farmers featuring AI crop grading, KisanGPT, and voice commands.",
    longDescription: "Farm Direct is a sophisticated Next.js 15 application designed to empower farmers. It includes an AI-powered KisanGPT assistant (NVIDIA NIM), real-time crop detection/grading via YOLO11, voice-enabled commands, and a secure local SQLite database. The platform features Next.js 15 App Router, React 19, and OTP-based authentication.",
    tech: ["Next.js 15", "React 19", "NVIDIA NIM", "YOLO11", "SQLite", "Tailwind CSS"],
    github: "https://github.com/sivatejajetti/FarmDirect",
    live: "https://tejafarmdirect.vercel.app",
    image: "/farmdirect.png",
    featured: true,
  },
{
    title: "Portfolio Website",
    description: "Personal portfolio website built with modern technologies and animations.",
    longDescription: "My personal portfolio, the one you're looking at right now! It's built with Vite, React, and TypeScript, styled with Tailwind CSS, and animated with Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/sivatejajetti/protfolio",
    image: "/placeholder.svg",
    live: "https://tejajetti.vercel.app",

    featured: false,
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-primary text-sm tracking-wider">
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover-glow group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="flex gap-4 items-center">
                  <Button
                    variant="outline"
                    className="hidden md:flex"
                    onClick={() => openModal(project)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          Other Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 hover-glow group flex flex-col h-full cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="code-font text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default Projects;
