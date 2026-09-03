import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground transition-colors duration-300 relative">
      {/* Subtle Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="flex-grow relative flex flex-col items-center">
        {/* Subtle decorative background element that applies globally */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-accent-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
