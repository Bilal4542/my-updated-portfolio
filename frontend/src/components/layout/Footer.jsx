import React from 'react';
import Container from '../ui/Container';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Muhammad Bilal. Crafted with care.
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
};

export default Footer;
