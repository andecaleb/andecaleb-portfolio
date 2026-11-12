// src/lib/data.ts

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
  index: number;
}

export const experiences: Experience[] = [
  {
    company: "PHIS3",
    role: "Senior Information Systems / Frontend Specialist",
    period: "2022 – Present",
    location: "Abuja",
    highlights: [
      "Contributed to large-scale, data-intensive enterprise information systems",
      "Developed data visualization and analytical interfaces for multi-dimensional metrics",
      "Built analytical workspaces transforming complex datasets into decision-support outputs",
      "Mentored interns and junior technical personnel across software teams",
    ],
    tech: ["React", "TypeScript", "Data Viz", "Enterprise APIs"],
    index: 0,
  },
  {
    company: "Fidelity Bank",
    role: "Senior Fullstack Web Application Developer",
    period: "2020",
    location: "Lagos",
    highlights: [
      "Designed digital account-opening platforms consuming high-volume transactional data",
      "Built enterprise staff onboarding, confirmation, and reconciliation systems",
      "Applied data modelling, business logic, and usage analytics to improve workflows",
    ],
    tech: ["React", "Angular", "Node.js", "Banking APIs"],
    index: 1,
  },
  {
    company: "FinTrak Software",
    role: "Senior IFRS / ASP.NET Developer",
    period: "2019",
    location: "Lagos",
    highlights: [
      "Built Credit Printout Software for Standard Chartered Bank (CBN IFRS 9 scorecard)",
      "Contributed to Trade Monitoring Software System (TRMS) with external API integration",
      "Implemented financial reporting modules meeting regulatory requirements",
    ],
    tech: ["Transact-SQL", "ASP.NET", "IFRS 9", "Enterprise APIs"],
    index: 2,
  },
  {
    company: "Hallowgate Telecoms",
    role: "Product Lead / Fullstack Developer",
    period: "2016",
    location: "Abuja",
    highlights: [
      "Led development of Budget Planning & Analysis Software for Federal Ministry of Finance",
      "Built Contract, Evaluation & Procurement platform for SON Nigeria",
      "Designed Asset Management & E-Desk Document Management systems",
      "Created mobile platform for vehicle and fuel data tracking with analytics",
    ],
    tech: ["Fullstack", "Statistical Models", "Data Modeling", "Mobile"],
    index: 3,
  },
  {
    company: "Interra Networks",
    role: "Senior PHP Software Developer",
    period: "2015",
    location: "Abuja",
    highlights: [
      "Designed data-driven applications for public and private sector clients",
      "Worked with PostgreSQL databases handling binary and biometric data",
      "Laid foundation for Amfani, a complete Human Resource solution",
    ],
    tech: ["PHP", "PostgreSQL", "System Architecture"],
    index: 4,
  },
  {
    company: "Socketworks",
    role: "Fullstack Web Application Developer",
    period: "2011",
    location: "Abuja",
    highlights: [
      "Developed data-driven web applications and enterprise portals",
      "Managed cross-site data and distributed application environments",
      "Built backend data logic integrating responses from multiple services",
    ],
    tech: ["PHP", "APIs", "Distributed Systems"],
    index: 5,
  },
];

