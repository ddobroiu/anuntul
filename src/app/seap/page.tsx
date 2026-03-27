import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
    Building2,
    CheckCircle2,
    CreditCard,
    FileCheck2,
    ShieldCheck,
    Zap,
    Phone,
    Mail,
    MessageSquare,
    ArrowRight,
    Newspaper,
    ScrollText,
    Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
    title: "Publicare Anunțuri SEAP / SICAP & Comunicate de Presă | Anuntul.info",
    description: "Platformă acreditată pentru publicarea comunicatelor de presă și anunțurilor de licitație prin SEAP/SICAP. Plata la termen prin Trezorerie și confirmare instant.",
    keywords: ["anunturi seap", "comunicate de presa sicap", "publicitate licitatii", "anunturi fonduri europene", "plata trezorerie", "anuntul net seap"],
};

const SEAPFeatures = [
    {
        title: "Acreditare Media",
        description: "Suntem sursă de informare recunoscută pentru publicarea anunțurilor obligatorii conform legislației achizițiilor publice.",
        icon: Newspaper,
        color: "#D32F2F"
    },
    {
        title: "Plată la Termen",
        description: "Instituțiile publice beneficiază de plată prin Trezorerie la 30 de zile, simplificând fluxul financiar.",
        icon: CreditCard,
        color: "#D32F2F"
    },
    {
        title: "Confirmare Instant",
        description: "După publicare, primiți pe email dovada publicării și link-ul direct, necesare pentru dosarul de achiziție.",
        icon: ScrollText,
        color: "#D32F2F"
    },
    {
        title: "E-Factura Ready",
        description: "Transmitere automată a facturilor în sistemul național RO e-Factura pentru toate instituțiile de stat.",
        icon: FileCheck2,
        color: "#D32F2F"
    }
];

export default function SeapPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* News-Style Hero */}
                <section className="bg-slate-50 border-b border-slate-200 py-20 overflow-hidden relative">
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block px-4 py-1.5 bg-red-100 text-[#D32F2F] font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                                Portal Oficial Achiziții Publice
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                                Publicare <span className="text-[#D32F2F]">Anunțuri SEAP</span> & Comunicate Fonduri Europene
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Asigurăm vizibilitatea legală pentru proiectele dumneavoastră.
                                Suntem prezenți în catalogul SICAP pentru o achiziție directă și rapidă.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/trimite-comunicat" className="btn btn-primary px-8 py-4 text-lg font-bold uppercase tracking-wide flex items-center gap-2">
                                    Publică Anunț Acum <ArrowRight size={20} />
                                </Link>
                                <a href="tel:0750473111" className="btn btn-outline px-8 py-4 text-lg font-bold uppercase tracking-wide flex items-center gap-2 border-slate-300">
                                    <Phone size={20} /> 0750.473.111
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Subtle decoration */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 w-full max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SEAPFeatures.map((feature, idx) => (
                            <div key={idx} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6" style={{ color: feature.color }}>
                                    <feature.icon size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Content Section with Side Focus */}
                <section className="py-20 bg-slate-50">
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="prose prose-slate max-w-none">
                                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">De ce să publicați pe Anuntul.info?</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Legislația națională și europeană impune standarde stricte de transparență pentru proiectele finanțate prin <strong>PNRR</strong> sau <strong>Programe Regionale</strong>. Anuntul.info este platforma ideală pentru a îndeplini aceste cerințe, oferind o audiență vastă și recunoaștere în motoarele de căutare.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 my-10">
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-[#D32F2F] shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Indexare Rapidă</h4>
                                            <p className="text-sm text-slate-500">Google ne vizitează zilnic, asigurând indexarea anunțului în câteva ore.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-[#D32F2F] shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Arhivă Permanentă</h4>
                                            <p className="text-sm text-slate-500">Anunțurile rămân online pe termen nelimitat pentru audituri ulterioare.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-[#D32F2F] shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Pachete SEO</h4>
                                            <p className="text-sm text-slate-500">Promovăm comunicatele în secțiunile speciale pentru vizibilitate maximă.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-[#D32F2F] shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Suport SICAP</h4>
                                            <p className="text-sm text-slate-500">Asistență pas-cu-pas pentru finalizarea achiziției în platformă.</p>
                                        </div>
                                        <div className="flex gap-4">
                                        <CheckCircle2 className="text-[#D32F2F] shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Dovadă cu +3.000 Vizitatori</h4>
                                            <p className="text-sm text-slate-500">Oferim rapoarte cu traficul unic necesar (min 3.000 de viziualizări/articol).</p>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div className="p-8 bg-white border-l-4 border-[#D32F2F] rounded-r-2xl shadow-sm italic text-slate-600">
                                    \"Utilizăm Anuntul.info pentru toate proiectele de infrastructură. Plata prin Trezorerie și dovada instantanee a publicării ne scutesc de multă birocrație.\" - Manager Proiect Regional
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-[3px] rotate-45 translate-x-12 translate-y-2">Info</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 italic underline decoration-red-600">
                                    <Clock size={24} className="text-[#D32F2F]" /> Program de Lucru
                                </h3>
                                <p className="text-slate-500 mb-8">Echipa noastră tehnică procesează anunțurile SEAP în intervalul:</p>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="font-bold">Luni - Vineri</span>
                                        <span className="text-[#D32F2F] font-black">08:00 - 18:00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="font-bold">Sâmbătă</span>
                                        <span className="text-slate-400">09:00 - 14:00</span>
                                    </li>
                                </ul>

                                <div className="space-y-4">
                                    <a href="mailto:contact@anuntul.info" className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-indigo-600" />
                                            <span className="font-bold">contact@anuntul.info</span>
                                        </div>
                                        <ArrowRight size={16} />
                                    </a>
                                    <a href="https://wa.me/40750473111" className="w-full flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <MessageSquare size={18} className="text-emerald-600" />
                                            <span className="font-bold text-emerald-700">WhatsApp Suport</span>
                                        </div>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
                                    CUI: RO31454153 | Cont IBAN Trezorerie disponibil
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-24 w-full max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black mb-12 uppercase">Exemple de Anunțuri SEAP Acceptate</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Comunicate de presă PNRR",
                            "Anunțuri Licitații Publice",
                            "Publicitate Proceduri Sănătate",
                            "Comunicate Începere Proiect Regio",
                            "Anunțuri Licitatii Primării",
                            "Notificări Mediu AFIR",
                            "Anunțuri Concursuri de Angajare"
                        ].map(tag => (
                            <span key={tag} className="px-6 py-2 bg-slate-100 rounded-full text-slate-700 font-bold hover:bg-red-600 hover:text-white transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
