import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "The foundations I build with.",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 84 },
      { name: "JavaScript", level: 86 },
      { name: "C++", level: 76 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "Frontend",
    description: "Fast, accessible, polished interfaces.",
    icon: Layers3,
    color: "from-violet-500 to-fuchsia-400",
    skills: [
      { name: "React", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 94 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    description: "Reliable APIs and scalable services.",
    icon: ServerCog,
    color: "from-emerald-500 to-cyan-400",
    skills: [
      { name: "Spring Boot", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Databases",
    description: "Structured, dependable data layers.",
    icon: Database,
    color: "from-cyan-500 to-blue-400",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "AI & ML",
    description: "Turning data into useful intelligence.",
    icon: BrainCircuit,
    color: "from-orange-400 to-pink-500",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Data Science", level: 78 },
      { name: "Scikit-Learn", level: 80 },
      { name: "OpenCV", level: 72 },
      { name: "Deep Learning", level: 70 },
    ],
  },
  {
    title: "Tooling",
    description: "A pragmatic developer workflow.",
    icon: GitBranch,
    color: "from-slate-300 to-blue-400",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "ZYR AVIQ",
    kicker: "AI logistics intelligence",
    description:
      "An AI-powered logistics command center for route optimization, fleet operations, real-time shipment tracking, and data-led decision making.",
    features: [
      "Route optimization",
      "Fleet management",
      "Shipment tracking",
      "Analytics dashboard",
    ],
    tech: ["AI/ML", "React", "Logistics", "Analytics"],
    live: "https://zyraviq-ai-logistics.onrender.com/",
    github: "https://github.com/anujkr09",
    gradient: "from-blue-600/35 via-violet-600/20 to-cyan-500/25",
    accent: "text-cyan-300",
  },
  {
    number: "02",
    title: "MovieFlow",
    kicker: "Desktop booking ecosystem",
    description:
      "A complete cinema booking workflow with live seat selection, movie administration, secure database persistence, and a guided payment experience.",
    features: [
      "Real-time seat booking",
      "Movie management",
      "MySQL integration",
      "Payment workflow",
    ],
    tech: ["Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/anujkr09",
    gradient: "from-violet-600/30 via-fuchsia-500/15 to-orange-400/20",
    accent: "text-violet-300",
  },
  {
    number: "03",
    title: "Resume Studio",
    kicker: "Live document builder",
    description:
      "A focused resume creation tool that transforms user input into a clean professional document with instant preview and download support.",
    features: [
      "Dynamic resume creation",
      "Live preview",
      "Responsive layouts",
      "Download functionality",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/anujkr09",
    gradient: "from-cyan-500/25 via-blue-500/20 to-emerald-400/20",
    accent: "text-blue-300",
  },
  {
    number: "04",
    title: "RepoVault",
    kicker: "GitHub backup automation",
    description:
      "A dependable CLI utility for preserving GitHub repository metadata through authenticated, automated backups and portable JSON exports.",
    features: [
      "Automated backups",
      "JSON export",
      "Authentication support",
      "CLI workflow",
    ],
    tech: ["Python", "GitHub API", "JSON", "CLI"],
    github: "https://github.com/anujkr09",
    gradient: "from-slate-500/25 via-blue-600/20 to-violet-500/25",
    accent: "text-slate-200",
  },
];

export const achievements = [
  {
    year: "Winner",
    title: "Java Premier League",
    detail:
      "Secured first place in the Java Premier League (JPL), earning a ₹4,000 cash prize.",
    tag: "Competitive coding",
  },
  {
    year: "National",
    title: "Smart India Hackathon",
    detail:
      "Collaborated on a high-pressure problem statement and built a practical technology solution.",
    tag: "Hackathon",
  },
  {
    year: "2025",
    title: "Samadhan 2.0",
    detail:
      "Participated in a multidisciplinary hackathon focused on meaningful, implementable innovation.",
    tag: "Innovation",
  },
];

export const certifications = [
  { name: "Generative AI Professional", issuer: "Oracle", mark: "OR" },
  { name: "Machine Learning Foundations", issuer: "AWS", mark: "AWS" },
  { name: "Python Essentials 1", issuer: "Cisco", mark: "Py" },
  { name: "Python Essentials 2", issuer: "Cisco", mark: "Py" },
  { name: "CCNA Certifications", issuer: "Cisco", mark: "CC" },
  { name: "Quantum Computing", issuer: "CDAC", mark: "Q" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte", mark: "D" },
];
