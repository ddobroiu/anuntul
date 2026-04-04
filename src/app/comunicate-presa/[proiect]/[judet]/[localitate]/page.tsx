import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Newspaper, ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressReleaseForm from '@/components/PressReleaseForm';
import { getLocalitateBySlug, getJudetBySlug } from '@/lib/localitati';
import { seoProjects } from '@/lib/seoProjects';

interface PageProps {
    params: Promise<{ proiect: string; judet: string; localitate: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { proiect, judet, localitate } = resolvedParams;
    
    const projInfo = seoProjects.find(p => p.slug === proiect);
    const locInfo = getLocalitateBySlug(judet, localitate);
    const judetInfo = getJudetBySlug(judet);

    if (!projInfo || !locInfo || !judetInfo) {
        return { title: 'Nu a fost găsit' };
    }

    return {
        title: `Comunicate Presă ${projInfo.name} în ${locInfo.name}`,
        description: `Ziar oficial pentru publicare comunicate de presă obligatorii ${projInfo.name} în ${locInfo.name}, ${judetInfo.name}. Oferim rapoarte SATI cu +3.000 vizitatori, panouri temporare, plăci și conformitate MIV MIPE.`,
        keywords: [`comunicate presa ${projInfo.slug} ${locInfo.name}`, `publicare anunturi ${projInfo.slug} ${judetInfo.name}`, `comunicate fonduri europene ${locInfo.name}`, `kit vizibilitate ${projInfo.slug} ${locInfo.name}`, `panou temporar ${projInfo.slug} ${locInfo.name}`],
        alternates: {
            canonical: `https://anuntul.info/comunicate-presa/${proiect}/${judet}/${localitate}`
        }
    };
}

export default async function ComunicatLocalitatePage({ params }: PageProps) {
    const resolvedParams = await params;
    const { proiect, judet, localitate } = resolvedParams;
    
    const projInfo = seoProjects.find(p => p.slug === proiect);
    const locInfo = getLocalitateBySlug(judet, localitate);
    const judetInfo = getJudetBySlug(judet);

    if (!projInfo || !locInfo || !judetInfo) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
            <Header />

            {/* SEOTop Banner */}
            <section className="bg-slate-950 text-white relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden px-4">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 skew-x-12 translate-x-10"></div>
                
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <Link href="/" className="hover:text-white transition-colors">Acasă</Link>
                            <span>/</span>
                            <span className="text-red-500">{projInfo.name}</span>
                            <span>/</span>
                            <span>Jud. {judetInfo.name}</span>
                            <span>/</span>
                            <span className="text-white bg-slate-800 px-2 py-0.5">{locInfo.name}</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-tight mb-6 max-w-4xl mx-auto">
                            Comunicate Presă & Vizibilitate <br className="hidden md:block" />
                            <span className="text-red-600">{projInfo.slug.toUpperCase()}</span> ÎN {locInfo.name.toUpperCase()}
                        </h1>
                        
                        <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mb-10">
                            Reprezinți o instituție publică sau o companie din Municipiul/Orașul/Comuna <strong>{locInfo.name}</strong>, Județul {judetInfo.name}? 
                            Suntem partenerul tău media oficial pentru publicarea anunțurilor de începere și finalizare a proiectelor finanțate prin {projInfo.name}.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="#comanda-acum" className="bg-white text-black hover:bg-red-600 hover:text-white font-black px-8 py-4 uppercase tracking-tighter italic transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-2xl">
                                Comandă Servicii <ArrowRight size={20} />
                            </a>
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-6 py-4 flex items-center gap-3">
                                <MapPin className="text-red-500" size={24} />
                                <div className="text-left text-xs">
                                    <p className="font-black text-white italic tracking-tight uppercase">Acoperire 100%</p>
                                    <p className="text-slate-400 uppercase tracking-widest">{judetInfo.name} &bull; MIV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Article Content */}
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        <section className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed">
                            <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter mb-8 border-l-[6px] border-red-600 pl-6">
                                Detalii Procedură {projInfo.name} ({locInfo.name})
                            </h2>
                            <p>
                                Conform <strong>Manualului de Identitate Vizuală (MIV)</strong> specific, absolut toți beneficiarii care atrag fonduri europene în zona <strong>{locInfo.name}</strong> trebuie să respecte obligațiile de transparență față de public. Acest lucru se realizează prin publicarea a minim două comunicate de presă obligatorii (la începutul și finalul implementării).
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                <div className="p-6 border-2 border-slate-200 bg-white shadow-sm hover:border-red-600 transition-colors">
                                    <Newspaper className="text-red-600 mb-4" size={32} />
                                    <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2">Presă cu Impact Real</h3>
                                    <p className="text-sm text-slate-600 font-medium m-0">Respectăm rigorile: oferim dovadă certificată SATI cu peste 3.000 de vizitatori, necesară decontului în dosarul din {judetInfo.name}.</p>
                                </div>
                                <div className="p-6 border-2 border-slate-200 bg-white shadow-sm hover:border-red-600 transition-colors">
                                    <ShieldCheck className="text-slate-950 mb-4" size={32} />
                                    <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2">Comandă SEAP/SICAP</h3>
                                    <p className="text-sm text-slate-600 font-medium m-0">Sunteți primărie în {locInfo.name}? Puteți face achiziția direct din catalogul electronic SEAP, fără bătăi de cap.</p>
                                </div>
                            </div>

                            <p>
                                De asemenea, pentru implementarea fizică din teritoriul localității dumneavoastră, Vă punem la dispoziție <strong>Kitul Complet de Vizibilitate</strong>. Acesta include panouri temporare A2 sau 3x2m, plăci permanente din materiale specifice (Alucobond/Dibond/Panouri PVC) și autocolante ce respectă întocmai vectorii grafici propuși de Uniunea Europeană și Guvernul României pentru axa {projInfo.name}.
                            </p>

                            <div className="my-10 p-6 md:p-8 bg-red-600 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10"><CheckCircle2 size={120} /></div>
                                <h3 className="text-2xl font-black italic uppercase mb-6 text-white relative z-10 flex items-center gap-3">
                                    Avantaje Exclusive
                                </h3>
                                <ul className="space-y-4 mb-0 pl-0 list-none relative z-10">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-white text-red-600 font-bold flex items-center justify-center shrink-0 mt-1 text-xs">1</div>
                                        <span className="font-medium text-lg">Publicare ultrarapidă în rubrica națională sau de business.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-white text-red-600 font-bold flex items-center justify-center shrink-0 mt-1 text-xs">2</div>
                                        <span className="font-medium text-lg">Asigurăm grafică DTP și adaptarea textelor direct din template-urile oficiale prevăzute pentru județul {judetInfo.name}.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-white text-red-600 font-bold flex items-center justify-center shrink-0 mt-1 text-xs">3</div>
                                        <span className="font-medium text-lg">Livrare fizică a materialelor publicitare de print prin Curier Rapid fix la adresa implementării din {locInfo.name}, {judetInfo.name}.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar - Configurator Sticky */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-24" id="comanda-acum">
                            <div className="bg-slate-950 p-1 mb-2 shadow-2xl">
                                <div className="bg-white p-6 md:p-8 border-2 border-slate-950 relative">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-black text-slate-950 italic tracking-tighter uppercase leading-none mb-3">
                                            Lansează Comanda Pentru <span className="text-red-600">{locInfo.name}</span>
                                        </h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">
                                            Alege pachetul {projInfo.slug.toUpperCase()} dorit
                                        </p>
                                    </div>
                                    <PressReleaseForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
