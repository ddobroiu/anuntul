
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { searchArticles } from '@/lib/articles';
import { Search } from 'lucide-react';

interface PageProps {
    searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { q } = await searchParams;
    return {
        title: `Rezultate cautare: ${q || ''} - Anuntul.net`,
        description: `Rezultate pentru cautarea: ${q || ''} pe platforma Anuntul.net.`
    };
}

export default async function SearchPage({ searchParams }: PageProps) {
    const { q } = await searchParams;
    const query = q || '';
    const results = query ? await searchArticles(query) : [];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container" style={{ padding: '4rem 1rem' }}>
                <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Search size={32} className="text-primary" />
                        Rezultate pentru: "{query}"
                    </h1>
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                        Am găsit {results.length} rezultate relevante.
                    </p>
                </div>

                {results.length > 0 ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem' }}>
                        {results.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <div style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Ups! Nu am găsit niciun rezultat.
                        </div>
                        <p>Încearcă să cauți folosind alți termeni sau verifică ortografia.</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
