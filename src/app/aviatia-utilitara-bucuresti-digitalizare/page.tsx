import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, CheckCircle2, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
    title: 'AVIAȚIA UTILITARĂ BUCUREȘTI S.A. - Digitalizare IMM PNRR - Comunicat de Presă',
    description: 'Comunicat de presă PNRR: "Digitalizare IMM Aviația Utilitară București SA", proiect co-finanțat prin PNRR, Componenta C9, Investiția I3 - Digitalizarea IMM-urilor.',
    keywords: ['AVIATIA UTILITARA BUCURESTI', 'digitalizare PNRR', 'digitalizare IMM', 'PNRR Componenta C9', 'fonduri europene aviatie'],
    alternates: {
        canonical: 'https://anuntul.info/aviatia-utilitara-bucuresti-digitalizare'
    }
};

export default function AviatiaUtilitaraBucurestiPage() {
    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate', item: '/comunicate' },
        { name: 'AVIAȚIA UTILITARĂ BUCUREȘTI - Digitalizare IMM', item: '/aviatia-utilitara-bucuresti-digitalizare' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
            <BreadcrumbSchema items={breadcrumbItems} />
            <Header />

            <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 lg:px-8 border-b-4 border-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-start gap-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                            <CheckCircle2 size={18} className="text-red-300" />
                            <span className="text-sm font-bold uppercase tracking-widest text-white">Comunicat de Presă</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                            PNRR: FONDURI PENTRU ROMÂNIA MODERNĂ ȘI REFORMATĂ!
                            <span className="block text-red-300 mt-2">DIGITALIZARE IMM AVIAȚIA UTILITARĂ BUCUREȘTI SA</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                            Proiect co-finanțat din PNRR, Pilonul III: Creștere inteligentă, sustenabilă și favorabilă incluziunii, Componenta C9: Suport pentru sectorul privat, cercetare, dezvoltare și inovare, Investiția I3: Scheme de ajutor pentru sectorul privat - Digitalizarea IMM-urilor.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <a href="#detalii-proiect" className="bg-primary hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wide">
                                Vezi Detalii Proiect
                            </a>
                            <a href="#contact" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wide">
                                Contact Beneficiar
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-16">

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contract Finanțare</div>
                        <p className="text-lg font-bold text-slate-900">3117.1/i3/c9</p>
                        <p className="text-sm text-slate-600 mt-1">Data: 04.04.2025</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Perioadă Implementare</div>
                        <p className="text-lg font-bold text-slate-900">04.04.2025 - 31.12.2025</p>
                        <p className="text-sm text-slate-600 mt-1">Coordonator: MIPE</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Program Finanțare</div>
                        <p className="text-lg font-bold text-slate-900">PNRR / C9 / I3</p>
                        <p className="text-sm text-slate-600 mt-1">Digitalizarea IMM-urilor</p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 prose prose-lg max-w-none">

                        <h2 id="detalii-proiect" className="text-3xl font-black text-slate-900 border-b-4 border-primary pb-4 mb-8">Titlul Proiectului</h2>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                            <p className="text-slate-900 font-bold mb-4">
                                AVIAȚIA UTILITARĂ BUCUREȘTI S.A. în calitate de beneficiar, anunță derularea proiectului:
                            </p>
                            <p className="text-slate-800 italic">
                                „Digitalizare IMM Aviația Utilitară București SA"
                            </p>
                        </div>

                        <p className="text-slate-800 leading-relaxed mb-6">
                            Proiectul este co-finanțat din <strong>PNRR, Pilonul III: Creștere inteligentă, sustenabilă și favorabilă incluziunii</strong>, <strong>Componenta C9: Suport pentru sectorul privat, cercetare, dezvoltare și inovare</strong>, <strong>Investiția I3: Scheme de ajutor pentru sectorul privat</strong> - Digitalizarea IMM-urilor - grant de până la 100.000 euro pe întreprindere care să sprijine IMM-urile în adoptarea tehnologiilor digitale, prin contractul de finanțare nr. <strong>3117.1/i3/c9</strong> din <strong>04.04.2025</strong>, coordonator: <strong>Ministerul Investițiilor și Proiectelor Europene</strong>.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Obiectiv General</h3>
                        <div className="bg-slate-50 p-6 rounded-lg mb-8">
                            <p className="text-slate-800">
                                Proiectul vizează creșterea capacității companiei AVIAȚIA UTILITARĂ BUCUREȘTI SA prin adaptarea la realitățile digitale. În acest sens, se vor realiza achiziții de hardware TIC, soluții tehnice de automatizare, aplicații software etc. Investiția contribuie la atingerea a cel puțin 6 criterii DESI.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Obiective Specifice</h3>

                        <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/20">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-800">Modernizarea infrastructurii IT prin achiziția de echipamente hardware performante: servere, calculatoare, laptopuri, dispozitive mobile și echipamente IoT specializate pentru operațiuni aeriene</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-800">Digitalizarea proceselor administrative prin implementarea modulului ERP pentru gestiunea contractelor și aplicarea legislației actualizate specifice domeniului aviatic</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-800">Dezvoltarea prezenței digitale prin achiziționarea serviciilor de marketing online</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-800">Consolidarea securității cibernetice prin implementarea soluțiilor de protecție pentru infrastructura IT și datele companiei</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-800">Dezvoltarea competențelor digitale ale personalului prin cursuri acreditate ANC, asigurând utilizarea eficientă a noilor tehnologii</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-800 leading-relaxed bg-slate-50 p-6 rounded-lg border-l-4 border-primary">
                            <strong>Impactul investiției:</strong> Proiectul contribuie la transformarea digitală a companiei AVIAȚIA UTILITARĂ BUCUREȘTI S.A., susținând modernizarea infrastructurii IT, eficientizarea proceselor administrative, consolidarea securității cibernetice și dezvoltarea competențelor digitale ale personalului.
                        </p>

                    </div>

                    <div className="lg:col-span-1">

                        <div className="bg-slate-900 text-white p-8 rounded-lg mb-8 sticky top-24">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Valoarea Proiectului</div>
                            <ul className="space-y-4 text-slate-100 leading-relaxed">
                                <li>Valoarea totală a proiectului: <strong>256.544,44 lei</strong></li>
                                <li>Valoarea eligibilă: <strong>214.604,57 lei</strong></li>
                                <li>Valoarea nerambursabilă: <strong>193.144,11 lei</strong></li>
                            </ul>
                        </div>

                        <div id="contact" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Date Contact Beneficiar</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Companie</div>
                                    <p className="font-bold text-slate-900">AVIAȚIA UTILITARĂ BUCUREȘTI S.A.</p>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center gap-2 text-slate-800 mb-3">
                                        <Phone size={18} className="text-primary flex-shrink-0" />
                                        <a href="tel:0773793697" className="font-bold hover:text-primary transition-colors">0773 793 697</a>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-800">
                                        <Mail size={18} className="text-primary flex-shrink-0" />
                                        <a href="mailto:office@aviaaulitara.ro" className="font-bold hover:text-primary transition-colors break-all">office@aviaaulitara.ro</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t">
                                <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Perioadă Implementare</div>
                                <p className="font-bold text-slate-900">04.04.2025 - 31.12.2025</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                            <h3 className="font-black text-slate-900 mb-3">Documentație Disponibilă</h3>
                            <ul className="space-y-2 text-sm text-slate-800">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Comunicat de presă oficial
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Contract de finanțare nr. 3117.1/i3/c9
                                </li>
                            </ul>

                            <Link href="/comunicate" className="block mt-6 bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center transition-colors uppercase tracking-wide text-sm">
                                Înapoi la Comunicate
                            </Link>
                        </div>

                    </div>

                </div>

                <section className="mt-16 pt-16 border-t-2 border-slate-200">
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Informații despre Program PNRR</h2>

                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200">
                        <p className="text-slate-800 leading-relaxed mb-4">
                            Planul Național de Redresare și Reziliență (PNRR) este instrumentul principal de finanțare a reformelor și investițiilor necesare pentru redresarea și reziliența economiei României după pandemia COVID-19. În cadrul Pilonului III - Creștere inteligentă, sustenabilă și favorabilă incluziunii, Componenta C9 - Suport pentru sectorul privat, cercetare, dezvoltare și inovare, Investiția I3 sprijină companiile mici și mijlocii în transformarea digitală, prin finanțări de până la 100.000 euro per beneficiar.
                        </p>
                        <p className="text-slate-800 leading-relaxed">
                            Proiectul AVIAȚIA UTILITARĂ BUCUREȘTI S.A. se aliniază cu prioritățile europene de transformare digitală și contribuie la creșterea competitivității economice prin implementarea de soluții digitale avansate în cadrul operațiunilor companiei.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
