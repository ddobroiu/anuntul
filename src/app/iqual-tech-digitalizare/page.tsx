import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, CheckCircle2, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
    title: 'IQUAL TECH SRL - Finalizare Proiect Digitalizare PNRR - Sistem Radio',
    description: 'Finalizarea proiectului "Sistem digital pentru performan╚¢a studiilor radio ╚Öi managementul companiei IQUAL TECH SRL" finan╚¢at prin PNRR. Investi╚¢ie ├«n transformare digital─â ╚Öi eficien╚¢─â opera╚¢ional─â.',
    keywords: ['IQUAL TECH', 'digitalizare PNRR', 'sistem radio digital', 'ERP CRM', 'transformare digital─â'],
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
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                            <CheckCircle2 size={18} className="text-red-300" />
                            <span className="text-sm font-bold uppercase tracking-widest text-white">Proiect Finalizat</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                            SISTEM DIGITAL PENTRU PERFORMAN╚ÜA STUDIILOR RADIO ╚ÿI MANAGEMENTUL COMPANIEI
                            <span className="block text-red-300 mt-2">IQUAL TECH SRL - DIGITALIZAREA IMM / PNRR</span>
                        </h1>
                        
                        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                            Finalizarea cu succes a activit─â╚¢ilor proiectului de digitalizare finan╚¢at prin Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â (PNRR), cu investi╚¢ie ├«n transformare digital─â, eficien╚¢─â opera╚¢ional─â ╚Öi modernizare prezen╚¢─â online.
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
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contract Finan╚¢are</div>
                        <p className="text-lg font-bold text-slate-900">210/RUE5589/C9/I3</p>
                        <p className="text-sm text-slate-600 mt-1">Data: 21.07.2024</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Durata Proiect</div>
                        <p className="text-lg font-bold text-slate-900">24 luni</p>
                        <p className="text-sm text-slate-600 mt-1">01.07.2024 - 30.06.2026</p>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Program Finan╚¢are</div>
                        <p className="text-lg font-bold text-slate-900">PNRR / C9 / MIPE</p>
                        <p className="text-sm text-slate-600 mt-1">Digitalizarea IMM-urilor</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 prose prose-lg max-w-none">
                        
                        <h2 id="detalii-proiect" className="text-3xl font-black text-slate-900 border-b-4 border-primary pb-4 mb-8">Anun╚¢ul de Finalizare</h2>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                            <p className="text-slate-900 font-bold mb-4">
                                IQUAL TECH SRL ├«n calitate de beneficiar, anun╚¢─â finalizarea activit─â╚¢ilor proiectului:
                            </p>
                            <p className="text-slate-800 italic">
                                ΓÇ₧Sistem digital pentru performan╚¢a studiilor radio ╚Öi pentru managementul companiei IQUAL TECH SRL - Digitalizarea IMM/ PNRR"
                            </p>
                        </div>

                        <p className="text-slate-800 leading-relaxed mb-6">
                            Proiectul este finan╚¢at prin <strong>Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â</strong>, ├«n baza Contractului de finan╚¢are nr. <strong>210/RUE5589/C9/I3</strong> din <strong>21.07.2024</strong>, aferent apelului <strong>PNRR/2022/C9/MIPE/I3/Digitalizarea IMM-urilor</strong> - grant de p├ón─â la 100.000 euro pe ├«ntreprindere care s─â sprijine IMM-urile ├«n adoptarea tehnologiilor digitale.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Status Proiect</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Au fost <strong>finalizate activit─â╚¢ile ╚Öi achizi╚¢iile</strong> aferente proiectului</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Realizat─â <strong>recep╚¢ia ╚Öi punerea ├«n func╚¢iune</strong> a bunurilor ╚Öi serviciilor contractate</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800">Finalizate <strong>activit─â╚¢ile de demonstrare</strong> a ├«ndeplinirii obiectivelor de digitalizare</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Obiective Proiect</h3>
                        
                        <div className="bg-slate-50 p-6 rounded-lg mb-8">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">Obiectiv General:</h4>
                            <p className="text-slate-800">
                                Cre╚Öterea capacit─â╚¢ii ╚Öi competitivit─â╚¢ii companiei IQUAL TECH SRL prin adaptarea activit─â╚¢ii la realit─â╚¢ile digitale ╚Öi prin utilizarea tehnologiilor digitale ├«n procesele opera╚¢ionale.
                            </p>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/20">
                            <h4 className="font-bold text-slate-900 mb-4 text-lg">Obiective Specifice:</h4>
                            <ul className="space-y-2 text-slate-800">
                                <li>Γ£ô Adoptarea solu╚¢iilor de digitalizare pentru managementul companiei</li>
                                <li>Γ£ô Eficientizarea elabor─ârii studiilor radio ╚Öi a h─âr╚¢ilor de acoperire RF</li>
                                <li>Γ£ô Modernizarea prezen╚¢ei online a companiei</li>
                                <li>Γ£ô Cre╚Öterea intensit─â╚¢ii digitale conform criteriilor DESI asumate prin proiect</li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rezultate Ob╚¢inute</h3>
                        <p className="text-slate-800 leading-relaxed mb-6">
                            Prin proiect au fost implementate <strong>tehnologii digitale reprezentate de:</strong>
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Solu╚¢ii hardware TIC</strong> - Echipamente pentru suport IT ╚Öi procesare date</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Sistem ERP/CRM</strong> - Platform─â integrat─â pentru managementul companiei</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Aplica╚¢ie software proprietar─â</strong> - Pentru proiectare ╚Öi planificare sisteme/re╚¢ele radio/CAD/GIS</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-800"><strong>Servicii de configurare ╚Öi ├«mbun─ât─â╚¢ire website</strong> - Modernizare prezen╚¢─â online</span>
                            </li>
                        </ul>

                        <p className="text-slate-800 leading-relaxed bg-slate-50 p-6 rounded-lg border-l-4 border-primary">
                            <strong>Impactul investi╚¢iei:</strong> Contribuie la transformarea digital─â a activit─â╚¢ii companiei ╚Öi la ├«mbun─ât─â╚¢irea eficien╚¢ei opera╚¢ionale. Proiectul a creat premisele pentru cre╚Öterea productivit─â╚¢ii, optimizarea costurilor opera╚¢ionale ╚Öi accesarea de noi oportunit─â╚¢i de pia╚¢─â prin utilizarea tehnologiilor digitale avansate.
                        </p>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        
                        {/* Financial Summary */}
                        <div className="bg-slate-900 text-white p-8 rounded-lg mb-8 sticky top-24">
                            <ul className="space-y-4 text-slate-100 leading-relaxed">
                                <li>Valoarea total─â a proiectului 187.457,46 lei</li>
                                <li>Valoarea maxim─â a finan╚¢─ârii nerambursabile din PNRR 140.160,60 lei</li>
                                <li>Cofinan╚¢are beneficiar aferent─â cheltuielilor eligibile 15.573,40 lei</li>
                                <li>Valoarea total─â neeligibil─â 31.723,46 lei</li>
                            </ul>
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
                                            <p className="text-sm">╚ÿos. Pantelimon nr. 350, bl. 4, sc. 5, et. 9, ap. 195, sector 2, Bucure╚Öti</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start gap-2 text-slate-800">
                                        <MapPin size={18} className="flex-shrink-0 mt-1 text-primary" />
                                        <div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-1">Loc de Implementare</div>
                                            <p className="text-sm">str. Dobrogeanu Gherea nr. 76, Corp C3, etaj 1, Bucure╚Öti</p>
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
                                <p className="font-bold text-slate-900">Lauren╚¢iu-Gabriel Militaru</p>
                            </div>
                        </div>

                        {/* Communication Box */}
                        <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                            <h3 className="font-black text-slate-900 mb-3">Documenta╚¢ie Disponibil─â</h3>
                            <ul className="space-y-2 text-sm text-slate-800">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Comunicat de pres─â official
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Dovada finaliz─ârii proiect
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                    Date de audit ╚Öi conformitate
                                </li>
                            </ul>
                            
                            <Link href="/comunicate" className="block mt-6 bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center transition-colors uppercase tracking-wide text-sm">
                                ├Änapoi la Comunicate
                            </Link>
                        </div>

                    </div>

                </div>

                {/* Additional Info Section */}
                <section className="mt-16 pt-16 border-t-2 border-slate-200">
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Informaci├│n despre Program PNRR</h2>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200">
                        <p className="text-slate-800 leading-relaxed mb-4">
                            Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â (PNRR) este instrumentul principal de finan╚¢are a reformelor ╚Öi investi╚¢iilor necesare pentru redresarea ╚Öi rezilien╚¢a economiei Rom├óniei dup─â pandemia COVID-19. Apelul PNRR/2022/C9/MIPE/I3 - Digitalizarea IMM-urilor sprijin─â companiile mici ╚Öi mijlocii ├«n transformarea digital─â, prin finan╚¢─âri de p├ón─â la 100.000 euro per beneficiar.
                        </p>
                        <p className="text-slate-800 leading-relaxed">
                            Proiectul IQUAL TECH SRL se aliniaz─â cu priorit─â╚¢ile europene de transformare digital─â ╚Öi contribuie la cre╚Öterea competitivit─â╚¢ii economice prin implementarea de solu╚¢ii digitale avansate ├«n cadrul opera╚¢iunilor companiei.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
