'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-secondary blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-rose blur-[110px] opacity-20" />
          <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-violet blur-[120px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light mb-8 leading-tight tracking-tight">
              Intelligent Solutions for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet to-rose font-medium">Data-Driven</span> Future
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-12 leading-relaxed font-normal">
              Ornix AI Solution delivers advanced artificial intelligence and analytics solutions designed to solve complex challenges across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="px-12 py-4 bg-primary text-white rounded-full font-medium text-base hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="px-12 py-4 bg-background text-foreground rounded-full font-normal text-base border border-border hover:border-primary/50 hover:bg-surface transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
            By integrating cutting-edge research, data science, and AI technologies, we empower organizations to achieve informed decision-making, operational excellence, and long-term growth.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-emerald/40 hover:shadow-xl hover:shadow-emerald/5 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">🔬</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-emerald transition-colors">R&D Excellence</h3>
              <p className="text-muted font-light leading-relaxed">Conducting advanced research across multiple sectors to drive innovation and sustainable growth.</p>
            </div>
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-violet/40 hover:shadow-xl hover:shadow-violet/5 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">🤖</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-violet transition-colors">AI Integration</h3>
              <p className="text-muted font-light leading-relaxed">Leveraging artificial intelligence to optimize complex processes and enhance strategic decision making.</p>
            </div>
            <div className="group p-10 bg-background rounded-2xl border border-border hover:border-rose/40 hover:shadow-xl hover:shadow-rose/5 transition-all duration-500">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">📊</div>
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-rose transition-colors">Data-Driven</h3>
              <p className="text-muted font-light leading-relaxed">Utilizing comprehensive data analysis and predictive modeling to support future-proof strategic growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
