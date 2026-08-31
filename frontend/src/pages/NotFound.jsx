import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex-grow flex items-center justify-center py-20">
      <Container className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Page Not Found</h2>
          <p className="text-muted mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => navigate('/')}>
            Return Home
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default NotFound;
