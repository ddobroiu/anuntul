
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Termeni și Condiții - Anuntul.net',
    description: 'Termenii și condițiile de utilizare a platformei Anuntul.net, politica de plată, livrare și returnare.',
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                        Termeni și Condiții
                    </h1>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Politica de plată, livrare și returnare</h2>

                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Plata publicațiilor media poate fi făcută prin transfer bancar sau cu cardul, în urma emiterii facturii proforme.
                        </p>

                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Anunțurile / informațiile de interes public vor putea fi afișate oficial pe platforma <strong>www.anuntul.net</strong> în maxim 24 de ore de la confirmarea plății aferente facturii proforme emise.
                        </p>

                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Anularea achiziției unui anunț / pachet de anunțuri comandat va putea fi făcută doar dacă acesta nu a fost publicat pe platforma <strong>www.anuntul.net</strong>.
                            Pentru anulare, beneficiarul va transmite un email la adresa <a href="mailto:contact@anuntul.net" style={{ color: 'var(--color-primary)' }}>contact@anuntul.net</a>, prin care solicită în mod expres renunțarea la cumpărare.
                        </p>

                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            În situația în care a fost achiziționat un pachet de mai multe anunțuri, iar beneficiarul a publicat deja unul dintre acestea, societatea <strong>Culoarea din viata sa SRL</strong> își rezervă dreptul de a nu restitui diferența de preț pentru anunțurile din pachet ce au rămas neconsumate.
                        </p>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
