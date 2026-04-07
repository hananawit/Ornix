export default function Services() {
    const services = [
        {
            id: 1,
            title: "AI Strategy & Advisory",
            description: "Guidance on AI adoption, roadmap development, and governance for sustainable and responsible implementation.",
            highlights: [
                "AI maturity assessment and readiness audits for health data ecosystems",
                "AI strategy roadmaps with high-impact use case prioritization",
                "Responsible AI governance, bias mitigation, and compliance",
                "Stakeholder workshops and change management",
                "ROI forecasting and AI investment risk assessment"
            ],
            icon: "⚖️"
        },
        {
            id: 2,
            title: "Data Analytics & Business Intelligence",
            description: "Solutions that transform complex datasets into actionable insights through visualization, reporting, and predictive modeling.",
            highlights: [
                "Predictive analytics for risk stratification and readmission prevention",
                "Interactive dashboards for clinical KPIs and population health metrics",
                "Health data integration and cleansing from disparate sources",
                "Business intelligence reporting for value-based care",
                "Custom analytics for research acceleration"
            ],
            icon: "📊"
        },
        {
            id: 3,
            title: "AI & Machine Learning Development",
            description: "Custom AI models tailored to organizational needs, including automation, prediction, and decision support systems.",
            highlights: [
                "Predictive healthcare models for early detection and treatment response",
                "Computer vision for medical imaging analysis",
                "NLP for extracting insights from clinical notes",
                "Generative AI for reports and synthetic data",
                "End-to-end model lifecycle management"
            ],
            icon: "🤖"
        },
        {
            id: 4,
            title: "Intelligent Process Automation",
            description: "AI-powered automation solutions to enhance efficiency, accuracy, and scalability across business operations.",
            highlights: [
                "Claims processing, billing, and revenue cycle automation",
                "Intelligent document processing and data extraction",
                "Automated patient engagement workflows",
                "Clinical workflow optimization and triage assistance",
                "Continuous monitoring and process optimization"
            ],
            icon: "⚙️"
        },
        {
            id: 5,
            title: "AI Ethics, Compliance & Responsible AI",
            description: "Frameworks for ethical AI use, bias audits, and compliance with health data regulations and privacy-by-design.",
            highlights: [
                "Bias and fairness assessments",
                "Transparency and explainability practices",
                "Regulatory compliance alignment",
                "Privacy-by-design for sensitive patient data"
            ],
            icon: "🛡️"
        },
        {
            id: 6,
            title: "Data Infrastructure & Governance",
            description: "Secure, scalable data platforms and governance to ensure high-quality, interoperable health data.",
            highlights: [
                "Data lakes and warehouses",
                "Metadata management and lineage",
                "Interoperability and standards alignment",
                "Access control and data stewardship"
            ],
            icon: "🧱"
        },
        {
            id: 7,
            title: "AI Training & Capacity Building",
            description: "Hands-on training and upskilling for healthcare professionals and IT teams on AI tools and best practices.",
            highlights: [
                "Customized workshops and curricula",
                "Role-based AI literacy programs",
                "Tooling and workflow enablement"
            ],
            icon: "🎓"
        },
        {
            id: 8,
            title: "Clinical Decision Support Systems (CDSS)",
            description: "AI-powered tools that assist clinicians with real-time recommendations and evidence-based diagnostics.",
            highlights: [
                "Drug interaction alerts",
                "Diagnostic support and triage guidance",
                "Care pathway optimization"
            ],
            icon: "🩺"
        },
        {
            id: 9,
            title: "Predictive Population Health & Telemedicine AI",
            description: "Remote monitoring and population health insights using wearable and IoT data.",
            highlights: [
                "Chronic disease management",
                "Community health trend forecasting",
                "Telemedicine decision support"
            ],
            icon: "🌍"
        },
        {
            id: 10,
            title: "Proof-of-Concept (PoC) & Innovation Labs",
            description: "Rapid prototyping with measurable pilots to validate ideas before full-scale investment.",
            highlights: [
                "Use case discovery and feasibility",
                "MVP builds and rapid experimentation",
                "Impact measurement and iteration"
            ],
            icon: "🧪"
        },
        {
            id: 11,
            title: "Post-Implementation Support & Optimization",
            description: "Ongoing monitoring, retraining, performance tuning, and scaling of deployed AI systems.",
            highlights: [
                "Model monitoring and drift detection",
                "Retraining and performance optimization",
                "Scalability and reliability improvements"
            ],
            icon: "🔧"
        },
        {
            id: 12,
            title: "Generative AI for Healthcare",
            description: "Specialized applications for clinical summarization, patient education, and research synthesis.",
            highlights: [
                "Automated clinical summaries",
                "Patient education content generation",
                "Literature review and synthesis"
            ],
            icon: "✨"
        }
    ];
    const securityServices = [
        {
            title: "Proactive",
            items: [
                "Risk assessment and security policies, standards drafting",
                "Compliance and benchmarking",
                "Vulnerability scanning and patch management",
                "Systems assessment",
                "24/7 cyber security monitoring",
                "Detection Engineering",
                "DevSecOps",
                "Security audit"
            ]
        },
        {
            title: "Reactive",
            items: [
                "Incident response",
                "Incident forensic investigation",
                "Threat hunting"
            ]
        },
        {
            title: "Technical Consultation",
            items: [
                "Security solutions architecture and implementation",
                {
                    label: "SOC team building",
                    subitems: [
                        "Monitoring and automation tools deployment and configuration",
                        "SLAs configuration"
                    ]
                },
                "Security tools deployment and configuration",
                {
                    label: "Cyber security trainings",
                    subitems: [
                        "Security monitoring and incident handling",
                        "Incident forensic analysis",
                        "Security awareness",
                        "Security tools"
                    ]
                },
                "Red team/Blue team/Purple team exercises"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-24">
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
                <div className="hero-circuit" />
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        Our <span className="text-secondary font-medium">Services</span>
                    </h1>
                    <p className="text-xl text-muted max-w-[1200px] font-normal leading-relaxed">
                        We offer comprehensive AI and data services designed to empower organizations through intelligent, data-driven solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1200px] mx-auto">
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
                                        {service.highlights && (
                                            <ul className="mt-6 space-y-2 text-sm text-muted">
                                                {service.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex gap-3">
                                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/60 shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-10">
                        <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-3">
                            Cybersecurity <span className="text-secondary font-medium">Services</span>
                        </h2>
                        <p className="text-muted text-lg max-w-[900px]">
                            A focused set of proactive, reactive, and advisory services to strengthen security posture and response readiness.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityServices.map((group) => (
                            <div key={group.title} className="p-8 bg-background rounded-2xl border border-border shadow-sm">
                                <h3 className="text-xl font-medium text-foreground mb-5">{group.title}</h3>
                                <ul className="space-y-3 text-muted text-base leading-relaxed">
                                    {group.items.map((item, index) => {
                                        if (typeof item === "string") {
                                            return (
                                                <li key={`${group.title}-${index}`} className="flex gap-3">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary/80 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={`${group.title}-${index}`} className="flex gap-3">
                                                <span className="mt-2 h-2 w-2 rounded-full bg-secondary/80 shrink-0" />
                                                <div>
                                                    <div className="text-foreground">{item.label}</div>
                                                    <ul className="mt-2 space-y-2 text-muted">
                                                        {item.subitems.map((subitem) => (
                                                            <li key={subitem} className="flex gap-3">
                                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/50 shrink-0" />
                                                                <span>{subitem}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
