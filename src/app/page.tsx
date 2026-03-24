import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, MapPin, Calendar, BarChart, Eye, Clock, Users, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/lib/articles';
import { regions } from '@/lib/data';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Comunicate Presă Proiecte Europene (PNRR, POR) - Anuntul.net',
  description: 'Publicăm comunicate de presă obligatorii pentru proiecte finanțate prin fonduri europene (PNRR, POR, POCU). Vizibilitate garantată și conformitate MIV.',
  alternates: {
    canonical: 'https://anuntul.net',
  },
};

export const revalidate = 3600; // Update every hour

export default async function Home() {
  const allArticles = await getAllArticles();

  // Handle case where no articles are returned (e.g. RSS fetch failed and no local data)
  const hasArticles = allArticles && allArticles.length > 0;

  if (!hasArticles) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2.5rem] flex items-center justify-center mb-8 animate-pulse shadow-xl shadow-indigo-100/50">
            <Newspaper size={48} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Nu există știri momentan.</h1>
          <p className="text-slate-500 text-xl font-medium max-w-lg leading-relaxed">Platforma noastră se actualizează automat. Reveniți mai târziu pentru noutăți din toată țara.</p>
          <Link href="/contact" className="mt-10 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl">Contactează-ne</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const recentArticles = allArticles.slice(0, 6);

  const jsonLds = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Anuntul.net",
      "url": "https://anuntul.net",
      "logo": "https://anuntul.net/favicon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+40-750-473-111",
        "contactType": "customer service",
        "areaServed": "RO",
        "availableLanguage": "Romanian"
      },
      "description": "Platforma #1 pentru publicarea comunicatelor de presa fonduri europene si materiale de vizibilitate PNRR, POR, POCU.",
      "sameAs": [
        "https://www.facebook.com/anuntul.net"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://anuntul.net",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://anuntul.net/cauta?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', item: '/' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLds) }}
      />
      <Header />

      <main className="pt-24 overflow-hidden">
        {/* SEO Header (Hidden visually but semantic) */}
        <h1 className="visually-hidden">
          Comunicate de Presa si Stiri Nationale - Anuntul.net
        </h1>

        {/* 1. HERO SECTION - PREMIUM MODERN LAYOUT */}
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden isolate">
          <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-indigo-50/50 blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-slate-50/40 blur-[100px] -z-10 pointer-events-none"></div>

          <div className="container px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
              
              <div className="flex-1 text-center lg:text-left animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 font-black text-[10px] uppercase tracking-[0.2em] mb-10 shadow-sm border border-indigo-100/50">
                  <ShieldCheck size={14} />
                  Lider Publicitate Fonduri EU
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                  Publicare rapidă <br />
                  <span className="text-indigo-600 relative inline-block">
                    Comunicate Presă
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-100 -z-10 rounded-full"></span>
                  </span> <br />
                  PNRR / POR / POCU
                </h2>
                
                <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-12">
                  Specialiști în vizibilitatea proiectelor europene. Asigurăm <strong className="text-slate-900 font-extrabold underline decoration-indigo-500 underline-offset-8">conformitate 100%</strong> cu Manualele de Identitate Vizuală (MIV).
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                  <Link 
                    href="/trimite-comunicat" 
                    className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-lg shadow-2xl shadow-indigo-300/40 hover:bg-slate-900 hover:-translate-y-1.5 transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest"
                  >
                    Trimite Comunicat <ArrowRight size={20} />
                  </Link>
                  <Link 
                    href="/comunicate" 
                    className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border border-slate-200 rounded-[1.5rem] font-black text-lg hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-sm text-center uppercase tracking-widest"
                  >
                    Vezi Anunțuri
                  </Link>
                </div>

                {/* Trust Metrics */}
                <div className="mt-20 flex flex-wrap justify-center lg:justify-start items-center gap-12">
                  <div className="flex flex-col items-center lg:items-start group transition-all">
                    <span className="text-3xl font-black text-slate-900 group-hover:text-indigo-600 tracking-tight transition-colors">3.000+</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Unici / Lună</span>
                  </div>
                  <div className="w-px h-10 bg-slate-100 hidden sm:block"></div>
                  <div className="flex flex-col items-center lg:items-start group transition-all">
                    <span className="text-3xl font-black text-slate-900 group-hover:text-indigo-600 tracking-tight transition-colors">100%</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Rată Aprobare</span>
                  </div>
                  <div className="w-px h-10 bg-slate-100 hidden sm:block"></div>
                  <div className="flex flex-col items-center lg:items-start group transition-all">
                    <span className="text-3xl font-black text-slate-900 group-hover:text-indigo-600 tracking-tight transition-colors">7 Min.</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Timp Mediu Site</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] md:aspect-square relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 group">
                   <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                    alt="Publicare Comunicate Presă Proiecte Europene"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-10 right-10 flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-white animate-bounce-slow">
                    <Zap className="text-amber-500 mb-1" size={32} strokeWidth={2.5} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 leading-none">Viteză Maximă</span>
                    <span className="text-lg font-black text-indigo-600 tracking-tight leading-none">Publicare 1h</span>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12 text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest bg-indigo-600/80 backdrop-blur-md py-1.5 px-3 rounded-full inline-block mb-4">Garantat MIPE / MIV</div>
                      <h3 className="text-2xl font-black leading-tight tracking-tight uppercase italic">Audiență de peste 3.000 de unici lunar disponibilă pentru audit.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES FEATURE CARDS */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto animate-fade-in">
              <p className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Servicii Complete Vizibilitate</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6 italic uppercase">Securizăm finanțarea proiectului tău prin publicitate legală</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: "Comunicate Presă", desc: "Redactăm și publicăm comunicate de începere și finalizare proiect conform MIV. Oferim dovadă de publicare imediată.", icon: Newspaper, color: "indigo" },
                  { title: "Kit Vizibilitate", desc: "Pachete integrate cu Anuntul.net și EuPrint.ro: afișe, autocolante și panouri temporare livrate rapid.", icon: Star, color: "blue" },
                  { title: "Dovadă Trafic", desc: "Singura platformă care oferă rapoarte de audiență detaliate (GA4) pentru a îndeplini criteriile de vizibilitate MIPE.", icon: BarChart, color: "rose" }
               ].map((s, i) => (
                 <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:border-indigo-400 hover:-translate-y-3 transition-all duration-500 group flex flex-col">
                    <div className={`w-16 h-16 bg-${s.color}-50 text-${s.color}-600 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm shadow-indigo-100`}>
                      <s.icon size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight italic">{s.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">{s.desc}</p>
                    <Link href="/trimite-comunicat" className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">Află Mai Multe <ArrowRight size={16} /></Link>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 3. LATEST NEWS GRID */}
        <section className="py-32">
          <div className="container px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fade-in">
              <div className="max-w-2xl">
                 <p className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Actualitate & Transparență</p>
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase italic">Ultimele știri sociale & economice</h2>
              </div>
              <Link href="/stiri" className="inline-flex items-center gap-3 font-black text-indigo-600 border-b-2 border-indigo-600 pb-2 hover:gap-6 transition-all uppercase tracking-widest text-sm">
                 Vezi tot arhiva <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recentArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. REGIONS NAVIGATION (GEOGRAPHIC FOCUS) */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden isolate mx-6 rounded-[4rem] mb-12">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#4f46e522_0%,transparent_70%)] -z-10"></div>
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 opacity-5 rounded-full blur-[150px] -z-10"></div>
           
           <div className="container px-6 relative z-10 text-center">
              <div className="max-w-3xl mx-auto mb-20">
                 <p className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-6">Distribuție Națională</p>
                 <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] italic uppercase">Acoperire totală <br /> <span className="text-indigo-400">în toate regiunile</span></h2>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed">Publicăm anunțuri specifice pentru fiecare regiune administrativă a României, asigurând relevanța locală cerută de autoritățile de management POR și ADR.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {regions.map((region) => (
                  <Link 
                    key={region} 
                    href={`/regiune/${region.toLowerCase()}`} 
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/15 hover:border-indigo-500 transition-all hover:scale-110"
                  >
                    {region}
                  </Link>
                ))}
              </div>
           </div>
        </section>

        {/* 5. STATS COUNTERS - DATA TRUST */}
        <section className="py-32">
          <div className="container px-6">
            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div className="max-w-md">
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 italic uppercase leading-tight">Anuntul.net în cifre. Transparență totală.</h2>
                 <p className="text-slate-500 font-medium leading-relaxed">Suntem onorați să fim platforma favorită a mii de beneficiari de fonduri europene pentru comunicare transparentă.</p>
              </div>

              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                 {[
                   { val: "575", label: "Vizite Zilnice", icon: Calendar },
                   { val: "3000+", label: "Unici Lunar", icon: BarChart, highlight: true },
                   { val: "50K+", label: "Articole Citite", icon: Eye },
                   { val: "24/7", label: "Monitorizare", icon: Clock },
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center">
                      <div className="text-3xl lg:text-5xl font-black text-indigo-600 mb-3 tracking-tighter">{stat.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">{stat.label}</div>
                      {stat.highlight && <div className="text-[8px] font-black text-rose-500 mt-2 uppercase tracking-tight">Dovadă Disponibilă</div>}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL HIGH IMPACT CTA */}
        <section className="container px-6 mb-24">
           <div className="relative rounded-[4rem] overflow-hidden bg-white p-16 md:p-32 text-center shadow-2xl border border-slate-100 isolate">
              <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-indigo-50 via-white to-slate-50"></div>
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-black text-[10px] uppercase tracking-widest mb-10 border border-amber-100 shadow-sm">
                   <Star size={14} fill="currentColor" />
                   Cea mai rapidă publicare din România
                 </div>
                 <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 text-slate-900 leading-[0.9] uppercase italic">
                    Publică comunicatul <br /> 
                    <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">chiar azi.</span>
                 </h2>
                 <p className="text-slate-500 text-xl font-medium mb-16 leading-relaxed">
                   Nu risca decontarea proiectului din cauza vizibilității precare. Anuntul.net îți oferă suportul legal de care ai nevoie, instant.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/trimite-comunicat" className="px-12 py-6 bg-slate-900 text-white font-black rounded-2xl transition-all hover:bg-indigo-600 hover:-translate-y-2 uppercase tracking-widest text-sm shadow-2xl">Trimite Comunicat Acum</Link>
                    <Link href="/contact" className="px-12 py-6 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl transition-all hover:bg-slate-50 uppercase tracking-widest text-sm shadow-sm inline-flex items-center gap-3">Contactează-ne <PhoneCall size={18} /></Link>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PhoneCall({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
