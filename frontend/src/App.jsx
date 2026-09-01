import React from 'react';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <AppLayout>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Resume id="resume" />
      <Contact id="contact" />
    </AppLayout>
  );
}

export default App;
