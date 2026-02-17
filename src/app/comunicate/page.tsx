
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory } from '@/lib/articles';

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

                {pressReleases.length > 0 ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem' }}>
                        {pressReleases.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <p>Nu exista comunicate de presa momentan.</p>
                )}
            </main>
            <Footer />
        </>
    );
}
