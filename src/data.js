export const personalInfo = {
  name: "Meet Panchal",
  title: "Junior Full Stack Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "panchalmeet23450@gmail.com",
  phone: "+91-8160182439",
  summary: "Motivated Junior Full Stack Developer with hands-on experience building end-to-end web applications using React.js, Node.js, Express.js, Python, Django, C#, .NET, and SQL. Proficient in designing REST APIs, implementing CRUD operations, and integrating frontend and backend systems with relational databases. Completed a Django Web Development certification and delivered full-stack projects across internships and practical web applications. Eager to contribute to scalable, production-grade applications in an Agile environment.",
  github: "https://github.com/MeetPanchal23",
  linkedin: "https://www.linkedin.com/in/meetpanchal2308",
  resumeUrl: "https://drive.google.com/file/d/1c-loPEDAtOaVkSKOb30R_a_NLWpsivHo/view?usp=sharing"
};

export const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Bootstrap & Responsive UI", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js & Express.js", level: 85 },
      { name: "Python & Django", level: 85 },
      { name: "C# & ASP.NET", level: 78 },
      { name: "RESTful APIs & MVC", level: 88 },
      { name: "JWT & Role-Based Auth", level: 85 }
    ]
  },
  {
    name: "Database & Tools",
    skills: [
      { name: "SQL (SQLite / SQL Server)", level: 85 },
      { name: "Relational Schema & Queries", level: 85 },
      { name: "Django ORM & Dapper", level: 82 },
      { name: "Git & Version Control", level: 85 }
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
    title: "Job Application Management System",
    description: "A full-stack recruitment and job application tracking platform with Role-Based Access Control (Candidate vs Recruiter/Admin). Built with React.js, Node.js, Express.js, and relational SQL queries. Features live keyword and location search, duplicate-safe 1-click applications, recruiter metrics dashboard with real-time SQL aggregate counters, complete job posting CRUD, and candidate status review workflows (Pending/Accepted/Rejected).",
    category: "React",
    tags: ["React.js", "Node.js", "Express.js", "SQL", "JWT Auth", "REST APIs", "MVC", "RBAC"],
    githubUrl: "https://github.com/MeetPanchal23/Job-Application"
  },
  {
    title: "Inventory Management System",
    description: "An enterprise-grade inventory and order management system featuring a React-based frontend and an ASP.NET Core Web API backend. Built using Dapper for high-performance database queries in SQL Server, JWT role-based authentication, and custom AES-256 payload encryption/decryption middleware for secure API communications.",
    category: ".NET",
    tags: ["C#", "ASP.NET Core", "Dapper", "SQL Server", "AES Encryption", "React.js"],
    githubUrl: "https://github.com/MeetPanchal23/InventoryManagementSystem"
  },
  {
    title: "Backpack",
    description: "A custom web application built with Python and Django, featuring secure user authentication, database models for items management, and a clean, responsive template-driven user interface.",
    category: "Django",
    tags: ["Python", "Django", "SQLite", "HTML5", "CSS3"],
    githubUrl: "https://github.com/MeetPanchal23/Backpack"
  },
  {
    title: "DevTerminal Interactive Portfolio",
    description: "A terminal-themed interactive developer portfolio featuring a commands interpreter, simulated terminal file system, search parameters parsing, and animated CRT scanline visuals.",
    category: "React",
    tags: ["React.js", "HTML5", "CSS3", "Vite", "Lucide Icons"],
    githubUrl: "https://github.com/MeetPanchal23/Meet_portfolio"
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
    duration: "Mar 2023",
    details: "75.29%"
  }
];

export const certifications = [
  {
    name: "Django Web Development",
    issuer: "Simplilearn",
    details: "Completed training in building dynamic and secure websites using Python and Django, covering ORM, REST APIs, templates, and deployment."
  }
];
