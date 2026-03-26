
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/ornix 2-cropped.png';

export default function Footer() {
    return (
        <footer className="relative bg-surface pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] -z-10 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="w-14 h-14 bg-background rounded-xl border border-border shadow-lg shadow-secondary/20 overflow-hidden flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                <Image
                                    src={logo}
                                    alt="Ornix logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-medium text-foreground tracking-tight">Ornix</span>
                        </Link>
                        <p className="text-muted text-base font-light leading-relaxed">
                            Pioneering the future through technology-based research and artificial intelligence across all vital sectors of society.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300">
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
                            <li><Link href="/services" className="text-muted hover:text-secondary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                                Services
                            </Link></li>
                            <li><Link href="/sectors" className="text-muted hover:text-secondary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                                Sectors
                            </Link></li>
                            <li><Link href="/about" className="text-muted hover:text-secondary font-light transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                                Research
                            </Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-foreground font-medium mb-8 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-muted hover:text-secondary font-light transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-secondary font-light transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-muted hover:text-secondary font-light transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted hover:text-secondary font-light transition-colors">Privacy Policy</Link></li>
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
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all duration-300 font-light"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-secondary text-foreground px-4 rounded-lg text-xs font-medium hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/30">
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
                        <span className="text-muted text-xs font-light hover:text-secondary cursor-pointer transition-colors">Terms of Service</span>
                        <span className="text-muted text-xs font-light hover:text-secondary cursor-pointer transition-colors">Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
