import React from 'react';

const Container = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-6xl mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
