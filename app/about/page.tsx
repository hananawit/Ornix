export default function About() {
    const team = [
        {
            name: "Tigistu Tafa",
            role: "Information System Security Manager",
            specialization: "Cybersecurity & Systems",
            icon: "🛡️",
            image: "/team/tigistu.jpg"
        },
        {
            name: "Henok T. Molla",
            role: "Finance Manager",
            specialization: "Strategy & Finance",
            icon: "📊",
            image: "/team/henok.jpg"
        },
        {
            name: "Yeabsra Tamirat",
            role: "Senior ICT Expert",
            specialization: "ICT Architecture",
            icon: "🤖",
            image: "/team/yeabsra.jpg"
        },
        {
            name: "Dr. Messay Tesfaye",
            role: "Health Sector Expert/ Health Domain Expert",
            specialization: "Pediatric Dermatology",
            icon: "🏥",
            image: "/team/messay.jpg"
        },
        {
            name: "Dr. Hasset ",
            role: "Health Sector Expert/ Health Domain Expert",
            specialization: "Clinical Nutrition",
            icon: "🏥",
            image: "/team/hasset.jpg"
        },
        {
            name: "Hanan Temam",
            role: "AI & Machine Learning Enthusiast, Developer",
            specialization: "Applied AI",
            icon: "✨",
            image: "/team/image.png"
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
                <div className="hero-circuit" />
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        About <span className="text-secondary font-medium">Ornix AI Solution</span>
                    </h1>
                    <p className="text-xl text-muted max-w-[1200px] font-normal leading-relaxed">
                        A technology-focused organization specializing in the development and deployment of practical, scalable, and ethical AI solutions.
                    </p>
                </div>
            </section>

            {/* Mission Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1200px] mx-auto">
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
                            <div className="absolute inset-0 bg-secondary/15 blur-[80px] -z-10 rounded-full" />
                            <div className="bg-surface rounded-3xl h-[450px] flex flex-col items-center justify-center border border-border shadow-soft overflow-hidden group p-10 text-center">
                                <span className="text-8xl mb-8 transform group-hover:scale-110 transition-transform duration-500">🤝</span>
                                <h3 className="text-2xl font-medium text-foreground mb-4">Collaborative Approach</h3>
                                <p className="text-muted font-light">Engineers, analysts, and domain experts working hand-in-hand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team + Mission/Vision */}
            <section className="py-20 px-6 sm:px-8 lg:px-12 bg-surface">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start mb-16">
                        <div className="animate-reveal-up">
                            <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6">
                                Our <span className="text-secondary font-medium">Team</span>
                            </h2>
                            <p className="text-muted max-w-2xl font-normal text-lg">
                                At Ornix AI Solution, our strength lies in the diversity of expertise across technology, business, and domain-specific knowledge.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-reveal-up">
                            <div className="group bg-background rounded-2xl border border-border p-6 shadow-soft hover:border-secondary/50 hover:shadow-secondary/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center text-2xl mb-4">
                                    🎯
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-2">Mission</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Transform industries with practical, scalable AI and data-driven insights that deliver measurable impact.
                                </p>
                            </div>
                            <div className="group bg-background rounded-2xl border border-border p-6 shadow-soft hover:border-secondary/50 hover:shadow-secondary/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center text-2xl mb-4">
                                    🌟
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-2">Vision</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Become a trusted leader in responsible AI that helps organizations scale and innovate sustainably.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-background p-8 rounded-3xl border border-border/60 hover:border-secondary/60 hover:shadow-2xl hover:shadow-secondary/25 transition-all duration-500 animate-reveal-up hover:-translate-y-2 hover:scale-[1.02] hover:z-10 relative"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="w-44 h-44 rounded-full bg-surface border border-border overflow-hidden flex items-center justify-center ring-2 ring-secondary/20">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-muted/40 text-xs font-mono">IMAGE</span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-medium text-foreground">{member.name}</h3>
                                        <p className="text-secondary text-xs font-bold tracking-widest uppercase">{member.role}</p>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold tracking-wide">
                                    {member.specialization}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 text-center p-12 bg-secondary/10 rounded-3xl border border-secondary/20">
                        <h3 className="text-2xl font-medium text-foreground mb-6">Why Our Team Stands Out</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-2">
                                <div className="font-bold text-secondary">Multidisciplinary</div>
                                <p className="text-sm text-muted">Tech, finance, AI, healthcare</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-secondary">Collaborative</div>
                                <p className="text-sm text-muted">Hand-in-hand teamwork</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-secondary">Ethical</div>
                                <p className="text-sm text-muted">Transparent & responsible</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-secondary">Impact-driven</div>
                                <p className="text-sm text-muted">Measurable outcomes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
