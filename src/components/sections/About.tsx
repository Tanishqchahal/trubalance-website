import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-container relative bg-white overflow-hidden">
            <div className="absolute -left-10 top-1/4 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Component with polished frame */}
                <div className="order-2 lg:order-1 relative animate-fadeInUp">
                    <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10 translate-x-2 translate-y-2"></div>
                    <img
                        src="/images/about-professional.png"
                        alt="Professional accountant working"
                        className="rounded-2xl shadow-premium w-full h-auto relative z-10"
                    />
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg z-20 border border-white/50 animate-fadeInUp delay-300">
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary/20 p-3 rounded-lg">
                                <ShieldCheck className="text-accent" size={32} />
                            </div>
                            <div>
                                <p className="text-sm text-accent-muted uppercase tracking-wider font-bold">Verified Expertise</p>
                                <p className="text-xl font-serif font-bold text-accent">99% Accuracy Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 animate-fadeInUp delay-100">
                    <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-accent mb-8 leading-tight">
                        Precision in Practice, <br /> Excellence in <span className="text-primary italic">Results</span>
                    </h2>
                    
                    <div className="space-y-6 text-soft text-lg mb-10">
                        <p>
                            At TruBalance, we believe that financial clarity is the foundation of business success. 
                            With over 5 years of experience serving 500+ customers, we've built our reputation on 
                            precision, integrity, and personalized service.
                        </p>
                        <p>
                            Our team of certified professionals is dedicated to providing comprehensive tax preparation 
                            and accounting solutions that help you navigate complex financial landscapes with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Target className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-accent mb-1">Our Mission</h4>
                                <p className="text-sm text-soft">Simplifying finance for everyone.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Users className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-accent mb-1">Our Values</h4>
                                <p className="text-sm text-soft">Trust, excellence, and proactive partnerships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

