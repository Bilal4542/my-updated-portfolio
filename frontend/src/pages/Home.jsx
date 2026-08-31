import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { SITE_CONTENT } from '../constants/content';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex-grow flex items-center justify-center py-20">
      <Container className="text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            {SITE_CONTENT.hero.titleStart} <br className="hidden md:block"/> 
            <span className="text-accent">{SITE_CONTENT.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mx-auto mb-10 leading-relaxed font-normal max-w-2xl">
            {SITE_CONTENT.hero.subtitle}
          </p>
          
          <Button onClick={() => navigate('/projects')}>
            {SITE_CONTENT.hero.ctaText}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
