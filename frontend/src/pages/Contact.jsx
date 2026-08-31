import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { SITE_CONTENT } from '../constants/content';

const Contact = () => {
  return (
    <section className="w-full py-20">
      <Container className="max-w-2xl text-center">
        <SectionHeading className="mb-6">{SITE_CONTENT.contact.heading}</SectionHeading>
        
        <p className="text-muted text-lg leading-relaxed mb-10">
          {SITE_CONTENT.contact.text}
        </p>
        
        <a href={`mailto:${SITE_CONTENT.contact.email}`}>
          <Button size="lg">{SITE_CONTENT.contact.buttonText}</Button>
        </a>
      </Container>
    </section>
  );
};

export default Contact;
