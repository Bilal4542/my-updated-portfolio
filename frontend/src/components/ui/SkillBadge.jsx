import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="px-4 py-2 bg-surface border border-border text-foreground font-medium text-sm rounded-base shadow-sm"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
