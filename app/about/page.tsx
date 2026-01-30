export default function About() {
    const team = [
        {
            name: "Tigistu Tafa",
            role: "Information System Security Manager",
            description: "Expert in designing and securing robust, scalable systems that power AI-driven solutions, ensuring every deployment is future-ready and protected.",
            icon: "🛡️",
            image: "/team/tigistu.jpg"
        },
        {
            name: "Henok T. Molla",
            role: "Finance Manager",
            description: "Bringing financial clarity and strategic precision to AI adoption, ensuring technology investments align with cost efficiency and sustainable growth.",
            icon: "📊",
            image: "/team/henok.jpg"
        },
        {
            name: "Yeabsra Tamirat",
            role: "Senior ICT Expert",
            description: "Specializing in information and communication technology to develop custom models and high-performing systems tailored to complex client needs.",
            icon: "🤖",
            image: "/team/yeabsra.jpg"
        },
        {
            name: "Hasset",
            role: "Domain Specialist",
            description: "Bridging the gap between intelligent technology and real-world application, ensuring solutions are safe, effective, and impact-driven.",
            icon: "🏥",
            image: "/team/hasset.jpg"
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-32">
            {/* Header */}
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        About <span className="text-primary font-medium">Ornix AI Solution</span>
                    </h1>
                    <p className="text-xl text-muted max-w-3xl font-normal leading-relaxed">
                        A technology-focused organization specializing in the development and deployment of practical, scalable, and ethical AI solutions.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-medium text-foreground">Mission</h2>
                        <p className="text-lg text-muted font-light leading-relaxed">
                            Ornix AI Solution is committed to transforming industries through technology-driven research, data-powered insights, and innovative artificial intelligence solutions. We strive to deliver measurable progress, operational efficiency, and inclusive access to intelligent technologies across diverse sectors.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-medium text-foreground">Vision</h2>
                        <p className="text-lg text-muted font-light leading-relaxed">
                            To be a trusted leader in responsible AI, enabling organizations to innovate, scale, and deliver sustainable value in an increasingly data-driven world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Content */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-medium text-foreground mb-8">Our Foundation</h2>
                            <p className="text-muted leading-relaxed font-light mb-8 text-lg">
                                Ornix AI Solution collaborates with organizations to understand their strategic objectives and design intelligent systems that align with real-world operational needs.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <li className="flex items-center gap-3 text-foreground font-light text-lg">
                                    <span className="text-2xl">🔬</span> R&D Focus
                                </li>
                                <li className="flex items-center gap-3 text-foreground font-light text-lg">
                                    <span className="text-2xl">📊</span> Data Analytics
                                </li>
                                <li className="flex items-center gap-3 text-foreground font-light text-lg">
                                    <span className="text-2xl">🤖</span> AI & ML
                                </li>
                                <li className="flex items-center gap-3 text-foreground font-light text-lg">
                                    <span className="text-2xl">🏢</span> Industry Specific
                                </li>
                            </ul>
                            <p className="mt-10 text-muted leading-relaxed font-light text-lg italic">
                                "We prioritize reliability, transparency, and measurable impact in every engagement."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 rounded-full" />
                            <div className="bg-surface rounded-3xl h-[450px] flex flex-col items-center justify-center border border-border shadow-soft overflow-hidden group p-10 text-center">
                                <span className="text-8xl mb-8 transform group-hover:scale-110 transition-transform duration-500">🤝</span>
                                <h3 className="text-2xl font-medium text-foreground mb-4">Collaborative Approach</h3>
                                <p className="text-muted font-light">Engineers, analysts, and domain experts working hand-in-hand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-light text-foreground mb-6">
                            Our <span className="text-primary font-medium">Team</span>
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto font-normal text-lg">
                            At Ornix AI Solution, our strength lies in the diversity of expertise across technology, business, and domain-specific knowledge.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {team.map((member, index) => (
                            <div key={index} className="group bg-background p-10 rounded-[2.5rem] border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start text-center sm:text-left">
                                    <div className="relative flex-shrink-0">
                                        {/* Image Placeholder */}
                                        <div className="w-32 h-32 rounded-3xl bg-surface border-2 border-border group-hover:border-primary/30 transition-all duration-500 overflow-hidden flex items-center justify-center relative shadow-inner">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-muted/20 text-xs font-mono">IMAGE HERE</span>
                                            )}
                                            {/* Small Icon Badge */}
                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-background rounded-xl border border-border flex items-center justify-center text-xl shadow-soft group-hover:rotate-12 transition-transform duration-300">
                                                {member.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-medium text-foreground mb-1">{member.name}</h3>
                                            <p className="text-primary text-xs font-bold tracking-widest uppercase">{member.role}</p>
                                        </div>
                                        <p className="text-muted font-light leading-relaxed text-base">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 text-center p-12 bg-primary/5 rounded-3xl border border-primary/10">
                        <h3 className="text-2xl font-medium text-foreground mb-6">Why Our Team Stands Out</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-2">
                                <div className="font-bold text-primary">Multidisciplinary</div>
                                <p className="text-sm text-muted">Tech, finance, AI, healthcare</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-primary">Collaborative</div>
                                <p className="text-sm text-muted">Hand-in-hand teamwork</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-primary">Ethical</div>
                                <p className="text-sm text-muted">Transparent & responsible</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-primary">Impact-driven</div>
                                <p className="text-sm text-muted">Measurable outcomes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
