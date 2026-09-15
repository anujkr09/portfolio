import {
  Binary,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Music,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export const profileLinks = {
  github: "https://github.com/anujkr09",
  linkedin: "https://www.linkedin.com/in/anuj-kumar-7415102a6/",
  leetcode: "https://leetcode.com/u/AnujSinha09/",
  gfg: "https://www.geeksforgeeks.org/profile/anujkumaipfi",
  email: "mailto:anujkumar812032@gmail.com",
};

export const codingProfiles = [
  {
    label: "LeetCode",
    href: profileLinks.leetcode,
    shortLabel: "LC",
  },
  {
    label: "GeeksforGeeks",
    href: profileLinks.gfg,
    shortLabel: "GFG",
  },
];

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
      { name: "TypeScript", level: 82 },
      { name: "C++", level: 80 },
      { name: "C", level: 78 },
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
      { name: "Bootstrap", level: 86 },
      { name: "HTML", level: 94 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "MERN & Backend",
    description: "Reliable APIs and full stack web apps.",
    icon: ServerCog,
    color: "from-emerald-500 to-cyan-400",
    skills: [
      { name: "MERN Stack", level: 84 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Spring Boot", level: 82 },
      { name: "REST APIs", level: 82 },
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
      { name: "SQL Queries", level: 86 },
      { name: "JDBC", level: 78 },
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
    title: "CS Foundations",
    description: "Core problem solving and engineering fundamentals.",
    icon: Binary,
    color: "from-slate-300 to-blue-400",
    skills: [
      { name: "DSA", level: 84 },
      { name: "OOP", level: 86 },
      { name: "Operating Systems", level: 74 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
    ],
  },
];

export const githubHighlights = [
  {
    label: "19 public repos",
    detail: "Projects across web, AI/ML, Java desktop apps, C/C++, and DSA.",
    icon: GitBranch,
  },
  {
    label: "Full stack range",
    detail: "MERN, TypeScript, React, Bootstrap, SQL, MongoDB, and APIs.",
    icon: Layers3,
  },
  {
    label: "CS practice",
    detail:
      "Dedicated repositories plus LeetCode and GeeksforGeeks practice for DSA.",
    icon: Binary,
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
    tech: ["AI/ML", "React", "JavaScript", "Analytics"],
    live: "https://zyraviq-ai-logistics.onrender.com/",
    github: "https://github.com/anujkr09/logistic-ai",
    gradient: "from-blue-600/35 via-violet-600/20 to-cyan-500/25",
    accent: "text-cyan-300",
    icon: Bot,
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
    github: "https://github.com/anujkr09/Cinema",
    gradient: "from-violet-600/30 via-fuchsia-500/15 to-orange-400/20",
    accent: "text-violet-300",
    icon: Building2,
  },
  {
    number: "03",
    title: "Multi-Agent LLM",
    kicker: "Autonomous software engineering",
    description:
      "A Python-based exploration of multiple LLM agents collaborating on software engineering tasks, from planning to implementation support.",
    features: [
      "Multi-agent workflow",
      "Python automation",
      "LLM orchestration",
      "Developer tooling",
    ],
    tech: ["Python", "LLM", "Automation", "AI Agents"],
    github:
      "https://github.com/anujkr09/Multi-Agent-LLM-for-Autonomous-Software-Engineering",
    gradient: "from-emerald-500/25 via-cyan-500/15 to-blue-500/25",
    accent: "text-emerald-300",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "PG Management",
    kicker: "MERN-style management system",
    description:
      "A JavaScript web application for organizing paying guest operations with practical CRUD flows and data-driven screens.",
    features: [
      "Management dashboard",
      "CRUD workflows",
      "Responsive UI",
      "JavaScript stack",
    ],
    tech: ["MERN", "JavaScript", "Node.js", "Database"],
    live: "https://pg-management-n88b.onrender.com/",
    github: "https://github.com/anujkr09/pg-management",
    gradient: "from-cyan-500/25 via-blue-500/20 to-emerald-400/20",
    accent: "text-blue-300",
    icon: Building2,
  },
  {
    number: "05",
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
    github: "https://github.com/anujkr09/demo",
    gradient: "from-orange-400/20 via-pink-500/15 to-violet-500/25",
    accent: "text-orange-300",
    icon: Code2,
  },
  {
    number: "06",
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
    github: "https://github.com/anujkr09/GIT",
    gradient: "from-slate-500/25 via-blue-600/20 to-violet-500/25",
    accent: "text-slate-200",
    icon: GitBranch,
  },
  {
    number: "07",
    title: "DSA & C++ Lab",
    kicker: "Problem solving foundations",
    description:
      "A growing collection of data structures, algorithms, OOP practice, C programs, and C++ implementations from core CS learning.",
    features: [
      "DSA practice",
      "OOP concepts",
      "C/C++ programs",
      "Core CS revision",
    ],
    tech: ["C++", "C", "DSA", "OOP"],
    github: "https://github.com/anujkr09/DSA_in_C",
    gradient: "from-blue-500/20 via-slate-500/20 to-cyan-500/20",
    accent: "text-cyan-200",
    icon: Binary,
  },
  {
    number: "08",
    title: "Spotify Clone",
    kicker: "HTML/CSS frontend practice",
    description:
      "A polished frontend clone focused on layout accuracy, responsive sections, visual hierarchy, and clean HTML/CSS structure.",
    features: [
      "Music UI layout",
      "Responsive styling",
      "HTML semantics",
      "CSS components",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "Frontend"],
    github: "https://github.com/anujkr09/Spotyfy-clone",
    gradient: "from-emerald-500/20 via-slate-500/15 to-cyan-500/20",
    accent: "text-emerald-300",
    icon: Music,
  },
  {
    number: "09",
    title: "Machine Learning Labs",
    kicker: "FCC AI practice",
    description:
      "Machine learning practice repositories covering vectors, magic ML experiments, regression, and unsupervised learning workflows.",
    features: [
      "Regression practice",
      "Unsupervised learning",
      "Notebook experiments",
      "Model evaluation",
    ],
    tech: ["Python", "Jupyter", "Machine Learning", "Data Science"],
    github: "https://github.com/anujkr09/Fcc-vectors-ml",
    gradient: "from-violet-500/25 via-blue-500/15 to-fuchsia-500/20",
    accent: "text-violet-300",
    icon: ChartNoAxesCombined,
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
  {
    name: "7th International Conference Workshop",
    issuer: "SISTec",
    mark: "7C",
    pdf: "/certificates/7th-international-conference-workshop.pdf",
  },
  {
    name: "Machine Learning Foundations",
    issuer: "AWS",
    mark: "AWS",
    pdf: "/certificates/aws-academy-machine-learning-foundations.pdf",
  },
  {
    name: "AI Practitioner Exam Prep",
    issuer: "AWS",
    mark: "AWS",
    pdf: "/certificates/aws-certified-ai-practitioner-exam-prep.pdf",
  },
  {
    name: "Cloud Practitioner Essentials",
    issuer: "AWS",
    mark: "AWS",
    pdf: "/certificates/aws-cloud-practitioner-essentials.pdf",
  },
  {
    name: "Generative AI: Art of the Possible",
    issuer: "AWS",
    mark: "AI",
    pdf: "/certificates/aws-generative-ai-art-of-the-possible.pdf",
  },
  {
    name: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco",
    mark: "AI",
    pdf: "/certificates/cisco-apply-ai-analyze-customer-reviews.pdf",
  },
  {
    name: "CCNA Enterprise Networking",
    issuer: "Cisco",
    mark: "CC",
    pdf: "/certificates/cisco-ccna-enterprise-networking-security-automation.pdf",
  },
  {
    name: "CCNA Introduction to Networks",
    issuer: "Cisco",
    mark: "CC",
    pdf: "/certificates/cisco-ccna-introduction-to-networks.pdf",
  },
  {
    name: "CCNA Switching, Routing and Wireless",
    issuer: "Cisco",
    mark: "CC",
    pdf: "/certificates/cisco-ccna-switching-routing-wireless-essentials.pdf",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
    mark: "DA",
    pdf: "/certificates/cisco-data-analytics-essentials.pdf",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco",
    mark: "DS",
    pdf: "/certificates/cisco-introduction-to-data-science.pdf",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    mark: "D",
    pdf: "/certificates/deloitte-data-analytics-job-simulation.pdf",
  },
  {
    name: "CSS3",
    issuer: "Infosys",
    mark: "CSS",
    pdf: "/certificates/infosys-css3.pdf",
  },
  {
    name: "HTML5",
    issuer: "Infosys",
    mark: "HTML",
    pdf: "/certificates/infosys-html5.pdf",
  },
  {
    name: "Introduction to Business Intelligence",
    issuer: "Infosys",
    mark: "BI",
    pdf: "/certificates/infosys-introduction-to-business-intelligence.pdf",
  },
  {
    name: "JavaScript",
    issuer: "Infosys",
    mark: "JS",
    pdf: "/certificates/infosys-javascript.pdf",
  },
  {
    name: "Git and GitHub",
    issuer: "Microsoft Learn",
    mark: "GIT",
    pdf: "/certificates/microsoft-learn-git-github.pdf",
  },
];
