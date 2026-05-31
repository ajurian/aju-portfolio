export type TagGroup = {
  label: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
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
  status: "Open to freelance collaborations and internship roles",
  about:
    "Second-year BSIT student with a focus on clean interface systems, reusable components, and responsive layouts. I enjoy translating ideas into structured, production-ready websites and keeping performance and readability at the center of every build.",
};

export const techStack: TagGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Next.js"],
  },
  {
    label: "Tools",
    items: ["Git", "Github", "Postman", "Docker"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Web Developer",
    org: "Independent client work (Contract)",
    period: "August 2025 - January 2026",
    details: [
      "Co-developed a custom full-stack Point of Sale (POS) system tailored for a billiard hall to streamline operational transactions and automate table session tracking.",
      "Architected relational database schemas and engineered robust backend services to process high-accuracy billing updates and inventory management workflows.",
      "Successfully finalized and delivered the core functional MVP over a structured six-month cycle prior to a client-side strategic pivot in business operations.",
      "Collaborated within a dual-developer environment to establish clean architectural boundaries, define API specifications, and govern version control using Git.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "QuizGem - RAG-based Quiz Generator",
    summary:
      "An AI-powered quiz generation platform that generate quizzes from PDF documents using Google Gemini AI, with support for multiple question types, collaborative sharing, and comprehensive attempt tracking.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Cloudflare R2",
      "Google Gemini API",
    ],
    demoUrl: "https://quizgem.vercel.app",
    sourceUrl: "https://github.com/ajurian/quiz-generator",
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
    title: "3rd Place for Homepage Design Competition",
    detail: "STI Academic Center Cubao",
    year: "2025",
  },
  {
    title: "President's Lister",
    detail: "STI Academic Center Cubao",
    year: "AY 2024-2025",
  },
  {
    title: "1st Runner Up for Homepage Design Competition",
    detail: "STI Academic Center Cubao",
    year: "2024",
  },
];
