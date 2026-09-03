import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import profileImage from '../../myprofile.png';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Home = ({ id }) => {
  return (
    <section id={id} className="w-full min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Content */}
          <motion.div 
            className="flex-1 w-full max-w-2xl lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Availability Indicator */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-surface border border-border mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted tracking-wide">
                Available for selected freelance and full-time opportunities
              </span>
            </motion.div>

            {/* Headings */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-accent font-medium mb-2 tracking-wide">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6 leading-tight">
              Muhammad Bilal.
            </motion.h1>
            
            {/* Subtitles & Descriptions */}
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-foreground font-semibold mb-4 leading-snug">
              I build thoughtful digital products with modern web technologies.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted mb-10 leading-relaxed max-w-lg">
              I am a Full MERN stack developer focused on creating usable, performant, and highly maintainable web applications.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-4 text-base">
                  View my work
                </Button>
              </a>
              <a href="#resume" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">
                  Download resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image & Decorations */}
          <motion.div 
            className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative background shape */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-transparent blur-[80px] rounded-full -z-10 opacity-50"
            />

            <div className="relative z-10 w-72 md:w-80 lg:w-96">
              <div className="relative w-full aspect-[4/5] overflow-visible">
                <img 
                  src={profileImage} 
                  alt="Muhammad Bilal" 
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Muhammad+Bilal&size=512&background=random";
                  }}
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <motion.div 
              className="absolute top-10 right-10 lg:-right-4 w-12 h-12 rounded-full border border-accent flex items-center justify-center bg-background/50 backdrop-blur-sm shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
