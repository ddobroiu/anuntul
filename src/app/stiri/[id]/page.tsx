
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Share2, FileText, Download, Maximize2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticleById } from '@/lib/articles';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        return {
            title: 'Articolul nu a fost gasit - Anuntul.net',
        };
    }

    return {
        title: `${article.title} - Anuntul.net`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        notFound();
    }

    // Check if it is a PDF article to decide layout
    const isPdfArticle = !!article.pdfUrl;

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
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
                            <div style={{ width: '1px', height: '1.5rem', backgroundColor: 'var(--color-border)' }}></div>
                            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                                <Calendar size={18} color="var(--color-primary)" />
                                <span style={{ fontWeight: '500' }}>{article.date}</span>
                            </div>
                        </div>
                    </header>

                    {/* 
                      Image Section:
                      If it's a PDF article, we assume the PDF content is the main visual. 
                      However, we can still show the image as a smaller hero/banner if needed.
                      For now, let's keep it but maybe restrain height if it's a PDF article to not push content too far down.
                    */}
                    {!isPdfArticle && (
                        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', boxShadow: 'var(--shadow-md)' }}>
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 900px"
                                priority
                            />
                        </div>
                    )}

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
                                        padding: '1rem 1.5rem',
                                        backgroundColor: '#f8fafc',
                                        borderBottom: '1px solid #e2e8f0'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: '#334155' }}>
                                            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(211, 47, 47, 0.1)', borderRadius: '0.5rem', color: 'var(--color-primary)' }}>
                                                <FileText size={20} />
                                            </div>
                                            <span>Document Oficial</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <a
                                                href={article.pdfUrl}
                                                target="_blank"
                                                className="btn btn-outline"
                                                style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600', backgroundColor: 'white' }}
                                                title="Deschide în fereastră nouă"
                                            >
                                                <Maximize2 size={16} /> <span className="hidden sm:inline">Extinde</span>
                                            </a>
                                            <a
                                                href={article.pdfUrl}
                                                download
                                                className="btn btn-primary"
                                                style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 4px 6px -1px rgba(211, 47, 47, 0.2)' }}
                                            >
                                                <Download size={16} /> <span className="hidden sm:inline">Descarcă PDF</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Viewing Area */}
                                    <div style={{ position: 'relative', height: '900px', width: '100%', backgroundColor: '#525659' }}>
                                        <iframe
                                            src={`${article.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                            style={{ width: '100%', height: '100%', border: 'none' }}
                                            title="Vizualizare PDF"
                                        />
                                    </div>

                                    {/* Footer / Alternate Link */}
                                    <div style={{
                                        padding: '1rem',
                                        backgroundColor: '#f1f5f9',
                                        borderTop: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        color: '#64748b'
                                    }}>
                                        Întâmpini probleme la vizualizare? <a href={article.pdfUrl} download style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>Descarcă fișierul aici</a>.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        )}

                        {!article.pdfUrl && !article.content && (
                            <div style={{ padding: '3rem', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
                                <p>Continutul acestui articol nu este disponibil momentan.</p>
                            </div>
                        )}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
