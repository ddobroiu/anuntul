import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, MapPin, Calendar, BarChart, Eye, Clock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/lib/articles';
import { regions } from '@/lib/data';
import styles from './home.module.css';

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
      <>
        <Header />
        <main className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
          <h1>Nu exista stiri momentan.</h1>
          <p>Reveniti mai tarziu pentru noutati.</p>
        </main>
        <Footer />
      </>
    );
  }

  const recentArticles = allArticles.slice(0, 6);

  const jsonLd = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="container" style={{ paddingTop: '2rem' }}>

        {/* SEO Header (Hidden visually but semantic) */}
        <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          Comunicate de Presa si Stiri Nationale - Anuntul.net
        </h1>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="Publicare Comunicate Presă Proiecte Europene"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroContent}>
            <div className={styles.heroTag} style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#003399', color: '#FFD700' }}>
              🇪🇺 Proiecte Europene (PNRR / POR)
            </div>

            <h2 className={styles.heroTitle}>
              <span style={{ color: 'white' }}>
                Publicare Comunicate de Presă Proiecte Europene
              </span>
            </h2>

            <p className={styles.heroExcerpt}>
              Oferim servicii profesionale de publicare a comunicatelor de presă obligatorii pentru proiecte finanțate prin fonduri europene (PNRR, POR, POCU). Asigurăm conformitatea cu Manualul de Identitate Vizuală (MIV).
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontWeight: '700' }}>
                Trimite Comunicat
              </Link>
              <Link href="/comunicate" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>
                Vezi Anunțuri
              </Link>
            </div>
          </div>

          {/* Floating Trust Badge - Optimized for Mobile Overlay */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '800',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            maxWidth: '200px'
          }} className="icon-animate-bounce-slow">
            <Users size={20} className="md:w-8 md:h-8" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.1rem' }} className="md:text-2xl">3.000+</span>
              <span style={{ fontSize: '0.6rem', opacity: 0.9, fontWeight: '700', textTransform: 'uppercase' }} className="md:text-xs">Unici / Lună</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.55rem', backgroundColor: 'rgba(0,0,0,0.2)', padding: '1px 5px', borderRadius: '10px', marginTop: '3px' }} className="md:hidden">
                Dovadă Disponibilă
              </div>
              <div style={{ alignItems: 'center', gap: '4px', fontSize: '0.65rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '20px', marginTop: '4px', border: '1px solid rgba(255,255,255,0.2)' }} className="md:flex hidden">
                <div style={{ width: '5px', height: '5px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
                Dovadă Trafic Disponibilă
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-12" style={{ marginBottom: '4rem' }}>
          <div className={styles.sectionTitle}>
            <span><Newspaper size={28} style={{ marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }} /> Ultimele Stiri</span>
            <Link href="/stiri" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>Vezi toate</Link>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-1">
            {recentArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Regions Grid */}
        <section style={{ marginBottom: '4rem' }}>
          <div className={styles.sectionTitle}>
            <span><MapPin size={28} style={{ marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }} /> Stiri pe Regiuni</span>
          </div>

          <div className={styles.regionsGrid}>
            {regions.map((region) => (
              <Link key={region} href={`/regiune/${region.toLowerCase()}`} className={styles.regionCard}>
                {region}
              </Link>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section style={{ marginBottom: '4rem', backgroundColor: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-text)' }}>➡️ Anuntul.net în cifre</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>📈 Trafic și Audiență</p>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2" style={{ gap: '2rem', textAlign: 'center' }}>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto' }} className="icon-animate-bounce">
                  <Calendar size={48} />
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>575</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Vizite zilnice</div>
              <div style={{ fontSize: '0.8rem', color: '#999' }}>(în medie)</div>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto' }} className="icon-animate-pulse">
                  <BarChart size={48} />
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>3.000+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Vizitatori unici</div>
              <div style={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 'bold' }}>Dovadă trafic disponibilă</div>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto' }} className="icon-animate-swing">
                  <Eye size={48} />
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>50.000+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Articole citite</div>
              <div style={{ fontSize: '0.8rem', color: '#999' }}>pe lună</div>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 auto' }} className="icon-animate-spin">
                  <Clock size={48} />
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>7 min.</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Timp mediu</div>
              <div style={{ fontSize: '0.8rem', color: '#999' }}>pe site</div>
            </div>

          </div>
        </section>

        {/* Submission CTA */}
        <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Ai un comunicat de presa?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--color-text-muted)' }}>
            Publicam comunicate de presa pentru companii, institutii si organizatii.
            Promoveaza-ti afacerea sau evenimentul pe Anuntul.net.
          </p>
          <Link href="/trimite-comunicat" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
            Trimite Comunicat Acum
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
