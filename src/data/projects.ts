import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: "nike",
        title: "E-Commerce Platform",
        category: "Full-Stack Development",
        image: "/images/ecomm-img/2.png",
        slug: "nike-brand-identity",
        caseStudy: {
            headline:
                "Building a scalable full-stack shopping experience with seamless product discovery, secure authentication, and modern commerce workflows.",
            client: "Personal Project",
            year: "2025",
            service: "Full-Stack Development",
            brief: "A production-level e-commerce platform built with the MERN stack — designed not just as an online store, but as a complete shopping workflow that feels fast, intuitive, and scalable. From authentication and product management to cart flow and order handling, the platform focuses on clean architecture, responsive UI, and maintainable backend systems.",
            sections: [
                {
                    label: "Overview",
                    heading:
                        "The platform allows users to browse products, manage carts, authenticate securely, and place orders through a responsive interface.",
                    body: "The primary focus was creating a smooth shopping experience, structuring scalable backend architecture, managing authentication securely, and building reusable, maintainable components. The application was developed using modern full-stack practices with clear separation between frontend, backend, APIs, and state management.",
                    image: "/images/ecomm-img/4.png",
                    imageAlt:
                        "E-Commerce Platform — product browsing interface",
                    layout: "full",
                },
                {
                    label: "Approach",
                    heading:
                        "The project was built around four key pillars: secure user authentication, intuitive product and cart management, a responsive cross-device interface.",
                    body: "A secure authentication workflow was implemented using JWT tokens and HTTP cookies — including login, registration, protected API routes, and middleware-based token verification. The cart system updates dynamically while maintaining synchronized state across components using Redux Toolkit. Tailwind CSS helped speed up development while maintaining design consistency across responsive layouts.",
                    image: "/images/ecomm-img/6.png",
                    imageAlt: "Authentication and cart management architecture",
                    layout: "full",
                },
                {
                    label: "Challenge",
                    heading:
                        "One of the biggest challenges during development was maintaining authentication state consistently across frontend and backend layers.",
                    body: "Handling JWT authentication with cookies while ensuring protected resources remained accessible after refresh required careful coordination between: Backend token validation,Cookie handling,Redux state persistence,Frontend route protection",
                    image: "/images/ecomm-img/7.png",
                    imageAlt: "Final platform — responsive commerce experience",
                    layout: "full",
                },
                {
                    label: "What I Learned",
                    heading:
                        "This project highlighted the importance of architecture decisions early in development.",
                    body: "Structuring scalable backend folders properly Managing authentication across frontend/backend Maintaining predictable application stateBuilding reusable frontend systems Handling real-world API communication. It also reinforced that building an e-commerce application is less about \u201Cdisplaying products\u201D and more about orchestrating data flow, state consistency, security, and user experience simultaneously. Tiny mistakes become bugs instantly. Computers are extremely committed to consequences.",
                    image: "/images/ecomm-img/8.png",
                    imageAlt: "Final platform — responsive commerce experience",
                    layout: "full",
                },
            ],
            relatedProjectIds: [
                "ethereal-echo",
                "azure-whisper",
                "serene-scape",
            ],
        },
    },
    {
        id: "azure-whisper",
        title: "Crypto Platform",
        category: "Full-Stack Development",
        image: "/images/crypto-img/1.png",
        slug: "azure-whisper",
        caseStudy: {
            headline:
                "A modern cryptocurrency tracking platform designed for real-time market visibility, intelligent news aggregation, and scalable full-stack architecture.",
            client: "Personal Project",
            year: "2024",
            service: "Full-Stack Development",
            brief: "A crypto-focused platform where users can monitor market trends, explore cryptocurrency data, and stay updated with industry news in a single interface. The objective was to combine real-time financial information with a modern frontend experience while maintaining scalable backend architecture and structured state management.",
            sections: [
                {
                    label: "Overview",
                    heading:
                        "The platform provides users with access to cryptocurrency market insights, trending data, and news updates through a responsive web application.",
                    body: "The project focuses on real-time crypto market visibility, clean dashboard design, efficient API integration, and structured frontend state management. Special attention was given to maintaining clean data flow between components and APIs while handling constantly updating market-related data.",
                    image: "/images/crypto-img/2.png",
                    imageAlt: "Crypto Platform — market dashboard interface",
                    layout: "full",
                },
                {
                    label: "Approach",
                    heading:
                        "Managing real-time and rapidly changing cryptocurrency data without creating inconsistent UI behavior was the primary challenge.",
                    body: "Redux Toolkit was used for centralized market data management with predictable state flow and cleaner asynchronous handling. The platform integrates cryptocurrency market data dynamically through structured API services, efficient data fetching, and organized response handling — maintaining a clean separation between presentation logic and data management.",
                    image: "/images/crypto-img/3.png",
                    imageAlt: "State management and API architecture",
                    layout: "full",
                },
                {
                    label: "Results",
                    heading:
                        "The final platform delivers a responsive crypto dashboard with real-time data-driven UI updates and structured full-stack architecture.",
                    body: "The project reinforced how important architecture becomes when dealing with continuously updating data systems. It highlighted that modern dashboard applications are fundamentally data orchestration systems — the UI is only the visible layer hiding a network of asynchronous operations.",
                    image: "/images/crypto-img/4.png",
                    imageAlt: "Final crypto dashboard — responsive experience",
                    layout: "full",
                },
                {
                    label: "What I Learned",
                    heading:
                        "This project highlighted the importance of architecture decisions early in development.",
                    body: "Structuring scalable backend folders properly Managing authentication across frontend/backend Maintaining predictable application stateBuilding reusable frontend systems Handling real-world API communication. It also reinforced that building an e-commerce application is less about \u201Cdisplaying products\u201D and more about orchestrating data flow, state consistency, security, and user experience simultaneously. Tiny mistakes become bugs instantly. Computers are extremely committed to consequences.",
                    image: "/images/crypto-img/4.png",
                    imageAlt: "Final platform — responsive commerce experience",
                    layout: "full",
                },
            ],
            relatedProjectIds: ["nike", "serene-scape", "ethereal-echo"],
        },
    },
    {
        id: "serene-scape",
        title: "Project 03",
        category: "Coming Soon",
        image: "/images/project-serene.png",
        slug: "serene-scape",
        comingSoon: true,
    },
    {
        id: "ethereal-echo",
        title: "Project 04",
        category: "Coming Soon",
        image: "/images/project-ethereal.png",
        slug: "ethereal-echo",
        comingSoon: true,
    },
];

/** Helper to find a project by slug */
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((p) => p.slug === slug);
};

/** Helper to get related projects by IDs */
export const getRelatedProjects = (ids: string[]): Project[] => {
    return projects.filter((p) => ids.includes(p.id));
};
