import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="px-4 py-2 bg-surface hover:bg-surface/80 hover:text-accent border border-border hover:border-accent/50 text-foreground font-medium text-sm rounded-base shadow-sm cursor-default transition-colors"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
