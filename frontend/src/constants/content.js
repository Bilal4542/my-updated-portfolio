export const SITE_CONTENT = {
  hero: {
    titleStart: "Muhammad ",
    titleHighlight: "Bilal.",
    subtitle: "Full MERN Stack Developer focused on clean architecture, accessible design systems, and thoughtful interactions.",
    ctaText: "View My Work",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "Hello! I'm Muhammad Bilal, a passionate Full MERN Stack Developer based in Peshawar. I specialize in building robust, scalable, and user-centric web applications from the ground up.",
      "My journey in web development started with a curiosity for how things work on the internet, which quickly evolved into a career focused on crafting thoughtful digital experiences. I enjoy bridging the gap between engineering and design—combining my technical knowledge with a keen eye for aesthetics.",
      "When I'm not writing code, I'm usually exploring new technologies, contributing to open-source projects, or optimizing existing architectures for better performance."
    ],
    strengths: [
      "Product Thinking",
      "Frontend Engineering",
      "Backend APIs",
      "Database Design",
      "Deployment & DevOps"
    ],
    details: {
      location: "Peshawar (Open to Remote)",
      experience: "2+ Years",
      focus: "Full-Stack Development"
    },
    skillsGrouped: {
      Frontend: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Next.js"],
      Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      Database: ["MongoDB", "Mongoose", "PostgreSQL"],
      Tools: ["Git", "GitHub", "Postman", "Vercel", "Render"]
    }
  },
  contact: {
    heading: "Get In Touch",
    text: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "mbilal45422@gmail.com",
    location: "Peshawar, Pakistan",
    availability: "Monday - Saturday",
    buttonText: "Say Hello",
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Bilal4542", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-bilal22/", icon: "linkedin" },
    { name: "Email", url: "mailto:mbilal45422@gmail.com", icon: "email" },
  ],
  navLinks: [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Resume", path: "#resume" },
    { name: "Contact", path: "#contact" },
  ],
  resume: {
    heading: "Experience",
    summary: "I build responsive, accessible, and high-performance web applications. I focus on writing clean, scalable code and creating seamless digital experiences that drive measurable business outcomes.",
    experience: [
      {
        id: 1,
        role: "MERN Stack Developer (Paid Intern)",
        company: "SkyraSoft Software House",
        location: "Peshawar, Pakistan",
        dates: "Mar 2026 – Sep 2026",
        achievements: [
          "Completed 6-month paid internship hired through the Pakistan Software Export Board (PSEB) internship program.",
          "Developed and maintained web applications using MongoDB, Express.js, React.js, and Node.js.",
          "Collaborated with senior developers on live client projects, gaining hands-on industry experience.",
          "Assisted in debugging, testing, and optimizing application features for better performance.",
          "Contributed to both front-end and back-end development tasks under the MERN stack architecture."
        ]
      },
      {
        id: 2,
        role: "Team Lead / Full Stack Developer",
        company: "Tech Pioneers",
        location: "Peshawar, Pakistan",
        dates: "Jan 2025 – Feb 2026",
        achievements: [
          "Led a cross-functional development team to architect and deliver scalable web applications using the MERN stack.",
          "Mentored junior developers through comprehensive code reviews, pair programming, and technical workshops.",
          "Implemented CI/CD pipelines that reduced deployment times and improved overall release stability.",
          "Designed and optimized RESTful APIs and MongoDB database schemas to support high-traffic user volumes."
        ]
      },
      {
        id: 3,
        role: "Junior MERN Stack Developer",
        company: "Bright Code Lab",
        location: "Peshawar, Pakistan",
        dates: "Sep 2023 – Dec 2024",
        achievements: [
          "Contributed to the full-stack development of client web applications using MongoDB, Express.js, React.js, and Node.js.",
          "Integrated third-party APIs and payment gateways to expand platform capabilities and streamline user workflows.",
          "Collaborated closely with UI/UX designers to translate Figma mockups into responsive, accessible React components.",
          "Assisted in identifying and resolving critical backend bugs, reducing system downtime."
        ]
      },
      {
        id: 4,
        role: "React.js Developer",
        company: "Bingtechs Solution",
        location: "Peshawar, Pakistan",
        dates: "Aug 2022 – Aug 2023",
        achievements: [
          "Focused on building dynamic, responsive, and highly user-friendly web interfaces using React.js and modern CSS frameworks.",
          "Managed complex frontend application state using Redux and Context API for seamless data flow.",
          "Optimized application performance by implementing lazy loading, code splitting, and memoization techniques.",
          "Ensured cross-browser compatibility and mobile responsiveness across all major device viewports."
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor in Software Engineering",
        institution: "Islamia College University Peshawar",
        location: "Peshawar, Pakistan",
        dates: "Oct 2020 – Jul 2024"
      },
      {
        id: 2,
        degree: "Intermediate (FSC Pre-Engineering)",
        institution: "Hadaf College Peshawar",
        location: "Peshawar, Pakistan",
        dates: "Aug 2018 – Apr 2020"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "[Certification Name, e.g., AWS Certified Developer]",
        issuer: "[Issuing Organization]",
        date: "[Month Year]"
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Carthage Travel",
      slug: "carthage-travel",
      shortDescription: "A responsive and modern travel and tourism webapp built with MERN Stack Technology.",
      fullDescription: "Carthage Travel is a comprehensive platform designed for tourism agencies to manage bookings, showcase destinations, and handle user inquiries efficiently. It features a modern interface with complex search filters and a dedicated admin dashboard for managing tour packages.",
      imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Dynamic Tour Package Generator based on user preferences.",
        "Interactive Map integration for visual itinerary planning.",
        "Secure Role-Based Access Control for agency admins vs standard users.",
        "Real-time booking availability and calendar synchronization."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "Web Application",
      liveUrl: "https://carthagetravel.com/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: true,
      year: "2026",
      challenges: ["Implementing a complex multi-parameter search algorithm for destinations.", "Handling secure payment processing and booking state management."],
      outcomes: ["Increased client booking conversion rates by 25%.", "Streamlined agency management workflow into a single centralized dashboard."]
    },
    {
      id: 2,
      title: "SourcingBytes",
      slug: "sourcingbytes",
      shortDescription: "A responsive modern platform for Amazon, Shopify, and e-commerce sellers to buy products in bulk.",
      fullDescription: "SourcingBytes acts as a critical bridge between manufacturers and e-commerce storefront owners. It offers advanced product filtering, an inquiry management system, and a dedicated user portal for tracking bulk orders from sourcing to delivery.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Advanced bulk-pricing calculator with tiered discounts.",
        "Real-time B2B messaging system between suppliers and retailers.",
        "Automated PDF generation for quotes and proforma invoices.",
        "Customizable user dashboards for tracking container shipping statuses."
      ],
      technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "B2B E-Commerce",
      liveUrl: "https://sourcingbytes.com/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: true,
      year: "2026",
      challenges: ["Building a scalable relational database structure for complex product variations.", "Creating a real-time messaging interface for buyer-seller inquiries."],
      outcomes: ["Successfully onboarded 500+ sellers within the first three months.", "Reduced average sourcing communication time by 40%."]
    },
    {
      id: 3,
      title: "ToolsMarket",
      slug: "toolsmarket",
      shortDescription: "A professional platform offering a suite of utility tools like invoice generators, URL shorteners, and calculators.",
      fullDescription: "ToolsMarket is a highly accessible web application that consolidates essential micro-tools into a single dashboard. Users can generate professional invoices, shorten URLs with tracking, and calculate GPA or BMI securely with full user authentication.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Fully customizable Invoice Generator with export to PDF.",
        "Robust URL shortener with click analytics and geolocation tracking.",
        "Unified authentication system for saving user history.",
        "Extensible plugin architecture for rapidly adding new calculators."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      category: "SaaS Platform",
      liveUrl: "https://toolsmarket.app/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: true,
      year: "2025",
      challenges: ["Designing a modular architecture so new tools can be added quickly without breaking existing ones.", "Securing the REST API endpoints using stateless JWT authentication."],
      outcomes: ["Built a robust micro-service style API architecture.", "Achieved a 99% uptime with scalable cloud deployment."]
    },
    {
      id: 4,
      title: "Pre-Gems",
      slug: "pre-gems",
      shortDescription: "A professional and minimal catalog website for precision gems and minerals.",
      fullDescription: "Pre-Gems is a bespoke digital storefront designed to showcase high-value precision gems and minerals. The focus was heavily on a minimalist aesthetic, ensuring the high-resolution imagery of the gems stood out without distraction.",
      imageUrl: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599643478524-fb66f70a0066?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Ultra-fast Server-Side Rendering via Next.js.",
        "High-performance image gallery with lazy loading and blur-up effects.",
        "Bespoke Framer Motion page transitions to mimic physical luxury brochures.",
        "Headless CMS integration for easy inventory management by the client."
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Portfolio & Catalog",
      liveUrl: "https://www.pre-gems.com/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: false,
      year: "2025",
      challenges: ["Optimizing large, high-fidelity images for fast web loading without losing visual quality.", "Creating smooth page transitions that match the premium brand feel."],
      outcomes: ["Delivered a sub-2-second load time using Next.js image optimization.", "Client praised the luxurious and modern aesthetic."]
    },
    {
      id: 5,
      title: "Rains E-Commerce",
      slug: "rains-ecommerce",
      shortDescription: "E-commerce platform with an advanced product catalog, payment integration, and user management.",
      fullDescription: "Rains is a fully-featured online retail platform supporting thousands of SKUs. It includes a robust shopping cart, seamless Stripe payment integration, order history tracking, and a secure user management portal.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Persistent Shopping Cart utilizing Redux and LocalStorage.",
        "Secure checkout flow powered by Stripe Elements.",
        "Advanced inventory management preventing over-ordering.",
        "User profile system with saved addresses and past order history."
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redux"],
      category: "E-Commerce",
      liveUrl: "https://rains.com/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: true,
      year: "2024",
      challenges: ["Integrating Stripe webhooks securely to ensure orders are only fulfilled on successful payment.", "Managing complex global state for the shopping cart and user sessions."],
      outcomes: ["Processed thousands of successful test transactions.", "Built a highly maintainable global state architecture."]
    },
    {
      id: 6,
      title: "TaskFlow Enterprise",
      slug: "taskflow",
      shortDescription: "A collaborative Kanban-style project management tool for remote engineering teams.",
      fullDescription: "TaskFlow is an enterprise-grade project management tool that allows teams to organize work visually. It supports real-time updates via WebSockets, drag-and-drop task management, and detailed productivity analytics.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
      ],
      features: [
        "Real-time board synchronization across multiple clients using Socket.io.",
        "Intuitive Drag and Drop interface for columns and tasks.",
        "Activity log tracking who made which changes and when.",
        "Detailed burndown charts and sprint productivity analytics."
      ],
      technologies: ["React", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
      category: "Web Application",
      liveUrl: "https://taskflow-demo.app/",
      sourceUrl: "https://github.com/Bilal4542",
      featured: false,
      year: "2025",
      challenges: ["Ensuring real-time state synchronization across multiple concurrent users without race conditions.", "Implementing accessible and performant drag-and-drop features."],
      outcomes: ["Created a seamless real-time collaboration experience.", "Designed an intuitive UI that required zero training for new users."]
    }
  ]
};
