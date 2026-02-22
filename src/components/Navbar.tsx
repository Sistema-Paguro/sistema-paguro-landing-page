import { useState, useEffect } from 'react';
import { ShimmerButton } from './ui/shimmer-button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for background transparency
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Tu Problema', href: '#problem' },
        { name: 'Beneficios', href: '#benefits' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Contáctanos', href: '#contact' },
        { name: 'Registro', href: '#registration' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >

            <div className="w-full px-6 lg:px-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="font-bold text-2xl lg:text-3xl tracking-tighter text-white drop-shadow-lg flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-magenta drop-shadow-[0_0_8px_rgba(192,28,131,0.8)]"></span>
                    Sistema Paguro
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-semibold text-white/90 hover:text-white drop-shadow-md hover:drop-shadow-lg transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <ShimmerButton
                        onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                        className="shadow-lg min-h-10 min-w-32 px-5 py-2"
                        background="#c01c83" // Match Hero theme
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                            Empezar Ahora
                        </span>
                    </ShimmerButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#050510] border-t border-gray-800 shadow-xl">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-magenta text-lg font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
