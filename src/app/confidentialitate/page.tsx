
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Politica de Confidențialitate - Anuntul.net',
    description: 'Politica de confidențialitate și prelucrarea datelor cu caracter personal conform GDPR.',
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                        Politica de Confidențialitate
                    </h1>

                    <section style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Societatea <strong>Culoarea din Viata SRL</strong>, înregistrată la Registrul Comerțului sub numărul <strong>J2021001108100</strong>, cod unic de înregistrare <strong>44820819</strong>, funcționează în conformitate cu legile din România, respectă confidențialitatea datelor personale furnizate de persoanele vizate și se angajează să o protejeze prin respectarea prezentei Politici de confidențialitate.
                        </p>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Societatea este operator în ceea ce privește prelucrarea datelor dumneavoastră cu caracter personal, în sensul Regulamentului UE 2016/679 pentru protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și libera circulație a acestor date (Regulamentul General privind Protecția Datelor). Prezenta Politică de confidențialitate descrie informațiile cu caracter personal pe care le colectăm de la dumneavoastră sau pe care le furnizați <strong>www.anuntul.net</strong> („Platforma” noastră) și modul în care aceste informații pot fi utilizate sau divulgate de noi.
                        </p>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Politica noastră de confidențialitate nu se aplică informațiilor colectate de pe orice site terț care poate avea un link către sau este accesibil de pe Platforma noastră.
                        </p>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Vă rugăm să citiți cu atenție următoarele aspecte pentru a înțtelege politicile și practicile noastre cu privire la informațiile dumneavoastră cu caracter personal și modul în care le vom trata.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Informațiile pe care le colectăm despre dumneavoastră</h2>
                        <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Colectăm mai multe tipuri de informații de la și despre utilizatorii Platformei noastre, inclusiv, de exemplu:</p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <li>informații pe care le colectăm când navigați pe Platforma noastră, inclusiv adrese IP, cookie-uri și web beacon-uri;</li>
                            <li>nume și prenume, detalii de contact, înregistrări și copii ale corespondenței (inclusiv adrese de e-mail), în cazul în care ne contactați și accesați online serviciile firmei Culoarea din Viata SRL.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Detalii de utilizare, adrese IP, cookie-uri și alte tehnologii</h2>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <li><strong>Detalii de utilizare și adrese IP:</strong> Putem colecta informații statistice cu privire la echipamentele, acțiunile și tiparele de navigare ale utilizatorilor Platformei noastre.</li>
                            <li><strong>Cookie-uri:</strong> Utilizăm cookie-uri pentru a îmbunătăți Platforma și a oferi un serviciu mai bun.</li>
                            <li><strong>Beacon-uri web:</strong> Acestea permit colectarea de date despre utilizatori pentru statistică și securitate.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Utilizarea informațiilor</h2>
                        <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Utilizăm informațiile pe care le colectăm despre dumneavoastră pentru:</p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <li>a prezenta Platforma în mod adecvat;</li>
                            <li>a vă furniza informațiile solicitate;</li>
                            <li>a vă informa despre servicii noi;</li>
                            <li>compilarea de statistici;</li>
                            <li>securitate și îmbunătățirea Platformei.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Divulgarea informațiilor dumneavoastră</h2>
                        <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Putem divulga datele personale către terți pentru:</p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <li>respectarea legii;</li>
                            <li>aplicarea contractelor;</li>
                            <li>protejarea drepturilor firmei.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Drepturile dumneavoastră</h2>
                        <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Aveți dreptul de a solicita:</p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <li>acces la datele prelucrate;</li>
                            <li>rectificarea sau actualizarea datelor;</li>
                            <li>opoziția față de prelucrare;</li>
                            <li>retragerea consimțământului pentru marketing direct;</li>
                            <li>contestarea deciziilor automatizate;</li>
                            <li>plângere la ANSPDCP;</li>
                            <li>adresarea justiției.</li>
                        </ul>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Pentru exercitarea acestor drepturi, puteți trimite o cerere la <a href="mailto:contact@anuntul.net" style={{ color: 'var(--color-primary)' }}>contact@anuntul.net</a>.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Durata stocării</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Datele sunt păstrate maximum 2 ani, după care vor fi distruse sau anonimizate.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Modificări aduse Politicii noastre de confidențialitate</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Orice modificări ale Politicii vor fi postate pe această pagină.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>Sesizări și Contact</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                            Pentru orice îngrijorare legată de confidențialitate, întrebări sau comentarii, ne puteți contacta prin formularul de pe site sau la <a href="mailto:contact@anuntul.net" style={{ color: 'var(--color-primary)' }}>contact@anuntul.net</a>.
                        </p>
                    </section>

                </article>
            </main>
            <Footer />
        </>
    );
}
