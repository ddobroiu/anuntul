import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJudetBySlug } from "@/lib/localitati";
import { seoCampaignProducts } from "@/lib/products/seo-campaign-products";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ judetSlug: string }> }) {
    const { judetSlug } = await params;
    const judet = getJudetBySlug(judetSlug);
    if (!judet) return { title: "Județ negăsit" };

    return {
        title: `Comunicat Presă & Vizibilitate Fonduri în Județul ${judet.name} | Anuntul.info`,
        description: `Servicii de publicitate, comunicate de presă și materiale vizibilitate (plăci/autocolante) în toate localitățile din ${judet.name}.`,
    };
}

export default async function JudetLocalitatiPage({ params }: { params: Promise<{ judetSlug: string }> }) {
    const { judetSlug } = await params;
    const judet = getJudetBySlug(judetSlug);

    if (!judet) notFound();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-6 py-12" style={{ maxWidth: '1200px' }}>
                <Link href="/judet" className="inline-flex items-center gap-2 text-blue-600 mb-8 hover:underline font-medium">
                    <ArrowLeft size={16} /> Înapoi la toate județele
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
                    Județul <span className="text-blue-600">{judet.name}</span>
                </h1>
                <p className="text-gray-500 mb-12 max-w-2xl text-lg">
                    Publicăm anunțuri în ziar și pe portalul Anuntul.info pentru toate localitățile din {judet.name}. Asigurăm kituri de vizibilitate PNRR/Regional.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {judet.localitati.map((loc) => (
                        <div key={loc.slug} className="p-6 bg-gray-50 border border-gray-100 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin size={16} className="text-blue-500" />
                                {loc.name}
                            </h3>
                            <div className="flex flex-col gap-2">
                                {seoCampaignProducts.slice(0, 3).map(p => {
                                    const rootSlug = (p as any).routeSlug || (p as any).slug || p.id;
                                    const normalizedPSlug = rootSlug?.startsWith('/') ? rootSlug.slice(1) : rootSlug;
                                    return (
                                        <Link
                                            key={p.id}
                                            href={`/judet/${judet.slug}/${loc.slug}/${normalizedPSlug}`}
                                            className="text-xs text-blue-600 hover:underline"
                                        >
                                            {p.title} &rarr;
                                        </Link>
                                    );
                                })}
                                <Link
                                    href={`/judet/${judet.slug}/${loc.slug}`}
                                    className="mt-2 text-xs font-bold text-gray-400 hover:text-blue-600 uppercase tracking-tighter"
                                >
                                    Vezi Toate Serviciile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
