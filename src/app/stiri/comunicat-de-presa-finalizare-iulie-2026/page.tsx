import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, MapPin, Share2, FileText, Download, Maximize2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { encodePdfUrl } from '@/lib/encodePdfUrl';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
    title: 'Comunicat de presă finalizare — Iulie 2026',
    description: 'Comunicat de presă în format PDF pentru finalizarea proiectului în luna iulie 2026.',
    openGraph: {
        title: 'Comunicat de presă finalizare — Iulie 2026',
        description: 'Comunicat de presă în format PDF pentru finalizarea proiectului în luna iulie 2026.',
        type: 'article',
        url: 'https://www.anuntul.info/stiri/comunicat-de-presa-finalizare-iulie-2026',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Comunicat de presă finalizare Iulie 2026',
            },
        ],
    },
};

export default async function ComunicatPage() {
    const article = {
        id: 'comunicat-de-presa-finalizare-iulie-2026',
        title: 'Comunicat de presă finalizare — Iulie 2026',
        excerpt: 'Comunicat de presă în format PDF pentru finalizarea proiectului în luna iulie 2026.',
        content: 'Documentul oficial în format PDF este disponibil mai jos pentru vizualizare și descărcare.',
        category: 'Comunicat',
        region: 'National',
        date: '14.07.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Comunicat de presa finalizare _Iulie 2026.pdf',
    };

    const pdfHref = article.pdfUrl ? encodePdfUrl(article.pdfUrl) : undefined;

    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate de Presa', item: '/comunicate' },
        { name: article.title, item: `/stiri/comunicat-de-presa-finalizare-iulie-2026` }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "image": [article.imageUrl],
        "datePublished": new Date(article.date.split('.').reverse().join('-')),
        "description": article.excerpt,
        "author": {
            "@type": "Organization",
            "name": "Anuntul.info"
        }
    };

    const isPdfArticle = !!article.pdfUrl;

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <article style={{ maxWidth: '900px', margin: '0 auto' }}>

                    {/* Header Section */}
                    <header style={{ marginBottom: '2rem' }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.875rem' }}>
                            <span style={{ backgroundColor: 'rgba(211, 47, 47, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', letterSpacing: '0.5px' }}>
                                {article.category}
                            </span>
                            <div className="flex" style={{ gap: '0.5rem' }}>
                                <button className="btn btn-outline" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', gap: '0.5rem', borderRadius: '2rem' }}>
                                    <Share2 size={16} /> <span className="hidden sm:inline">Distribuie</span>
                                </button>
                            </div>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', fontWeight: '800', color: 'var(--color-text)' }}>
                            {article.title}
                        </h1>

                        <div className="flex" style={{ gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', alignItems: 'center' }}>
                            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                                <MapPin size={18} color="var(--color-primary)" />
                                <span style={{ fontWeight: '500' }}>{article.region}</span>
                            </div>
                        </div>
                    </header>

                    <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                        {article.excerpt && (
                            <p style={{ marginBottom: '2rem', fontWeight: '500', fontSize: '1.25rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', fontStyle: 'italic', color: '#444' }}>
                                {article.excerpt}
                            </p>
                        )}

                        {/* PDF Viewer Section */}
                        {article.pdfUrl ? (
                            <div style={{ marginTop: '3rem', marginBottom: '4rem' }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    overflow: 'hidden',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    {/* Toolbar */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1rem',
                                        backgroundColor: '#f8fafc',
                                        borderBottom: '1px solid #e2e8f0',
                                        flexWrap: 'wrap',
                                        gap: '1rem'
                                    }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                            <FileText size={20} color="var(--color-primary)" />
                                            <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>Vedere PDF</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <a
                                                href={article.pdfUrl}
                                                download
                                                className="btn btn-primary"
                                                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', gap: '0.5rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center' }}
                                            >
                                                <Download size={16} /> Descarcă
                                            </a>
                                            {pdfHref && (
                                                <a
                                                    href={pdfHref}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-outline"
                                                    style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', gap: '0.5rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center' }}
                                                >
                                                    <Maximize2 size={16} /> Deschide fullscreen
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* PDF Viewer Embed */}
                                    <iframe
                                        src={`${article.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                                        style={{
                                            width: '100%',
                                            height: '600px',
                                            border: 'none',
                                            borderRadius: '0 0 var(--radius-lg) var(--radius-lg)'
                                        }}
                                        title={article.title}
                                    />
                                </div>
                            </div>
                        ) : null}

                        {article.content && (
                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                                <p>{article.content}</p>
                            </div>
                        )}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
