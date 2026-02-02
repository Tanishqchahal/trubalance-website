import FeatureCard from '../ui/FeatureCard';

export default function WhyChoose() {
    const features = [
        {
            icon: '💎',
            title: 'Maximizing Tax Savings',
            description: 'We identify every deduction and credit to minimize your tax burden legally and ethically.',
        },
        {
            icon: '🎯',
            title: 'Strategic Tax Planning',
            description: 'Proactive planning strategies to optimize your financial position year-round.',
        },
        {
            icon: '👤',
            title: 'Personalized Accounting',
            description: 'Customized solutions tailored to your unique business needs and goals.',
        },
        {
            icon: '🔧',
            title: 'Comprehensive Financial Solutions',
            description: 'Full-spectrum services from bookkeeping to complex tax planning.',
        },
        {
            icon: '⚡',
            title: 'Proactive Tax Assistance',
            description: 'Year-round support and guidance to keep you ahead of tax deadlines.',
        },
        {
            icon: '🤝',
            title: 'Dedicated Support',
            description: 'A committed team always available to answer your questions and provide expert advice.',
        },
    ];

    return (
        <section className="section-container bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
                    Why Choose TruBalance?
                </h2>
                <p className="text-lg text-accent-light max-w-2xl mx-auto">
                    Experience the difference of working with dedicated tax professionals
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}
