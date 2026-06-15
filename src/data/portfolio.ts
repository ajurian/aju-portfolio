export type TagGroup = {
  label: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  details: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
};

export type AwardItem = {
  title: string;
  detail: string;
  year: string;
};

export const profile = {
  name: "Adolf James Urian",
  headline: "BSIT Student | Web Developer",
  focus: "System design, clean code, and scalable architecture",
  status: "Open to freelance collaborations and job opportunities",
  about:
    "Full-stack Web Developer with hands-on experience designing and delivering production-ready applications using React, Next.js, TypeScript, and PostgreSQL. Currently a President's Lister BS Information Technology student at STI College Cubao, bringing strong fundamentals in clean architecture, REST API development, and modern full-stack practices.",
};

export const techStack: TagGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Node.js", "Next.js", "TanStack", "Drizzle ORM", "Prisma"],
  },
  {
    label: "Practices",
    items: ["Clean Architecture", "REST API Development"],
  },
  {
    label: "Databases & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "Cloudflare R2"],
  },
  {
    label: "Services",
    items: ["Google Gemini API", "Supabase", "Neon", "Upstash", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git", "Github", "Github Copilot", "Postman", "Docker"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Software Developer",
    org: "Self-employed",
    period: "August 2025 - February 2026",
    location: "Antipolo City, Philippines",
    details: [
      "Co-developed a full-stack POS system for a 4-table billiard hall using Next.js and React.",
      "Implemented Role-Based Access Control (RBAC) with defined roles: admin & staff, and integrated a Reservation System, improving user management and system reliability.",
      "Architected PostgreSQL (Supabase) schemas and engineered backend billing and session-tracking services, resulting in a functional MVP delivered in 6 months. ",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "QuizGem - Quiz Generator (Learning Tool)",
    summary:
      "Independently built a web application that generates context-faithful quizzes from user-uploaded academic handouts, supporting configurable sets of 10, 20, 30, or 50 questions – addressing the lack of interactivity in standard AI-generated quizzes and ensuring responses are strictly grounded in the user's own materials rather than general AI knowledge.",
    tags: [
      "React",
      "Docker",
      "Neon/PostgreSQL",
      "Upstash/Redis",
      "Google Gemini API",
      "Cloudflare R2",
    ],
    demoUrl: "https://quizgem.vercel.app",
    sourceUrl: "https://github.com/ajurian/quizgem",
  },
  {
    title: "Task Board",
    summary:
      "A task management application with drag-drop, shareable board, and realtime features",
    tags: ["React", "Next.js", "MongoDB", "UX"],
    demoUrl: "https://task-board-urian.vercel.app",
    sourceUrl: "https://github.com/ajurian/task-board",
  },
];

export const awards: AwardItem[] = [
  {
    title: "President's Lister (Highest Academic Honor)",
    detail: "STI College Cubao - GWA of 1.00-1.50",
    year: "2024-Present",
  },
  {
    title: "3rd Place for Homepage Design Competition",
    detail: "STI College Cubao",
    year: "2025",
  },
  {
    title: "1st Runner Up for Homepage Design Competition",
    detail: "STI College Cubao",
    year: "2024",
  },
];
