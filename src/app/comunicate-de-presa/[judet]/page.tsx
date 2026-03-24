import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Newspaper, ShieldCheck, Zap, ArrowRight, FileCheck2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { judete } from '@/lib/judete';

interface PageProps {
    params: Promise<{ judet: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const judetSlug = resolvedParams.judet;
    const judetInfo = judete.find(j => j.slug === judetSlug);

    if (!judetInfo) {
        return { title: 'Nu a fost găsit' };
    }

    return {
        title: `Publicare Comunicate de Presă PNRR și Regio în ${judetInfo.nume} | Anuntul.net`,
        description: `Servicii sigure de publicare comunicate de presă obligatorii PNRR, POR și fonduri europene în județul ${judetInfo.nume}. Conformitate MIV MIPE, dovadă +3.000 vizitatori, plată la termen.`,
        keywords: [`comunicate de presa ${judetInfo.nume}`, `publicare anunturi pnrr ${judetInfo.nume}`, `comunicate fonduri europene ${judetInfo.slug}`, `anunt incepere proiect ${judetInfo.nume}`],
        alternates: {
            canonical: `https://anuntul.net/comunicate-de-presa/${judetSlug}`
        }
    };
}

// Generate all possible static paths for Next.js to prerender
export function generateStaticParams() {
    return judete.map((judet) => ({
        judet: judet.slug,
    }));
}

export default async function ComunicatJudetPage({ params }: PageProps) {
    const resolvedParams = await params;
    const judetSlug = resolvedParams.judet;
    const judetInfo = judete.find(j => j.slug === judetSlug);

    if (!judetInfo) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-10 pb-20">
                {/* SEO Masthead */}
                <div className="w-full border-t-[6px] border-red-600 border-b-2 mt-4 mb-12 text-center pb-8 pt-8">
                    <div className="flex items-center justify-center gap-2 mb-4 text-slate-500 uppercase tracking-widest font-bold text-xs">
                        <MapPin size={16} className="text-red-600" />
                        <span>Ediția Județeană • {judetInfo.nume}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 uppercase tracking-tight leading-tight mb-6">
                        Publicare Comunicate PNRR &amp; Fonduri Europene în <span className="text-red-600">{judetInfo.nume}</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium border-y border-slate-200 py-3 inline-block px-12 uppercase tracking-widest text-slate-600">
                        Ziarul Oficial pentru Asigurarea Vizibilității MIV
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Article Content */}
                    <div className="lg:col-span-8 flex flex-col gap-10 border-r-0 lg:border-r border-slate-300 lg:pr-12">
                        <section className="prose prose-slate max-w-none">
                            <p className="text-xl leading-relaxed text-slate-700 font-serif drop-cap">
                                Dacă dezvoltați un proiect finanțat din fonduri europene (PNRR, Programul Operațional Regional, AFIR sau altă sursă) în județul <strong className="text-red-600">{judetInfo.nume}</strong>, sunteți obligat prin <em>Manualul de Identitate Vizuală (MIV)</em> să asigurați transparența publicând comunicate de presă oficiale la începerea și finalizarea proiectului.
                            </p>

                            <p className="text-lg text-slate-600 mt-6">
                                Platforma noastră, <strong>Anuntul.net</strong>, este instrumentul media național recunoscut de autoritățile de management și organismele intermediare din județul {judetInfo.nume}. Vă oferim cel mai rapid proces de publicare online.
                            </p>

                            <div className="my-10 p-8 border-4 border-red-600 bg-white">
                                <h3 className="text-2xl font-black font-serif uppercase mb-6 text-slate-900 flex items-center gap-3">
                                    <ShieldCheck size={28} className="text-red-600" /> Conformitate MIV Garantată
                                </h3>
                                <ul className="space-y-4 mb-0 pl-0 list-none">
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Atingerea targetului de 3.000 vizitatori unici.</strong> Vă livrăm formularul cu dovada atingerii minimului legal de trafic pentru ca decontarea dosarului dvs. în județul {judetInfo.nume} să treacă fără emoții.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Indexare prioritară.</strong> Comunicate menținute pe site peren, oferind siguranță la orice auditare viitoare a proiectelor europene.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Formatare conform brandingului MIPE.</strong> Includem siglele Guvernului, Uniunii Europene și PNRR cu respectarea strictă a normelor grafice.</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg text-slate-600">
                                Primăriile, instituțiile publice și antreprenorii din <strong className="uppercase">{judetInfo.nume}</strong> aleg ziarul nostru pentru siguranța, simplitatea facturării și asistența tehnică ireproșabilă. Se acceptă plata prin Trezorerie direct din sistemele SICAP/SEAP.
                            </p>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Link href="/trimite-comunicat" className="bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-black transition-colors text-center w-full sm:w-auto">
                                   <FileCheck2 size={20} /> Trimite Comunicat Acum
                                </Link>
                                <a href="tel:0750473111" className="border-2 border-slate-300 text-slate-800 px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:border-red-600 hover:text-red-600 transition-colors text-center w-full sm:w-auto">
                                    Consultare Telefon
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar - Ad Area */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <div className="border-[6px] border-black p-8 bg-slate-50 text-center relative mt-2">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-black uppercase tracking-widest text-red-600 border border-red-200">
                                Servicii SEAP {judetInfo.nume}
                            </div>
                            <Newspaper className="mx-auto text-black mb-4" size={40} />
                            <h3 className="text-2xl font-serif font-black text-black uppercase leading-tight mb-4">
                                Instituție Publică?
                            </h3>
                            <p className="text-sm text-slate-700 font-semibold mb-6 leading-relaxed">
                                Facturare prin E-Factura și plată la 30 de zile prin Trezorerie pentru autoritățile contractante din {judetInfo.nume}.
                            </p>
                            <Link href="/seap" className="block w-full bg-black text-white font-black uppercase text-sm py-4 tracking-widest hover:bg-red-600 transition-colors">
                                Vezi Detalii SEAP
                            </Link>
                        </div>
                        
                        <div className="p-6 bg-red-50 border border-red-100 rounded-lg">
                            <h4 className="font-serif font-black text-lg text-slate-900 uppercase mb-2 border-b-2 border-red-200 pb-2">Acoperire Națională</h4>
                            <p className="text-sm text-slate-600">
                                Pe lângă {judetInfo.nume}, ziarul oficial publică comunicate de presă obligatorii pentru implementări în întreaga țară, fiind recunoscut național pentru eficiență și profesionalism.
                            </p>
                            <Link href="/regiuni" className="text-red-600 font-bold text-xs uppercase tracking-widest mt-4 inline-block hover:underline">
                                Vezi restul județelor &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
