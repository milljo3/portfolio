export interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "Collab Board",
        description: "A Trello-like project board with user authentication, drag-and-drop, and real-time updates.",
        link: "https://collab-board-five.vercel.app",
        github: "https://github.com/milljo3/collab-board",
        tags: ["Next.js", "React", "React Query", "TypeScript", "Socket.IO", "Zod", "Prisma", "Redis", "AI"]
    },
    {
        title: "Summit Ai",
        description: "SummitAi is a web application designed to help users organize and generate concise summaries of their meetings.",
        link: "https://summitai-seven.vercel.app",
        github: "https://github.com/milljo3/summitai",
        tags: ["Next.js", "React", "TypeScript", "Zod", "Prisma", "AI"]
    },
    {
        title: "DevBoard",
        description: "DevBoard is a web app designed to help users track and manage their job applications with ease.",
        link: "https://devboard-neon.vercel.app",
        github: "https://github.com/milljo3/devboard",
        tags: ["Next.js", "React", "TypeScript", "Zod", "Prisma"]
    },
];