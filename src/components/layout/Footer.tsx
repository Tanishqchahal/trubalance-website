import { Shield, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent text-white py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img 
                                src="/images/logo.png" 
                                alt="TruBalance Logo" 
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <span className="text-2xl font-serif font-bold text-white tracking-widest">TRUBALANCE</span>
                        </div>
                        <p className="text-white/60 text-base leading-relaxed max-w-xs">
                            Providing elite tax preparation and accounting solutions with unparalleled precision and personalized care for visionary businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-8 text-white uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#about" className="text-white/60 hover:text-primary transition-colors flex items-center">
                                    <span className="w-2 h-[1px] bg-primary mr-3"></span>
                                    About Our Firm
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-white/60 hover:text-primary transition-colors flex items-center">
                                    <span className="w-2 h-[1px] bg-primary mr-3"></span>
                                    Our Expertise
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/60 hover:text-primary transition-colors flex items-center">
                                    <span className="w-2 h-[1px] bg-primary mr-3"></span>
                                    Get In Touch
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-8 text-white uppercase tracking-widest">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4 text-white/60">
                                <Mail size={18} className="text-primary" />
                                <span>trubalancetax@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-4 text-white/60">
                                <Phone size={18} className="text-primary" />
                                <span>+1 (905) 872-7670</span>
                            </li>
                            <li className="text-white/60 pl-8 text-sm italic">
                                Mon - Fri: 9:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>

                    {/* Authority Signals */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center space-x-3 mb-6">
                            <Shield className="text-primary" size={24} />
                            <h4 className="text-sm font-bold uppercase tracking-widest">Certified Partner</h4>
                        </div>
                        <p className="text-xs text-white/40 mb-4 leading-relaxed">
                            TruBalance is a certified tax preparation firm, maintaining the highest standards of financial integrity and regulatory compliance.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-8 bg-white/10 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default opacity-50">
                                <span className="text-[10px] font-bold">CPA CERTIFIED</span>
                            </div>
                            <div className="h-8 bg-white/10 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default opacity-50">
                                <span className="text-[10px] font-bold">TAX EXPERT</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
                    <p>&copy; {currentYear} TruBalance Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

