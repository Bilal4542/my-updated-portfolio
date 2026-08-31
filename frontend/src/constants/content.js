export const SITE_CONTENT = {
  hero: {
    titleStart: "Building digital ",
    titleHighlight: "experiences.",
    subtitle: "A minimalist portfolio focusing on clean architecture, accessible design systems, and thoughtful interactions.",
    ctaText: "View My Work",
  },
  about: {
    heading: "About Me",
    paragraph1: "Hello! I'm a full-stack developer passionate about crafting beautiful, accessible, and high-performance web applications.",
    paragraph2: "With experience in modern JavaScript frameworks and scalable backend systems, I strive to build software that makes a positive impact.",
  },
  contact: {
    heading: "Get In Touch",
    text: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "hello@example.com",
    buttonText: "Say Hello",
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ],
  projects: [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern web application built with React and Node.js.",
      techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "An e-commerce platform featuring secure payments and real-time inventory.",
      techStack: ["Next.js", "Stripe", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"
  ]
};
