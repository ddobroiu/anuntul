
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return { title: 'Articol negasit - Anuntul.net' };
    }

    return {
        title: `${post.title} - Blog Anuntul.net`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        }
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

                <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', marginBottom: '2rem', textDecoration: 'none' }}>
                    <ArrowLeft size={16} /> Înapoi la blog
                </Link>

                <div className="grid lg:grid-cols-[1fr_350px]" style={{ gap: '4rem', alignItems: 'start' }}>

                    <article>
                        <header style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'inline-block', backgroundColor: 'rgba(211, 47, 47, 0.1)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                                {post.category}
                            </div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                {post.title}
                            </h1>
                            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Calendar size={18} /> {new Date(post.publishDate).toLocaleDateString('ro-RO')}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <User size={18} /> {post.author}
                                </span>
                            </div>
                        </header>

                        <div style={{ marginBottom: '3rem' }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>

                        <div
                            className="blog-content"
                            style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Article Footer CTA */}
                        <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-primary)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ai nevoie de publicarea unui comunicat de presă?</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                                Îți asigurăm publicarea rapidă și dovada de trafic necesară pentru raportarea indicatorilor de vizibilitate.
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link href="/trimite-comunicat" className="btn btn-primary">
                                    Trimite Comunicat Acum
                                </Link>
                                <Link href="/contact" className="btn btn-outline">
                                    Solicită Consultanță
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside style={{ position: 'sticky', top: '2rem' }}>
                        <div className="card" style={{ padding: '2rem', marginBottom: '2.5rem', backgroundColor: '#f8fafc' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '700' }}>Serviciile Noastre</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={18} color="#16a34a" /> <span>Comunicate Presă PNRR/POR</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={18} color="#16a34a" /> <span>Kituri Vizibilitate (Afișe, Panouri)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={18} color="#16a34a" /> <span>Autocolante echipamente (identit. vizuală)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={18} color="#16a34a" /> <span>Dovadă trafic 3000+ unici lunar</span>
                                </li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>Comandă acum!</h3>
                            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                                Nu lăsa vizibilitatea pe ultima sută de metri. Evită penalitățile și publică acum.
                            </p>
                            <Link href="/trimite-comunicat" className="btn" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                <Send size={18} style={{ marginRight: '8px' }} /> Publică Anunț
                            </Link>
                        </div>
                    </aside>

                </div>
            </main>
            <Footer />

        </>
    );
}
