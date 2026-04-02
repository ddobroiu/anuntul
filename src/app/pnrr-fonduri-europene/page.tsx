'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Newspaper, Calculator, FileText, Layout, Printer, Package, ChevronRight } from 'lucide-react';
import { seoProjects } from '@/lib/seoProjects';
import PressReleaseForm from '@/components/PressReleaseForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ... (in the Quick Navigation area, or a new section near the footer)

export default function PNRRPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="font-sans antialiased">
            {/* Premium SEO Header Area */}
            <section className="bg-slate-950 text-white relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 skew-x-12 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 blur-[120px]"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="bg-red-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1 animate-pulse">
                                Servicii Oficiale 2024
                            </span>
                            <div className="h-px w-12 bg-slate-700"></div>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                Conformitate MIPE / MIV / PNRR
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] mb-8">
                            PUBLICARE <span className="text-red-600">COMUNICATE</span> <br className="hidden md:block" />
                            & KITURI VIZIBILITATE <span className="text-slate-600">EU</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-2xl border-l border-slate-800 pl-6">
                            Suntem partenerul tău strategic pentru întreaga perioadă de implementare a proiectelor europene. 
                            De la anunțul de început până la placa permanentă de finalizare.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="#form-section" className="bg-white text-black hover:bg-red-600 hover:text-white font-black px-10 py-5 uppercase tracking-tighter italic transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 shadow-2xl shadow-white/5">
                                Configurează Kit-ul <ArrowRight size={20} />
                            </a>
                            <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-4">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold italic">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs">
                                    <p className="font-black text-white italic tracking-tight uppercase">3,000+ Companii</p>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">Au ales serviciile noastre</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation / Features */}
            <section className="bg-white border-b border-slate-100 sticky top-0 z-50 overflow-x-auto shadow-sm">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-start md:justify-center items-center py-5 gap-8 md:gap-12 whitespace-nowrap scrollbar-hide">
                        {['Servicii PNRR', 'Vizibilitate EU', 'Comunicate Presă', 'Cere Ofertă'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div> {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 lg:py-32 bg-white" id="servicii-pnrr">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        
                        {/* SEO Text Column */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="relative">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-950 italic tracking-tighter uppercase leading-none mb-8">
                                    Soluții Complete <br />
                                    <span className="text-red-600">Identitate Vizuală</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium border-l-[6px] border-slate-900 pl-8 py-2">
                                    Garanția conformității 100% cu Manualul de Identitate Vizuală (MIV) pentru beneficiarii PNRR, POR, POCU și AFIR.
                                </p>
                            </div>

                            <div className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed">
                                <p>
                                    Publicarea comunicatului de presă și instalarea materialelor de vizibilitate reprezintă condiții obligatorii pentru decontarea cheltuielilor în cadrul oricărui proiect cu finanțare europeană. 
                                    Echipa noastră de experți preia întreaga responsabilitate a designului și publicării, eliminând riscul de neconformitate.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="group p-8 border-2 border-slate-900 bg-white hover:bg-slate-950 transition-all hover:text-white cursor-default">
                                        <Newspaper className="text-red-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Comunicate PNRR</h3>
                                        <p className="text-sm opacity-80 font-medium">Publicare rapidă în 24h. Dovadă SATI/Analytics cu peste 3000 vizitatori unici, așa cum cer noile ghiduri.</p>
                                    </div>
                                    <div className="group p-8 border-2 border-slate-900 bg-slate-50 hover:bg-red-600 transition-all hover:text-white cursor-default">
                                        <Package className="text-slate-950 group-hover:text-white mb-4 group-hover:scale-110 transition-transform" size={40} />
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Kit-uri Logistice</h3>
                                        <p className="text-sm opacity-80 font-medium">Panouri temporare, plăci permanente și autocolante auto-adezive rezistente la UV și intemperii.</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black uppercase italic tracking-tight text-slate-950 mb-6">De ce să ne alegi pe noi?</h3>
                                <ul className="space-y-4 list-none p-0">
                                    {[
                                        { t: "Viteza de Execuție", d: "Livrare în 48h oriunde în România pentru materialele de print." },
                                        { t: "Prezență în SEAP / SICAP", d: "Tranzacții securizate prin Trezorerie pentru instituțiile publice." },
                                        { t: "Design Inclus", d: "Realizăm designul grafic conform ghidului specific al proiectului tău." },
                                        { t: "Dovadă Performanță", d: "Suntem singurul portal care oferă rapoarte de trafic verificate pentru fiecare anunț." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start border-b border-slate-100 pb-4 last:border-0 hover:bg-slate-50 p-2 transition-colors group">
                                            <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">0{i+1}</div>
                                            <div>
                                                <strong className="text-slate-950 font-black uppercase text-sm block">{item.t}</strong>
                                                <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sticky Configurator Column */}
                        <div className="lg:col-span-5 relative" id="form-section">
                            <div className="lg:sticky lg:top-24">
                                <div className="bg-slate-950 p-1 mb-2">
                                    <div className="bg-white p-6 sm:p-10 border-2 border-slate-950 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 -rotate-45 translate-x-12 -translate-y-12"></div>
                                        
                                        <div className="relative z-10 mb-8">
                                            <h3 className="text-3xl font-black text-slate-950 italic tracking-tighter uppercase leading-none mb-3">
                                                Configurator <span className="text-red-600 underline decoration-2 underline-offset-4">Kit Vizibilitate</span>
                                            </h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calcul instataneu & decontare eligibilă</p>
                                        </div>

                                        <PressReleaseForm />
                                        
                                        <div className="mt-8 pt-8 border-t-2 border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck className="text-green-600" size={32} />
                                                <div>
                                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Securizat</p>
                                                    <p className="text-xs font-black uppercase text-slate-950 tracking-tight">100% Eligibil</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Calculator className="text-blue-600" size={32} />
                                                <div>
                                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Transparență</p>
                                                    <p className="text-xs font-black uppercase text-slate-950 tracking-tight">Fără Costuri Ascunse</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-600 text-white p-4 text-center font-black uppercase italic tracking-tighter text-sm">
                                    * Livrare prin FAN Courier în 48 de ore
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Industrial Stats / Portfolio Section */}
            <section className="bg-slate-950 py-24 border-y-8 border-red-600 overflow-hidden relative">
                <div className="absolute top-0 left-1/4 w-px h-full bg-slate-800"></div>
                <div className="absolute top-0 left-2/4 w-px h-full bg-slate-800"></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-slate-800"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-2">15k<span className="text-red-600">+</span></p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Comunicate Publicate</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-7xl font-black text-red-600 italic tracking-tighter mb-2">100<span className="text-white">%</span></p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Rată De Acceptare MIV</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-2">48h</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Timp Producție Mediu</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-7xl font-black text-red-600 italic tracking-tighter mb-2">24/7</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Asistență Tehnică</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid Deep SEO Section */}
            <section className="py-24 bg-slate-50" id="vizibilitate-eu">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-950 italic tracking-tighter uppercase mb-4 leading-none">
                                Găsește Pagina Ta: <span className="text-red-600">Axe de Finanțare</span>
                            </h2>
                            <p className="text-slate-600 font-medium">Toate materialele sunt produse conform Standardului MIPE 2024 în vigoare.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seoProjects.map((proj) => (
                            <a 
                                key={proj.slug}
                                href={`/comunicate-presa/${proj.slug}`} 
                                className="bg-white p-6 md:p-8 hover:bg-slate-950 hover:text-white transition-all group cursor-pointer border border-slate-200 shadow-sm"
                            >
                                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                                    <Newspaper size={32} />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">{proj.name}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                                    Vezi Județele & Localitățile <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA SEO */}
            <section className="py-24 bg-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-10 leading-none">
                        Pregătit pentru Auditul <span className="text-black/40">MIPE</span>?
                    </h2>
                    <p className="text-white/80 text-xl font-bold max-w-2xl mx-auto mb-12">
                        Nu lăsa vizibilitatea pe ultima sută de metri. Asigură-te că dosarul tău de plată este perfect documentat.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#form-section" className="bg-white text-red-600 font-black px-12 py-5 uppercase tracking-tighter italic text-lg shadow-xl hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                            Lansează Comanda Acum
                        </a>
                        <a href="tel:0700000000" className="bg-slate-900 text-white font-black px-12 py-5 uppercase tracking-tighter italic text-lg shadow-xl hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1">
                            Suna Un Specialist
                        </a>
                    </div>
                    <p className="mt-12 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                        Partener Oficial Autorizat &bull; Toate drepturile rezervate Anuntul.info
                    </p>
                </div>
            </section>
            </main>
            <Footer />
        </div>
    );
}
