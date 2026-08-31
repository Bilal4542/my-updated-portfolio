import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
