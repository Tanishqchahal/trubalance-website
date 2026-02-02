interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="card group">
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-semibold text-accent mb-3">
                {title}
            </h3>
            <p className="text-accent-light leading-relaxed">
                {description}
            </p>
        </div>
    );
}
