import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocalitateBySlug, getJudetBySlug } from "@/lib/localitati";
import { getProducts } from "@/lib/products";
import { seoCampaignProducts } from "@/lib/products/seo-campaign-products";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ judetSlug: string, localitateSlug: string }> }) {
    const { judetSlug, localitateSlug } = await params;
    const loc = getLocalitateBySlug(judetSlug, localitateSlug);
    const judet = getJudetBySlug(judetSlug);
    if (!loc || !judet) return { title: "Localitate negăsită" };

    return {
        title: `Publicitate, Comunicat Presă & Vizibilitate PNRR în ${loc.name}, ${judet.name} | Anuntul.net`,
        description: `Servicii complete de publicitate media și materiale de vizibilitate obligatorii în ${loc.name}. Pachet complet: Comunicat presă, plăci permanente, autocolante.`,
    };
}

export default async function LocalityProductsPage({ params }: { params: Promise<{ judetSlug: string, localitateSlug: string }> }) {
    const { judetSlug, localitateSlug } = await params;
    const loc = getLocalitateBySlug(judetSlug, localitateSlug);
    const judet = getJudetBySlug(judetSlug);

    if (!loc || !judet) notFound();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-6 py-12" style={{ maxWidth: '1200px' }}>
                <Link href={`/judet/${judet.slug}`} className="inline-flex items-center gap-2 text-blue-600 mb-8 hover:underline font-medium">
                    <ArrowLeft size={16} /> Înapoi la Județul {judet.name}
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase leading-none">
                            Servicii Publicitate <br /> <span className="text-blue-600">{loc.name}</span>
                        </h1>
                        <p className="text-gray-500 mb-12 text-lg leading-relaxed">
                            Suntem prezenți în <strong>{loc.name}</strong> pentru a susține beneficiarii de fonduri europene (PNRR, Programul Regional, ADR) cu pachetul complet de vizibilitate obligatorie. Livrăm rapid atât serviciile media, cât și materialele de producție publicitară necesare.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {seoCampaignProducts.map((p) => {
                                return (
                                    <Link
                                        key={p.id}
                                        href={`/judet/${judet.slug}/${loc.slug}/${p.slug}`}
                                        className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between"
                                    >
                                        <div>
                                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">{p.title}</h3>
                                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                            <span className="text-blue-600 font-bold text-sm">Activează {loc.name} &rarr;</span>
                                            <span className="text-gray-400 text-xs">{p.price}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 text-white p-8 rounded-3xl sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">De ce Anuntul.net în {loc.name}?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Acoperire în toată regiunea",
                                    "Consultant dedicat proiecte PNRR",
                                    "Kituri Vizibilitate (Plăci + Autocolante)",
                                    "Publicare în maximum 24h",
                                    "Redactare gratuită Comunicat",
                                    "Acceptăm SEAP / SICAP"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-10 border-t border-white/10">
                                <Link href="/contact" className="block w-full bg-blue-600 text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                                    Cere Ofertă {loc.name}
                                </Link>
                                <p className="text-[10px] text-gray-500 mt-4 text-center">Facturare directă și producția prin hub-ul central ShopPrint pentru cele mai mici prețuri din România.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
