
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog si Resurse Fonduri Europene - Anuntul.net',
    description: 'Citeste ultimele ghiduri si noutati despre publicarea comunicatelor de presa si materialelor de vizibilitate pentru proiecte PNRR, POR si POCU.',
};

export default function BlogIndexPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--color-text)' }}>
                        Blog & <span style={{ color: 'var(--color-primary)' }}>Resurse</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Informații utile, ghiduri practice și noutăți despre cerințele de vizibilitate și promovare pentru proiectele finanțate din fonduri nerambursabile.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2.5rem' }}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute', top: '1rem', left: '1rem',
                                    backgroundColor: 'var(--color-primary)', color: 'white',
                                    padding: '0.25rem 0.75rem', borderRadius: '4px',
                                    fontSize: '0.75rem', fontWeight: 'bold'
                                }}>
                                    {post.category}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={14} /> {new Date(post.publishDate).toLocaleDateString('ro-RO')}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <User size={14} /> {post.author}
                                    </span>
                                </div>

                                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.3', fontWeight: '700' }}>
                                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} style={{
                                    display: 'flex', alignItems: 'center', gap: '4px',
                                    fontWeight: '600', color: 'var(--color-primary)',
                                    textDecoration: 'none'
                                }}>
                                    Citește mai mult <ChevronRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter / CTA Section */}
                <section style={{
                    marginTop: '6rem',
                    padding: '4rem 2rem',
                    backgroundColor: 'var(--color-bg-alt)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '1rem' }}>Ai nevoie de ajutor cu vizibilitatea proiectului tău?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Suntem specialiști în publicarea de comunicate și realizarea de kituri de vizibilitate conform MIV.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                            Trimite Comunicat Acum
                        </Link>
                        <Link href="/contact" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
                            Solicită Ofertă Personalizată
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
