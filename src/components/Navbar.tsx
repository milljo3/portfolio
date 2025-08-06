import { useEffect, useState } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50 || currentScrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed left-1/2 transform -translate-x-1/2 bg-card border shadow-lg rounded-sm md:px-6 md:py-4 z-50 
            md:flex md:flex-row grid grid-cols-2 md:gap-6 gap-1 text-center py-2 px-3
             md:justify-center transition-all duration-300 md:w-fit w-full max-w-[90vw] ${
                showNavbar ? "top-4 opacity-100" : "-top-20 opacity-0"
            }`}
        >
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

    );
}
