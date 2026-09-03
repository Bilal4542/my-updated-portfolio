import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { SITE_CONTENT } from '../constants/content';

const Contact = ({ id }) => {
  const { contact, socialLinks } = SITE_CONTENT;
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // Validation Logic
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters long.' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address.' : '';
      case 'subject':
        return value.trim().length < 3 ? 'Subject is too short.' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters long.' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(err => err !== '');
  };

  const submitContactForm = async (data) => {
    // 1. You need an Access Key from Web3Forms
    const WEB3FORMS_ACCESS_KEY = "a699c0ae-a111-444f-88bb-541b25056441";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error("Failed to send message");
    }
    
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrors({});
  };

  // Shared Input Styles
  const inputStyles = "w-full bg-surface border rounded-md px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent";
  const getBorderColor = (fieldName) => errors[fieldName] ? "border-red-500" : "border-border";

  return (
    <section id={id} className="w-full py-24 min-h-screen bg-background relative">
      <Container className="max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <SectionHeading className="!mb-6">{contact.heading || "Let's work together"}</SectionHeading>
            <p className="text-lg text-muted leading-relaxed mb-12 max-w-md">
              {contact.text}
            </p>
            
            <dl className="space-y-8 mb-12">
              <div>
                <dt className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Email</dt>
                <dd className="text-muted"><a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">{contact.email}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Location</dt>
                <dd className="text-muted">{contact.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Availability</dt>
                <dd className="text-muted">{contact.availability}</dd>
              </div>
            </dl>

            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1 -m-1"
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            
            {/* Status Live Region for Screen Readers */}
            <div aria-live="polite" className="sr-only">
              {status === 'loading' && "Preparing message..."}
              {status === 'success' && "Your message has been sent successfully."}
              {status === 'error' && "There was an error sending your message. Please try again."}
            </div>

            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Message Prepared!</h3>
                <p className="text-muted mb-8 max-w-sm">
                  Thanks for reaching out. Your message has been prepared successfully. I'll get back to you soon.
                </p>
                <Button onClick={resetForm} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'loading'}
                      className={`${inputStyles} ${getBorderColor('name')}`}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'loading'}
                      className={`${inputStyles} ${getBorderColor('email')}`}
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'loading'}
                    className={`${inputStyles} ${getBorderColor('subject')}`}
                    placeholder="Project Inquiry"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'loading'}
                    rows={5}
                    className={`${inputStyles} ${getBorderColor('message')} resize-y min-h-[120px]`}
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submission Error */}
                {status === 'error' && (
                  <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p>Something went wrong preparing your message. Please try again later or contact me directly via email.</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 py-4"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
