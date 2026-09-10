import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import AppLayout from './components/layout/AppLayout';
import PortfolioHome from './pages/PortfolioHome';
import ProjectDetail from './pages/ProjectDetail';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <AppLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><PortfolioHome /></PageTransition>} />
            <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </AppLayout>
    </MotionConfig>
  );
}

export default App;
