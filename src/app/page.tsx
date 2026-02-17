import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, Bell, MapPin, Calendar, BarChart, Eye, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/lib/articles';
import { regions } from '@/lib/data';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Comunicate Presa Fonduri Europene & Materiale Publicitare - Anuntul.net',
  description: 'Publicam comunicate de presa pentru proiecte europene (PNRR, POR, POCU) si oferim materiale de vizibilitate obligatorii (autocolante, afise, panouri).',
};

export const revalidate = 3600; // Update every hour

export default async function Home() {
  const allArticles = await getAllArticles();

  const featuredArticle = allArticles[0];
  const recentArticles = allArticles.slice(1, 10);

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: '2rem' }}>

        {/* SEO Header (Hidden visually but semantic) */}
        <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          Comunicate de Presa Proiecte Europene si Materiale de Vizibilitate - Anuntul.net
        </h1>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
            alt="Proiecte Europene"
            fill
            priority
            style={{ objectFit: 'cover', width: '100%', height: '100%', zIndex: 0 }}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className={styles.heroContent}>
            <div className={styles.heroTag} style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFD700', color: '#003399' }}>
              🇪🇺 Fonduri Europene
            </div>

            <h2 className={styles.heroTitle}>
              <span style={{ color: 'white' }}>
                Publicare Comunicate & Kituri de Vizibilitate
              </span>
            </h2>

            <p className={styles.heroExcerpt}>
              Asiguram publicarea obligatorie a comunicatelor de presa (incepere/finalizare proiect) si furnizam materialele de vizibilitate necesare (autocolante, afise, panouri) pentru proiectele PNRR, POR, POCU.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/trimite-comunicat" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Publica Comunicat Acum
              </Link>
              <Link href="/seap" className="btn btn-outline" style={{ marginTop: '1rem', color: 'white', borderColor: 'white' }}>
                Vezi Oferta Completa
              </Link>
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
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>17.250</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Vizitatori unici</div>
              <div style={{ fontSize: '0.8rem', color: '#999' }}>pe lună</div>
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
