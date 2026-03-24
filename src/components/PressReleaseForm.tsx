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
            type: 'select',
            items: ['panouA2', 'panou8050', 'panou100150', 'panou300200'],
            placeholder: 'Alege dimensiune panou...'
        }
    ];

    const [selectedAddons, setSelectedAddons] = useState<Map<string, number>>(new Map());
    const [pressReleaseQty, setPressReleaseQty] = useState(1);
    const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    };

    useEffect(() => {
        let total = BASE_PRICE * pressReleaseQty;
        selectedAddons.forEach((qty, addonKey) => {
            const addon = (ADDONS as any)[addonKey];
            if (addon) total += (addon.price * qty);
        });
        setTotalPrice(total);
    }, [selectedAddons, pressReleaseQty]);

    const toggleAddon = (key: string) => {
        const newMap = new Map(selectedAddons);
        if (newMap.has(key)) newMap.delete(key);
        else newMap.set(key, 1);
        setSelectedAddons(newMap);
    };

    const handleSelectAddon = (groupItems: string[], selectedKey: string) => {
        const newMap = new Map(selectedAddons);
        // Remove all items from this group
        groupItems.forEach(item => newMap.delete(item));
        // Add the new one if it's not empty
        if (selectedKey) newMap.set(selectedKey, 1);
        setSelectedAddons(newMap);
    };

    const updateQuantity = (key: string, qty: number) => {
        if (qty < 1) return;
        const newMap = new Map(selectedAddons);
        if (newMap.has(key)) {
            newMap.set(key, qty);
            setSelectedAddons(newMap);
        }
    };

    const handleSubmit = (formData: FormData) => {
        setError(null);
        // Include the total price in the form data
        formData.append('totalPrice', totalPrice.toString());
        formData.append('pressReleaseQty', pressReleaseQty.toString());

        // Include selected addons labels with quantities
        const addonsList: string[] = [];
        selectedAddons.forEach((qty, key) => {
            const addon = (ADDONS as any)[key];
            if (addon) {
                addonsList.push(`${addon.label} x ${qty} (+${addon.price * qty} lei)`);
            }
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
        <form action={handleSubmit} className="press-release-form">

            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }} className="form-header-responsive">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 640px) {
                        .form-header-responsive { flex-direction: column !important; align-items: flex-start !important; }
                        .form-header-responsive > div { width: 100% !important; justify-content: flex-start !important; flex-direction: column !important; align-items: stretch !important; }
                    }
                `}} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                    <PlusCircle className="text-primary" /> Detalii Comunicat
                </h2>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 0.75rem', backgroundColor: '#eff6ff', borderRadius: 'var(--radius-md)', border: '1px solid #3b82f6', flexShrink: 0 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e40af' }}>Buc:</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <button type="button" onClick={() => setPressReleaseQty(Math.max(1, pressReleaseQty - 1))} style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #3b82f6', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>-</button>
                            <span style={{ fontWeight: '800', minWidth: '20px', textAlign: 'center', color: '#1e40af' }}>{pressReleaseQty}</span>
                            <button type="button" onClick={() => setPressReleaseQty(pressReleaseQty + 1)} style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #3b82f6', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>+</button>
                        </div>
                    </div>

                    <div
                        onClick={handleImageClick}
                        style={{ padding: '0.4rem 0.75rem', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', flexGrow: 1, minWidth: '150px' }}
                    >
                        <Upload size={16} color="#64748b" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '500', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '120px' }}>
                            {selectedFile ? selectedFile.name : 'Încarcă fișier'}
                        </span>
                        <input ref={fileInputRef} type="file" name="attachment" style={{ display: 'none' }} accept=".pdf,.doc,.docx,image/*" onChange={handleFileChange} />
                    </div>
                </div>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                    <label htmlFor="phone" style={labelStyle}>Număr de Telefon *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        style={inputStyle}
                        placeholder="07xx xxx xxx"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title" style={labelStyle}>Titlu Comunicat</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        style={{ ...inputStyle, fontWeight: '700' }}
                        placeholder="Titlul comunicatului (opțional dacă atașezi fișier)..."
                    />
                </div>
            </div>


            <div style={{ marginBottom: '2rem' }}>
                <label htmlFor="content" style={labelStyle}>Conținut Comunicat</label>
                <textarea
                    id="content"
                    name="content"
                    rows={12}
                    style={{ ...inputStyle, fontFamily: 'inherit', resize: 'vertical' }}
                    placeholder="Introduceți textul aici sau lăsați gol dacă ați încărcat un fișier mai sus..."
                ></textarea>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ ...labelStyle, marginBottom: '1.25rem', fontSize: '1.1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                    Opțiuni Vizibilitate & Materiale
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {ADDON_GROUPS.map((group) => (
                        <div key={group.title} style={{ backgroundColor: '#fafafa', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #f1f5f9' }}>
                            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#64748b', marginBottom: '1rem', fontWeight: '700', letterSpacing: '0.5px' }}>
                                {group.title}
                            </h3>

                            {group.type === 'select' ? (
                                <div>
                                    <select
                                        style={{ ...inputStyle, marginBottom: selectedAddons.has(Array.from(selectedAddons.keys()).find(k => group.items.includes(k)) || 'none') ? '0.75rem' : 0 }}
                                        onChange={(e) => handleSelectAddon(group.items, e.target.value)}
                                        value={Array.from(selectedAddons.keys()).find(key => group.items.includes(key)) || ''}
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

                                    {/* Quantity for select group */}
                                    {(() => {
                                        const activeKey = Array.from(selectedAddons.keys()).find(k => group.items.includes(k));
                                        if (activeKey) {
                                            return (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1rem', backgroundColor: '#f1f5f9', borderRadius: 'var(--radius-md)', width: 'fit-content' }}>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Cantitate:</span>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(activeKey, (selectedAddons.get(activeKey) || 1) - 1)}
                                                            style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                        >-</button>
                                                        <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{selectedAddons.get(activeKey)}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(activeKey, (selectedAddons.get(activeKey) || 1) + 1)}
                                                            style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                        >+</button>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })()}
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {group.items.map((key) => {
                                        const addon = (ADDONS as any)[key];
                                        const isSelected = selectedAddons.has(key);
                                        return (
                                            <div key={key}>
                                                <label
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        padding: '0.85rem 1rem',
                                                        border: '1px solid var(--color-border)',
                                                        borderRadius: 'var(--radius-md)',
                                                        cursor: 'pointer',
                                                        backgroundColor: isSelected ? '#eff6ff' : 'white',
                                                        borderColor: isSelected ? '#3b82f6' : 'var(--color-border)',
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
                                                            checked={isSelected}
                                                            readOnly
                                                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                        />
                                                        <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>{addon.label}</span>
                                                    </div>
                                                    <span style={{ fontWeight: '700', color: '#1d4ed8', fontSize: '0.95rem' }}>+{addon.price} LEI</span>
                                                </label>

                                                {/* Quantity for checkbox items - only show for afise/materials, not for traffic */}
                                                {isSelected && key !== 'traffic' && (
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1rem', marginTop: '0.5rem', marginLeft: '1rem', borderLeft: '3px solid #3b82f6', backgroundColor: '#f8fafc', width: 'fit-content' }}>
                                                        <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Exemplare:</span>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(key, (selectedAddons.get(key) || 1) - 1)}
                                                                style={{ width: '20px', height: '20px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}
                                                            >-</button>
                                                            <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center', fontSize: '0.9rem' }}>{selectedAddons.get(key)}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(key, (selectedAddons.get(key) || 1) + 1)}
                                                                style={{ width: '20px', height: '20px', borderRadius: '4px', border: '1px solid #cbd5e1', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}
                                                            >+</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            {/* Price Sticky-like footer - Responsive */}
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid #e2e8f0',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
            }} className="responsive-price-footer">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 640px) {
                        .responsive-price-footer { flex-direction: column !important; align-items: stretch !important; }
                        .responsive-price-footer > div { text-align: center !important; }
                        .responsive-price-footer > div:last-child { border-left: none !important; border-top: 2px solid #e2e8f0 !important; padding-left: 0 !important; padding-top: 1rem !important; text-align: center !important; }
                    }
                `}} />
                <div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Total de plată estimat</p>
                    <div style={{ fontSize: '2.25rem', fontWeight: '900', color: '#0f172a' }}>
                        {totalPrice} <span style={{ fontSize: '1.25rem' }}>LEI</span>
                    </div>
                </div>
                <div style={{ textAlign: 'right', borderLeft: '2px solid #e2e8f0', paddingLeft: '1.5rem' }}>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                        Standard: <span style={{ fontWeight: '700', color: '#0f172a' }}>{BASE_PRICE * pressReleaseQty} LEI</span>
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                        Extra: <span style={{ fontWeight: '700', color: '#1d4ed8' }}>{totalPrice - (BASE_PRICE * pressReleaseQty)} LEI</span>
                    </p>
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
