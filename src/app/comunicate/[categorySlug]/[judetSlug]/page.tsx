import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMUNICATE_SEO_DATA } from '@/lib/seo/comunicateData';
import { getJudetBySlug, getAllLocalitatiForJudet } from '@/lib/localitati';
import { ChevronRight, Home, MapPin } from 'lucide-react';

interface Props {
    params: Promise<{
        categorySlug: string;
        judetSlug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug, judetSlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];
    const judet = getJudetBySlug(judetSlug);

    if (!category || !judet) return { title: 'Pagina negasita' };

    return {
        title: `${category.title} în Județul ${judet.name} | Anuntul.net`,
        description: `Servicii de publicare ${category.title} în toate localitățile din județul ${judet.name}. Asigurăm conformitate MIV și dovadă de publicare pentru decontare fonduri europene.`,
    };
}

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default async function JudetComunicatPage({ params }: Props) {
    const { categorySlug, judetSlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];
    const judet = getJudetBySlug(judetSlug);

    if (!category || !judet) notFound();

    const localitati = getAllLocalitatiForJudet(judetSlug);

    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate', item: '/comunicate' },
        { name: category.title, item: `/comunicate/${categorySlug}` },
        { name: judet.name, item: `/comunicate/${categorySlug}/${judetSlug}` }
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
                        <span className="text-slate-900 font-medium">{category.title} {judet.name}</span>
                    </nav>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                    {category.title} în <span className="text-blue-600">Județul {judet.name}</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                    Alege localitatea unde implementezi proiectul pentru a vedea detaliile specifice de publicare și vizibilitate media.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {localitati.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/comunicate/${categorySlug}/${judetSlug}/${loc.slug}`}
                            className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-sm font-medium text-slate-700 flex items-center gap-2"
                        >
                            <MapPin size={14} className="text-blue-500" />
                            {loc.name}
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
