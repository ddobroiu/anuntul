import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Send, AlertCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/lib/articles';
import { regions } from '@/lib/data';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Anuntul.info - Ziarul Știrilor și Comunicate PNRR',
  description: 'Publicăm comunicate de presă obligatorii pentru proiecte finanțate prin fonduri europene (PNRR, POR, POCU). Știri de actualitate.',
  alternates: {
    canonical: 'https://anuntul.info',
  },
};

export const revalidate = 3600;

export default async function Home() {
  const allArticles = await getAllArticles();

  const hasArticles = allArticles && allArticles.length > 0;

  if (!hasArticles) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-4xl font-serif font-black text-black mb-4 uppercase">Nu există știri momentan.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredArticle = allArticles[0];
  const secondaryArticles = allArticles.slice(1, 5);
  const moreArticles = allArticles.slice(5, 11);

  const jsonLds = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://anuntul.info",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://anuntul.info/cauta?q={search_term_string}",
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
      
      {/* Newspaper Top Bar (Replaces SaaS Header for Home specifically or just sits below it) */}
      <Header />

      <main className="pt-4 pb-16 overflow-hidden">
        
        {/* Top Edge-to-Edge Container for Newspaper Title */}
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
           {/* The actual masthead bounds */}
           <div className="w-full border-t-[6px] border-primary border-b-2 mt-4 mb-8 text-center pb-6 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Ediția Națională Online</p>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-primary uppercase tracking-tighter leading-none mb-4">
                Anunțul<span className="text-black">.INFO</span>
              </h1>
              <p className="text-sm md:text-base font-medium font-serif border-y border-slate-200 py-2 inline-block px-8 uppercase tracking-widest text-primary">
                Ziarul Oficial pentru Comunicate de Presă & Știri Naționale
              </p>
           </div>
        </div>

        {/* Traffic & Impact Stats Banner */}
        <div className="w-full bg-black text-white py-6 mb-12 border-y-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-serif font-black text-primary">3.000+</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Vizitatori Unici / Lună</span>
                </div>
                <div className="flex flex-col items-center md:border-l border-white/20">
                    <span className="text-3xl md:text-4xl font-serif font-black text-white">100%</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Conformitate MIV</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/20">
                    <span className="text-3xl md:text-4xl font-serif font-black text-primary">SEAP</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Plată Trezorerie</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/20">
                    <span className="text-3xl md:text-4xl font-serif font-black text-white">24H</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Publicare Rapidă</span>
                </div>
            </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
            
            {/* LEFT COLUMN - MAIN NEWS (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10 border-r-0 lg:border-r border-slate-300 lg:pr-10">
              
              {/* Breaking / Featured News */}
              <article className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-primary text-white text-xs font-black uppercase px-2 py-1 tracking-widest">
                     Subiect Principal
                   </span>
                   <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                     <Clock size={12}/> {featuredArticle.date}
                   </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-black text-black leading-[1.1] hover:text-primary transition-colors">
                  <Link href={`/${featuredArticle.category === 'Comunicat' ? 'comunicate' : 'stiri'}/${featuredArticle.id}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                
                <p className="text-lg text-slate-800 font-sans leading-relaxed mt-2 border-l-4 border-primary pl-4">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="mt-4">
                   <Link href={`/${featuredArticle.category === 'Comunicat' ? 'comunicate' : 'stiri'}/${featuredArticle.id}`} className="text-sm font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1">
                     Citește Articolul Complet <ArrowRight size={14}/>
                   </Link>
                </div>
              </article>

              <div className="w-full h-px bg-slate-300 my-4"></div>

              {/* Secondary News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryArticles.map((article) => (
                  <article key={article.id} className="flex flex-col gap-3 group">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest border-b border-primary/20 pb-1 self-start">
                      {article.category}
                    </span>
                    <h3 className="text-2xl font-serif font-black text-black leading-tight group-hover:underline decoration-2 decoration-primary underline-offset-4">
                      <Link href={`/${article.category === 'Comunicat' ? 'comunicate' : 'stiri'}/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </article>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN - SIDEBAR (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              
              {/* Classified Ad / Service Promo (Newspaper Ad Style) */}
              <div className="border-4 border-primary p-6 bg-white text-center relative mt-2 shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-primary">
                  Publicitate Legală
                </div>
                <AlertCircle className="mx-auto text-primary mb-3" size={32} />
                <h3 className="text-xl font-serif font-black text-black uppercase leading-tight mb-3">
                  Ești beneficiar de fonduri europene?
                </h3>
                <p className="text-xs text-slate-700 font-semibold mb-6 leading-relaxed">
                  Evită sancțiunile! Publicăm comunicate obligatorii PNRR, Regio, POR sau alte fonduri europene. <br/>
                  <span className="text-primary font-black block mt-2">Dovadă cu +3.000 Vizitatori Unici.</span>
                </p>
                <Link href="/trimite-comunicat" className="block w-full bg-primary text-white font-black uppercase text-sm py-4 tracking-widest hover:bg-black transition-colors">
                  Trimite Comunicat Acum
                </Link>
              </div>

              {/* Region Selector */}
              <div>
                <div className="border-b-2 border-primary mb-4 pb-2 flex items-center gap-2 text-primary">
                  <MapPin size={18} />
                  <h3 className="font-serif font-black text-lg uppercase tracking-widest">Ediții Locale</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {regions.map((region) => (
                    <Link 
                      key={region} 
                      href={`/regiune/${region.toLowerCase()}`} 
                      className="text-xs font-bold uppercase tracking-wider border border-slate-300 px-3 py-1.5 hover:bg-black hover:text-white transition-colors"
                    >
                      {region}
                    </Link>
                  ))}
                </div>
              </div>

              {/* More News Digest */}
              <div>
                <div className="border-b-2 border-primary mb-4 pb-2 text-primary">
                  <h3 className="font-serif font-black text-lg uppercase tracking-widest">Pe Scurt</h3>
                </div>
                <ul className="flex flex-col gap-0 divide-y divide-slate-200">
                  {moreArticles.map((article) => (
                    <li key={article.id} className="py-4 group">
                      <Link href={`/${article.category === 'Comunicat' ? 'comunicate' : 'stiri'}/${article.id}`} className="block">
                         <span className="text-[10px] text-slate-500 font-bold uppercase mb-1 block">{article.date}</span>
                         <h4 className="font-serif font-bold text-base leading-snug group-hover:text-primary transition-colors">
                           {article.title}
                         </h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
