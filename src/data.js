export const personalInfo = {
  name: "Meet Panchal",
  title: "Junior Full Stack Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "panchalmeet23450@gmail.com",
  phone: "+91-8160182439",
  summary: "Motivated Junior Full Stack Developer with hands-on experience building end-to-end web applications using React.js, Python, Django, C#, .NET, and SQL. Proficient in designing REST APIs, implementing CRUD operations, and integrating frontend and backend systems. Completed a Django Web Development certification and delivered full-stack projects across two internships. Eager to contribute to scalable, production-grade applications in an Agile environment.",
  github: "https://github.com", // Placeholder to be replaced
  linkedin: "https://linkedin.com", // Placeholder to be replaced
};

export const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Python", level: 80 },
      { name: "Django", level: 85 },
      { name: "C#", level: 75 },
      { name: "ASP.Net", level: 75 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    name: "Database & Tools",
    skills: [
      { name: "SQL", level: 80 },
      { name: "Django ORM", level: 85 },
      { name: "Git & Version Control", level: 80 }
    ]
  }
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Moltech PVT. LTD",
    location: "Ahmedabad",
    duration: "Jan 2026 - Apr 2026",
    bullets: [
      "Developed and maintained full-stack web applications using C#, .NET (backend) and React.js (frontend), ensuring seamless integration with SQL databases.",
      "Designed, developed, and consumed RESTful APIs using the .NET framework, enabling robust client-server communication.",
      "Implemented CRUD operations and managed database connectivity, ensuring data integrity and optimized query performance.",
      "Collaborated with cross-functional teams to build scalable, structured web applications following software development best practices.",
      "Integrated React.js frontend with .NET backend and SQL database, delivering end-to-end functional features."
    ]
  },
  {
    role: "Python Django Intern",
    company: "TechMicra IT Solution",
    location: "Ahmedabad",
    duration: "Nov 2025 - Dec 2025",
    bullets: [
      "Built multiple full-stack projects using React.js, JavaScript, Python, and Django, covering the complete software development lifecycle.",
      "Developed REST APIs and database-driven backend features, connecting frontend forms to server-side logic using Django ORM and SQL.",
      "Designed responsive, accessible UIs using HTML, CSS, Bootstrap, and React components, improving user experience across devices.",
      "Implemented CRUD functionality for data management, ensuring reliable data storage and retrieval.",
      "Collaborated with senior developers, participated in code reviews, and adhered to Git-based version control workflows."
    ]
  }
];

export const projects = [
  {
    title: "MERN Todo Application",
    description: "A comprehensive task management system featuring custom category tagging, priority sorting, status statistics, and dynamic local theme toggling. Implements robust REST APIs, client-side React hooks, and persistent database storage.",
    category: "React",
    tags: ["React.js", "Express", "Node.js", "MongoDB", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  },
  {
    title: "Django E-Commerce REST Engine",
    description: "A production-grade RESTful API designed with Django REST Framework, featuring secure JWT authentication, relational product schemas, advanced searching/filtering capabilities, and Django ORM query optimization.",
    category: "Django",
    tags: ["Python", "Django", "Django REST Framework", "SQL", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  },
  {
    title: "Enterprise Inventory Portal",
    description: "An internal management application featuring a React-based frontend integrated with an ASP.NET / C# backend. Manages massive inventory transactions with robust transactional consistency in SQL.",
    category: ".NET",
    tags: ["C#", "ASP.NET Core", "React.js", "SQL Server", "EF Core"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  },
  {
    title: "DevTerminal Interactive Portfolio",
    description: "A terminal-themed interactive developer portfolio featuring a commands interpreter, simulated terminal file system, search parameters parsing, and animated CRT scanline visuals.",
    category: "React",
    tags: ["React.js", "HTML5", "CSS3", "Vite", "Lucide Icons"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  }
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Information Technology",
    institution: "Silver Oak University, Gota, Ahmedabad",
    duration: "Jul 2023 - Jul 2026 (Completed)",
    details: "Coursework: Programming, Web Development, Database Management, Full Stack Development"
  },
  {
    degree: "H.S.C. — Commerce (GSHSEB)",
    institution: "Shree V.K. Vidhyalay U.M. Shala, Ahmedabad",
    duration: "Graduated: Mar 2023",
    details: "Result: 75.29%"
  }
];

export const certifications = [
  {
    name: "Django Web Development",
    issuer: "Simplilearn",
    details: "Completed training in building dynamic and secure websites using Python and Django, covering ORM, REST APIs, templates, and deployment."
  }
];
