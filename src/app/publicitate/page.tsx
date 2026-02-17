
import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Publicitate și Parteneriate - Anuntul.net',
    description: 'Promovează-ți afacerea prin pachete de publicitate personalizate pe Anuntul.net. Ajunge la audiența potrivită.',
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
                        Promovează-ți Afacerea pe <span style={{ color: 'var(--color-primary)' }}>Anuntul.net</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Oferim soluții eficiente de promovare pentru companii și instituții publice.
                        Alege pachetul care ți se potrivește și crește vizibilitatea brandului tău.
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
                            <Users size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Audiență Extinsă</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Beneficiezi de expunere la mii de cititori zilnici din toate regiunile țării, interesați de noutăți și oportunități.
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
                            <Target size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Targetare Precisă</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Promovăm conținutul tău în categoriile și regiunile relevante pentru afacerea ta, asigurând un impact maxim.
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
                            <TrendingUp size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Rezultate Măsurabile</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Oferim rapoarte detaliate despre performanța campaniilor tale, astfel încât să știi exact impactul investiției.
                        </p>
                    </div>
                </div>

                {/* Advertising Packages */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Opțiuni de Publicitate</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>

                        {/* Package 1: Basic */}
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-border)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Banner Standard</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Ideal pentru vizibilitate constantă</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                €50 <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>/ lună</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Banner lateral (Sidebar)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Afișare pe toate paginile de articol
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Link direct către site-ul tău
                                </li>
                            </ul>
                            <Link href="/contact?subject=Publicitate%20Banner%20Standard" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Alege Pachetul
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
                                Cel mai popular
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Advertorial</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Conținut dedicat și detaliat</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                €100 <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>/ articol</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Articol dedicat (max. 1000 cuvinte)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> 2 link-uri do-follow
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Promovare pe Homepage (3 zile)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Distribuire pe Social Media
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Permanență pe site (Lifetime)
                                </li>
                            </ul>
                            <Link href="/contact?subject=Publicitate%20Advertorial" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Alege Pachetul
                            </Link>
                        </div>

                        {/* Package 3: Custom */}
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-accent)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Parteneriat Strategic</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Soluții complexe și termen lung</p>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                Personalizat
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Campanii integrate multicanal
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Sponsorizare categorii întregi
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={18} color="green" /> Branding extins și exclusivitate
                                </li>
                            </ul>
                            <Link href="/contact?subject=Parteneriat%20Strategic" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Contactează-ne
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
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Ai nevoie de o ofertă personalizată?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Echipa noastră este gata să te ajute să găsești cea mai bună soluție de promovare pentru bugetul și obiectivele tale.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">
                            <Mail size={18} style={{ marginRight: '0.5rem' }} /> Contactează Vânzări
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
