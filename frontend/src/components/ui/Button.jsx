import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const baseClasses = "px-6 py-3 font-medium rounded-base transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  
  const variants = {
    primary: "bg-accent text-white shadow-soft hover:bg-accent-hover",
    outline: "border border-border text-foreground hover:bg-surface",
    ghost: "text-muted hover:text-foreground hover:bg-surface",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
