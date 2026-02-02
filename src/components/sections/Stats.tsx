export default function Stats() {
    const stats = [
        { value: '500+', label: 'Companies We\'ve Served' },
        { value: '99%', label: 'Client Satisfaction Rate' },
        { value: '5+', label: 'Years of Expert Service' },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/stats-collaboration.png"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-12">
                    Tax Insights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl sm:text-6xl font-bold text-primary mb-3">
                                {stat.value}
                            </div>
                            <div className="text-lg sm:text-xl text-gray-200 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
