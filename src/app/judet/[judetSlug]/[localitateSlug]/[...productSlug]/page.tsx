import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocalitateBySlug, getJudetBySlug } from "@/lib/localitati";
import { getProductBySlug, getProducts } from "@/lib/products";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Seeded random for deterministic Spintax & Ratings
function getSeededRandom(seedStr: string) {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const x = Math.sin(hash++) * 10000;
    return x - Math.floor(x);
}

export async function generateMetadata({ params }: { params: Promise<{ judetSlug: string, localitateSlug: string, productSlug: string[] }> }) {
    const { judetSlug, localitateSlug, productSlug } = await params;
    const productSlugStr = Array.isArray(productSlug) ? productSlug.join('/') : productSlug;

    const loc = getLocalitateBySlug(judetSlug, localitateSlug);
    const judet = getJudetBySlug(judetSlug);
    const product = getProductBySlug(productSlugStr);

    if (!loc || !judet || !product) return {};

    const title = `Comunicat Presă ${product.title} în ${loc.name}, Județul ${judet.name} | Anuntul.info`;
    const description = `Publică comunicat de presă pentru ${product.title} în ${loc.name} (${judet.name}). Servicii profesionale de redactare și publicitate media pentru proiecte PNRR și fonduri regionale.`;

    const routeUrl = `https://anuntul.info/judet/${judet.slug}/${loc.slug}/${productSlugStr}`;

    return {
        title,
        description,
        keywords: `comunicat presa ${product.title} ${loc.name}, publicare anunt ${loc.name}, fonduri europene ${loc.name}, vizibilitate PNRR ${judet.name}`,
        openGraph: {
            title,
            description,
            url: routeUrl,
            images: [(product as any).image || '/placeholder.png'],
            siteName: 'Anuntul.info',
            locale: 'ro_RO',
            type: 'website',
        },
        alternates: {
            canonical: routeUrl,
        }
    };
}

