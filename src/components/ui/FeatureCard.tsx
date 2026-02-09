import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-premium transition-all duration-300 group">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={24} />
            </div>
            <div>
                <h4 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h4>
                <p className="text-soft text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

