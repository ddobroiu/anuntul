import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, CheckCircle, FileText, Printer, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Achiziții Publice prin SEAP/SICAP - Anuntul.net',
    description: 'Publicați Comunicate de Presă și Anunțuri SEAP-SICAP. Plata la Termen prin Trezorerie pentru instituțiile statului.',
};

export default function SeapPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <article style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                        Achiziții Publice prin SEAP/SICAP
                    </h1>

                    <div style={{
                        backgroundColor: 'var(--color-bg-alt)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        marginBottom: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'flex-start'
                    }}>
                        <div className="flex items-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="tel:0750473111" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                <Phone size={20} /> 0750473111
                            </a>
                            <a href="mailto:contact@shopprint.ro" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                <Mail size={20} /> contact@shopprint.ro
                            </a>
                            <a href="https://wa.me/40750473111" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', backgroundColor: '#25D366', border: 'none' }}>
                                <MessageSquare size={20} /> Contact WhatsApp
                            </a>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <Link href="/trimite-comunicat" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
                                Adaugă Anunț
                            </Link>
                        </div>
                    </div>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                            Publicați Comunicate de Presă și Anunțuri SEAP-SICAP | Plata la Termen prin Trezorerie
                        </h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Mass-media locală, regională și națională joacă un rol esențial în informarea publicului despre cele mai importante evenimente și inițiative.
                            <strong>Anuntul.net</strong> este platforma ideală pentru publicarea comunicatelor de presă și anunțurilor despre proiecte europene, licitații publice și mediu.
                        </p>

                        <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '1.5rem', marginTop: '2rem' }}>
                            <div className="card" style={{ padding: '1.5rem', border: '1px solid #e0e0e0' }}>
                                <div style={{ color: '#2e7d32', marginBottom: '1rem' }}><CheckCircle size={32} /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lucrăm cu SEAP-SICAP</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Instituțiile statului pot efectua plata pentru anunțurile publicate pe platforma noastră prin acest sistem.</p>
                            </div>
                            <div className="card" style={{ padding: '1.5rem', border: '1px solid #e0e0e0' }}>
                                <div style={{ color: '#2e7d32', marginBottom: '1rem' }}><CheckCircle size={32} /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Plată la termen prin Trezorerie</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Acceptăm plăți prin conturile instituționale pentru o colaborare simplă și eficientă.</p>
                            </div>
                            <div className="card" style={{ padding: '1.5rem', border: '1px solid #e0e0e0' }}>
                                <div style={{ color: '#2e7d32', marginBottom: '1rem' }}><CheckCircle size={32} /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vizibilitate maximă</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Promovăm anunțurile pe platformele noastre pentru o audiență extinsă la nivel național.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <Link href="/trimite-comunicat" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                ➡️ Publică un anunț
                            </Link>
                            <Link href="/comunicate" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                ➡️ Vezi toate comunicatele
                            </Link>
                        </div>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Rolul Mass-Mediei Naționale în Promovarea Comunicatelor de Presă</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Publicarea comunicatelor de presă pe platformele potrivite este esențială pentru creșterea vizibilității companiilor, instituțiilor și organizațiilor implicate în dezvoltarea regională. Într-un mediu competitiv, mass-media locală și națională ajută la diseminarea informațiilor relevante pentru cetățeni, investitori și beneficiarii proiectelor europene.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Programe Europene și Fonduri de Finanțare</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Printre cele mai importante programe care susțin dezvoltarea regională se numără:</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PNRR (Planul Național de Redresare și Reziliență)</strong> – Oportunități de finanțare pentru modernizare și infrastructură.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Programul Regional</strong> – Fonduri pentru dezvoltare urbană, infrastructură și digitalizare.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PAT (Programul Asistență Tehnică)</strong> – Sprijin pentru administrațiile locale în implementarea proiectelor europene.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PS (Programul Sănătate)</strong> – Investiții în modernizarea sistemului medical.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PT (Programul Transport)</strong> – Dezvoltarea infrastructurii de transport la nivel regional.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PTJ (Programul Tranziție Justă)</strong> – Fonduri pentru regiunile afectate de tranziția către energie verde.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PDD (Programul Dezvoltare Durabilă)</strong> – Proiecte pentru protecția mediului și sustenabilitate.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PEO (Programul Educație și Ocupare)</strong> – Investiții în educație și piața muncii.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PIDS (Programul Incluziune și Demnitate Socială)</strong> – Fonduri pentru integrarea grupurilor vulnerabile.</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>PACHET PCIDIF (Programul Creștere Inteligentă, Digitalizare și Instrumente Financiare)</strong> – Sprijin pentru digitalizare și inovație.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Materiale de Print pentru Vizibilitatea Proiectelor Europene</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Pentru o mai bună informare a publicului și respectarea normelor europene, este necesară utilizarea materialelor de print specifice pentru fiecare proiect:
                        </p>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1" style={{ gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <FileText size={20} color="var(--color-primary)" /> Afiș informativ (A3)
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Utilizat pentru informarea publicului despre proiecte și finanțări.</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <Printer size={20} color="var(--color-primary)" /> Autocolant
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Marcare obligatorie pentru echipamente achiziționate prin fonduri europene.</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <FileText size={20} color="var(--color-primary)" /> Panou temporar
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Necesitat în faza inițială a proiectului pentru vizibilitate.</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <FileText size={20} color="var(--color-primary)" /> Placă permanentă
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Instalat după finalizarea proiectului pentru a evidenția investiția.</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>➡️ Pentru servicii de print, colaborăm cu:</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="https://shopprint.ro" target="_blank" className="btn btn-outline" style={{ backgroundColor: 'white' }}>ShopPrint.ro</a>
                                <a href="https://EUprint.ro" target="_blank" className="btn btn-outline" style={{ backgroundColor: 'white' }}>EUprint.ro</a>
                            </div>
                        </div>
                    </section>

                    <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-card-bg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Publică Comunicate de Presă și Promovează Proiectele Tale pe Anuntul.net</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            Dacă ai un proiect finanțat prin fonduri europene sau vrei să anunți o inițiativă importantă, Anuntul.net îți oferă posibilitatea de a publica rapid și eficient comunicate de presă. Beneficiază de vizibilitate maximă în rândul publicului interesat și crește notorietatea proiectelor tale!
                        </p>
                        <Link href="/trimite-comunicat" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
                            Contactează-ne acum
                        </Link>
                    </section>

                </article>
            </main>
            <Footer />
        </>
    );
}
