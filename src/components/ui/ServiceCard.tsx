import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="glass-card p-8 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/30 group-hover:rotate-3 shadow-sm">
                <Icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={28} />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-accent mb-4">
                {title}
            </h3>
            <p className="text-soft text-base">
                {description}
            </p>
        </div>
    );
}

