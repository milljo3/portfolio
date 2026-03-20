export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
    tags?: string[];
}

export const experience: Experience[] = [
    {
        role: "Application Developer Intern",
        company: "Delta Dental of Michigan",
        duration: "Dec 2025 – Present",
        description: [
            "Contribute to a full-stack enterprise application rebuild using Angular and Java Spring Boot.",
            "Implement and modify UI components and REST API endpoints for new and existing features.",
            "Debug and resolve frontend and backend issues in a production codebase.",
            "Write unit tests and work with Maven-based backend architecture.",
            "Deploy and validate changes across TST and UAT environments.",
            "Collaborate with developers in an Agile team and participate in code reviews."
        ],
        tags: ["Angular", "Java", "Spring Boot", "Maven", "REST APIs"]
    }
];