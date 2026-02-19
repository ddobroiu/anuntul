import Link from 'next/link';
import { Newspaper, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                    <div className="footer-col">
                        <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
                            <Newspaper size={28} />
                            <span>ANUNTUL.NET</span>
                        </Link>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                            Sursa ta de încredere pentru știri și comunicate oficiale.
                            Specialiști în vizibilitatea proiectelor europene și publicitate legală.
                        </p>
                        <div className="flex" style={{ gap: '1.25rem', marginTop: '2rem' }}>
                            <Link href="#" aria-label="Facebook" className="hover:text-primary"><Facebook size={22} /></Link>
                            <Link href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={22} /></Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-primary"><Instagram size={22} /></Link>
                            <Link href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={22} /></Link>
                        </div>
                    </div>


                    <div className="footer-col">
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Regiuni</h3>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="md:block">
                            <li><Link href="/regiune/bucuresti-ilfov">București</Link></li>
                            <li><Link href="/regiune/nord-est">Nord-Est</Link></li>
                            <li><Link href="/regiune/centru">Centru</Link></li>
                            <li><Link href="/regiune/nord-vest">Nord-Vest</Link></li>
                            <li><Link href="/regiune/vest">Vest</Link></li>
                            <li className="col-span-2"><Link href="/regiuni" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Vezi Toate &rarr;</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link href="/termeni">Termeni si Conditii</Link></li>
                            <li><Link href="/confidentialitate">Confidentialitate</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/publicitate">Publicitate</Link></li>
                        </ul>
                        <div style={{ marginTop: '1rem' }}>
                            <Link href="/trimite-comunicat" className="btn btn-outline" style={{ width: '100%' }}>
                                Trimite Comunicat
                            </Link>
                            <Link href="/seap" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', textAlign: 'center', backgroundColor: '#d32f2f', border: 'none' }}>
                                Achiziții Publice SEAP
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Anuntul.net. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
}
