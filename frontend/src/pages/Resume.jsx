import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { SITE_CONTENT } from '../constants/content';

const Resume = ({ id }) => {
  const { resume } = SITE_CONTENT;

  if (!resume) return null;

  return (
    <section id={id} className="w-full py-24 min-h-screen bg-background">
      <Container className="max-w-4xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionHeading className="!mb-6">{resume.heading || "Experience"}</SectionHeading>
            <p className="text-lg text-muted leading-relaxed">
              {resume.summary}
            </p>
          </div>
          <Button className="shrink-0 flex items-center gap-2 px-6 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download Resume
          </Button>
        </div>

        <div className="space-y-24">
          
          {/* Experience Timeline */}
          {resume.experience && resume.experience.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-10 border-b border-border/50 pb-4 uppercase tracking-widest text-sm">
                Professional Experience
              </h3>
              <div className="space-y-16">
                {resume.experience.map((job, index) => (
                  <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8"
                  >
                    {/* Meta Column (Dates, Company, Location) */}
                    <div className="md:col-span-1 flex flex-col md:text-right pt-1">
                      <span className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-1">
                        {job.dates}
                      </span>
                      <span className="text-base font-medium text-accent">
                        {job.company}
                      </span>
                      <span className="text-sm text-muted">
                        {job.location}
                      </span>
                    </div>

                    {/* Content Column (Role, Achievements) */}
                    <div className="md:col-span-3">
                      <h4 className="text-2xl font-extrabold text-foreground mb-4">
                        {job.role}
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-3 items-start group">
                            <span className="text-accent/50 mt-1.5 shrink-0 transition-colors group-hover:text-accent">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                            </span>
                            <span className="text-muted leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Timeline */}
          {resume.education && resume.education.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-10 border-b border-border/50 pb-4 uppercase tracking-widest text-sm">
                Education
              </h3>
              <div className="space-y-12">
                {resume.education.map((edu, index) => (
                  <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8"
                  >
                    <div className="md:col-span-1 flex flex-col md:text-right pt-1">
                      <span className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-1">
                        {edu.dates}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted">
                        {edu.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
};

export default Resume;
