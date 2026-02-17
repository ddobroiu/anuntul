import Link from 'next/link';
import { Menu, Search, Newspaper } from 'lucide-react';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <Link href="/" className="logo">
                    <Newspaper size={32} />
                    <span>ANUNTUL.NET</span>
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li><Link href="/categorie/actualitate">Actualitate</Link></li>
                        <li><Link href="/categorie/economic">Economic</Link></li>
                        <li><Link href="/categorie/politic">Politic</Link></li>
                        <li><Link href="/regiuni">Regiuni</Link></li>
                        <li><Link href="/comunicate">Comunicate</Link></li>
                        <li><Link href="/seap" style={{ color: '#d32f2f', fontWeight: '600' }}>SEAP</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center" style={{ gap: '1rem' }}>
                    <button className="btn btn-outline" aria-label="Cauta">
                        <Search size={20} />
                    </button>
                    <Link href="/trimite-comunicat" className="btn btn-primary">
                        Trimite Comunicat
                    </Link>
                    <button className="md:hidden btn btn-outline" style={{ display: 'none' }}> {/* Hidden on desktop, show on mobile logic needed */}
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
