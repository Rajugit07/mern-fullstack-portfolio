/** Resume data for the Resume page */

export interface ExperienceItem {
    role: string;
    company?: string;
    period?: string;
    bullets: string[];
}

export interface ProjectItem {
    title: string;
    description: string;
    highlights: string[];
    link?: string;
}

export const resumeData = {
    summary:
        "Dedicated Software Engineer with a solid foundation in the MERN stack and cloud technologies. Passionate about building scalable, user-centric web applications and continuously expanding technical expertise. Proven ability to quickly master new frameworks and deliver robust solutions in fast-paced environments.",
    contact: {
        email: "rajupradhani2002@gmail.com",
        portfolio: "/",
        linkedin: "https://www.linkedin.com/in/raju-pradhani-mern-dev/",
        github: "https://github.com/Rajugit07",
    },
    experience: [
        {
            role: "Frontend Developer",
            bullets: [
                "Developed and maintained responsive web interfaces using React.js and Tailwind CSS, improving mobile user engagement by 25%.",
                "Collaborated with the design team to implement complex UI components based on Figma prototypes, ensuring pixel-perfect accuracy.",
                "Integrated RESTful APIs to connect frontend components with backend services, optimizing data fetching strategies.",
            ],
        },
    ] as ExperienceItem[],
    projects: [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution featuring user authentication, product catalog, shopping cart, and secure checkout processing. Implemented an admin dashboard for inventory management.",
            highlights: [
                "Achieved 30% performance boost through efficient state management and lazy loading.",
                "Maintained 99% UI uptime during peak traffic simulation testing.",
            ],
        },
        {
            title: "Crypto Tracker with AI Chatbot",
            description:
                "Real-time cryptocurrency tracking application displaying market trends and live prices. Integrated an AI-powered chatbot to assist users with basic financial queries and platform navigation.",
            highlights: [
                "Integrated WebSocket for seamless live data updates without page refresh.",
                "Designed an intuitive dark-mode interface optimizing readability for data-heavy views.",
            ],
        },
    ] as ProjectItem[],
};
