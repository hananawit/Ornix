
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-surface pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">O</div>
                            <span className="text-2xl font-medium text-foreground tracking-tight">Ornix</span>
                        </Link>
                        <p className="text-muted text-base font-light leading-relaxed">
                            Pioneering the future through technology-based research and artificial intelligence across all vital sectors of society.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current opacity-70" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-foreground font-medium mb-8 text-lg">Ecosystem</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="text-muted hover:text-primary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                Services
                            </Link></li>
                            <li><Link href="/sectors" className="text-muted hover:text-primary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet/40 group-hover:bg-violet transition-colors" />
                                Sectors
                            </Link></li>
                            <li><Link href="/about" className="text-muted hover:text-primary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald/40 group-hover:bg-emerald transition-colors" />
                                Research
                            </Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-foreground font-medium mb-8 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-muted hover:text-primary font-light transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary font-light transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary font-light transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary font-light transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-medium mb-2 text-lg">Stay Updated</h4>
                        <p className="text-muted text-sm font-light">Join our newsletter for the latest R&D insights.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 font-light"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg text-xs font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted text-sm font-light">
                        &copy; {new Date().getFullYear()} Ornix Technology Research & Development.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-muted text-xs font-light hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                        <span className="text-muted text-xs font-light hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
