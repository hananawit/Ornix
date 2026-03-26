'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="hero-circuit" />
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-12%] left-[-12%] w-[45%] h-[45%] rounded-full bg-primary blur-[130px] animate-pulse" />
          <div
            className="absolute bottom-[8%] right-[-8%] w-[38%] h-[38%] rounded-full bg-secondary blur-[110px] animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute top-[18%] right-[18%] w-[22%] h-[22%] rounded-full bg-accent blur-[120px] opacity-30" />
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className={`relative text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light mb-8 leading-tight tracking-tight">
              Solve Smarter with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary font-medium">
                Ornix
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-12 leading-relaxed font-normal">
              We deliver advanced AI and analytics that turn complex challenges into clear, data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="px-12 py-4 bg-secondary text-foreground rounded-full font-medium text-base hover:bg-secondary/90 transition-all duration-300 shadow-xl shadow-secondary/30 hover:scale-105 active:scale-95"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="px-12 py-4 bg-background text-foreground rounded-full font-normal text-base border border-border hover:border-secondary/60 hover:bg-secondary/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
            By integrating cutting-edge research, data science, and AI technologies, we empower organizations to achieve informed decision-making, operational excellence, and long-term growth.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/15 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">🔬</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-secondary transition-colors">R&D Excellence</h3>
              <p className="text-muted font-light leading-relaxed">Conducting advanced research across multiple sectors to drive innovation and sustainable growth.</p>
            </div>
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">🤖</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-secondary transition-colors">AI Integration</h3>
              <p className="text-muted font-light leading-relaxed">Leveraging artificial intelligence to optimize complex processes and enhance strategic decision making.</p>
            </div>
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/15 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">📊</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-secondary transition-colors">Data-Driven</h3>
              <p className="text-muted font-light leading-relaxed">Utilizing comprehensive data analysis and predictive modeling to support future-proof strategic growth.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
