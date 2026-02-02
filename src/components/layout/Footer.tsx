export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-3 text-white">TruBalance</h3>
                        <p className="text-gray-300 mb-2">Trusted Accounting</p>
                        <p className="text-gray-400 text-sm">
                            Providing seamless tax preparation and accounting services with precision and care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Email: info@trubalance.com</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Hours: Mon-Fri, 9AM-6PM</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} TruBalance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
