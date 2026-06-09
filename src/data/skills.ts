/** Skill category data for the Skills page */
export interface SkillCategory {
    icon: string;
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        icon: "code",
        title: "Languages",
        skills: ["JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Java (Core)"],
    },
    {
        icon: "terminal",
        title: "Backend",
        skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    },
    {
        icon: "web",
        title: "Frontend",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    },
    {
        icon: "database",
        title: "Database",
        skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"],
    },
    {
        icon: "bug_report",
        title: "Testing",
        skills: ["Jest", "React Testing Library", "Cypress"],
    },
    {
        icon: "cloud",
        title: "Cloud & DevOps",
        skills: ["AWS (EC2, S3)", "Docker", "Git & GitHub", "CI/CD Pipelines"],
    },
];
