import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-base p-6 flex flex-col h-full"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>
      </div>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-medium px-2 py-1 bg-accent-transparent text-accent rounded-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.liveUrl} className="text-sm font-medium text-foreground hover:text-accent transition-smooth" target="_blank" rel="noreferrer">
            View Live
          </a>
          <a href={project.githubUrl} className="text-sm font-medium text-muted hover:text-foreground transition-smooth" target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
