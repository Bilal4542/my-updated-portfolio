import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-panel rounded-base p-6 flex flex-col h-full hover:shadow-xl hover:border-accent/30 transition-shadow"
    >
      {project.imageUrl && (
        <div className="w-full h-48 mb-6 overflow-hidden rounded-md border border-border/50">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-between">
          {project.title}
          {project.year && <span className="text-xs font-normal text-muted bg-surface px-2 py-1 rounded-sm border border-border/50">{project.year}</span>}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{project.shortDescription}</p>
      </div>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs font-medium px-2 py-1 bg-accent-transparent text-accent rounded-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2 border-t border-border/50">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a 
              href={project.liveUrl} 
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors shadow-sm" 
              target="_blank" 
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Live
            </a>
          )}
          {project.sourceUrl && project.sourceUrl !== "#" && (
            <a 
              href={project.sourceUrl} 
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 border border-border text-foreground rounded-md hover:border-accent hover:text-accent transition-colors" 
              target="_blank" 
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
