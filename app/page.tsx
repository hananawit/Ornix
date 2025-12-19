'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    id: 1,
    title: "Technology-Based Research & Development",
    description: "Conducting technology-based research and development in various sectors, namely health and medicine, agriculture, education, trade and industry, justice, roads and transport, and similar sectors.",
    icon: "🔬"
  },
  {
    id: 2,
    title: "Data Organization & Compilation",
    description: "Organizing and compiling data in each sector to create comprehensive databases and information systems.",
    icon: "📊"
  },
  {
    id: 3,
    title: "Scientific Forecasts & Decision Support",
    description: "Preparing scientific forecasts and forecasts to help make decisions by compiling the data in each sector.",
    icon: "🔮"
  },
  {
    id: 4,
    title: "Research Enrichment",
    description: "Enriching the results of various national and international research to improve the problems in each sector.",
    icon: "🌐"
  },
  {
    id: 5,
    title: "Modern Accessibility Solutions",
    description: "Expanding the accessibility of the above-mentioned sectors to the society in a modern and technologically-supported manner.",
    icon: "♿"
  },
  {
    id: 6,
    title: "Service Modernization",
    description: "Updating and improving the services in each sector in line with the current state of the art.",
    icon: "⚡"
  },
  {
    id: 7,
    title: "Technology-Based Services",
    description: "Providing various technology-based services in each sector to enhance efficiency and effectiveness.",
    icon: "💻"
  },
  {
    id: 8,
    title: "AI & Technology Training",
    description: "Providing training on technology and artificial intelligence in the above-mentioned sectors.",
    icon: "🎓"
  },
  {
    id: 9,
    title: "AI-Powered Control & Monitoring",
    description: "Using artificial intelligence results for control and monitoring in a manner that is specific to each sector.",
    icon: "🤖"
  },
  {
    id: 10,
    title: "Problem-Solving Solutions",
    description: "Develop solutions to problems and obstacles in each sector, as needed, using technology and artificial intelligence.",
    icon: "🔧"
  }
];

const sectors = [
  "Health & Medicine",
  "Agriculture",
  "Education",
  "Trade & Industry",
  "Justice",
  "Roads & Transport"
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-light text-slate-800 tracking-tight">
                TechR&D
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light">Home</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light">About</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light">Services</a>
              <a href="#sectors" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light">Sectors</a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200 mt-4 bg-white">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-600 hover:text-slate-900 transition-all duration-300 py-2 text-sm font-light hover:translate-x-2"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-600 hover:text-slate-900 transition-all duration-300 py-2 text-sm font-light hover:translate-x-2"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-600 hover:text-slate-900 transition-all duration-300 py-2 text-sm font-light hover:translate-x-2"
              >
                Services
              </a>
              <a 
                href="#sectors" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-600 hover:text-slate-900 transition-all duration-300 py-2 text-sm font-light hover:translate-x-2"
              >
                Sectors
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 text-slate-900 leading-tight tracking-tight">
              Technology Research & Development
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed font-light">
              Empowering sectors through cutting-edge technology, artificial intelligence, and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-light text-sm hover:bg-slate-800 transition-all duration-300"
              >
                Explore Services
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 bg-white text-slate-700 rounded-full font-light text-sm border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6 text-slate-900 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              We are dedicated to transforming sectors through technology-based research, 
              data-driven insights, and innovative AI solutions that drive progress and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6 text-slate-900 tracking-tight">
              Our Sectors
            </h2>
            <p className="text-lg text-slate-500 font-light">
              Transforming industries through technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{['🏥', '🌾', '📚', '🏭', '⚖️', '🚗'][index]}</div>
                  <h3 className="font-light text-slate-700 text-sm sm:text-base">
                    {sector}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6 text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto font-light">
              Comprehensive technology solutions across all sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                data-card
                data-id={service.id}
                className={`group relative p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-500 ${
                  visibleCards.includes(service.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-slate-200 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="mb-3">
                    <h3 className="text-xl font-light text-slate-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-light text-slate-800">TechR&D</span>
              </div>
              <p className="text-slate-500 text-sm font-light">
                Transforming sectors through technology and innovation
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4 text-slate-800 text-base">Quick Links</h4>
              <ul className="space-y-2 text-slate-500 text-sm font-light">
                <li><a href="#home" className="hover:text-slate-800 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-slate-800 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-slate-800 transition-colors">Services</a></li>
                <li><a href="#sectors" className="hover:text-slate-800 transition-colors">Sectors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4 text-slate-800 text-base">Contact</h4>
              <p className="text-slate-500 text-sm font-light">
                Empowering innovation across all sectors
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Technology Research & Development. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
