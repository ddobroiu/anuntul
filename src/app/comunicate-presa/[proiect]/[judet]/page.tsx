import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Newspaper, ShieldCheck, ArrowRight, LinkIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressReleaseForm from '@/components/PressReleaseForm';
import { getJudetBySlug, getAllLocalitatiForJudet } from '@/lib/localitati';
import { seoProjects } from '@/lib/seoProjects';

interface PageProps {
    params: Promise<{ proiect: string; judet: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { proiect, judet } = resolvedParams;
    
    const projInfo = seoProjects.find(p => p.slug === proiect);
    const judetInfo = getJudetBySlug(judet);

    if (!projInfo || !judetInfo) {
        return { title: 'Nu a fost găsit' };
    }

    return {
        title: `Publicare Comunicate de Presă ${projInfo.name} în Județul ${judetInfo.name} | Anuntul.info`,
        description: `Agenție omologată pentru publicarea comunicatelor ${projInfo.name} în județul ${judetInfo.name}. Oferim rapoarte vizitatori (SATI) și Kit complet de vizibilitate MIPE.`,
        keywords: [`comunicate presa ${projInfo.slug} ${judetInfo.name}`, `publicare anunturi fonduri europene ${judetInfo.slug}`, `kit identitate vizuala ${projInfo.slug} ${judetInfo.name}`],
        alternates: {
            canonical: `https://anuntul.info/comunicate-presa/${proiect}/${judet}`
        }
    };
}

export default async function ComunicatJudetPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { proiect, judet } = resolvedParams;
    
    const projInfo = seoProjects.find(p => p.slug === proiect);
    const judetInfo = getJudetBySlug(judet);

    if (!projInfo || !judetInfo) {
        notFound();
    }

    const localitati = getAllLocalitatiForJudet(judet);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
            <Header />

            {/* Premium Header Zone */}
            <section className="bg-slate-950 text-white relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden px-4">
                <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 skew-y-6 transform origin-bottom-right"></div>
                
                <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Link href="/" className="hover:text-white transition-colors">Acasă</Link>
                        <span>/</span>
                        <span className="text-red-500">{projInfo.name}</span>
                        <span>/</span>
                        <span className="text-white bg-slate-800 px-2 py-0.5">Jud. {judetInfo.name}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter leading-none mb-6 max-w-5xl mx-auto">
                        CENTRU MEDIA PENTRU PROIECTE <br className="hidden lg:block"/>
                        <span className="text-red-600 uppercase">{projInfo.slug}</span> ÎN JUDEȚUL {judetInfo.name.toUpperCase()}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mb-12">
                        Platformă oficială de publicare a comunicatelor de presă obligatorii pentru axa <strong>{projInfo.name}</strong> la nivelul Județului {judetInfo.name}. Respectăm absolut toate cerințele din MIV (Manualul de Identitate Vizuală) impus de minister.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <a href="#comanda-acum" className="bg-white text-black hover:bg-slate-200 font-black px-8 py-4 uppercase tracking-tighter italic transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-2xl">
                            Solicită Publicare <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        <section className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed">
                            <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter mb-8 border-l-[6px] border-slate-950 pl-6">
                                Informații Tehnice pentru Decontare în Județul {judetInfo.name}
                            </h2>
                            <p>
                                Procedura aprobată pentru decontul de publicitate prin resurse <strong>{projInfo.name}</strong> în județul {judetInfo.name} stipulează obligativitatea publicării comunicatelor de presă la faza de startare a investiției, dar și la închiderea acesteia.
                            </p>
                            
                            <p>
                                <strong className="text-red-600">Atenție!</strong> Simplele pubicații locale sunt adesea respinse la validarea dosarului de către Autoritatea de Management dacă nu pot face <strong>dovada traficului minim de monitorizare SATI / vizitatori unici prevăzuți în noile regulamente</strong>.
                            </p>

                            <div className="my-10 p-8 border-4 border-slate-950 bg-slate-50">
                                <h3 className="text-2xl font-black italic uppercase mb-6 text-slate-950 flex items-center gap-3">
                                    <ShieldCheck size={28} className="text-red-600" /> Serviciile Vizibilitate {projInfo.slug.toUpperCase()} 
                                </h3>
                                <ul className="space-y-4 mb-0 pl-0 list-none">
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Redactare Comunicat</strong>: Realizăm textul în template-ul obligatoriu cu toate badge-urile (Guvernul RO, UE, PNNR).</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Publicare & Dovadă Raport SATI</strong>: Vă livrăm direct dovada clară a peste 3.000 vizitatori unici către articol.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" />
                                        <span><strong>Producție Kit Print {projInfo.slug.toUpperCase()}</strong>: Panouri temporare A2 sau mai mari, autocolante pentru echipamente și plăci permanente. Expediate în tot județul {judetInfo.name}.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Localities Index Links for extreme SEO branching */}
                        {localitati.length > 0 && (
                            <section className="mt-8 pt-8 border-t-2 border-slate-100">
                                <h3 className="text-2xl font-black text-slate-950 italic uppercase tracking-tighter mb-6 flex items-center gap-2">
                                    <MapPin className="text-red-600" /> Centre Implementare în {judetInfo.name}
                                </h3>
                                <p className="text-slate-600 mb-6 font-medium">Livrăm servicii SEAP și publicăm articole cu acoperire pentru proiectele depuse din următoarele localități ale județului:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {localitati.map((loc) => (
                                        <Link 
                                            key={loc.slug} 
                                            href={`/comunicate-presa/${proiect}/${judet}/${loc.slug}`}
                                            className="text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 p-3 hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-between group"
                                        >
                                            <span className="truncate pr-2">{loc.name}</span>
                                            <LinkIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4" id="comanda-acum">
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-red-600 p-8 text-white mb-8 shadow-xl">
                                <Newspaper className="mb-4" size={40} />
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight mb-4">
                                    Facturare prin Trezorerie SEAP ({judetInfo.name})
                                </h3>
                                <p className="text-sm font-medium mb-6 text-red-100 leading-relaxed">
                                    Dacă reprezinți o primărie, o firmă sau un consiliu în {judetInfo.name}, poți achiziționa pachetele noastre direct prin sistemul electronic SICAP/SEAP. Facturarea se face prin RO e-Factura.
                                </p>
                            </div>

                            <div className="bg-white p-6 md:p-8 border-2 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-black text-slate-950 italic tracking-tighter uppercase leading-none mb-6">
                                    Configurare Pachet <span className="text-red-600">{projInfo.slug.toUpperCase()}</span>
                                </h3>
                                <PressReleaseForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
