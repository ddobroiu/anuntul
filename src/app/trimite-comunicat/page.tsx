
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressReleaseForm from '@/components/PressReleaseForm';

export const metadata: Metadata = {
    title: 'Trimite Comunicat de Presa - Anuntul.net',
    description: 'Publica gratuit comunicate de presa si stiri din regiunea ta pe Anuntul.net',
};

export default function SubmitPage() {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                    <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Trimite un Comunicat</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Ai o stire importanta sau un anunt pentru comunitatea ta?
                        Completeaza formularul de mai jos pentru a publica articolul pe Anuntul.net.
                    </p>
                </div>

                <PressReleaseForm />
            </main>
            <Footer />
        </>
    );
}
