export const profile = {
  name: "Yohanes Senbeto",
  title: "Full-Stack Software Engineer",
  tagline: "Building scalable internal tools & enterprise platforms",
  location: "Addis Ababa, Ethiopia",
  email: "jonicasenbeto@gmail.com",
  linkedin: "https://linkedin.com/in/yohanes-senbeto",
  github: "https://github.com/YohanesSenbeto",
  youtube: "https://www.youtube.com/@Yoh-Tech-Solutions",
  portfolio: "https://ip-toolkit-pro.vercel.app/",
  company: "Ethio Telecom",
  photo: "/comman%20my_profile.jpg",
  summary:
    "Full-stack developer at Ethio Telecom, passionate about building scalable internal tools. Experienced in React, Next.js, TypeScript, Prisma, and PostgreSQL. Strong problem-solver and rapid learner with a track record of delivering impactful solutions for enterprise clients. Also a content creator on YouTube (Yoh-Tech Solutions) sharing tech tutorials.",
  stats: [
    { label: "Years Experience", value: "9+" },
    { label: "Projects Shipped", value: "12+" },
    { label: "Users Served", value: "347+" },
    { label: "Teams Enabled", value: "82" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "NestJS"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Generative AI", "Large Language Model", "OpenAI", "Gemini", "pgvector", "RAG"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "TypeORM"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Nginx", "AWS", "Google Cloud", "Shell Scripting"],
  },
  {
    category: "Tools & Practices",
    items: ["NextAuth", "Tailwind CSS", "Zod", "Vitest", "Playwright", "Swagger"],
  },
];

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  telegram?: string;
  image?: string;
  highlight: string;
  category: "Full-Stack" | "Enterprise" | "GIS" | "CLI" | "Creative" | "AI";
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "AI-Powered Preventive Maintenance Management System",
    description:
      "Full-stack preventive maintenance platform for telecom infrastructure with 10 AI automation features and multi-provider LLM integration.",
    longDescription:
      "Built a full-stack preventive maintenance platform for telecom infrastructure with 10 AI automation features: predictive failure forecasting, telemetry anomaly detection, RAG-powered copilot assistant, AI work-order prioritization, automated checklist generation, executive report summarization, and root-cause analysis. Integrated multi-provider LLMs (OpenAI/Gemini) with pgvector semantic search, cost tracking, and budget guards.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Docker", "OpenAI", "Gemini", "pgvector"],
    features: [
      "Predictive failure forecasting & telemetry anomaly detection",
      "RAG-powered copilot assistant with pgvector semantic search",
      "AI work-order prioritization, checklist generation & report summarization",
      "Multi-provider LLMs (OpenAI/Gemini) with cost tracking & budget guards",
      "RBAC, AD/LDAP auth & CSP-secured headers",
    ],
    github: "https://github.com/YohanesSenbeto",
    highlight: "AI · 10 Automation Features",
    category: "AI",
    image: "/PM%20Assistant%20AI.png",
    live: "https://pm.ethiotelecom.et/",
    featured: true,
  },
  {
    name: "Online Bus Ticket Reservation MS",
    description:
      "Full-featured bus ticketing platform with Ethiopian payment gateway integration and fleet management.",
    longDescription:
      "A BSc graduation project enabling passengers to search trips, select seats, book, and pay via Telebirr/CBE Birr/M-Birr through Chapa. Staff and admins manage buses, routes, trips, stations, garages, and vehicle maintenance with role-based access.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Chapa", "Tailwind"],
    features: [
      "Chapa payment integration with digital PDF receipts",
      "Role-based fleet management (admin/staff/driver/mechanic)",
      "Seat selection, QR codes, Excel export, AI assist",
    ],
    github: "https://github.com/YohanesSenbeto",
    highlight: "Graduation Project",
    category: "Full-Stack",
    featured: true,
  },
  {
    name: "Preventive Maintenance Tasks System",
    description:
      "Enterprise internal tool used by 347 users across 82 teams at Ethio Telecom to manage maintenance tasks.",
    longDescription:
      "Replaced manual spreadsheets and phone calls with a unified dashboard. Supports rich staff/supervisor relationships, regions/zones/teams, weekly auto-scheduling, and bulk staff import from JSON/XLSX.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "ExcelJS", "OpenAI"],
    features: [
      "Staff/role/region/zone/team hierarchy with supervisor relations",
      "Automated weekly task scheduling",
      "XLSX/JSON bulk import + seeding for 347 users",
    ],
    github: "https://github.com/YohanesSenbeto",
    highlight: "Production · 347 users",
    category: "Enterprise",
    image: "/PM%20full%20page.png",
    live: "https://pm.ethiotelecom.et/",
    featured: true,
  },
  {
    name: "Digital Land Registration System",
    description:
      "Government cadastre platform for Ambo Town with GIS mapping and multi-role land workflows.",
    longDescription:
      "Citizens register land, apply for transfer/inheritance, and report disputes. Land officers review, approve, issue titles, and manage parcels on an interactive map with area calculations.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google Maps", "Leaflet", "Turf.js"],
    features: [
      "GIS mapping of parcels/kebeles with area calculation",
      "Multi-role workflow (Admin/Land Officer/Zone/Region/Citizen)",
      "Title transfer, inheritance, dispute workflows + PDF certificates",
    ],
    github: "https://github.com/YohanesSenbeto",
    highlight: "GIS · Government",
    category: "GIS",
    featured: true,
  },
  {
    name: "IP Toolkit Pro",
    description:
      "Ethio Telecom enterprise platform for WAN IP analysis, IP pool management, and router configuration.",
    longDescription:
      "Secure WAN IP analysis, IP pool management, router configuration generation, and technician enablement. Includes a Telegram bot sidecar for field technicians.",
    tech: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Telegram Bot", "OpenAI"],
    features: [
      "WAN IP analyzer + IP pool/enterprise logic",
      "Router config generator + technician tutorials",
      "Telegram bot sidecar for field operations",
    ],
    live: "https://ip-toolkit-pro.vercel.app/",
    telegram: "https://t.me/YohTechSolutions_bot",
    highlight: "Enterprise · Live",
    category: "Enterprise",
    image: "/ip%20tool.png",
    featured: true,
  },
  {
    name: "nestx CLI",
    description:
      "Published npm package — a powerful NestJS project generator with batteries included.",
    longDescription:
      "Scaffolds production-ready NestJS apps with Prisma, Swagger, Helmet, CORS, rate-limiting, and Jest pre-configured. MIT-licensed and installable globally via npm.",
    tech: ["TypeScript", "Commander", "Chalk", "NestJS", "Prisma"],
    features: [
      "nestx new scaffolder with security best practices",
      "Prisma/Swagger/Helmet/rate-limit templates",
      "Published to npm — npm i -g nestx",
    ],
    github: "https://github.com/YohanesSenbeto/nestx-cli-joni",
    highlight: "npm Package",
    category: "CLI",
    featured: true,
  },
  {
    name: "Joni & Astu Wedding Invitation",
    description:
      "Personalized wedding invitation site with per-guest links, open tracking, and RSVP admin dashboard.",
    longDescription:
      "Per-guest invitation links with open-tracking, RSVP accept/reject with remarks, and an admin dashboard with guest stats and bulk seeding.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Tailwind"],
    features: [
      "Per-guest personalized links + open tracking",
      "RSVP with accept/reject + remarks",
      "Admin dashboard + bulk invitee seeding",
    ],
    live: "https://joni-astu-wedding-invitation-pro.vercel.app/",
    highlight: "Creative · Live",
    category: "Creative",
    image: "/joni_astu_wedding.png",
    featured: true,
  },
  {
    name: "Yoh-Tech Solutions — YouTube Channel",
    description:
      "Tech content creator channel sharing full-stack tutorials, AI tooling, and enterprise dev walkthroughs.",
    longDescription:
      "YouTube channel (Yoh-Tech Solutions) where I create hands-on tutorials on full-stack development, AI integrations, and enterprise tooling — breaking down complex builds into practical, follow-along videos.",
    tech: ["YouTube", "Content Creation", "Next.js", "AI", "Tutorials"],
    features: [
      "Full-stack & AI integration walkthroughs",
      "Practical, follow-along tutorial format",
      "Enterprise dev tips & tooling demos",
    ],
    live: "https://www.youtube.com/@Yoh-Tech-Solutions",
    highlight: "Content Creator",
    category: "Creative",
    image: "/youtube%20content.png",
    featured: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Ethio Telecom",
    period: "Jun 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Developed a preventive maintenance system (React, Next.js, TypeScript, Prisma, PostgreSQL) replacing manual spreadsheets and phone calls.",
      "Enabled 347 users across 82 teams to create, assign, and track maintenance tasks in a unified dashboard.",
      "Streamlined workflow automation to improve follow-up speed and reduce missed tasks.",
    ],
  },
  {
    role: "Fixed Network Performance Analyst",
    company: "Ethio Telecom",
    period: "Dec 2020 – Jun 2025",
    location: "Ambo, Ethiopia",
    points: [
      "Monitored and analyzed network performance metrics, enhancing service reliability.",
      "Collaborated to implement process improvements, reducing downtime by 15%.",
      "Delivered technical support and training to team members.",
    ],
  },
  {
    role: "Assistant Field Operation Technician",
    company: "Ethio Telecom",
    period: "Dec 2016 – Dec 2020",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Maintained and optimized fixed-line services to minimize downtime.",
      "Supported technical teams in troubleshooting network issues.",
      "Contributed to network expansion and enhanced reliability.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Hulu Cart",
    period: "Sep 2024 – Nov 2024",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Completed ALX Ventures project with Hulu Cart Rentals, achieving #1 ranking among 50 startups.",
      "Enhanced WordPress UI and optimized backend for engagement and scalability.",
    ],
  },
];

