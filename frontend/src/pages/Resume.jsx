import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Resume = () => {
  return (
    <section className="w-full py-20">
      <Container className="max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <SectionHeading className="!mb-0">Resume</SectionHeading>
          <Button variant="outline">Download PDF</Button>
        </div>
        
        <div className="space-y-12">
          {/* Experience Section Placeholder */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">Experience</h3>
            <div className="glass-panel p-6 rounded-base">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h4 className="text-lg font-bold text-foreground">Senior Frontend Engineer</h4>
                  <p className="text-accent">Tech Corp Inc.</p>
                </div>
                <span className="text-sm text-muted font-medium mt-1 sm:mt-0">2021 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Led the migration of a legacy dashboard to a modern React SPA.</li>
                <li>Implemented a custom design system reducing UI inconsistency by 40%.</li>
                <li>Mentored junior developers and conducted code reviews.</li>
              </ul>
            </div>
          </div>
          
          {/* Education Section Placeholder */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">Education</h3>
            <div className="glass-panel p-6 rounded-base">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h4 className="text-lg font-bold text-foreground">B.S. Computer Science</h4>
                  <p className="text-accent">University of Technology</p>
                </div>
                <span className="text-sm text-muted font-medium mt-1 sm:mt-0">2017 - 2021</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