export interface Capability {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    title: "AI Engineering",
    icon: "◈",
    description: "Building intelligent systems that reason over business data",
    items: [
      "LLM Applications",
      "Prompt Engineering",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Agentic Workflows",
      "Embeddings & Vector Search",
    ],
  },
  {
    title: "Software Engineering",
    icon: "◇",
    description: "Enterprise-grade applications across the full stack",
    items: [
      "React / Next.js",
      "TypeScript",
      "Node.js",
      "Laravel / PHP",
      "Flutter / Dart",
      "GraphQL",
      "REST APIs",
      "System Architecture",
    ],
  },
  {
    title: "Data Science & ML",
    icon: "◉",
    description: "Turning raw data into models and decisions",
    items: [
      "Python / Pandas / NumPy",
      "Scikit-learn",
      "PCA / t-SNE",
      "K-Means / GMM / K-Medoids",
      "Logistic Regression",
      "Decision Trees / Random Forests",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Enterprise Systems",
    icon: "◆",
    description: "Data-intensive platforms powering real operations",
    items: [
      "SQL Server / T-SQL",
      "PostgreSQL / MySQL",
      "Data Modelling",
      "Power BI",
      "Stored Procedures",
      "Transaction-Aware Systems",
      "API Integration",
      "Data Pipelines",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  impact: string;
  tech: string[];
  category: string;
}

export const projects: Project[] = [
  {
    name: "Credit Printout Software",
    description:
      "CBN IFRS 9-based scorecard and reporting system for Standard Chartered Bank using Transact-SQL and stored procedures.",
    impact: "Regulatory compliance · Enterprise banking",
    tech: ["Transact-SQL", "ASP.NET", "IFRS 9"],
    category: "Banking",
  },
  {
    name: "Trade Monitoring System (TRMS)",
    description:
      "Enterprise trade monitoring platform integrating external APIs and enterprise data for Standard Chartered Bank.",
    impact: "Real-time trade visibility",
    tech: ["ASP.NET", "APIs", "SQL Server"],
    category: "Banking",
  },
  {
    name: "Budget Planning & Analysis",
    description:
      "Data analysis, modelling, and consolidated reporting platform for the Federal Ministry of Finance.",
    impact: "National-scale fiscal planning",
    tech: ["Fullstack", "Statistical Models", "Data Modeling"],
    category: "Government",
  },
  {
    name: "Contract & Procurement Platform",
    description:
      "Evaluation and procurement system for SON Nigeria with statistical tools, mathematical models, and data-driven visualization.",
    impact: "Transparent procurement workflows",
    tech: ["Fullstack", "Statistics", "Data Viz"],
    category: "Government",
  },
  {
    name: "Digital Account Opening",
    description:
      "High-volume transactional platform consuming customer data through banking APIs for Fidelity Bank.",
    impact: "Streamlined onboarding",
    tech: ["React", "Angular", "Node.js", "Banking APIs"],
    category: "Banking",
  },
  {
    name: "Amfani HR Solution",
    description:
      "Complete Human Resource solution covering recruitment through employment lifecycle for Interra Networks.",
    impact: "End-to-end HR automation",
    tech: ["PHP", "PostgreSQL", "Architecture"],
    category: "Enterprise",
  },
];

export interface Credential {
  name: string;
  issuer: string;
  year: string;
  type: "degree" | "certification" | "training";
}

export const credentials: Credential[] = [
  { name: "Applied AI & Data Science Program", issuer: "MIT", year: "2026", type: "training" },
  { name: "M.Sc. Data Science & Machine Learning", issuer: "Rome Business School", year: "2026", type: "degree" },
  { name: "B.Eng. Electrical & Electronics / Computer Engineering", issuer: "FUT Minna", year: "—", type: "degree" },
  { name: "Transact-SQL Database Professional", issuer: "New Horizons", year: "2024", type: "certification" },
  { name: "Business Leadership Development", issuer: "Rome Business School", year: "2025", type: "training" },
  { name: "Project Management Professional (PMP) Training", issuer: "PMI", year: "2024", type: "training" },
  { name: "Cyber Threat Management", issuer: "Cisco Networking Academy", year: "2026", type: "certification" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2026", type: "certification" },
  { name: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", year: "2026", type: "certification" },
  { name: "NDPC Privacy 101", issuer: "Nigeria Data Protection Commission", year: "2026", type: "certification" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "If Hallowgate were your own company, you couldn't have served it better. I regret to accept your resignation in the circumstance, but I will always remember your service and devotion to duty and the culture to deliver.",
    author: "Peter Ogunkami",
    role: "Chief Executive Officer",
    company: "Hallowgate Telecom Services",
  },
  {
    quote:
      "Ande demonstrated superior analytical capabilities in handling projects with a good design eye for user interfaces that are pleasing to clients. He also demonstrated exceptional leadership skill.",
    author: "Oyedele Femi",
    role: "Development Lead",
    company: "Interra Networks Limited",
  },
];