export const certifications = [
  "AI Workshop: Build a Neural Network with PyTorch Lightning",
  "Advanced Laravel",
  "Building a Website with Laravel, React.js, and Inertia",
  "AI for Developers — alx_africa",
  "Building RESTful Web APIs with Django",
  "Node.js Essential Training",
  "Next.js: Creating and Hosting a Full-Stack Site",
  "Cisco CCST Networking: Network Fundamentals",
  "Android Developer Fundamentals — Udacity",
  "Full Stack Web Development — ALX South Africa",
];

export const education = [
  {
    institution: "Rift Valley University",
    degree: "Bachelor's Degree, Computer Science",
    period: "Feb 2019 – Jul 2024",
    detail: "Grade 3.63 · Medal Award for Academic Excellence",
  },
  {
    institution: "African Leadership Experience (ALX)",
    degree: "Certificate, Software Engineering",
    period: "May 2023 – Jun 2024",
    detail: "12-month comprehensive full-stack development program",
  },
  {
    institution: "SESE",
    degree: "Certificate, SE Full Stack Development (Backend)",
    period: "—",
    detail: "Specialized in backend engineering",
  },
];

export const achievements = [
  "#1 ranking among 50 startups — ALX Ventures / Hulu Cart",
  "Medal Award for Academic Excellence — Rift Valley University",
  "Participant — Innovating with Google Cloud Hackathon (Google Cloud + ALX Ethiopia)",
];
