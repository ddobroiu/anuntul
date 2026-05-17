import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, CheckCircle2, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
    title: 'IQUAL TECH SRL - Finalizare Proiect Digitalizare PNRR - Sistem Radio',
    description: 'Finalizarea proiectului "Sistem digital pentru performanța studiilor radio și managementul companiei IQUAL TECH SRL" finanțat prin PNRR. Investiție în transformare digitală și eficiență operațională.',
    keywords: ['IQUAL TECH', 'digitalizare PNRR', 'sistem radio digital', 'ERP CRM', 'transformare digitală'],
    alternates: {
        canonical: 'https://anuntul.info/iqual-tech-digitalizare'
    }
};

export default function IQualTechPage() {
    const breadcrumbItems = [
        { name: 'Home', item: '/' },
        { name: 'Comunicate', item: '/comunicate' },
        { name: 'IQUAL TECH - Finalizare Proiect', item: '/iqual-tech-digitalizare' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
            <BreadcrumbSchema items={breadcrumbItems} />
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 lg:px-8 border-b-4 border-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-start gap-6">
                        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
                            <CheckCircle2 size={18} className="text-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">Proiect Finalizat</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            SISTEM DIGITAL PENTRU PERFORMANȚA STUDIILOR RADIO ȘI MANAGEMENTUL COMPANIEI
                            <span className="block text-primary mt-2">IQUAL TECH SRL - DIGITALIZAREA IMM / PNRR</span>
                        </h1>
                        
                        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                            Finalizarea cu succes a activităților proiectului de digitalizare finanțat prin Planul Național de Redresare și Reziliență (PNRR), cu investiție în transformare digitală, eficiență operațională și modernizare prezență online.
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
                
                {/* Key Info Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contract Finanțare</div>
                        <p className="text-lg font-bold text-slate-900">210/RUE5589/C9/I3</p>
                        <p className="text-sm text-slate-600 mt-1">Data: 21.07.2024</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Durata Proiect</div>
                        <p className="text-lg font-bold text-slate-900">24 luni</p>
                        <p className="text-sm text-slate-600 mt-1">01.07.2024 - 30.06.2026</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Program Finanțare</div>
                        <p className="text-lg font-bold text-slate-900">PNRR / C9 / MIPE</p>
                        <p className="text-sm text-slate-600 mt-1">Digitalizarea IMM-urilor</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 prose prose-lg max-w-none">
                        
                        <h2 id="detalii-proiect" className="text-3xl font-black text-slate-900 border-b-4 border-primary pb-4 mb-8">Anunțul de Finalizare</h2>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                            <p className="text-slate-900 font-bold mb-4">
                                IQUAL TECH SRL în calitate de beneficiar, anunță finalizarea activităților proiectului:
                            </p>
                            <p className="text-slate-800 italic">
                                „Sistem digital pentru performanța studiilor radio și pentru managementul companiei IQUAL TECH SRL - Digitalizarea IMM/ PNRR"
                            </p>
                        </div>

                        <p className="text-slate-800 leading-relaxed mb-6">
                            Proiectul este finanțat prin <strong>Planul Național de Redresare și Reziliență</strong>, în baza Contractului de finanțare nr. <strong>210/RUE5589/C9/I3</strong> din <strong>21.07.2024</strong>, aferent apelului <strong>PNRR/2022/C9/MIPE/I3/Digitalizarea IMM-urilor</strong> - grant de până la 100.000 euro pe întreprindere care să sprijine IMM-urile în adoptarea tehnologiilor digitale.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Status Proiect</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Au fost <strong>finalizate activitățile și achizițiile</strong> aferente proiectului</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Realizată <strong>recepția și punerea în funcțiune</strong> a bunurilor și serviciilor contractate</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Finalizate <strong>activitățile de demonstrare</strong> a îndeplinirii obiectivelor de digitalizare</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Obiective Proiect</h3>
                        
                        <div className="bg-slate-50 p-6 rounded-lg mb-8">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">Obiectiv General:</h4>
                            <p className="text-slate-800">
                                Creșterea capacității și competitivității companiei IQUAL TECH SRL prin adaptarea activității la realitățile digitale și prin utilizarea tehnologiilor digitale în procesele operaționale.
                            </p>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/20">
                            <h4 className="font-bold text-slate-900 mb-4 text-lg">Obiective Specifice:</h4>
                            <ul className="space-y-2 text-slate-800">
                                <li>✓ Adoptarea soluțiilor de digitalizare pentru managementul companiei</li>
                                <li>✓ Eficientizarea elaborării studiilor radio și a hărților de acoperire RF</li>
                                <li>✓ Modernizarea prezenței online a companiei</li>
                                <li>✓ Creșterea intensității digitale conform criteriilor DESI asumate prin proiect</li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rezultate Obținute</h3>
                        <p className="text-slate-800 leading-relaxed mb-6">
                            Prin proiect au fost implementate <strong>tehnologii digitale reprezentate de:</strong>
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Soluții hardware TIC</strong> - Echipamente pentru suport IT și procesare date</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Sistem ERP/CRM</strong> - Platformă integrată pentru managementul companiei</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Aplicație software proprietară</strong> - Pentru proiectare și planificare sisteme/rețele radio/CAD/GIS</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Servicii de configurare și îmbunătățire website</strong> - Modernizare prezență online</span>
                            </li>
                        </ul>

                        <p className="text-slate-800 leading-relaxed bg-slate-50 p-6 rounded-lg border-l-4 border-primary">
                            <strong>Impactul investiției:</strong> Contribuie la transformarea digitală a activității companiei și la îmbunătățirea eficienței operaționale. Proiectul a creat premisele pentru creșterea productivității, optimizarea costurilor operaționale și accesarea de noi oportunități de piață prin utilizarea tehnologiilor digitale avansate.
                        </p>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        
                        {/* Financial Summary */}
                        <div className="bg-slate-900 text-white p-8 rounded-lg mb-8 sticky top-24">
                            <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-primary/30 pb-4">Valori Financiare</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Finanțare PNRR</div>
                                    <div className="text-3xl font-bold text-primary">187.457,46</div>
                                    <div className="text-xs text-slate-400">lei</div>
                                </div>

                                <div className="border-t border-slate-700 pt-4">
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Cofinanțare Beneficiar</div>
                                    <div className="text-2xl font-bold text-slate-100">140.160,60</div>
                                    <div className="text-xs text-slate-400">lei</div>
                                </div>

                                <div className="border-t border-slate-700 pt-4">
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Valoare Totală Proiect</div>
                                    <div className="text-2xl font-bold text-slate-100">327.618,06</div>
                                    <div className="text-xs text-slate-400">lei</div>
                                </div>

                                <div className="border-t border-slate-700 pt-4">
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Valoare Neeligibilă</div>
                                    <div className="text-xl font-bold text-slate-400">15.573,40</div>
                                    <div className="text-xs text-slate-400">lei</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div id="contact" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Date Contact Beneficiar</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Companie</div>
                                    <p className="font-bold text-slate-900">IQUAL TECH SRL</p>
                                </div>

                                <div>
                                    <div className="flex items-start gap-2 text-slate-800">
                                        <MapPin size={18} className="flex-shrink-0 mt-1 text-primary" />
                                        <div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-1">Sediu Social</div>
                                            <p className="text-sm">Șos. Pantelimon nr. 350, bl. 4, sc. 5, et. 9, ap. 195, sector 2, București</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start gap-2 text-slate-800">
                                        <MapPin size={18} className="flex-shrink-0 mt-1 text-primary" />
                                        <div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-1">Loc de Implementare</div>
                                            <p className="text-sm">str. Dobrogeanu Gherea nr. 76, Corp C3, etaj 1, București</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center gap-2 text-slate-800 mb-3">
                                        <Phone size={18} className="text-primary flex-shrink-0" />
                                        <a href="tel:0745126856" className="font-bold hover:text-primary transition-colors">0745 126 856</a>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-slate-800 mb-3">
                                        <Mail size={18} className="text-primary flex-shrink-0" />
                                        <a href="mailto:iqt@iqt.ro" className="font-bold hover:text-primary transition-colors">iqt@iqt.ro</a>
                                    </div>

                                    <div className="flex items-start gap-2 text-slate-800">
                                        <Globe size={18} className="text-primary flex-shrink-0 mt-1" />
                                        <a href="https://www.iqt.ro" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition-colors">www.iqt.ro</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t">
                                <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Manager Proiect</div>
                                <p className="font-bold text-slate-900">Laurențiu-Gabriel Militaru</p>
                            </div>
                        </div>

                        {/* Communication Box */}
                        <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                            <h3 className="font-black text-slate-900 mb-3">Documentație Disponibilă</h3>
                            <ul className="space-y-2 text-sm text-slate-800">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Comunicat de presă official
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Dovada finalizării proiect
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Date de audit și conformitate
                                </li>
                            </ul>
                            
                            <Link href="/comunicate" className="block mt-6 bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center transition-colors uppercase tracking-wide text-sm">
                                Înapoi la Comunicate
                            </Link>
                        </div>

                    </div>

                </div>

                {/* Additional Info Section */}
                <section className="mt-16 pt-16 border-t-2 border-slate-200">
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Información despre Program PNRR</h2>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200">
                        <p className="text-slate-800 leading-relaxed mb-4">
                            Planul Național de Redresare și Reziliență (PNRR) este instrumentul principal de finanțare a reformelor și investițiilor necesare pentru redresarea și reziliența economiei României după pandemia COVID-19. Apelul PNRR/2022/C9/MIPE/I3 - Digitalizarea IMM-urilor sprijină companiile mici și mijlocii în transformarea digitală, prin finanțări de până la 100.000 euro per beneficiar.
                        </p>
                        <p className="text-slate-800 leading-relaxed">
                            Proiectul IQUAL TECH SRL se aliniază cu prioritățile europene de transformare digitală și contribuie la creșterea competitivității economice prin implementarea de soluții digitale avansate în cadrul operațiunilor companiei.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
