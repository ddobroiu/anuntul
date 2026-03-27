import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMUNICATE_SEO_DATA } from '@/lib/seo/comunicateData';
import { getJudeteFullData } from '@/lib/localitati';
import { ChevronRight, Home, Map } from 'lucide-react';

interface Props {
    params: Promise<{
        categorySlug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];

    if (!category) return { title: 'Pagina negasita' };

    return {
        title: `${category.title} la Nivel Național | Anuntul.info`,
        description: `${category.shortDescription} Publicăm anunțuri în presă în orice localitate din România. Respectăm normele de vizibilitate PNRR și REGIO.`,
    };
}

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default async function CategoryComunicatPage({ params }: Props) {
    const { categorySlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];

    if (!category) notFound();

    const judete = getJudeteFullData();

    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate', item: '/comunicate' },
        { name: category.title, item: `/comunicate/${categorySlug}` }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <BreadcrumbSchema items={breadcrumbItems} />
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
                            <Home size={14} /> Home
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/comunicate" className="hover:text-blue-600">Comunicate</Link>
                        <ChevronRight size={14} />
                        <span className="text-slate-900 font-medium">{category.title}</span>
                    </nav>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        {category.title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {category.shortDescription} Alege județul pentru a vedea opțiunile de publicare în localitatea ta.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {judete.map((judet) => (
                        <Link
                            key={judet.slug}
                            href={`/comunicate/${categorySlug}/${judet.slug}`}
                            className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl transition-all text-center group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Map size={20} className="text-blue-600" />
                            </div>
                            <span className="font-bold text-lg">{judet.name}</span>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
