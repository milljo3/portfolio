import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {techStack} from "./data/tech-stack.ts";
import {projects} from "./data/projects.ts";
import {Badge} from "./components/ui/badge.tsx";
import {ArrowUpRight, ChevronRight, Download} from "lucide-react";
import {Button} from "./components/ui/button.tsx";
import Navbar from "./components/Navbar.tsx";
import ParallaxBackground from "./components/ParallaxBackground.tsx";

function App() {
    return (
        <div className="scroll-smooth">

            <ParallaxBackground />
            <Navbar />

            <section id="about" className="w-full h-screen flex items-center justify-center p-2">
                <div className="flex flex-col px-2 text-center gap-3 md:w-2/3 w-full">
                    <h1 className="text-6xl">Joseph Miller<br/>Full Stack Developer</h1>
                    <p>I build websites and develop video games in my free time with Unity</p>
                    <div className="flex gap-2 self-center md:flex-row flex-col">
                        <Button className="hover:cursor-pointer text-lg py-6">
                            <a href="#projects" className="flex items-center gap-1">
                                See my Projects <ChevronRight />
                            </a>
                        </Button>
                        <Button variant="ghost" className="hover:underline hover:cursor-pointer text-lg py-6">
                            <a href="/Joseph_Miller_Resume.pdf" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                                <Download /> Download CV
                            </a>
                        </Button>
                    </div>
                    <div className="flex gap-2 self-center">
                        <a className="h-8 w-8" href="https://github.com/milljo3" target="_blank" rel="noopener noreferrer">
                            <img src="/github-mark-white.svg" alt={"Github Icon"}/>
                        </a>
                        <a className="h-8 w-8" href="https://www.linkedin.com/in/joseph-miller-326537261/" target="_blank" rel="noopener noreferrer">
                            <img src="/InBug-White.png" alt={"LinkedIn Icon"}/>
                        </a>
                    </div>
                </div>
            </section>

            <section id="tech" className="w-full min-h-[33vh] flex items-center justify-center">
                <div className="flex flex-col gap-2 px-2 md:w-2/3 w-full h-full py-2">
                    <h2 className="text-4xl font-semibold">Current technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {techStack.map((tech, index) => (
                            <Card key={index} className="p-3 h-16 text-center justify-center">
                                <CardContent>
                                    <p>{tech}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full min-h-[80vh] flex items-center justify-center">
                <div className="flex flex-col gap-2 p-2 md:w-2/3 w-full">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold">Projects</h2>
                        <Button className="hover:cursor-pointer text-lg py-6">
                            <a href="https://github.com/milljo3?tab=repositories" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                                All Projects <ChevronRight />
                            </a>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        {projects.map((project, index) => (
                            <Card key={index} className="p-3 w">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex justify-between">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl hover:underline flex gap-1 items-center w-fit">
                                                <p>{project.title}</p>
                                                <ArrowUpRight />
                                            </a>
                                            <a className="h-8 w-8" href={project.github} target="_blank" rel="noopener noreferrer">
                                                <img src="/github-mark-white.svg" alt={"Github Icon"}/>
                                            </a>
                                        </div>
                                    </CardTitle>
                                    <CardDescription>
                                        <p className="text-xl">
                                            {project.description}
                                        </p>
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <div className="flex gap-1 flex-wrap">
                                        {project.tags?.map((tag, index) => (
                                            <Badge key={index}>
                                                <p className="text-[14px] p-1">{tag}</p>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="w-full min-h-[30vh] flex flex-col items-center justify-center text-center p-4 gap-1">
                <h2 className="text-3xl font-semibold mb-4">Let's connect</h2>
                <p className="mb-2">Feel free to reach out. I'm open to opportunities and collaborations!</p>
                <a href="mailto:joeykm91@gmail.com" className="text-blue-600 underline text-lg">joeykm91@gmail.com</a>
                <div className="flex gap-2 self-center">
                    <a className="h-8 w-8" href="https://github.com/milljo3" target="_blank" rel="noopener noreferrer">
                        <img src="/github-mark-white.svg" alt={"Github Icon"}/>
                    </a>
                    <a className="h-8 w-8" href="https://www.linkedin.com/in/joseph-miller-326537261/" target="_blank" rel="noopener noreferrer">
                        <img src="/InBug-White.png" alt={"LinkedIn Icon"}/>
                    </a>
                </div>
            </section>

        </div>
    )
}

export default App
