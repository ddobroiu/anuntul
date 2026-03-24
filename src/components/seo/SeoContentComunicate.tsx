
import React from 'react';
import { FileText, CheckCircle, ShieldCheck, Zap, BarChart3, Search } from 'lucide-react';
import FAQSchema from './FAQSchema';

export default function SeoContentComunicate() {
    const faqItems = [
        {
            question: "De ce este obligatorie publicarea unui comunicat de presă pentru fonduri europene?",
            answer: "Publicarea comunicatelor de presă la începutul și la finalizarea proiectelor finanțate prin fonduri europene (PNRR, POR, POCU) este o cerință obligatorie conform Manualului de Identitate Vizuală (MIV). Nerespectarea acesteia poate duce la declararea cheltuielilor ca neeligibile."
        },
        {
            question: "Ce trebuie să conțină un comunicat de presă conform MIV?",
            answer: "Un comunicat conform MIV trebuie să includă obligatoriu: siglele oficiale (UE, Guvernul României), titlul proiectului, codul MySMIS, obiectivele, valoarea totală și finanțarea nerambursabilă, data începerii, locația de implementare și datele de contact."
        },
        {
            question: "Cât timp durează publicarea unui comunicat pe Anuntul.net?",
            answer: "Publicarea este aproape instantanee după confirmarea plății și validarea textului. Oferim dovadă de publicare imediată (link + export PDF) necesară pentru dosarul de decontare."
        },
        {
            question: "Oferiți și dovadă de trafic/impact pentru proiectele mari?",
            answer: "Da, Anuntul.net oferă rapoarte de vizibilitate care atestă audiența portalului (peste 3000 unici lunar), facilitând îndeplinirea indicatorilor de transparență ceruți de autoritățile de management."
        }
    ];

    return (
        <section className="seo-content" style={{ marginTop: '5rem' }}>
            <FAQSchema items={faqItems} />
            
            <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem', textAlign: 'center' }}>
                    Ghid Complet: <span style={{ color: 'var(--color-primary)' }}>Comunicate de Presă</span> pentru Proiecte Europene
                </h2>

                <div className="grid md:grid-cols-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
                    <div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Publicarea unui <strong>comunicat de presă</strong> este un pas critic în implementarea oricărui proiect cu finanțare europeană sau guvernamentală. Nu este doar o formalitate, ci o obligație contractuală care asigură transparența utilizării fondurilor publice.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                            Fie că vorbim de <strong>PNRR (Planul Național de Redresare și Reziliență)</strong>, <strong>POR (Programul Operațional Regional)</strong> sau <strong>AFIR</strong>, regulile de identitate vizuală sunt stricte și necesită publicare pe un portal de știri cu recunoaștere națională sau regională.
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'rgba(211, 47, 47, 0.03)', padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Avantajele Anuntul.net</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                                <CheckCircle size={20} color="var(--color-primary)" />
                                <span><strong>Conformitate MIV 100%</strong> - Formate standardizate.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                                <Zap size={20} color="var(--color-primary)" />
                                <span><strong>Publicare în 60 minute</strong> - Fără așteptări inutile.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                                <BarChart3 size={20} color="var(--color-primary)" />
                                <span><strong>Rapoarte de Trafic</strong> - Pentru raportarea indicatorilor.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}>
                                <Search size={20} color="var(--color-primary)" />
                                <span><strong>Indexare Google rapidă</strong> - Verificabilitate ușoară.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
                   <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}><FileText size={40} style={{ margin: '0 auto' }} /></div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Anunț de Începere</h4>
                        <p className="text-sm color-muted">Publicat în maxim 30 de zile de la semnarea contractului de finanțare.</p>
                   </div>
                   <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}><CheckCircle size={40} style={{ margin: '0 auto' }} /></div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Anunț de Finalizare</h4>
                        <p className="text-sm color-muted">Certifică atingerea obiectivelor și finalizarea activităților proiectului.</p>
                   </div>
                   <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}><ShieldCheck size={40} style={{ margin: '0 auto' }} /></div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Dovadă de Publicare</h4>
                        <p className="text-sm color-muted">Link direct și captura PDF necesare pentru dosarul de plată (decont).</p>
                   </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Întrebări Frecvente (FAQ)</h3>
                    <div className="grid md:grid-cols-2" style={{ gap: '2rem' }}>
                        {faqItems.map((faq, i) => (
                            <div key={i}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{faq.question}</h4>
                                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', backgroundColor: '#003399', borderRadius: 'var(--radius-md)', padding: '3rem', color: 'white' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Pregătește comunicatul acum!</h3>
                    <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
                        Nu riscați neeligibilitatea cheltuielilor. Colaborați cu echipa Anuntul.net pentru o vizibilitate impecabilă.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                         <a href="/trimite-comunicat" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#003399', padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                            Trimite Document
                         </a>
                         <a href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                            Cere Ofertă B2B
                         </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
