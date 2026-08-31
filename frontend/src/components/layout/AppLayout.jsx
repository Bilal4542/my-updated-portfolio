import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow relative flex flex-col items-center">
        {/* Subtle decorative background element that applies globally */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-accent-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
