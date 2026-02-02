import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-serif font-bold text-accent">
                            TruBalance
                        </h1>
                        <p className="text-xs text-accent-light">Trusted Accounting</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-accent-light hover:text-accent transition-colors duration-200 font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-accent-light hover:text-accent transition-colors duration-200 font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-accent hover:text-accent-light transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
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

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4 space-y-3 animate-fadeIn">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left px-4 py-2 text-accent-light hover:bg-primary-light rounded transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="block w-full text-left px-4 py-2 text-accent-light hover:bg-primary-light rounded transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="block w-full text-left px-4 py-2 text-accent-light hover:bg-primary-light rounded transition-colors"
                        >
                            Contact
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
