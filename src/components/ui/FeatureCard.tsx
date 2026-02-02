interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary-light/50 transition-colors duration-300">
            <div className="flex-shrink-0 text-3xl">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-accent mb-2">
                    {title}
                </h4>
                <p className="text-accent-light text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
