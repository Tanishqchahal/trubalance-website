import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with optimized overlay */}
            <div className="absolute inset-0 z-0 scale-105 animate-slowZoom">
                <img
                    src="/images/hero-office.png"
                    alt="Modern office workspace"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent/40 to-accent/80"></div>
                <div className="absolute inset-0 bg-black/20 hero-pattern opacity-20"></div>

            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-fadeInUp">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-white/90 text-sm font-medium tracking-wide">Premium Tax Solutions</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] animate-fadeInUp delay-100">
                    Providing you with<br />
                    <span className="text-primary italic">Seamless</span> Tax Preparation
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fadeInUp delay-200">
                    Simplify Your Tax Season with TruBalance. Built on Trust, Driven by Care.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp delay-300">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-primary group flex items-center space-x-3 px-10 py-5 text-lg"
                    >
                        <span>Start Your Consultation</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className="text-white font-medium hover:text-primary transition-colors flex items-center space-x-2 border-b-2 border-transparent hover:border-primary pb-1"
                    >
                        <span>Explore Services</span>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button 
                onClick={() => scrollToSection('about')}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors cursor-pointer group animate-bounce"
            >
                <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
                    <ChevronDown size={32} />
                </div>
            </button>
        </section>
    );
}