export default async function ProductLocalityPage({ params }: { params: Promise<{ judetSlug: string, localitateSlug: string, productSlug: string[] }> }) {
    const { judetSlug, localitateSlug, productSlug } = await params;
    const productSlugStr = Array.isArray(productSlug) ? productSlug.join('/') : productSlug;

    const loc = getLocalitateBySlug(judetSlug, localitateSlug);
    const judet = getJudetBySlug(judetSlug);
    const product = getProductBySlug(productSlugStr);

    if (!loc || !judet || !product) notFound();

    const productImage = (product as any).image || "/placeholder.png";
    const shopUrl = "/trimite-comunicat";

    // Recommended items (other SEO products)
    const allProducts = await getProducts();
    const recommendedProducts = allProducts
        .filter(p => p.id !== product.id && (p.metadata?.isSeo || p.id?.startsWith('seo-')))
        .sort((a, b) => getSeededRandom(a.id + loc.slug) - 0.5)
        .slice(0, 4);

    // Filter products for the "Industry Solutions Hub"
    const isFonduri = productSlugStr.includes('pnrr') || productSlugStr.includes('regional') || productSlugStr.includes('regio') || productSlugStr.includes('fonduri') || productSlugStr.includes('comunicat');

    // Group products for cross-linking
    const signageProducts = allProducts.filter(p =>
        ['placa', 'panou', 'autocolant', 'afiș', 'afis', 'banner'].some(keyword => p.title.toLowerCase().includes(keyword))
    ).slice(0, 6);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="container mx-auto px-4 pt-12 pb-24" style={{ maxWidth: '1200px' }}>
                {/* Breadcrumb */}
                <nav className="text-sm text-slate-400 mb-10 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Acasă</Link>
                    <span className="opacity-30">/</span>
                    <Link href="/judet" className="hover:text-blue-600 transition-colors">Județe</Link>
                    <span className="opacity-30">/</span>
                    <Link href={`/judet/${judet.slug}`} className="hover:text-blue-600 transition-colors uppercase font-bold text-[10px] tracking-widest">{judet.name}</Link>
                    <span className="opacity-30">/</span>
                    <Link href={`/judet/${judet.slug}/${loc.slug}`} className="hover:text-blue-600 transition-colors font-medium">{loc.name}</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-slate-900 font-bold">{product.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Visual Section (Left) */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                        <div className="relative aspect-[4/3] md:aspect-video xl:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group bg-slate-200">
                            <Image
                                src={productImage}
                                alt={`Publicare Comunicat Presă ${product.title} în ${loc.name}, ${judet.name}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block shadow-xl">
                                    Conformitate MIV 100%
                                </span>
                                <h3 className="text-white text-2xl font-black leading-tight drop-shadow-md">
                                    Servicii Media & Vizibilitate <br />
                                    <span className="text-blue-400 font-medium text-lg leading-none">în localitatea {loc.name}</span>
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                                </div>
                                <h4 className="font-bold text-slate-900 group-hover:text-white mb-1">Impact Național</h4>
                                <p className="text-[11px] text-slate-400 group-hover:text-blue-100 leading-tight">Publicare în rețeaua principală de știri.</p>
                            </div>
                            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-300">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-slate-900 group-hover:text-white mb-1">Garanție Audit</h4>
                                <p className="text-[11px] text-slate-400 group-hover:text-green-100 leading-tight">Structură conformă cu regulile de decontare.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section (Right/Top) */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-10 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-50">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[1px] w-12 bg-blue-600"></div>
                                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{judet.name} • Acoperire Locală</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
                                Soluții Media: <span className="text-blue-600">Comunicat de Presă {product.title}</span> în {loc.name}
                            </h1>

                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                                {(() => {
                                    if (isFonduri) {
                                        const variations = [
                                            <p key="v1">Aveți un proiect finanțat prin <strong>PNRR sau Programul Regional</strong> la <strong>{loc.name}</strong>? Anuntul.info vă oferă pachetul complet obligatoriu: de la redactarea comunicatului până la publicarea media pentru <strong>{product.title}</strong>. Asigurăm conformitatea 100% cu Manualul de Identitate Vizuală (MIV) cerut de autoritățile de management.</p>,
                                            <p key="v2">Vizibilitatea proiectului dvs. din <strong>{loc.name} (Județul {judet.name})</strong> este prioritatea noastră. Publicăm rapid orice tip de anunț obligatoriu, inclusiv <strong>{product.title}</strong>, garantând indexarea în motoarele de căutare pentru conformitatea în fața auditului de proiect.</p>,
                                            <p key="v3">Pentru companiile și instituțiile din <strong>{loc.name}</strong> ce accesează fonduri UE, oferim pachetul 'Audit-Proof'. Indiferent că sunteți din <strong>comunicat de presă</strong> sau alte elemente de vizibilitate, noi ne ocupăm de tot procesul de publicitate media pentru <strong>{product.title}</strong>.</p>
                                        ];
                                        const seedIdx = Math.floor(getSeededRandom(loc.name + productSlugStr) * variations.length);
                                        return variations[seedIdx];
                                    }
                                    return (
                                        <p>Publicați <strong>{product.title}</strong> în <strong>{loc.name}</strong> utilizând cea mai eficientă platformă de comunicate de presă. Asigurăm vizibilitate autoritară, redactare optimizată SEO și livrare rapidă a rapoartelor de monitorizare media, esențiale pentru campanii de PR sau conformitate legală.</p>
                                    );
                                })()}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-100">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Redactare în 2h lucrătoare
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Publicare în portal național
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Raport de monitorizare (Linkuri)
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Indexare rapidă în Google
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Consultanță reglementări MIV
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                    Pachete KIT vizibilitate complet
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <Link href={shopUrl} className="flex-1 bg-blue-600 text-white text-center py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                                    <span>Publică acum în {loc.name}</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </Link>
                                <Link href="/contact" className="md:px-10 bg-slate-900 text-white text-center py-6 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                                    Cerere Ofertă Kit
                                </Link>
                            </div>
                            <a 
                                href={`https://wa.me/40750473111?text=Buna%20ziua,%20as%20dori%20mai%20multe%20detalii%20despre%20${encodeURIComponent(product.title)}%20in%20${encodeURIComponent(loc.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-600 text-white text-center py-6 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-900/10 uppercase tracking-widest flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.877-2.053-.976-.275-.099-.475-.15-.675.15-.199.3-.775 1.05-.95 1.275-.175.225-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.793-1.492-1.771-1.667-2.072-.175-.3-.018-.463.132-.612.134-.133.301-.351.451-.526.15-.175.199-.3.3-.5.1-.199.05-.376-.026-.526-.075-.15-.675-1.625-.925-2.225-.244-.583-.493-.503-.675-.512-.172-.008-.371-.01-.571-.01-.2 0-.526.075-.801.374-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.231 5.125 4.534.716.311 1.275.497 1.711.637.72.229 1.375.196 1.893.118.577-.087 1.779-.727 2.029-1.427.25-.7.25-1.3.175-1.427-.075-.127-.275-.227-.575-.377z" />
                                </svg>
                                Contactează pe WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Industry Solutions Hub */}
                <div className="mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
                                Hub Soluții Vizibilitate <br /> <span className="text-blue-600">Proiecte Europene {loc.name}</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium">Nu te opri doar la comunicatul de presă. Completează cerințele de vizibilitate cu pachete de print profesional.</p>
                        </div>
                        <Link href="/judet" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs">
                            Vezi toate regiunile <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {signageProducts.map((p: any) => (
                            <Link href={`/judet/${judet.slug}/${loc.slug}/${p.slug}`} key={p.id} className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="aspect-video relative rounded-2xl overflow-hidden mb-6 bg-slate-50">
                                    <Image
                                        src={p.image || p.images?.[0] || '/placeholder.png'}
                                        alt={p.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">{p.title}</h3>
                                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-4">{p.category || 'Vizibilitate'}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-blue-600 font-black text-lg">{p.price || 'De la 49 LEI'}</span>
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Local Advantage Section */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white md:col-span-2 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                                De ce suntem lideri <br /> în <span className="text-blue-500">Județul {judet.name}</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="h-1 w-12 bg-blue-500"></div>
                                    <h4 className="font-bold text-xl">Monitorizare Reală</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Fiecare comunicat publicat în {loc.name} beneficiază de linkuri active și rapoarte de monitorizare acceptate de toți consultanții de fonduri europene.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-1 w-12 bg-blue-500"></div>
                                    <h4 className="font-bold text-xl">Standarde înalte MIV</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Nu doar publicăm, ci și validăm textele pentru a ne asigura că respectă manualele de identitate vizuală la virgulă.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white flex flex-col justify-center items-center text-center shadow-xl">
                        <div className="text-5xl mb-6">🏆</div>
                        <h3 className="text-3xl font-black mb-4 leading-tight tracking-tighter">Aprobat de Auditorii de Fonduri</h3>
                        <p className="text-blue-100 font-medium mb-8">Peste 1000 de beneficiari PNRR și Regio au ales Anuntul.info pentru conformitate media.</p>
                        <Link href="/trimite-comunicat" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-blue-900/40 uppercase text-xs tracking-widest">
                            Incepe Acum
                        </Link>
                    </div>
                </div>

                {/* FAQ Localized */}
                <div className="mt-32">
                    <h2 className="text-2xl font-black text-slate-900 mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        Întrebări Frecvente - Comunicat {loc.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-black text-xl text-slate-800 mb-4 flex items-center gap-3">
                                <span className="text-blue-600 italic">01.</span>
                                Cât de repede apare în Google?
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Indexarea în {loc.name} este aproape instantanee. De obicei, link-ul comunicatului dvs. este vizibil în Google Search în termen de 30 de minute până la câteva ore de la publicare.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-black text-xl text-slate-800 mb-4 flex items-center gap-3">
                                <span className="text-blue-600 italic">02.</span>
                                Trimiteți linkurile pentru decontare?
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Da, generăm un Raport de Publicare detaliat care include URL-urile active, data și ora publicării — documentație completă pentru dosarul de plăți ADR / MIPE.</p>
                        </div>
                    </div>
                </div>

                {/* More Locations Alphabetical Grid */}
                <div className="mt-32 pt-16 border-t border-slate-100">
                    <h2 className="text-xl font-black text-slate-900 mb-10 uppercase tracking-widest text-center">Optimizări media în alte localități din {judet.name}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {(() => {
                            const allLocs = judet.localitati.filter(l => l.slug !== loc.slug);
                            const selection = [...allLocs].sort((a, b) => b.name.length - a.name.length).slice(0, 15);
                            return selection.map(otherLoc => (
                                <Link
                                    key={otherLoc.slug}
                                    href={`/judet/${judet.slug}/${otherLoc.slug}/${productSlugStr}`}
                                    className="px-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs text-slate-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all font-black text-center truncate uppercase tracking-tighter"
                                >
                                    {product.title} {otherLoc.name}
                                </Link>
                            ));
                        })()}
                    </div>
                </div>
            </main>
            <Footer />

            <Script
                id={`schema-${judetSlug}-${localitateSlug}-${productSlugStr}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": `Comunicat Presă ${product.title} - ${loc.name}`,
                            "image": productImage,
                            "description": `Servicii profesionale de vizibilitate PNRR și Program Regional: Comunicat de presă și kit complet de vizibilitate în localitatea ${loc.name}, Județul ${judet.name}. Raport de monitorizare inclus.`,
                            "brand": { "@type": "Brand", "name": "Anuntul.info" },
                            "manufacturer": { "@type": "Organization", "name": "Anuntul Media", "url": "https://anuntul.info" },
                            "offers": {
                                "@type": "Offer",
                                "priceCurrency": "RON",
                                "price": (product as any).priceBase || "150",
                                "availability": "https://schema.org/InStock",
                                "areaServed": { "@type": "City", "name": loc.name }
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": (4.8 + getSeededRandom(loc.name) * 0.15).toFixed(1),
                                "reviewCount": Math.floor(45 + getSeededRandom(judet.name) * 120)
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://anuntul.info/" },
                                { "@type": "ListItem", "position": 2, "name": "Județe", "item": "https://anuntul.info/judet" },
                                { "@type": "ListItem", "position": 3, "name": judet.name, "item": `https://anuntul.info/judet/${judet.slug}` },
                                { "@type": "ListItem", "position": 4, "name": loc.name, "item": `https://anuntul.info/judet/${judet.slug}/${loc.slug}` },
                                { "@type": "ListItem", "position": 5, "name": product.title }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
