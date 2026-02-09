import { Briefcase, Heart, Award } from 'lucide-react';

export default function Stats() {
    const stats = [
        { 
            icon: Briefcase,
            value: '500+', 
            label: 'Companies Served',
            description: 'Across diverse industries'
        },
        { 
            icon: Heart,
            value: '99%', 
            label: 'Satisfaction Rate',
            description: 'Reflecting our dedication'
        },
        { 
            icon: Award,
            value: '5+', 
            label: 'Years Excellence',
            description: 'Proven track record'
        },
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with optimized overlay */}
            <div className="absolute inset-0 z-0 scale-110">
                <img
                    src="/images/stats-collaboration.png"
                    alt="Team collaboration"
                    className="w-full h-full object-cover blur-[2px]"
                />
                <div className="absolute inset-0 bg-accent/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-accent/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fadeInUp">
                    <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Our Impact</span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
                        Measurable Results
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`glass-card p-10 text-center bg-white/5 border-white/10 hover:bg-white/10 animate-fadeInUp delay-${(index + 1) * 100}`}>
                            <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                                <stat.icon className="text-primary" size={32} />
                            </div>
                            <div className="text-5xl sm:text-6xl font-bold text-white mb-2 font-serif">
                                {stat.value}
                            </div>
                            <div className="text-xl text-primary font-medium mb-2">
                                {stat.label}
                            </div>
                            <div className="text-sm text-white/50">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

