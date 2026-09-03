import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import AppLayout from './components/layout/AppLayout';
import PortfolioHome from './pages/PortfolioHome';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppLayout>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </AppLayout>
    </MotionConfig>
  );
}

export default App;
