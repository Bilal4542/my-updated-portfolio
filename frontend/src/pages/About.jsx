import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SkillBadge from '../components/ui/SkillBadge';
import { SITE_CONTENT } from '../constants/content';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = ({ id }) => {
  const { about } = SITE_CONTENT;

  return (
    <section id={id} className="w-full py-24 min-h-screen flex items-center bg-surface/30">
      <Container className="max-w-6xl">
        <SectionHeading>{about.heading}</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Bio & Details */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-5 text-muted leading-relaxed text-lg mb-8">
              {about.paragraphs.map((para, idx) => (
                <motion.p key={idx} variants={itemVariants}>
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Special Code Snippet Element */}
            <motion.div 
              variants={itemVariants}
              className="w-full mb-8"
            >
              <div className="relative rounded-2xl bg-[#0b0f19] dark:bg-black/50 border border-border/40 overflow-hidden shadow-2xl p-6 font-mono text-sm sm:text-base leading-relaxed text-zinc-300 w-full xl:w-11/12 group hover:border-accent/50 transition-colors">
                {/* Terminal Header */}
                <div className="flex gap-2 mb-4 pb-4 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                
                {/* Code Content */}
                <div className="relative z-10">
                  <span className="text-purple-400 font-semibold">const</span> <span className="text-blue-400">developer</span> <span className="text-purple-400">=</span> {'{'}
                  <br/>
                  <span className="text-zinc-500 pl-4">name:</span> <span className="text-emerald-400">'Muhammad Bilal'</span>,
                  <br/>
                  <span className="text-zinc-500 pl-4">passion:</span> <span className="text-emerald-400">'Building scalable web applications'</span>,
                  <br/>
                  <span className="text-zinc-500 pl-4">isCreative:</span> <span className="text-orange-400">true</span>,
                  <br/>
                  <span className="text-blue-400 pl-4">solveProblem</span><span className="text-zinc-300">()</span> {'{'}
                  <br/>
                  <span className="text-purple-400 pl-8">return</span> <span className="text-emerald-400">"Coffee + Code = Solution"</span>;
                  <br/>
                  <span className="pl-4">{'}'}</span>
                  <br/>
                  {'}'};
                </div>
                
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
              </div>
            </motion.div>

            {/* Personal Details Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-surface border border-border shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-foreground">Location</span>
                <span className="text-sm text-muted">{about.details.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-foreground">Experience</span>
                <span className="text-sm text-muted">{about.details.experience}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-foreground">Focus</span>
                <span className="text-sm text-muted">{about.details.focus}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Strengths & Skills */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Core Strengths */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Core Strengths
              </h3>
              <ul className="flex flex-col gap-3">
                {about.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Technologies
              </h3>
              
              <div className="flex flex-col gap-5">
                {Object.entries(about.skillsGrouped).map(([group, skills]) => (
                  <div key={group}>
                    <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">{group}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <SkillBadge key={skill} skill={skill} delay={index * 0.02} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
};

export default About;
