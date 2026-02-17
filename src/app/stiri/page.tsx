
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
    title: 'Stiri de Ultima Ora - Anuntul.net',
    description: 'Toate stirile si noutatile din Romania la un loc.',
};

export const revalidate = 3600;

export default async function ArticlesPage() {
    const allArticles = await getAllArticles();

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Toate Stirile
                </h1>

                <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem' }}>
                    {allArticles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
