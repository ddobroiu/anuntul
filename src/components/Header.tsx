"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, Search, Newspaper, X, Send, MapPin, List, PhoneCall } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/cauta?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { href: "/", label: "Acasă", icon: Newspaper },
        { href: "/regiuni", label: "Regiuni", icon: MapPin },
        { href: "/comunicate", label: "Comunicate", icon: List },
        { href: "/seap", label: "SEAP", icon: Send, special: true },
        { href: "/contact", label: "Contact", icon: PhoneCall },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-700 transition-all duration-300">
                      <Newspaper size={20} />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 leading-none">
                        ANUNTUL<span className="text-indigo-600">.NET</span>
                    </span>
                </Link>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className={`relative text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 hover:text-indigo-600 ${pathname === link.href ? 'text-indigo-600' : 'text-slate-500'} ${link.special ? 'text-indigo-600 !font-black border-b-2 border-indigo-600' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:flex items-center">
                        {isSearchOpen ? (
                            <form onSubmit={handleSearch} className="relative animate-fade-in">
                                <input
                                    type="text"
                                    placeholder="Caută anunțuri..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    className="bg-slate-100 border-none rounded-2xl px-5 py-3 pr-12 text-sm focus:ring-2 focus:ring-indigo-200 outline-none w-48 md:w-64"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
                                >
                                    <X size={18} />
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-xl transition-all"
                                aria-label="Caută"
                            >
                                <Search size={22} />
                            </button>
                        )}
                    </div>

                    <Link href="/trimite-comunicat" className="bg-slate-900 text-white px-5 md:px-7 py-3 rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1">
                        Publică Acum
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900 hover:bg-slate-50 rounded-xl"
                        aria-label="Meniu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl p-6 animate-fade-in isolate">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-4 text-base font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600"
                                >
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                                      <link.icon size={20} />
                                    </div>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
