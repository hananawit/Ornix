export default function Services() {
    const services = [
        {
            id: 1,
            title: "AI Strategy & Advisory",
            description: "Guidance on AI adoption, roadmap development, and governance for sustainable and responsible implementation.",
            icon: "⚖️"
        },
        {
            id: 2,
            title: "Data Analytics & Business Intelligence",
            description: "Solutions that transform complex datasets into actionable insights through visualization, reporting, and predictive modeling.",
            icon: "📊"
        },
        {
            id: 3,
            title: "AI & Machine Learning Development",
            description: "Custom AI models tailored to organizational needs, including automation, prediction, and decision support systems.",
            icon: "🤖"
        },
        {
            id: 4,
            title: "Intelligent Process Automation",
            description: "AI-powered automation solutions to enhance efficiency, accuracy, and scalability across business operations.",
            icon: "⚙️"
        },
        {
            id: 5,
            title: "Research & Innovation Support",
            description: "AI-enabled research solutions for academic institutions, healthcare systems, and organizations engaged in evidence-based decision-making.",
            icon: "🔬"
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-24">
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
                <div className="hero-circuit" />
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        Our <span className="text-secondary font-medium">Services</span>
                    </h1>
                    <p className="text-xl text-muted max-w-[1200px] font-normal leading-relaxed">
                        We offer comprehensive AI and data services designed to empower organizations through intelligent, data-driven solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const colors = [
                                { border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/15', iconBg: 'group-hover:bg-secondary/10', iconColor: 'text-secondary' },
                                { border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/15', iconBg: 'group-hover:bg-secondary/10', iconColor: 'text-secondary' },
                                { border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/15', iconBg: 'group-hover:bg-secondary/10', iconColor: 'text-secondary' },
                                { border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/15', iconBg: 'group-hover:bg-secondary/10', iconColor: 'text-secondary' },
                                { border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/15', iconBg: 'group-hover:bg-secondary/10', iconColor: 'text-secondary' },
                            ];
                            const theme = colors[service.id % colors.length];

                            return (
                                <div
                                    key={service.id}
                                    className={`group relative p-10 bg-background rounded-2xl border border-border ${theme.border} hover:shadow-xl ${theme.shadow} transition-all duration-500`}
                                >
                                    <div className="relative z-10">
                                        <div className={`w-20 h-20 rounded-2xl bg-surface flex items-center justify-center text-4xl mb-8 group-hover:scale-110 ${theme.iconBg} transition-all duration-500`}>
                                            {service.icon}
                                        </div>
                                        <div className="mb-4">
                                            <h3 className={`text-xl font-medium text-foreground leading-tight group-hover:${theme.iconColor} transition-colors`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted leading-relaxed font-light text-base">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
