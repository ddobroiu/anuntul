import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMUNICATE_SEO_DATA } from '@/lib/seo/comunicateData';
import { getJudetBySlug, getLocalitateBySlug } from '@/lib/localitati';
import { ChevronRight, Home, FileText, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

interface Props {
    params: Promise<{
        categorySlug: string;
        judetSlug: string;
        localitateSlug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug, judetSlug, localitateSlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];
    const judet = getJudetBySlug(judetSlug);
    const localitate = getLocalitateBySlug(judetSlug, localitateSlug);

    if (!category || !judet || !localitate) return { title: 'Pagina negasita' };

    const city = localitate.name;
    return {
        title: `${category.title} în ${city}, ${judet.name}`,
        description: `Publicăm ${category.title} în ${city}. Servicii media profesionale pentru fonduri europene, redactare conform MIV și dovadă de publicare pentru decontare.`,
        alternates: {
            canonical: `https://www.anuntul.info/comunicate/${categorySlug}/${judetSlug}/${localitateSlug}`,
        }
    };
}

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default async function LocalitateComunicatPage({ params }: Props) {
    const { categorySlug, judetSlug, localitateSlug } = await params;
    const category = COMUNICATE_SEO_DATA[categorySlug];
    const judet = getJudetBySlug(judetSlug);
    const localitate = getLocalitateBySlug(judetSlug, localitateSlug);

    if (!category || !judet || !localitate) notFound();

    const city = localitate.name;

    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate', item: '/comunicate' },
        { name: category.title, item: `/comunicate/${categorySlug}` },
        { name: judet.name, item: `/comunicate/${categorySlug}/${judetSlug}` },
        { name: city, item: `/comunicate/${categorySlug}/${judetSlug}/${localitateSlug}` }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <BreadcrumbSchema items={breadcrumbItems} />
            {/* Breadcrumbs */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
                            <Home size={14} /> Home
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/comunicate" className="hover:text-blue-600">Comunicate</Link>
                        <ChevronRight size={14} />
                        <span className="text-slate-900 font-medium">{category.title} {city}</span>
                    </nav>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {category.title} în <span className="text-blue-600">{city}</span>, {judet.name}
                        </h1>

                        <div className="prose prose-blue prose-lg max-w-none text-slate-700 mb-10">
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Ai un proiect finanțat în <strong>{city}</strong> și ai nevoie de publicarea comunicatului de presă?
                                Echipa Anuntul.info oferă servicii complete de publicitate media pentru fonduri europene, 100% conforme cu Manualul de Identitate Vizuală (MIV).
                            </p>

                            <div dangerouslySetInnerHTML={{ __html: category.contentHtml || '' }} />

                            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">De ce să publici prin Anuntul.info în {city}?</h3>
                            <ul className="space-y-4 list-none p-0">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <span><strong>Redactare profesională:</strong> Ne ocupăm noi de text, respectând toate elementele obligatorii ale finanțatorului.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <span><strong>Dovadă de publicare:</strong> Primești imediat link-ul și raportul necesar pentru dosarul de decontare.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <span><strong>Audiență garantată:</strong> Comunicatul tău va fi indexat rapid în Google pentru maximă transparență.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl shadow-blue-200">
                            <h2 className="text-3xl font-bold mb-4">Gata să publici comunicatul în {city}?</h2>
                            <p className="text-blue-100 text-lg mb-8">Echipa noastră te ajută cu tot procesul, de la machetă la confirmarea publicării.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all text-lg"
                                >
                                    Solicită Ofertă
                                </Link>
                                <Link
                                    href="tel:0700000000"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all text-lg"
                                >
                                    Sună un Expert
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white rounded-2xl p-6 border shadow-sm">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <ShieldCheck className="text-blue-600" size={20} />
                                    Garanție Conformitate
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Garantăm 100% acceptarea raportului de publicare de către autoritățile de management (PNRR, ADR Vest, ADR Nord-Vest, etc).
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                                        Certificate:
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">MIV PNRR</span>
                                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">REGIO 2021-2027</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border shadow-sm">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <Zap className="text-amber-500" size={20} />
                                    Servicii Rapide
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Publicare:</span>
                                        <span className="font-bold text-slate-900 text-right">In 2-4 ore</span>
                                    </li>
                                    <li className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Redactare:</span>
                                        <span className="font-bold text-slate-900 text-right">Inclusă Gratuit</span>
                                    </li>
                                    <li className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Rapoarte:</span>
                                        <span className="font-bold text-slate-900 text-right">PDF + Link</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
