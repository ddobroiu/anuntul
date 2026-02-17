
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Share2 } from 'lucide-react';
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

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <header style={{ marginBottom: '2rem' }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.875rem' }}>
                            <span>{article.category}</span>
                            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', gap: '0.5rem' }}>
                                <Share2 size={14} /> Distribuie
                            </button>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                            {article.title}
                        </h1>

                        <div className="flex" style={{ gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                                <MapPin size={16} />
                                <span>{article.region}</span>
                            </div>
                            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                                <Calendar size={16} />
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </header>

                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem' }}>
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 800px"
                            priority
                        />
                    </div>

                    <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>
                            {article.excerpt}
                        </p>

                        {article.pdfUrl ? (
                            <div style={{ marginTop: '2rem' }}>
                                <div style={{
                                    width: '100%',
                                    height: '800px',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    backgroundColor: '#f5f5f5'
                                }}>
                                    <iframe
                                        src={article.pdfUrl}
                                        style={{ width: '100%', height: '100%', border: 'none' }}
                                        title="Vizualizare PDF"
                                    />
                                </div>
                                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                    <a
                                        href={article.pdfUrl}
                                        download
                                        className="btn btn-primary"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                                    >
                                        <Share2 size={18} /> Descarca Comunicatul (PDF)
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                                {/* Fallback content if article content is empty (e.g. sometimes dummy data) */}
                                {!article.content && (
                                    <>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p style={{ marginTop: '1rem' }}>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
