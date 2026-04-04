import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, LinkIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressReleaseForm from '@/components/PressReleaseForm';
import { getJudeteFullData } from '@/lib/localitati';
import { seoProjects } from '@/lib/seoProjects';

interface PageProps {
    params: Promise<{ proiect: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { proiect } = resolvedParams;
    const projInfo = seoProjects.find(p => p.slug === proiect);

    if (!projInfo) {
        return { title: 'Nu a fost găsit' };
    }

    return {
        title: `Comunicate de Presă și Publicitate ${projInfo.name}`,
        description: `Servicii complete de vizibilitate pentru proiecte ${projInfo.name}. Publicare comunicat presă MIV, panouri, plăci și autocolante. Distribuție la nivel național în toate județele.`,
        keywords: [`comunicate presa ${projInfo.slug}`, `kit publicitate ${projInfo.slug}`, `panouri vizibilitate ${projInfo.name}`],
        alternates: {
            canonical: `https://anuntul.info/comunicate-presa/${proiect}`
        }
    };
}

export default async function ComunicatProiectPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { proiect } = resolvedParams;
    
    const projInfo = seoProjects.find(p => p.slug === proiect);

    if (!projInfo) {
        notFound();
    }

    const judete = getJudeteFullData();

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 border-t-[8px] border-black">
            <Header />

            {/* Huge Hero SEO Section */}
            <section className="bg-white relative pt-20 pb-20 overflow-hidden px-4 border-b-2 border-slate-100">
                <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-left">
                        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                            <Link href="/" className="hover:text-red-600 transition-colors">Acasă</Link>
                            <span>/</span>
                            <span className="text-red-600 bg-red-50 px-2 py-1">{projInfo.name}</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] mb-8 text-black">
                            SERVICII VIZIBILITATE <br />
                            <span className="text-red-600 uppercase">{projInfo.name}</span>
                        </h1>
                        
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mb-10 border-l-[4px] border-black pl-5">
                            Oferim garanția decontării cheltuielilor de publicitate pentru {projInfo.name}. Emitere factură prin SEAP, rapoarte trafic SATI și respectare la milimetru a Manualului de Identitate Vizuală MIV.
                        </p>
                        
                        <a href="#comanda-acum" className="bg-black text-white hover:bg-red-600 font-black px-8 py-5 uppercase tracking-tighter italic transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 shadow-2xl text-lg">
                            Configurează Pachetul Acum <ArrowRight size={24} />
                        </a>
                    </div>
                </div>
            </section>

            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <section className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed">
                            <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter mb-8 bg-slate-100 p-6 border-l-[8px] border-red-600">
                                Ce prevede obligația de vizibilitate {projInfo.slug.toUpperCase()}?
                            </h2>
                            <p>
                                Conform <strong>Ghidului Solicitantului / Manualului MIV pentru {projInfo.name}</strong>, fiecare beneficiar are obligația informării publicului larg și a factorilor interesați privind primirea sprijinului financiar de la Uniunea Europeană și Guvernul României.
                            </p>

                            <p>Aceasta presupune achiziționarea a minim două tipuri de produse/servicii:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                <div className="p-8 bg-white border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center mb-6 font-black text-xl italic">1</div>
                                    <h3 className="text-xl font-black uppercase italic tracking-tighter mb-3">Comunicate Presă</h3>
                                    <p className="text-sm font-medium text-slate-600">La semnarea contractului de finanțare și la finalizarea proiectului. Noi redactăm conținutul cu elementele MIV și publicăm anunțul național cu dovadă SATI/Analytics inclusă.</p>
                                </div>
                                <div className="p-8 bg-white border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 font-black text-xl italic">2</div>
                                    <h3 className="text-xl font-black uppercase italic tracking-tighter mb-3">Materiale de Print</h3>
                                    <p className="text-sm font-medium text-slate-600">Un panou temporar sau autocolante în cazul achizițiilor de bunuri. La final, o placă permanentă fixată în exterior sau interiorul clădirii.</p>
                                </div>
                            </div>

                            <p className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                                "Suntem pe SEAP sub numele publisher-ului nostru. Puteți lansa achiziția directă în catalog, noi acceptăm exclusiv decontul prin Trezorerie cu Facturare electronică e-Factura."
                            </p>
                        </section>

                        <section className="mt-12 bg-white p-8 border-t-[6px] border-slate-900 shadow-sm">
                            <h3 className="text-3xl font-black text-slate-950 italic uppercase tracking-tighter mb-8">
                                Selectează Județul Proiectului {projInfo.slug.toUpperCase()}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {judete.map((judet) => (
                                    <Link 
                                        key={judet.slug} 
                                        href={`/comunicate-presa/${proiect}/${judet.slug}`}
                                        className="text-center font-bold text-slate-800 bg-slate-50 border border-slate-200 py-4 px-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all uppercase text-xs tracking-wider group"
                                    >
                                        <span className="block mb-2 group-hover:-translate-y-1 transition-transform">{judet.name}</span>
                                        <div className="w-8 h-1 bg-red-600 mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4" id="comanda-acum">
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-slate-950 p-6 md:p-8 text-white shadow-2xl relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-2xl"></div>
                                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none mb-6 relative z-10 border-b border-white/20 pb-6">
                                    Configurează Serviciile <span className="text-red-500">{projInfo.slug.toUpperCase()}</span>
                                </h3>
                                <div className="relative z-10 bg-white">
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
