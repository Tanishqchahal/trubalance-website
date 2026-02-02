export default function About() {
    return (
        <section id="about" className="section-container bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1">
                    <img
                        src="/images/about-professional.png"
                        alt="Professional accountant working"
                        className="rounded-lg shadow-xl w-full h-auto"
                    />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
                        About TruBalance
                    </h2>
                    <div className="space-y-4 text-accent-light text-lg leading-relaxed">
                        <p>
                            At TruBalance, we believe that financial clarity is the foundation of business success.
                            With over 5 years of experience serving 500+ companies, we've built our reputation on
                            precision, integrity, and personalized service.
                        </p>
                        <p>
                            Our team of certified professionals is dedicated to providing comprehensive tax preparation
                            and accounting solutions that help you navigate complex financial landscapes with confidence.
                            We don't just manage numbers—we partner with you to achieve your financial goals.
                        </p>
                        <p>
                            From individual tax returns to corporate financial planning, we bring expertise, attention
                            to detail, and a commitment to maximizing your financial potential while ensuring full
                            compliance with all regulations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
