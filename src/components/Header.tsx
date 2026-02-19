"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, Newspaper, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/cauta?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };
    return (
        <header className="site-header">
            <div className="container">
                <Link href="/" className="logo">
                    <Newspaper size={32} className="md:w-8 md:h-8 w-7 h-7" />
                    <span className="md:text-2xl text-xl">ANUNTUL.NET</span>
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li><Link href="/">Acasa</Link></li>
                        <li><Link href="/regiuni">Regiuni</Link></li>
                        <li><Link href="/comunicate">Comunicate</Link></li>
                        <li><Link href="/seap" style={{ color: '#d32f2f', fontWeight: '700' }}>SEAP</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center" style={{ gap: '0.75rem' }}>
                    <div className="md:flex hidden items-center">
                        {isSearchOpen ? (
                            <form onSubmit={handleSearch} className="flex items-center" style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    placeholder="Cauta..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    style={{
                                        padding: '0.5rem 2.5rem 0.5rem 1rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-primary)',
                                        fontSize: '0.9rem',
                                        width: '180px'
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    style={{ position: 'absolute', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                                >
                                    <X size={16} />
                                </button>
                            </form>
                        ) : (
                            <button
                                className="btn btn-outline"
                                aria-label="Cauta"
                                style={{ padding: '0.5rem' }}
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search size={20} />
                            </button>
                        )}
                    </div>

                    <Link href="/trimite-comunicat" className="btn btn-primary" style={{ fontWeight: '800', padding: '0.6rem 1.25rem' }}>
                        <span className="desktop-only text-sm md:text-base">Trimite Comunicat</span>
                        <span className="mobile-only text-sm">Trimite</span>
                    </Link>

                    <button
                        className="btn btn-outline md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ padding: '0.4rem', border: 'none', color: 'var(--color-text)' }}
                        aria-label="Meniu"
                    >
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden"
                    style={{
                        position: 'fixed',
                        top: 'var(--header-height)',
                        left: 0,
                        width: '100%',
                        backgroundColor: 'white',
                        zIndex: 100,
                        borderBottom: '1px solid var(--color-border)',
                        padding: '1rem',
                        boxShadow: 'var(--shadow-lg)'
                    }}
                >
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', padding: '0.5rem 0', fontWeight: '500' }}>Acasa</Link></li>
                        <li><Link href="/regiuni" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', padding: '0.5rem 0', fontWeight: '500' }}>Regiuni</Link></li>
                        <li><Link href="/comunicate" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', padding: '0.5rem 0', fontWeight: '500' }}>Comunicate</Link></li>
                        <li><Link href="/seap" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', padding: '0.5rem 0', fontWeight: '600', color: '#d32f2f' }}>SEAP</Link></li>
                        <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', padding: '0.5rem 0', fontWeight: '500' }}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
