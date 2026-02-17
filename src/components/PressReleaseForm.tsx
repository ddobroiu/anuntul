'use client';

import { useState, useRef, useTransition, useEffect } from 'react';
import { Upload, Send, CheckCircle, PlusCircle, CreditCard } from 'lucide-react';
import { sendPressReleaseEmail } from '@/app/actions';

export default function PressReleaseForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Pricing units
    const BASE_PRICE = 490;
    const ADDONS = {
        traffic: { label: 'Declarație trafic peste 3000 vizite', price: 200, name: 'opt_traffic' },
        afisA3: { label: 'Afiș A3', price: 49, name: 'opt_afis' },
        afisA2: { label: 'Afiș A2', price: 79, name: 'opt_afisA2' },
        // stickersSmall
        stickersSmall10: { label: 'Set 20 colante 10x10 cm', price: 49, name: 'opt_stickers_small_10' },
        stickersSmall15: { label: 'Set 10 colante 15x15 cm', price: 49, name: 'opt_stickers_small_15' },
        stickersSmall21: { label: 'Set 5 colante 15x21 cm', price: 49, name: 'opt_stickers_small_21' },
        // stickersLarge
        stickersLarge30: { label: 'Set 3 colante 30x30 cm', price: 49, name: 'opt_stickers_large_30' },
        stickersLarge40: { label: '1 buc colant 40x40 cm', price: 49, name: 'opt_stickers_large_40' },
        // panels
        panouA2: { label: 'Panou A2 (42x60cm)', price: 200, name: 'opt_panouA2' },
        panou8050: { label: 'Panou 80x50 cm', price: 290, name: 'opt_panou8050' },
        panou100150: { label: 'Panou 100x150 cm', price: 700, name: 'opt_panou100150' },
        panou300200: { label: 'Panou 300x200 cm', price: 1190, name: 'opt_panou300200' },
    };

    const ADDON_GROUPS = [
        {
            title: '1. Publicitate & Online',
            items: ['traffic']
        },
        {
            title: '2. Afișe',
            type: 'checkbox',
            items: ['afisA3', 'afisA2']
        },
        {
            title: '3. Autocolante Mici (Set)',
            type: 'select',
            items: ['stickersSmall10', 'stickersSmall15', 'stickersSmall21'],
            placeholder: 'Alege dimensiune set...'
        },
        {
            title: '4. Autocolante Mari (Buc)',
            type: 'select',
            items: ['stickersLarge30', 'stickersLarge40'],
            placeholder: 'Alege dimensiune autocolant...'
        },
        {
            title: '5. Panouri & Plăci',
            type: 'checkbox',
            items: ['panouA2', 'panou8050', 'panou100150', 'panou300200']
        }
    ];

    const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
    const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

    useEffect(() => {
        let total = BASE_PRICE;
        selectedAddons.forEach(addonKey => {
            const addon = (ADDONS as any)[addonKey];
            if (addon) total += addon.price;
        });
        setTotalPrice(total);
    }, [selectedAddons]);

    const toggleAddon = (key: string) => {
        const newSet = new Set(selectedAddons);
        if (newSet.has(key)) newSet.delete(key);
        else newSet.add(key);
        setSelectedAddons(newSet);
    };

    const handleSelectAddon = (groupItems: string[], selectedKey: string) => {
        const newSet = new Set(selectedAddons);
        // Remove all items from this group
        groupItems.forEach(item => newSet.delete(item));
        // Add the new one if it's not empty
        if (selectedKey) newSet.add(selectedKey);
        setSelectedAddons(newSet);
    };

    const handleSubmit = (formData: FormData) => {
        setError(null);
        // Include the total price in the form data
        formData.append('totalPrice', totalPrice.toString());

        // Include selected addons labels
        const addonsList = Array.from(selectedAddons).map(key => {
            const addon = (ADDONS as any)[key];
            return addon ? `${addon.label} (+${addon.price} lei)` : key;
        });
        formData.append('selectedAddonsList', JSON.stringify(addonsList));

        startTransition(async () => {
            const result = await sendPressReleaseEmail(formData);
            if (result.success) {
                setSubmitted(true);
            } else {
                setError(typeof result.error === 'string' ? result.error : 'An unexpected error occurred');
            }
        });
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.2s',
        marginBottom: '1rem',
        display: 'block',
        backgroundColor: 'var(--color-bg-alt)'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '600',
        color: 'var(--color-text)',
        fontSize: '0.95rem'
    };

    if (submitted) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '3rem',
                backgroundColor: '#f0fdf4',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #bbf7d0',
                color: '#166534',
                maxWidth: '700px',
                margin: '0 auto'
            }}>
                <CheckCircle size={64} style={{ margin: '0 auto 1.5rem auto', color: '#22c55e' }} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Cerere Trimisă!</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Am primit solicitarea ta pentru publicarea comunicatului.
                    Te vom contacta în curând pentru confirmare și detalii de plată.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}
                >
                    Trimite alt comunicat
                </button>
            </div>
        );
    }

    return (
        <form action={handleSubmit} style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>

            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <PlusCircle className="text-primary" /> Detalii Comunicat
                </h2>
            </div>

            {error && (
                <div style={{
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    border: '1px solid #fee2e2',
                    fontWeight: '500'
                }}>
                    {error}
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
                <div className="form-group">
                    <label htmlFor="name" style={labelStyle}>Nume Prenume / Instituție *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={inputStyle}
                        placeholder="Ex: Popescu Ion / Primaria X"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" style={labelStyle}>Email Contact *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={inputStyle}
                        placeholder="contact@email.com"
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="title" style={labelStyle}>Titlu Comunicat *</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    style={{ ...inputStyle, fontWeight: '700', fontSize: '1.1rem' }}
                    placeholder="Introduceți titlul comunicatului..."
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <label htmlFor="content" style={labelStyle}>Conținut Comunicat *</label>
                <textarea
                    id="content"
                    name="content"
                    rows={12}
                    required
                    style={{ ...inputStyle, fontFamily: 'inherit', resize: 'vertical' }}
                    placeholder="Introduceți aici textul complet al comunicatului de presă..."
                ></textarea>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ ...labelStyle, marginBottom: '1.25rem', fontSize: '1.1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                    Opțiuni Vizibilitate & Materiale
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {ADDON_GROUPS.map((group) => (
                        <div key={group.title}>
                            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#64748b', marginBottom: '0.75rem', fontWeight: '700', letterSpacing: '0.5px' }}>
                                {group.title}
                            </h3>

                            {group.type === 'select' ? (
                                <select
                                    style={{ ...inputStyle, marginBottom: 0 }}
                                    onChange={(e) => handleSelectAddon(group.items, e.target.value)}
                                    value={Array.from(selectedAddons).find(key => group.items.includes(key)) || ''}
                                >
                                    <option value="">{group.placeholder || 'Selectează...'}</option>
                                    {group.items.map(key => {
                                        const addon = (ADDONS as any)[key];
                                        return (
                                            <option key={key} value={key}>
                                                {addon.label} (+{addon.price} LEI)
                                            </option>
                                        );
                                    })}
                                </select>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {group.items.map((key) => {
                                        const addon = (ADDONS as any)[key];
                                        return (
                                            <label
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '0.85rem 1rem',
                                                    border: '1px solid var(--color-border)',
                                                    borderRadius: 'var(--radius-md)',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedAddons.has(key) ? '#eff6ff' : 'white',
                                                    borderColor: selectedAddons.has(key) ? '#3b82f6' : 'var(--color-border)',
                                                    transition: 'all 0.15s'
                                                }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleAddon(key);
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                    <input
                                                        type="checkbox"
                                                        name={addon.name}
                                                        checked={selectedAddons.has(key)}
                                                        readOnly
                                                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                    />
                                                    <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>{addon.label}</span>
                                                </div>
                                                <span style={{ fontWeight: '700', color: '#1d4ed8', fontSize: '0.95rem' }}>+{addon.price} LEI</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                <label style={labelStyle}>Imagine Reprezentativă (Opțional)</label>
                <div
                    onClick={handleImageClick}
                    style={{
                        border: '2px dashed var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: 'var(--color-bg-alt)',
                        color: 'var(--color-text-muted)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                    <Upload size={40} style={{ margin: '0 auto 1rem auto' }} />
                    <p style={{ fontWeight: '500' }}>Click pentru a alege o imagine sau trageți fișierul aici</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>JPG, PNG (max 5MB)</p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        name="image"
                        style={{ display: 'none' }}
                        accept="image/*"
                    />
                </div>
            </div>

            {/* Price Sticky-like footer */}
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid #e2e8f0',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Total de plată estimat</p>
                    <div style={{ fontSize: '2.25rem', fontWeight: '900', color: '#0f172a' }}>
                        {totalPrice} <span style={{ fontSize: '1.25rem' }}>LEI</span>
                    </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#64748b' }}>
                    Standard: {BASE_PRICE} lei<br />
                    Extra: {totalPrice - BASE_PRICE} lei
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                <button
                    type="submit"
                    disabled={isPending}
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        padding: '1.25rem',
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                    }}
                >
                    {isPending ? (
                        'Se procesează...'
                    ) : (
                        <>
                            <CreditCard size={24} /> Trimite și Comandă
                        </>
                    )}
                </button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                    <ShieldCheck size={16} /> Procesare securizată a datelor • Factură inclusă
                </div>
            </div>

        </form>
    );
}

function ShieldCheck({ size, style }: { size?: number, style?: React.CSSProperties }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
