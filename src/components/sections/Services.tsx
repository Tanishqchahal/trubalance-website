import ServiceCard from '../ui/ServiceCard';

export default function Services() {
    const services = [
        {
            icon: '🏢',
            title: 'Corporate Tax Filings',
            description: 'Comprehensive corporate tax preparation and filing services to ensure compliance and optimize your tax position.',
        },
        {
            icon: '📊',
            title: 'Accounting Services',
            description: 'Full-service accounting solutions including bookkeeping, financial reporting, and analysis for businesses of all sizes.',
        },
        {
            icon: '📚',
            title: 'Bookkeeping',
            description: 'Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.',
        },
        {
            icon: '💰',
            title: 'Payroll Management',
            description: 'Efficient payroll processing, tax withholding, and compliance management for your employees.',
        },
        {
            icon: '📝',
            title: 'Personal Tax Preparation',
            description: 'Expert personal tax preparation services to maximize your refund and minimize your tax liability.',
        },
        {
            icon: '🔍',
            title: 'CRA Audits',
            description: 'Professional representation and support during CRA audits to protect your interests and ensure fair outcomes.',
        },
        {
            icon: '📈',
            title: 'Personal & Corporate Tax Planning',
            description: 'Strategic tax planning services to help you make informed decisions and achieve long-term financial goals.',
        },
    ];

    return (
        <section id="services" className="section-container bg-primary-light/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
                    Our Services
                </h2>
                <p className="text-lg text-accent-light max-w-2xl mx-auto">
                    Comprehensive tax and accounting solutions tailored to your unique needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}
