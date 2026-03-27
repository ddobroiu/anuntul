import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Politica de Cookies | Anuntul.info',
    description: 'Află cum Anuntul.info utilizează fișierele de tip cookie pentru a îmbunătăți experiența vizitatorilor pe site.',
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
                    <h1 className="text-4xl font-serif font-black text-slate-900 mb-8 pb-4 border-b-2 border-slate-100">
                        Politica de Cookies
                    </h1>

                    <div className="prose prose-slate max-w-none text-slate-700">
                        <p className="lead text-lg font-medium text-slate-900 mb-6">
                            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Ce sunt cookie-urile?</h2>
                        <p>
                            Cookie-urile sunt fișiere text de mici dimensiuni, stocate pe dispozitivul dumneavoastră (computer, tabletă, smartphone) atunci când vizitați site-ul nostru, <strong>Anuntul.info</strong>. Acestea au rolul de a îmbunătăți funcționalitatea site-ului și de a ne ajuta să înțelegem modul în care vizitatorii interacționează cu conținutul nostru, inclusiv cu formularele de solicitare pentru publicarea anunțurilor PNRR sau SEAP.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Cum folosim cookie-urile?</h2>
                        <p>
                            Utilizăm cookie-uri pentru următoarele scopuri principale:
                        </p>
                        <ul>
                            <li><strong>Cookie-uri Strict Necesare:</strong> Aceste cookie-uri sunt esențiale pentru ca site-ul nostru să funcționeze corect, permițându-vă să navigați și să utilizați funcțiile de bază, precum completarea formularelor de contact. Acestea nu memorează informații identificabile.</li>
                            <li><strong>Cookie-uri de Performanță și Analiză:</strong> Ne ajută să înțelegem cum folosiți site-ul nostru, pentru a îmbunătăți structura și conținutul. De exemplu, aflăm ce pagini (ex: ghiduri SEAP, județe) sunt cele mai populare.</li>
                            <li><strong>Cookie-uri de Securitate:</strong> Utilizate pentru a proteja atât datele dvs. cât și platforma împotriva spam-ului și atacurilor externe la momentul depunerii documentelor pentru MIV.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Cookie-uri de Terță Parte</h2>
                        <p>
                            Pentru a asigura calitatea analiticelor noastre vizuale, este posibil să utilizăm terțe părți (cum ar fi instrumente de monitorizare a traficului gen Google Analytics). Vă garantăm însă dovada acelor 3.000 de vizitatori care constituie auditarea obligatorie strict folosind date depersonalizate, conforme cu reglementările de protecție a datelor (GDPR).
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Gestionarea și ștergerea cookie-urilor</h2>
                        <p>
                            În principiu, browserele sunt setate inițial pentru a accepta cookie-uri. Puteți modifica setările browserului dvs. pentru a respinge cookie-urile sau pentru a vă anunța atunci când un cookie este trimis.
                        </p>
                        <p>
                            Vă rugăm să rețineți că dacă refuzați sau dezactivați cookie-urile necesare, unele funcții ale platformei noastre legate de generarea rapoartelor SEAP ar putea să nu funcționeze la parametri optimi.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact</h2>
                        <p>
                            Dacă aveți întrebări referitoare la această Politică de Cookies, vă rugăm să ne contactați la adresa: <strong>contact@anuntul.info</strong>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
