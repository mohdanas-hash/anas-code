import awsCert from "@/assets/AWS_Certification.pdf.asset.json";
import jpmCert from "@/assets/JPMorgan.pdf.asset.json";
import walmartCert from "@/assets/walmart_certificate.pdf.asset.json";
export const socials = [
  { label: "GitHub", handle: "mohdanas-hash", url: "https://github.com/mohdanas-hash" },
  {
    label: "LinkedIn",
    handle: "mohd-anas-64a1312a3",
    url: "https://www.linkedin.com/in/mohd-anas-64a1312a3",
  },
  { label: "LeetCode", handle: "Anas_69", url: "https://leetcode.com/u/Anas_69" },
  { label: "HackerRank", handle: "Anas_69", url: "https://www.hackerrank.com" },
  { label: "Codolio", handle: "Anas", url: "https://codolio.com" },
  { label: "Monkeytype", handle: "Anas", url: "https://monkeytype.com" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Core CS Fundamentals",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Web & Tools",
    items: [
      "Responsive Design (Flexbox, Media Queries)",
      "Web Audio API",
      "Git",
      "GitHub",
      "VS Code",
      "Netlify",
      "GitHub Pages",
    ],
  },
  { title: "Database", items: ["MySQL"] },
  { title: "Platforms", items: ["LeetCode", "HackerRank", "Codolio", "Monkeytype"] },
];

export const projects = [
  {
    name: "DKG Mobiles",
    kind: "E-Commerce Showcase Website",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    points: [
      "Built and shipped a production client showcase site",
      "Diagnosed and resolved CDN 403 hotlinking issues",
      "Added dynamic countdown-timer offer banners",
    ],
    links: [{ label: "Live demo", url: "https://dkgmobiles.netlify.app" }],
  },
  {
    name: "Resume Analyzer",
    kind: "Client-side parsing tool",
    tags: ["JavaScript", "GitHub Pages"],
    points: [
      "PDF/DOCX resume parsing entirely in the browser",
      "Keyword matching against role requirements",
      "Section structure detection and scoring",
    ],
    links: [{ label: "Live demo", url: "https://mohdanas-hash.github.io" }],
  },
  {
    name: "RPS://PROTOCOL",
    kind: "Interactive browser game",
    tags: ["JavaScript", "Web Audio API"],
    points: [
      "Adaptive pattern-learning AI opponent",
      "Live match stat visualizations",
      "Procedural sound design with the Web Audio API",
    ],
    links: [{ label: "Play now", url: "https://mohdanas-hash.github.io" }],
  },
  {
    name: "Personal Portfolio Website",
    kind: "Responsive front-end build",
    tags: ["HTML", "CSS", "Flexbox", "Media Queries"],
    points: [
      "Custom responsive layouts with Flexbox",
      "Breakpoint system built on CSS media queries",
      "Deployed on GitHub Pages",
    ],
    links: [
      { label: "Live site", url: "https://mohdanas-hash.github.io/mohd-anas-portfolio/" },
    ],
  },
];

export const timeline = [
  {
    period: "2023 — 2027 (expected)",
    title: "B.Tech, Computer Science & Engineering (Data Science)",
    org: "Maharana Pratap Engineering College, Kanpur",
    detail: "CGPA: 7.2 — coursework in DSA, DBMS, OS and applied data science.",
  },
  {
    period: "Project-based",
    title: "Associate Web Developer",
    org: "Freelance / client work",
    detail:
      "Built and shipped production client applications end-to-end, including DKG Mobiles.",
  },
  {
    period: "2023",
    title: "Intermediate (ISC)",
    org: "Bishop Westcott School, Kanpur",
    detail: "Completed with a focus on mathematics and computer science — 70%.",
  },
  {
    period: "2021",
    title: "High School (ICSE)",
    org: "Bishop Westcott School, Kanpur",
    detail: "Completed secondary schooling — 83%.",
  },
];


export const certifications = [
  {
    name: "Oracle Agentic AI Foundations 2026",
    issuer: "Oracle University",
    date: "In progress — 2026",
    status: "in-progress" as const,
    skills: ["Agentic AI", "LLM Foundations", "Oracle Cloud AI"],
  },
  {
    name: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. (via Forage)",
    date: "Issued July 2026",
    status: "completed" as const,
    skills: [
      "Price data analysis",
      "Commodity contract pricing",
      "Credit risk analysis",
      "FICO score bucketing",
    ],
  },
  {
    name: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart Global Tech (via Forage)",
    date: "Issued July 2026",
    status: "completed" as const,
    skills: [
      "Advanced Data Structures",
      "Software Architecture",
      "Relational Database Design",
      "Data Munging",
    ],
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "Completed July 2026",
    status: "completed" as const,
    skills: ["Cloud Fundamentals", "AWS Core Services", "Cloud Security"],
  },
];
