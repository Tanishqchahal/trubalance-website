import { Building2, Landmark, BookOpen, Wallet, UserCircle, Search, LineChart } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
    const services = [
        {
            icon: Building2,
            title: 'Corporate Tax Filings',
            description: 'Comprehensive corporate tax preparation and filing services to ensure compliance and optimize your tax position.',
        },
        {
            icon: Landmark,
            title: 'Accounting Services',
            description: 'Full-service accounting solutions including bookkeeping, financial reporting, and analysis for businesses of all sizes.',
        },
        {
            icon: BookOpen,
            title: 'Bookkeeping',
            description: 'Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.',
        },
        {
            icon: Wallet,
            title: 'Payroll Management',
            description: 'Efficient payroll processing, tax withholding, and compliance management for your employees.',
        },
        {
            icon: UserCircle,
            title: 'Personal Tax Preparation',
            description: 'Expert personal tax preparation services to maximize your refund and minimize your tax liability.',
        },
        {
            icon: Search,
            title: 'CRA Audits',
            description: 'Professional representation and support during CRA audits to protect your interests and ensure fair outcomes.',
        },
        {
            icon: LineChart,
            title: 'Tax Planning',
            description: 'Strategic tax planning services to help you make informed decisions and achieve long-term financial goals.',
        },
    ];

    return (
        <section id="services" className="section-container relative bg-background">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-primary-light/20 blur-3xl rounded-full z-0"></div>
            
            <div className="relative z-10 text-center mb-20 animate-fadeInUp">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">What We Offer</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-accent mb-6 leading-tight">
                    Comprehensive <br /> Tax & Accounting Expertise
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-soft max-w-2xl mx-auto font-light">
                    Meticulous tax and accounting solutions tailored to your unique personal and business landscape
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {services.map((service, index) => (
                    <div key={index} className={`animate-fadeInUp delay-${(index % 3 + 1) * 100}`}>
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

