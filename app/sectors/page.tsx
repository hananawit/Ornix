export default function Sectors() {
    const sectors = [
        { name: "Healthcare", icon: "🏥" },
        { name: "Education", icon: "🎓" },
        { name: "Business & Industry", icon: "🏭" },
        { name: "Public Sector & NGOs", icon: "🌍" },
        { name: "Technology & Startups", icon: "💡" }
    ];

    const faqs = [
        {
            q: "What differentiates Ornix AI Solution?",
            a: "Our solutions are research-driven, sector-specific, and designed to deliver practical, measurable outcomes."
        },
        {
            q: "Do you provide customized solutions?",
            a: "Yes. Every solution is tailored to the client's data environment, objectives, and operational context."
        },
        {
            q: "Can you support organizations with limited data infrastructure?",
            a: "Absolutely. We assist with data strategy development, quality improvement, and scalable AI implementation."
        },
        {
            q: "How do you address ethical and data privacy concerns?",
            a: "We adhere to strict data governance, transparency, and responsible AI principles."
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-24">
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
                <div className="hero-circuit" />
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        Sectors We <span className="text-secondary font-medium">Serve</span>
                    </h1>
                    <p className="text-xl text-muted max-w-[1200px] font-normal leading-relaxed">
                        Our solutions are tailored to the unique needs of diverse sectors, delivering sustainable value in an increasingly data-driven world.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="group p-16 bg-background rounded-3xl border border-border hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 text-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <div className="text-7xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{sector.icon}</div>
                                    <h3 className="text-2xl font-medium text-foreground tracking-tight">
                                        {sector.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light text-foreground mb-16 text-center">
                        Frequently Asked <span className="text-secondary font-medium">Questions</span>
                    </h2>
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-soft group hover:border-secondary/40 transition-all duration-300">
                                <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-secondary transition-colors">
                                    {faq.q}
                                </h3>
                                <p className="text-muted font-light leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
