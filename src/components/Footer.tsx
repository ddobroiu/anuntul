import Link from 'next/link';
import { Newspaper, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link href="/" className="logo" style={{ marginBottom: '1rem' }}>
                            <Newspaper size={24} />
                            <span>ANUNTUL.NET</span>
                        </Link>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                            Sursa ta de incredere pentru stiri locale si nationale.
                            Publicam comunicate de presa verificate si actualitate din toate regiunile Romaniei.
                        </p>
                        <div className="flex" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                            <Link href="#" aria-label="Facebook"><Facebook size={20} /></Link>
                            <Link href="#" aria-label="Twitter"><Twitter size={20} /></Link>
                            <Link href="#" aria-label="Instagram"><Instagram size={20} /></Link>
                            <Link href="#" aria-label="LinkedIn"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Categorii</h3>
                        <ul>
                            <li><Link href="/categorie/actualitate">Actualitate</Link></li>
                            <li><Link href="/categorie/economic">Economic</Link></li>
                            <li><Link href="/categorie/politic">Politic</Link></li>
                            <li><Link href="/categorie/social">Social</Link></li>
                            <li><Link href="/categorie/sport">Sport</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Regiuni</h3>
                        <ul>
                            <li><Link href="/regiune/bucuresti-ilfov">Bucuresti-Ilfov</Link></li>
                            <li><Link href="/regiune/nord-est">Nord-Est</Link></li>
                            <li><Link href="/regiune/centru">Centru</Link></li>
                            <li><Link href="/regiune/nord-vest">Nord-Vest</Link></li>
                            <li><Link href="/regiune/vest">Vest</Link></li>
                            <li><Link href="/regiuni" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Toate Regiunile &rarr;</Link></li>
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
