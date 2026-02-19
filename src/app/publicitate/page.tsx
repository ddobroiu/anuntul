
import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, CheckCircle, FileText, Printer, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Servicii Comunicate si Vizibilitate Fonduri Europene - Anuntul.net',
    description: 'Pachete complete pentru proiecte europene: publicare comunicat de presa si kituri de vizibilitate (autocolante, afise) conform cerintelor MCID/MIPE.',
};

export default function AdvertisingPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        color: 'var(--color-text)'
                    }}>
                        Servicii pentru <span style={{ color: 'var(--color-primary)' }}>Proiecte Europene</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Asigurăm conformitatea cu manualul de identitate vizuală pentru proiectele PNRR, POR, POCU, și alte programe cu finanțare nerambursabilă.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem', marginBottom: '5rem' }}>
                    <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px',
                            backgroundColor: 'rgba(211, 47, 47, 0.1)',
                            color: 'var(--color-primary)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <FileText size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Comunicate de Presă</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Publicare rapidă a anunțurilor de începere și finalizare proiect. <b>Oferim dovadă de trafic (peste 3000 utilizatori unici lunar)</b> pentru raportarea corectă a indicatorilor de vizibilitate.
                        </p>
                    </div>

                    <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px',
                            backgroundColor: 'rgba(25, 118, 210, 0.1)',
                            color: 'var(--color-accent)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <Printer size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Materiale Vizibilitate</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Autocolante, afișe A3/A2, panouri temporare și permanente, realizate conform manualului de identitate vizuală specific programului.
                        </p>
                    </div>

                    <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px',
                            backgroundColor: 'rgba(56, 142, 60, 0.1)',
                            color: '#388E3C',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <ShieldCheck size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Conformitate Garantată</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Ne asigurăm că toate materialele respectă cerințele MIPE/MCID, astfel încât să nu ai probleme la decontare.
                        </p>
                    </div>
                </div>

                {/* Advertising Packages */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}> Pachete Servicii</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>

                        {/* Package 1: Basic */}
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-border)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Publicare Comunicat</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Doar anunț începere/finalizare</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                150 <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>RON</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Publicare pe Anuntul.net
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Mentinere pe durata proiectului
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Dovada publicarii (Link + PDF)
                                </li>
                            </ul>
                            <Link href="/contact?subject=Comanda%20Publicare%20Comunicat" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Comandă Publicare
                            </Link>
                        </div>

                        {/* Package 2: Premium */}
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-primary)', transform: 'scale(1.02)', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{
                                backgroundColor: 'var(--color-primary)', color: 'white',
                                padding: '0.25rem 0.75rem', borderRadius: '1rem',
                                fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase',
                                display: 'inline-block', marginBottom: '1rem'
                            }}>
                                Recomandat
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Kit Start-Up PNRR</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Comunicat + Materiale Obligatorii</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                350 <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>RON</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> <b>Publicare Comunicat Presă</b>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> <b>Set 100 Autocolante</b> (diverse marimi)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> <b>2 Afișe A3</b> (pentru sediu)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Design Gratuit conform MIV
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Livrare prin Curier
                                </li>
                            </ul>
                            <Link href="/contact?subject=Comanda%20Kit%20Start-Up%20PNRR" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Comandă Pachetul
                            </Link>
                        </div>

                        {/* Package 3: Custom */}
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-accent)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Kit Vizibilitate Pro</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Pentru proiecte mari (POR/POCU)</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                Personalizat
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Comunicate Începere & Finalizare
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Panouri Temporare / Permanente
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Plăci Permanente
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Autocolante echipamente
                                </li>
                            </ul>
                            <Link href="/contact?subject=Oferta%20Kit%20Vizibilitate%20Pro" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Cere Ofertă
                            </Link>
                        </div>

                    </div>
                </section>

                {/* Contact CTA */}
                <section style={{
                    backgroundColor: 'var(--color-bg-alt)',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Ai nevoie de consultanță?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Dacă nu știi exact ce materiale de vizibilitate sunt necesare pentru proiectul tău, contactează-ne și te ajutăm gratuit.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">
                            <Mail size={18} style={{ marginRight: '0.5rem' }} /> Cere Ofertă
                        </Link>
                        <a href="mailto:contact@anuntul.net" className="btn btn-outline">
                            Scrie-ne la contact@anuntul.net
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
