import { Gem, Target, UserCheck, Settings2, Zap, Headphones } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

export default function WhyChoose() {
    const features = [
        {
            icon: Gem,
            title: 'Maximizing Tax Savings',
            description: 'We identify every deduction and credit to minimize your tax burden legally and ethically.',
        },
        {
            icon: Target,
            title: 'Strategic Planning',
            description: 'Proactive planning strategies to optimize your financial position year-round.',
        },
        {
            icon: UserCheck,
            title: 'Personalized Care',
            description: 'Customized solutions tailored to your unique business needs and goals.',
        },
        {
            icon: Settings2,
            title: 'Financial Solutions',
            description: 'Full-spectrum services from bookkeeping to complex tax planning.',
        },
        {
            icon: Zap,
            title: 'Proactive Assistance',
            description: 'Year-round support and guidance to keep you ahead of tax deadlines.',
        },
        {
            icon: Headphones,
            title: 'Dedicated Support',
            description: 'A committed team always available to answer your questions and provide expert advice.',
        },
    ];

    return (
        <section className="section-container bg-primary-light/10">
            <div className="text-center mb-20 animate-fadeInUp">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Proven Performance</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-accent mb-6">
                    Why TruBalance?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-soft max-w-2xl mx-auto font-light">
                    Experience the precision and dedication of elite tax professionals
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className={`animate-fadeInUp delay-${(index % 3 + 1) * 100}`}>
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

