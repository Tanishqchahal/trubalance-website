import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img 
                            src="/images/logo.png" 
                            alt="TruBalance Logo" 
                            className={`h-10 md:h-12 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
                        />
                        <div className="flex flex-col ml-3">
                            <h1 className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${isScrolled ? 'text-accent' : 'text-white'}`}>
                                TruBalance
                            </h1>
                            <p className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-accent-muted' : 'text-primary'}`}>
                                Tax and Accounting
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`transition-colors duration-200 font-medium ${isScrolled ? 'text-accent-light hover:text-accent' : 'text-white/90 hover:text-white'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`transition-colors duration-200 font-medium ${isScrolled ? 'text-accent-light hover:text-accent' : 'text-white/90 hover:text-white'}`}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`${isScrolled ? 'btn-primary' : 'px-8 py-3 bg-white text-accent font-medium rounded-full hover:bg-primary-light transition-all'}`}
                        >
                            Get Started
                        </button>
                    </nav>

                </div>
            </div>
        </header>
    );
}

