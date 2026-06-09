import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { BRAND } from "./iso";
import {
  ExplodedStack,
  ChessBoard,
  ComponentLayers,
  ServerCubes,
  DataDisc,
  TestPyramid,
  CloudContainers,
} from "./Illustrations";
import "./SkillsInfographic.css";

/* ── Skill category data with brand colors ── */
interface SkillItem {
  name: string;
  color: string;
}

interface SkillCategoryData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  skills: SkillItem[];
}

const categories: SkillCategoryData[] = [
  {
    title: "Languages",
    subtitle: "Core proficiencies",
    icon: <CodeIcon />,
    illustration: <ChessBoard />,
    skills: [
      { name: "JavaScript (ES6+)", color: BRAND.javascript },
      { name: "TypeScript", color: BRAND.typescript },
      { name: "HTML5 & CSS3", color: BRAND.html },
      { name: "Java (Core)", color: BRAND.java },
    ],
  },
  {
    title: "Frontend",
    subtitle: "User interface",
    icon: <LayoutIcon />,
    illustration: <ComponentLayers />,
    skills: [
      { name: "React.js", color: BRAND.react },
      { name: "Next.js", color: BRAND.nextjs },
      { name: "Tailwind CSS", color: BRAND.tailwind },
      { name: "Redux Toolkit", color: BRAND.redux },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server architecture",
    icon: <ServerIcon />,
    illustration: <ServerCubes />,
    skills: [
      { name: "Node.js", color: BRAND.nodejs },
      { name: "Express.js", color: BRAND.express },
      { name: "RESTful APIs", color: BRAND.rest },
      { name: "GraphQL", color: BRAND.graphql },
    ],
  },
  {
    title: "Database",
    subtitle: "Data persistence",
    icon: <DatabaseIcon />,
    illustration: <DataDisc />,
    skills: [
      { name: "MongoDB", color: BRAND.mongodb },
      { name: "PostgreSQL", color: BRAND.postgresql },
      { name: "Redis", color: BRAND.redis },
      { name: "Mongoose", color: BRAND.mongoose },
    ],
  },
  {
    title: "Testing",
    subtitle: "Quality assurance",
    icon: <TestIcon />,
    illustration: <TestPyramid />,
    skills: [
      { name: "Jest", color: BRAND.jest },
      { name: "React Testing Library", color: BRAND.rtl },
      { name: "Cypress", color: BRAND.cypress },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure",
    icon: <CloudIcon />,
    illustration: <CloudContainers />,
    skills: [
      { name: "AWS (EC2, S3)", color: BRAND.aws },
      { name: "Docker", color: BRAND.docker },
      { name: "Git & GitHub", color: BRAND.git },
      { name: "CI/CD Pipelines", color: BRAND.cicd },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export const SkillsInfographic = () => {
  return (
    <div className="skills-infographic">
      <div className="container-wide">
        {/* ── Hero Section ── */}
        <motion.section
          className="skills-hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="skills-hero__text">
            <div className="skills-hero__heading">
              <span className="skills-hero__dropcap">H</span>
              ow I Build
            </div>
            <div className="skills-hero__description">
              <p>
                Every project I build follows a carefully considered architecture
                — from the user interface down to the database layer. I specialize
                in the <strong>MERN stack</strong>, combining MongoDB, Express.js,
                React, and Node.js into cohesive, full-stack applications.
              </p>
              <p>
                This approach lets me own every layer of the experience: crafting
                pixel-perfect interfaces, designing robust API contracts, engineering
                scalable server logic, and modeling efficient data structures.
              </p>
              <p>
                Below is a map of the technologies and tools I use across each
                layer of the development stack.
              </p>
            </div>
          </div>

          <div className="skills-hero__stack">
            <ExplodedStack />
          </div>
        </motion.section>

        {/* ── Category Cards Grid ── */}
        <div className="skills-categories">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-category__illustration">
                {cat.illustration}
              </div>
              <div className="skill-category__content">
                <div className="skill-category__header">
                  <div className="skill-category__icon">{cat.icon}</div>
                  <h3 className="skill-category__title">{cat.title}</h3>
                  <span className="skill-category__subtitle">{cat.subtitle}</span>
                </div>
                <ul className="skill-list">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span
                        className="skill-item__dot"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="skill-item__name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   INLINE SVG ICONS (brand-color aware, no image deps)
   ═══════════════════════════════════════════════════════ */

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#F7DF1E" opacity="0.15" />
      <path d="M9 10L5 14L9 18" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 10L23 14L19 18" stroke="#3178C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8L13 20" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#61DAFB" opacity="0.15" />
      <circle cx="14" cy="14" r="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 14 14)" />
      <ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 14 14)" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#339933" opacity="0.15" />
      <rect x="6" y="5" width="16" height="7" rx="2" stroke="#339933" strokeWidth="1.5" fill="none" />
      <rect x="6" y="16" width="16" height="7" rx="2" stroke="#339933" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="8.5" r="1" fill="#339933" />
      <circle cx="10" cy="19.5" r="1" fill="#339933" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#47A248" opacity="0.15" />
      <ellipse cx="14" cy="8" rx="8" ry="3" stroke="#47A248" strokeWidth="1.5" fill="none" />
      <path d="M6 8V20C6 21.66 9.58 23 14 23C18.42 23 22 21.66 22 20V8" stroke="#47A248" strokeWidth="1.5" fill="none" />
      <path d="M6 14C6 15.66 9.58 17 14 17C18.42 17 22 15.66 22 14" stroke="#47A248" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function TestIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#C21325" opacity="0.15" />
      <path d="M14 5L23 22H5L14 5Z" stroke="#C21325" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M9.5 17H18.5" stroke="#C21325" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M11.5 13H16.5" stroke="#C21325" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#FF9900" opacity="0.15" />
      <path d="M8 19C5.79 19 4 17.21 4 15C4 13.14 5.28 11.59 7 11.14C7 11.09 7 11.05 7 11C7 8.24 9.24 6 12 6C14.18 6 16.04 7.38 16.72 9.33C17.13 9.12 17.55 9 18 9C19.66 9 21 10.34 21 12C21 12.04 21 12.07 21 12.11C22.72 12.57 24 14.13 24 16C24 18.21 22.21 20 20 20H8V19Z"
        stroke="#FF9900" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
