
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getArticlesByRegion } from '@/lib/articles';
import { regions } from '@/lib/data';
import { regionContent, commonSeoContent } from '@/lib/region-content';
import Link from 'next/link';
import { FileText, Printer, MessageSquare, Phone, Mail } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const region = regions.find((r) => r.toLowerCase() === slug.toLowerCase());

    if (!region) {
        return {
            title: 'Regiune inexistenta - Anuntul.net',
        };
    }

    return {
        title: `Stiri din Regiunea ${region} - Anuntul.net`,
        description: `Stiri locale si comunicate de presa din regiunea ${region}. Citeste ultimele noutati.`,
    };
}

export default async function RegionPage({ params }: PageProps) {
    const { slug } = await params;
    // Handle the specific slug case for oltenia if needed, or ensure data is consistent
    // The data uses 'Sud-Vest Oltenia', slug likely 'sud-vest-oltenia' or 'oltenia'.
    // We try to match with the region list first.
    let region = regions.find((r) => r.toLowerCase() === slug.toLowerCase());

    // Fallback for slugs that might be slightly different or aliases
    if (!region) {
        if (slug === 'oltenia') region = 'Sud-Vest Oltenia';
        else if (slug === 'transilvania') region = 'Centru'; // Broad mapping example
        else notFound();
    }

    const regionArticles = await getArticlesByRegion(region);

    // Get specific SEO content or a default
    // Simplify slug for matching keys in regionContent (e.g. 'sud-vest oltenia' vs 'sud-vest-oltenia')
    const contentKey = slug.toLowerCase().replace('%20', ' ');
    const specificIntro = regionContent[contentKey] || regionContent[region.toLowerCase()] || `Stiri si noutati din regiunea ${region}.`;

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Stiri si Evenimente: {region}
                </h1>

                {regionArticles.length > 0 ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem', marginBottom: '4rem' }}>
                        {regionArticles.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div style={{ marginBottom: '4rem' }}>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginTop: '2rem' }}>
                            Nu exista articole din aceasta regiune momentan.
                        </p>
                    </div>
                )}

                {/* SEO Content Section */}
                <section style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                        {commonSeoContent.title} - {region}
                    </h2>

                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text-muted)' }}>
                        {specificIntro}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <Link href="/trimite-comunicat" className="btn btn-primary">
                            ➡️ Adaugă Anunț
                        </Link>
                        <Link href="/comunicate" className="btn btn-outline">
                            ➡️ Comunicate de Presă
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2" style={{ gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{commonSeoContent.mediaRole.title}</h3>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>{commonSeoContent.mediaRole.content}</p>

                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{commonSeoContent.programs.title}</h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{commonSeoContent.programs.intro}</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {commonSeoContent.programs.list.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{commonSeoContent.print.title}</h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{commonSeoContent.print.intro}</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                {commonSeoContent.print.list.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item}</li>
                                ))}
                            </ul>

                            <div style={{ padding: '1.5rem', backgroundColor: '#e3f2fd', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>➡️ Pentru servicii de print, colaborăm cu:</p>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <a href="https://shopprint.ro" target="_blank" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>ShopPrint.ro</a>
                                    <span style={{ color: '#ccc' }}>|</span>
                                    <a href="https://shopprint.eu" target="_blank" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>ShopPrint.eu</a>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{commonSeoContent.cta.title}</h3>
                                <p style={{ marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.95rem' }}>{commonSeoContent.cta.content}</p>
                                <Link href="/trimite-comunicat" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                    Contactează-ne acum
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
