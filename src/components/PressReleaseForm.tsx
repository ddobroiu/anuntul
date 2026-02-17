'use client';

import { useState, FormEvent } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';
import { categories, regions } from '@/lib/data';

export default function PressReleaseForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setSubmitted(true);
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        marginBottom: '1rem',
        display: 'block'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '500',
        color: 'var(--color-text)',
        fontSize: '0.9rem'
    };

    const groupStyle = {
        display: 'grid',
        gap: '1.5rem',
        marginBottom: '1.5rem'
    };

    if (submitted) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '3rem',
                backgroundColor: '#e8f5e9',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #c8e6c9',
                color: '#2e7d32'
            }}>
                <CheckCircle size={48} style={{ margin: '0 auto 1rem auto' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Comunicat Trimis cu Succes!</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Comunicatul tau a fost inregistrat si urmeaza sa fie verificat de echipa noastra editoriala.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                >
                    Trimite alt comunicat
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>

            <div className="md:grid-cols-2" style={{ ...groupStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div>
                    <label htmlFor="name" style={labelStyle}>Nume Prenume / Institutie</label>
                    <input
                        type="text"
                        id="name"
                        required
                        style={inputStyle}
                        placeholder="Ex: Popescu Ion / Primaria X"
                    />
                </div>

                <div>
                    <label htmlFor="email" style={labelStyle}>Email Contact</label>
                    <input
                        type="email"
                        id="email"
                        required
                        style={inputStyle}
                        placeholder="contact@email.com"
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="title" style={labelStyle}>Titlu Comunicat</label>
                <input
                    type="text"
                    id="title"
                    required
                    style={{ ...inputStyle, fontWeight: 'bold' }}
                    placeholder="Titlul comunicatului de presa..."
                />
            </div>

            <div className="md:grid-cols-2" style={{ ...groupStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div>
                    <label htmlFor="category" style={labelStyle}>Categorie</label>
                    <select
                        id="category"
                        style={{ ...inputStyle, backgroundColor: 'white' }}
                    >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="region" style={labelStyle}>Regiune</label>
                    <select
                        id="region"
                        style={{ ...inputStyle, backgroundColor: 'white' }}
                    >
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="content" style={labelStyle}>Continut Comunicat</label>
                <textarea
                    id="content"
                    rows={10}
                    required
                    style={{ ...inputStyle, fontFamily: 'inherit' }}
                    placeholder="Textul comunicatului aici..."
                ></textarea>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <label style={labelStyle}>Imagine (Optional)</label>
                <div style={{
                    border: '2px dashed var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    backgroundColor: 'var(--color-bg-alt)'
                }}>
                    <Upload size={32} style={{ margin: '0 auto 0.5rem auto', color: 'var(--color-text-muted)' }} />
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Drag & drop sau click pentru a incarca imagine</p>
                    <input type="file" style={{ display: 'none' }} accept="image/*" />
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', justifyContent: 'center', gap: '0.5rem' }}
                >
                    {isLoading ? (
                        'Se trimite...'
                    ) : (
                        <>
                            <Send size={20} /> Trimite Comunicat
                        </>
                    )}
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                    Prin trimiterea acestui formular sunteti de acord cu Termenii si Conditiile platformei.
                </p>
            </div>

        </form>
    );
}
