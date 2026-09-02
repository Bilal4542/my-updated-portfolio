import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const PortfolioHome = () => {
  return (
    <>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Resume id="resume" />
      <Contact id="contact" />
    </>
  );
};

export default PortfolioHome;
