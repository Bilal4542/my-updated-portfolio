import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import PortfolioHome from './pages/PortfolioHome';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
