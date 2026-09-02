import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import { SITE_CONTENT } from '../constants/content';

// A specialized card for the featured project
const FeaturedProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-3xl overflow-hidden mb-16 flex flex-col lg:flex-row group"
    >
      <div className="w-full lg:w-3/5 overflow-hidden border-b lg:border-b-0 lg:border-r border-border/50 bg-[#0b0f19]">
        <Link to={`/projects/${project.slug}`} className="block w-full h-full">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover min-h-[300px] lg:min-h-full transition-transform duration-700 group-hover:scale-105" 
          />
        </Link>
      </div>
      <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-transparent px-3 py-1 rounded-full">
              Featured Project
            </span>
            <span className="text-xs text-muted font-medium">{project.year}</span>
          </div>
          <Link to={`/projects/${project.slug}`}>
            <h3 className="text-3xl font-extrabold text-foreground mb-4 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-muted text-lg leading-relaxed mb-8">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="text-xs font-medium px-3 py-1.5 bg-surface border border-border text-foreground rounded-sm">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs font-medium px-3 py-1.5 bg-surface border border-border text-muted rounded-sm">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4 mt-auto">
          <Link to={`/projects/${project.slug}`}>
            <Button>Read Case Study</Button>
          </Link>
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Visit Site
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically generate categories from the data
  const categories = ["All", ...new Set(SITE_CONTENT.projects.map(p => p.category))];

  // Filter logic
  const filteredProjects = activeFilter === "All" 
    ? SITE_CONTENT.projects 
    : SITE_CONTENT.projects.filter(p => p.category === activeFilter);

  // Determine the featured project for this view (first featured, or just first if none are featured)
  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  
  // The rest go in the grid
  const gridProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <section id={id} className="w-full py-24 min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading className="mb-0">Selected Work</SectionHeading>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-surface border border-border/50 rounded-lg">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-accent rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="w-full py-24 flex flex-col items-center justify-center text-center glass-panel rounded-3xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted">There are no projects matching the "{activeFilter}" category.</p>
              <Button className="mt-6" onClick={() => setActiveFilter("All")}>Clear Filter</Button>
            </motion.div>
          ) : (
            <motion.div key={activeFilter} className="w-full">
              {/* Featured Project */}
              {featuredProject && <FeaturedProjectCard project={featuredProject} />}

              {/* Grid Projects */}
              {gridProjects.length > 0 && (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <AnimatePresence>
                    {gridProjects.map((project, index) => (
                      <motion.div
                        layout
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
};

export default Projects;
