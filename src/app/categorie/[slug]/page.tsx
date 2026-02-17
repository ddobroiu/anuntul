
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getArticlesByCategory } from '@/lib/articles';
import { categories } from '@/lib/data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((c) => c.toLowerCase() === slug.toLowerCase());

    if (!category) {
        return {
            title: 'Categorie inexistenta - Anuntul.net',
        };
    }

    return {
        title: `Stiri din categoria ${category} - Anuntul.net`,
        description: `Cele mai noi stiri si articole din categoria ${category}.`,
    };
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.toLowerCase() === slug.toLowerCase());

    if (!category) {
        notFound();
    }

    const categoryArticles = await getArticlesByCategory(category);

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Stiri: {category}
                </h1>

                {categoryArticles.length > 0 ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-1" style={{ gap: '2rem' }}>
                        {categoryArticles.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginTop: '2rem' }}>
                        Nu exista articole in aceasta categorie momentan.
                    </p>
                )}
            </main>
            <Footer />
        </>
    );
}
