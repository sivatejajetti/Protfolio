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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
    longDescription: "This project is a complete e-commerce solution featuring a customer-facing storefront and an admin dashboard for managing products, orders, and users. It includes secure payment processing with Stripe and is built on a scalable MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and drag-and-drop functionality.",
    longDescription: "Inspired by Trello, this app allows teams to manage their workflows in real-time. It features a drag-and-drop interface for tasks, boards, and lists, with updates synced across all clients using Socket.io.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using OpenAI's DALL-E API with a sleek user interface.",
    longDescription: "This tool provides a user-friendly interface for generating images from text prompts using the DALL-E API. The backend is built with Python/Flask, and the frontend is a responsive React application.",
    tech: ["React", "Python", "Flask", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with modern technologies and animations.",
    longDescription: "My personal portfolio, the one you're looking at right now! It's built with Vite, React, and TypeScript, styled with Tailwind CSS, and animated with Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with location-based forecasts and interactive charts.",
    longDescription: "A simple but elegant weather dashboard that fetches data from a third-party weather API. It displays current weather, a 5-day forecast, and uses Chart.js for visualizing temperature trends.",
    tech: ["React", "Chart.js", "Weather API"],
    github: "https://github.com",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging and group chat features.",
    longDescription: "A full-featured chat application enabling users to communicate in real-time. It supports private (one-to-one) messaging and public group channels. Built with Node.js and Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    image: "/placeholder.svg",
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
