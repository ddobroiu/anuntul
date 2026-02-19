
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory } from '@/lib/articles';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Comunicate de Presa - Anuntul.net',
    description: 'Comunicate de presa oficiale de la institutii publice, companii si organizatii.',
};

export const revalidate = 3600;

export default async function PressReleasesPage() {
    const pressReleases = await getArticlesByCategory('Comunicat');

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Comunicate de Presa
                </h1>

                <div style={{ backgroundColor: '#003399', color: 'white', padding: '3rem 2.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h2 style={{ marginBottom: '1rem', color: 'white', fontSize: '2rem' }}>Publică Comunicate de Presă</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                            Ai nevoie de vizibilitate pentru proiectul tău european? Oferim servicii profesionale de publicare conform normelor MIV.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                                Publica Comunicat Acum
                            </Link>
                            <Link href="#lista-comunicate" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem', color: 'white', borderColor: 'white' }}>
                                Vezi Comunicate
                            </Link>
                        </div>
                    </div>
                </div>

                <h2 id="lista-comunicate" style={{ marginBottom: '2rem', fontSize: '1.8rem', fontWeight: '700' }}>Ultimele Comunicate Publicate</h2>

                {pressReleases.length > 0 ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem' }}>
                        {pressReleases.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Nu există comunicate de presă publicate în această secțiune momentan.</p>
                    </div>
                )}
            </main >
            <Footer />
        </>
    );
}
