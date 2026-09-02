import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SkillBadge from '../components/ui/SkillBadge';
import { SITE_CONTENT } from '../constants/content';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = SITE_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="w-full py-32 min-h-screen flex items-center justify-center bg-background">
        <Container className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted mb-8">The project you are looking for does not exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>Return to Portfolio</Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full pt-32 pb-24 min-h-screen bg-background selection:bg-accent/30 selection:text-accent">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted hover:text-accent transition-colors mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-surface border border-border rounded-full text-xs font-semibold tracking-wider uppercase text-accent mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                {project.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <Button className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Visit Site
                  </Button>
                </a>
              )}
              {project.sourceUrl && project.sourceUrl !== "#" && (
                <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {project.imageUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl mb-12"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-12"
          >
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 p-4 rounded-xl bg-surface border border-border">
                      <div className="shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      </div>
                      <p className="text-muted leading-relaxed text-sm">{feature}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                      <div className="shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      </div>
                      <p className="text-muted leading-relaxed">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.outcomes && project.outcomes.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Outcomes</h2>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                      <div className="shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      </div>
                      <p className="text-muted leading-relaxed">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <SkillBadge key={tech} skill={tech} />
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-muted uppercase tracking-wider mb-1">Year</dt>
                  <dd className="text-foreground font-medium">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted uppercase tracking-wider mb-1">Category</dt>
                  <dd className="text-foreground font-medium">{project.category}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg group">
                  <img src={imgUrl} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </Container>
    </section>
  );
};

export default ProjectDetail;
