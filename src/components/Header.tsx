"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, Search, X, MapPin, List, PhoneCall } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/cauta?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { href: "/", label: "Acasă" },
        { href: "/regiuni", label: "Regiuni" },
        { href: "/comunicate", label: "Comunicate" },
        { href: "/seap", label: "Achiziții SEAP", special: true },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="bg-primary text-white w-full z-[100] sticky top-0 shadow-md border-b border-red-900">
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
                
                {/* Date / Small Edition Info */}
                <div className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-white/70">
                    Ediția Online • {new Date().toLocaleDateString('ro-RO')}
                </div>

                {/* Main Navigation (Desktop) */}
                <nav className="hidden lg:block flex-1">
                    <ul className="flex items-center justify-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-white ${pathname === link.href ? 'text-white border-b-2 border-white pb-1' : 'text-white/80'} ${link.special ? 'text-white font-black' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex justify-between w-full lg:w-auto items-center gap-4">
                    
                    {/* Mobile Brand (visible only on mobile since desktop has the giant masthead in page.tsx) */}
                    <Link href="/" className="lg:hidden text-lg font-serif font-black tracking-widest uppercase">
                        Anunțul<span className="text-black">.INFO</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="flex items-center relative">
                            {isSearchOpen ? (
                                <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white border border-slate-300 w-48 z-10">
                                    <input
                                        type="text"
                                        placeholder="Caută..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                        className="w-full bg-transparent border-none text-black text-xs px-2 py-1 outline-none"
                                    />
                                    <button type="button" onClick={() => setIsSearchOpen(false)} className="text-black p-1">
                                        <X size={14} />
                                    </button>
                                </form>
                            ) : (
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-1 hover:text-primary transition-colors"
                                    aria-label="Caută"
                                >
                                    <Search size={18} />
                                </button>
                            )}
                        </div>

                        {/* CTA Button */}
                        <Link href="/trimite-comunicat" className="bg-white hover:bg-black text-primary hover:text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 border border-white hover:border-black transition-colors">
                            Trimite Comunicat
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-1 hover:text-white/80 transition-colors"
                            aria-label="Meniu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-primary border-t border-red-900 p-4 z-50">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white"
                                >
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
