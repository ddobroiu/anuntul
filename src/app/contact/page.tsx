'use client';

import { useState, useTransition } from 'react';
import { Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sendContactEmail } from '@/app/actions';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            const result = await sendContactEmail(formData);
            if (result.success) {
                setSubmitted(true);
            } else if (result.error) {
                setError(typeof result.error === 'string' ? result.error : 'An unexpected error occurred');
            } else {
                setError('An unexpected error occurred');
            }
        });
    };

    return (
        <>
            <Header />
            <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, var(--color-primary), #2563eb)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Contactează-ne
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Ai o întrebare, o sugestie sau vrei să colaborăm? Suntem aici să te ajutăm.
                        Completează formularul sau folosește datele de contact directe.
                    </p>
                </div>

                <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>

                    {/* Contact Information Column */}
                    <div>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', borderBottom: '2px solid var(--color-bg-alt)', paddingBottom: '1rem' }}>
                                Informații de Contact
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                                        color: 'var(--color-primary)',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Email</h3>
                                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Pentru orice întrebări generale:</p>
                                        <a href="mailto:contact@anuntul.net" style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '1.1rem' }}>
                                            contact@anuntul.net
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        backgroundColor: 'rgba(37, 211, 102, 0.1)',
                                        color: '#25D366',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>WhatsApp & Telefon</h3>
                                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Luni - Vineri, 09:00 - 17:00</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <a href="tel:0750473111" style={{ color: 'var(--color-text)', fontWeight: '500' }}>0750 473 111</a>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                        color: '#3b82f6',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Adresă Administrativă</h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            Culoarea din Viata SRL<br />
                                            București, România<br />
                                            J2021001108100 | CUI: 44820819
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Ești interesat de publicitate?</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                                Oferim spații publicitare și pachete personalizate pentru promovarea afacerii tale pe platforma noastră.
                            </p>
                            <a href="/publicitate" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Vezi Oferta de Publicitate
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--color-border)'
                        }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <div style={{
                                        width: '80px', height: '80px',
                                        backgroundColor: '#dcfce7',
                                        color: '#16a34a',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1.5rem auto'
                                    }}>
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text)' }}>Mesaj Trimis!</h2>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                        Mulțumim că ne-ai contactat. Un membru al echipei noastre îți va răspunde în cel mai scurt timp posibil.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn btn-primary"
                                    >
                                        Trimite alt mesaj
                                    </button>
                                </div>
                            ) : (
                                <form action={handleSubmit}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Trimite-ne un mesaj</h2>

                                    {error && (
                                        <div style={{
                                            backgroundColor: '#fee2e2',
                                            color: '#ef4444',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            marginBottom: '1.5rem',
                                            border: '1px solid #fecaca'
                                        }}>
                                            {error}
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)' }}>Nume Complet</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Numele tău"
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid var(--color-border)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                backgroundColor: 'var(--color-bg-alt)'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)' }}>Adresă de Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="exemplu@email.com"
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid var(--color-border)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                backgroundColor: 'var(--color-bg-alt)'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)' }}>Subiect</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid var(--color-border)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                backgroundColor: 'var(--color-bg-alt)'
                                            }}
                                        >
                                            <option value="General">Întrebare Generală</option>
                                            <option value="Publicitate">Publicitate / Parteneriat</option>
                                            <option value="Editorial">Sesizare Editorială</option>
                                            <option value="Tehnic">Problemă Tehnică</option>
                                        </select>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)' }}>Mesaj</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Scrie mesajul tău aici..."
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid var(--color-border)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                backgroundColor: 'var(--color-bg-alt)',
                                                fontFamily: 'inherit',
                                                resize: 'vertical'
                                            }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            padding: '1rem',
                                            fontSize: '1.1rem',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {isPending ? 'Se trimite...' : (
                                            <>
                                                Trimite Mesajul <Send size={20} style={{ marginLeft: '0.5rem' }} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
