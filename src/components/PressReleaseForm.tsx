'use client';

import { Upload, Send, CheckCircle, PlusCircle, Paperclip, Plus, Minus } from 'lucide-react';
import React, { useState, useRef, useTransition, useEffect } from 'react';
import { sendPressReleaseEmail } from '@/app/actions';

export default function PressReleaseForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [wantsVisualIdentity, setWantsVisualIdentity] = useState(false);
    const [wantsProof, setWantsProof] = useState(false);
    
    const FONDURI_EU_GROUPS = {
        vi_banner: { title: "Banner site", options: [{ id: "none", label: "Fără banner", price: 0 }, { id: "with", label: "Banner site (Digital)", price: 100 }] },
        vi_afis: { title: "Afiș informativ", options: [{ id: "none", label: "Fără afiș", price: 0 }, { id: "A4", label: "Format A4", price: 19 }, { id: "A3", label: "Format A3", price: 49 }, { id: "A2", label: "Format A2", price: 79 }] },
        vi_auto_mici: { title: "Autocolante mici", options: [{ id: "none", label: "Nu doresc", price: 0 }, { id: "10x10-20", label: "10×10 cm (set 20 buc)", price: 49 }, { id: "15x15-10", label: "15×15 cm (set 10 buc)", price: 49 }, { id: "15x21-5", label: "15×21 cm (set 5 buc)", price: 49 }] },
        vi_auto_mari: { title: "Autocolante mari", options: [{ id: "none", label: "Nu doresc", price: 0 }, { id: "30x30-3", label: "30×30 cm (set 3 buc)", price: 49 }, { id: "40x40-1", label: "40×40 cm (1 buc)", price: 49 }] },
        vi_panou: { title: "Panou temporar", options: [{ id: "none", label: "Nu doresc", price: 0 }, { id: "A2", label: "Format A2", price: 200 }, { id: "80x50", label: "80×50 cm", price: 290 }, { id: "200x150", label: "200×150 cm", price: 700 }, { id: "300x200", label: "300×200 cm", price: 1190 }] },
        vi_placa: { title: "Placă permanentă", options: [{ id: "none", label: "Nu doresc", price: 0 }, { id: "A2", label: "Format A2", price: 200 }, { id: "80x50", label: "80×50 cm", price: 290 }, { id: "150x100", label: "150×100 cm", price: 550 }] },
    };

    const [kitItems, setKitItems] = useState<Record<string, { optionId: string, qty: number }>>(() => {
        const initial: Record<string, { optionId: string, qty: number }> = {};
        Object.keys(FONDURI_EU_GROUPS).forEach(k => {
            initial[k] = { optionId: 'none', qty: 1 };
        });
        return initial;
    });

    const handleKitSelect = (key: string, optionId: string) => {
        setKitItems(p => ({ ...p, [key]: { ...p[key], optionId } }));
    };

    const handleKitQty = (key: string, delta: number, e: React.MouseEvent) => {
        e.preventDefault();
        setKitItems(p => ({ ...p, [key]: { ...p[key], qty: Math.max(1, p[key].qty + delta) } }));
    };

    const pressReleasePrice = 490 + (wantsProof ? 200 : 0);
    let kitTotal = 0;
    if (wantsVisualIdentity) {
        Object.entries(FONDURI_EU_GROUPS).forEach(([key, group]) => {
            const item = kitItems[key];
            if (item && item.optionId !== 'none') {
                const opt = group.options.find(o => o.id === item.optionId);
                if (opt) kitTotal += opt.price * item.qty;
            }
        });
    }
    const grandTotal = pressReleasePrice + kitTotal;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleSubmit = (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            const result = await sendPressReleaseEmail(formData);
            if (result.success) {
                setSubmitted(true);
            } else {
                setError(typeof result.error === 'string' ? result.error : 'A apărut o eroare neașteptată. Vă rugăm să ne contactați direct pe email.');
            }
        });
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: '0',
        border: '2px solid #e2e8f0',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.2s',
        marginBottom: '1.5rem',
        display: 'block',
        backgroundColor: '#fff',
        fontFamily: 'inherit'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '800',
        color: '#1a1a1a',
        fontSize: '0.85rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em'
    };

    if (submitted) {
        return (
            <div className="text-center py-16 px-8 border-4 border-green-600 bg-white">
                <CheckCircle size={64} className="mx-auto mb-6 text-green-600" />
                <h2 className="text-3xl font-serif font-black mb-4 uppercase">Comunicat Trimis cu Succes!</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    Am primit solicitarea dumneavoastră. Departamentul nostru editorial va procesa anunțul și vă va contacta în cel mai scurt timp pentru confirmarea publicării și detaliile de facturare.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-red-600 transition-colors"
                >
                    Trimite alt comunicat
                </button>
            </div>
        );
    }

    return (
        <form action={handleSubmit} className="max-w-4xl mx-auto border-t-4 border-black pt-10">
            
            {error && (
                <div className="bg-red-50 text-red-600 p-4 border-l-4 border-red-600 mb-8 font-bold">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                    <label htmlFor="name" style={labelStyle}>Nume / Instituție *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={inputStyle}
                        placeholder="Ex: Primăria Municipiului..."
                    />
                </div>

                <div>
                    <label htmlFor="email" style={labelStyle}>Email pentru facturare *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={inputStyle}
                        placeholder="office@institutie.ro"
                    />
                </div>

                <div>
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

                <div>
                    <label style={labelStyle}>Atașează Document (PDF/DOC)</label>
                    <div 
                        onClick={handleUploadClick}
                        className="cursor-pointer border-2 border-dashed border-slate-300 p-4 flex items-center justify-between hover:border-red-600 transition-colors bg-slate-50 mb-6"
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            <Paperclip size={18} className="text-slate-400" />
                            <span className="text-sm text-slate-500 font-bold truncate">
                                {selectedFile ? selectedFile.name : 'Apasă pentru încărcare fișier'}
                            </span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Browse</span>
                        <input 
                            ref={fileInputRef} 
                            type="file" 
                            name="attachment" 
                            style={{ display: 'none' }} 
                            accept=".pdf,.doc,.docx,image/*" 
                            onChange={handleFileChange} 
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="title" style={labelStyle}>Titlu Comunicat (Opțional)</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    style={{ ...inputStyle, fontWeight: '700' }}
                    placeholder="Introduceți titlul dorit aici..."
                />
            </div>

            <div className="mt-4">
                <label htmlFor="content" style={labelStyle}>Textul Comunicatului / Observații</label>
                <textarea
                    id="content"
                    name="content"
                    rows={10}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Introduceți conținutul comunicatului sau observații suplimentare pentru departamentul tehnic..."
                ></textarea>
            </div>

            <div className="mt-8 border-t-2 border-slate-100 pt-6">
                <div className="bg-slate-50 border-l-4 border-black p-6 mb-8 mt-2">
                    <h4 className="font-extrabold uppercase tracking-widest text-sm mb-4 text-slate-800">1. Servicii Publicare Comunicat</h4>
                    <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-4">
                        <span className="font-bold text-slate-700">Publicare Standard (Taxă bază)</span>
                        <span className="font-black text-xl text-black">490 LEI</span>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group mt-2 bg-white p-4 border border-slate-200 hover:border-slate-300 transition-colors">
                        <input
                            type="checkbox"
                            checked={wantsProof}
                            onChange={(e) => setWantsProof(e.target.checked)}
                            className="w-5 h-5 text-black border-2 border-slate-300 rounded-none focus:ring-black focus:ring-2"
                        />
                        <div className="flex-1 flex justify-between items-center">
                            <span className="font-bold text-sm text-slate-700">Doresc dovadă de performanță (3000 de vizitatori unici)</span>
                            <span className="font-black text-md text-slate-800">+ 200 LEI</span>
                        </div>
                    </label>
                </div>

                <div className="bg-slate-50 border-l-4 border-red-600 p-6 pt-5 mb-8">
                    <h4 className="font-extrabold uppercase tracking-widest text-sm mb-4 text-slate-800">2. Identitate Vizuală (Kit PNRR / Fonduri EU)</h4>
                    <label className="flex items-center gap-3 cursor-pointer group bg-white p-4 border border-slate-200">
                        <input
                            type="checkbox"
                            checked={wantsVisualIdentity}
                            onChange={(e) => setWantsVisualIdentity(e.target.checked)}
                            className="w-6 h-6 text-red-600 border-2 border-slate-300 rounded-none focus:ring-red-600 focus:ring-2"
                        />
                        <span className="font-bold text-sm text-slate-700 group-hover:text-red-600 transition-colors">Adaugă materiale de vizibilitate fizice la comandă</span>
                    </label>

                    {wantsVisualIdentity && (
                        <div className="mt-6 border-t border-slate-200 pt-6 transition-all duration-300">
                            <p className="font-extrabold uppercase tracking-widest text-[11px] mb-4 text-slate-500">Configurați materialele necesare:</p>
                            
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                {Object.entries(FONDURI_EU_GROUPS).map(([key, group]) => (
                                    <div key={key} className="bg-white p-4 border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-bold text-slate-800 uppercase mb-2">
                                                {group.title}
                                            </label>
                                            <select 
                                                name={`${key}_option`}
                                                value={kitItems[key].optionId}
                                                onChange={(e) => handleKitSelect(key, e.target.value)}
                                                className="w-full p-2 border-2 border-slate-200 rounded-none text-sm focus:border-red-600 outline-none hover:border-red-400 focus:ring-0 transition-colors"
                                            >
                                                {group.options.map(opt => (
                                                    <option key={opt.id} value={opt.id}>
                                                        {opt.label} {opt.price > 0 ? `(+${opt.price} Lei)` : ''}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {kitItems[key].optionId !== 'none' && (
                                            <div className="flex items-center gap-3 sm:mt-6">
                                                <span className="text-xs font-bold text-slate-500 uppercase">Cantitate</span>
                                                <div className="flex items-center border-2 border-slate-200 bg-slate-50">
                                                    <button onClick={(e) => handleKitQty(key, -1, e)} className="p-2 text-slate-600 hover:text-black hover:bg-slate-200 transition-colors"><Minus size={16} /></button>
                                                    <input 
                                                        type="text" 
                                                        readOnly 
                                                        name={`${key}_qty`}
                                                        value={kitItems[key].qty}
                                                        className="w-10 text-center text-sm font-bold bg-transparent outline-none border-x-2 border-slate-200"
                                                    />
                                                    <button onClick={(e) => handleKitQty(key, 1, e)} className="p-2 text-slate-600 hover:text-black hover:bg-slate-200 transition-colors"><Plus size={16} /></button>
                                                </div>
                                            </div>
                                        )}
                                        {/* Submit default values if none to avoid missing fields */}
                                        {kitItems[key].optionId === 'none' && <input type="hidden" name={`${key}_qty`} value="1" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-slate-900 text-white p-8 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total De Plată Estimat</p>
                    <p className="text-4xl font-black italic tracking-tighter leading-none">{grandTotal} LEI</p>
                </div>
                <div className="text-right flex flex-col items-end">
                    <p className="text-sm font-medium text-slate-300">Publicare: {pressReleasePrice} Lei</p>
                    {wantsVisualIdentity && <p className="text-sm font-medium text-red-400">Kit Materiale: {kitTotal} Lei</p>}
                </div>
            </div>

            <input type="hidden" name="wantsProof" value={wantsProof ? 'yes' : 'no'} />
            <input type="hidden" name="wantsVisualIdentity" value={wantsVisualIdentity ? 'yes' : 'no'} />
            <input type="hidden" name="grandTotal" value={grandTotal} />
            <input type="hidden" name="pressReleasePrice" value={pressReleasePrice} />
            <input type="hidden" name="kitTotal" value={kitTotal} />

            <div className="mt-4 border-t-2 border-slate-100 pt-8">
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-red-600 text-white py-6 font-black text-xl uppercase tracking-[0.2em] hover:bg-black transition-colors flex items-center justify-center gap-4 group"
                >
                    {isPending ? 'Se trimite...' : (
                        <>
                            Trimite spre Publicare <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">
                    Prin trimiterea acestui formular sunteți de acord cu termenii de utilizare ai platformei anuntul.info
                </p>
            </div>
        </form>
    );
}
