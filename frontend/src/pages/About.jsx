import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SkillBadge from '../components/ui/SkillBadge';
import { SITE_CONTENT } from '../constants/content';

const About = () => {
  return (
    <section className="w-full py-20">
      <Container className="max-w-4xl">
        <SectionHeading>{SITE_CONTENT.about.heading}</SectionHeading>
        
        <div className="glass-panel p-8 rounded-base space-y-6 text-muted leading-relaxed text-lg mb-12">
          <p>{SITE_CONTENT.about.paragraph1}</p>
          <p>{SITE_CONTENT.about.paragraph2}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Technologies I Use</h3>
          <div className="flex flex-wrap gap-3">
            {SITE_CONTENT.skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
