import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { SITE_CONTENT } from '../constants/content';

const Projects = ({ id }) => {
  return (
    <section id={id} className="w-full py-20 min-h-screen">
      <Container>
        <SectionHeading>My Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
