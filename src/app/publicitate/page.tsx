
import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, CheckCircle, FileText, Printer, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Servicii Comunicate si Vizibilitate Fonduri E',
    description: 'Pachete complete pentru proiecte europene: publicare comunicat de presa si kituri de vizibilitate (autocolante, afise) conform cerintelor MCID/MIPE.',
};

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function AdvertisingPage() {
    const breadcrumbItems = [
        { name: "Home", item: "/" },
        { name: "Servicii Publicitate", item: "/publicitate" }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Servicii Vizibilitate Proiecte Europene",
        "description": "Publicare comunicate de presa si materiale de vizibilitate conform MIV (PNRR, POR, POCU).",
        "provider": {
            "@type": "Organization",
            "name": "Anuntul.info"
        }
    };

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

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
                {/* Clean Newspaper CTA */}
                <div style={{ 
                    borderTop: '2px solid var(--color-border)', 
                    paddingTop: '4rem', 
                    textAlign: 'center' 
                }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: '900', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                        Solicită Publicarea Unui Comunicat
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Pentru a asigura transparența proiectului dumneavoastră și conformitatea cu cerințele MIV, vă rugăm să folosiți formularul nostru oficial de trimitere sau să ne contactați direct pentru o ofertă personalizată.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Trimite Comunicat
                        </Link>
                        <Link href="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Contactează-ne
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
