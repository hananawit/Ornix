'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-background pb-24">
            <section className="bg-surface py-32 px-4 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
                <div className="hero-circuit" />
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-light text-foreground tracking-tight mb-8">
                        Contact <span className="text-secondary font-medium">Us</span>
                    </h1>
                    <p className="text-xl text-muted max-w-[1200px] font-normal leading-relaxed">
                        Contact us to discuss collaboration opportunities, consultations, or customized AI solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-medium text-foreground mb-10">Get In Touch</h2>
                            <div className="space-y-10">
                                <div className="group">
                                    <h3 className="text-sm uppercase tracking-widest text-secondary font-bold mb-3">Office</h3>
                                    <p className="text-muted text-lg font-light leading-relaxed group-hover:text-foreground transition-colors duration-300">[Insert office location]</p>
                                </div>
                                <div className="group">
                                    <h3 className="text-sm uppercase tracking-widest text-secondary font-bold mb-3">Email</h3>
                                    <p className="text-muted text-lg font-light group-hover:text-foreground transition-colors duration-300">[Insert professional email]</p>
                                </div>
                                <div className="group">
                                    <h3 className="text-sm uppercase tracking-widest text-secondary font-bold mb-3">Phone</h3>
                                    <p className="text-muted text-lg font-light group-hover:text-foreground transition-colors duration-300">[Insert business number]</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-surface p-12 rounded-3xl border border-border shadow-soft relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-secondary/20 transition-colors duration-500" />

                        <h2 className="text-2xl font-medium text-foreground mb-10 relative z-10">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all duration-300 outline-none font-light"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all duration-300 outline-none font-light"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all duration-300 outline-none font-light resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-secondary text-foreground py-4 px-8 rounded-xl font-medium hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/30 hover:shadow-secondary/40 transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
