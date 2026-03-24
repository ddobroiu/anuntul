import React from "react";
import Link from "next/link";
import { JUDETE_FULL_DATA } from "@/lib/localitati";
import { MapPin, ArrowRight, Flag, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Publicitate și Comunicate Presă în orice județ - Anuntul.net",
    description: "Servicii de publicare comunicate de presă și vizibilitate fonduri europene în orice județ din România. Acoperire națională pentru PNRR, PR și ADR.",
    keywords: "comunicate presa judete, vizibilitate pnrr, publicitate locala, anunturi ziar",
    alternates: { canonical: "/judet" },
};

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function JudetePage() {
    const breadcrumbItems = [
        { name: "Home", item: "/" },
        { name: "Judete", item: "/judet" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbSchema items={breadcrumbItems} />
            <Header />
            {/* Hero Section */}
            <div className="bg-gray-900 pt-20 pb-20 md:pt-32 md:pb-24 text-white">
                <div className="container mx-auto px-6 text-center" style={{ maxWidth: '1000px' }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/10 uppercase tracking-widest">
                        <Flag size={14} />
                        <span>Acoperire Națională Anuntul.net</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Vizibilitate PNRR &amp; Media <br />
                        <span className="text-blue-500">Locală și Regională</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Publicăm comunicate de presă și asigurăm kituri complete de vizibilitate (plăci + autocolante) în toate localitățile din România.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16" style={{ maxWidth: '1200px' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: ShieldCheck, title: "Conformitate MIV", text: "Layout-uri verificate pentru manualele PNRR/PR.", color: "text-blue-500" },
                        { icon: Zap, title: "Publicare Rapidă", text: "Anunțul tău apare online în maximum 24h.", color: "text-blue-500" },
                        { icon: MapPin, title: "Livrăm Kituri Fizice", text: "Plăci și autocolante UV direct la sediul proiectului.", color: "text-blue-500" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <div className={`${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Alege Județul pentru Publicitate</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {JUDETE_FULL_DATA.map((judet) => (
                        <Link
                            key={judet.slug}
                            href={`/judet/${judet.slug}`}
                            className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
                        >
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 uppercase tracking-tighter text-sm mb-2">{judet.name}</h3>
                            <ArrowRight className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all font-bold" size={16} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
