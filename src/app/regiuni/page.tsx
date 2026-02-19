
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { regions } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Regiuni - Anuntul.net',
    description: 'Stiri din toate regiunile Romaniei.',
};

export default function RegionsIndexPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            Stiri pe Regiuni
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
                            Alege regiunea de interes pentru tine pentru a fi la curent cu cele mai recente informații!
                        </p>
                    </div>
                    <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontWeight: 'bold' }}>
                        Adaugă Anunț
                    </Link>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    {regions.filter(r => r !== 'National').sort().map((region) => (
                        <Link
                            key={region}
                            href={`/regiune/${region.toLowerCase()}`}
                            className="card"
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.2s ease',
                                fontWeight: '600'
                            }}
                        >
                            <MapPin size={48} style={{ marginBottom: '1rem', color: 'var(--color-primary)' }} />
                            <span style={{ fontSize: '1.25rem' }}>{region}</span>
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                                Vezi stiri care te intereseaza
                            </span>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
