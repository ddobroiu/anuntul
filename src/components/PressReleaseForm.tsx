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
    const [pressReleaseQty, setPressReleaseQty] = useState(1);
    const [openGroups, setOpenGroups] = useState<string[]>(['Banner site', 'Panou temporar']);
    
    const FONDURI_EU_GROUPS = [
        { title: "Banner site", items: [{ id: 'vi_banner_digital', label: 'Banner site (Digital)', price: 100 }] },
        { title: "Afiș informativ", items: [{ id: 'vi_afis_a4', label: 'Format A4', price: 19 }, { id: 'vi_afis_a3', label: 'Format A3', price: 49 }, { id: 'vi_afis_a2', label: 'Format A2', price: 79 }] },
        { title: "Autocolante mici", items: [{ id: 'vi_auto_mic_10', label: '10×10 cm (set 20 buc)', price: 49 }, { id: 'vi_auto_mic_15', label: '15×15 cm (set 10 buc)', price: 49 }, { id: 'vi_auto_mic_21', label: '15×21 cm (set 5 buc)', price: 49 }] },
        { title: "Autocolante mari", items: [{ id: 'vi_auto_mare_30', label: '30×30 cm (set 3 buc)', price: 49 }, { id: 'vi_auto_mare_40', label: '40×40 cm (1 buc)', price: 49 }] },
        { title: "Panou temporar", items: [{ id: 'vi_panou_a2', label: 'Format A2', price: 200 }, { id: 'vi_panou_80', label: '80×50 cm', price: 290 }, { id: 'vi_panou_200', label: '200×150 cm', price: 700 }, { id: 'vi_panou_300', label: '300×200 cm', price: 1190 }] },
        { title: "Placă permanentă", items: [{ id: 'vi_placa_a2', label: 'Format A2', price: 200 }, { id: 'vi_placa_80', label: '80×50 cm', price: 290 }, { id: 'vi_placa_150', label: '150×100 cm', price: 550 }] }
    ];

    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const handleKitQty = (id: string, delta: number, e: React.MouseEvent) => {
        e.preventDefault();
        setQuantities(p => ({ ...p, [id]: Math.max(0, (p[id] || 0) + delta) }));
    };

    const toggleGroup = (title: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenGroups(p => p.includes(title) ? p.filter(t => t !== title) : [...p, title]);
    };

    const pressReleasePrice = pressReleaseQty * (490 + (wantsProof ? 200 : 0));
    const kitTotal = FONDURI_EU_GROUPS.reduce((acc, g) => acc + g.items.reduce((iAcc, opt) => iAcc + (quantities[opt.id] || 0) * opt.price, 0), 0);
    const grandTotal = pressReleasePrice + (wantsVisualIdentity ? kitTotal : 0);

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
                <div className="bg-slate-50 border-l-4 border-black p-4 sm:p-6 mb-8 mt-2">
                    <h4 className="font-extrabold uppercase tracking-widest text-sm mb-4 text-slate-800">1. Servicii Publicare Comunicat</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 border-b border-slate-200 pb-4 gap-4">
                        <div className="flex-1">
                            <span className="font-bold text-slate-700 block">Publicare Standard (Taxă bază)</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Ziare / Portaluri de Știri Locale și Naționale</span>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                            <span className="font-black text-xl text-black shrink-0">490 LEI / buc</span>
                            <div className="flex items-center border-2 border-slate-200 bg-white shrink-0">
                                <button onClick={(e) => { e.preventDefault(); setPressReleaseQty(q => Math.max(1, q - 1)) }} className="p-3 sm:p-2 hover:bg-slate-100 transition-colors focus:outline-none"><Minus size={16} /></button>
                                <input type="text" readOnly name="pressReleaseQty" value={pressReleaseQty} className="w-12 text-center font-bold bg-transparent border-x-2 border-slate-200 p-0 h-10 sm:h-8" />
                                <button onClick={(e) => { e.preventDefault(); setPressReleaseQty(q => q + 1) }} className="p-3 sm:p-2 hover:bg-slate-100 transition-colors focus:outline-none"><Plus size={16} /></button>
                            </div>
                        </div>
                    </div>
                    <label className="flex flex-col sm:flex-row sm:items-start gap-3 cursor-pointer group mt-2 bg-white p-4 items-start sm:items-center border border-slate-200 hover:border-slate-300 transition-colors">
                        <div className="flex items-start sm:items-center gap-3 w-full">
                            <input
                                type="checkbox"
                                checked={wantsProof}
                                onChange={(e) => setWantsProof(e.target.checked)}
                                className="w-6 h-6 sm:w-5 sm:h-5 text-black border-2 border-slate-300 rounded-none focus:ring-black focus:ring-2 mt-0.5 sm:mt-0 shrink-0"
                            />
                            <div className="flex-1">
                                <span className="font-bold text-sm text-slate-700 leading-tight block">Doresc dovadă de performanță (3000 de vizitatori unici)</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Rapoarte de trafic certificate</span>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0 flex justify-end shrink-0">
                            <span className="font-black text-[13px] text-slate-800 bg-slate-100 px-3 py-1 border border-slate-200">+ 200 LEI / buc</span>
                        </div>
                    </label>
                </div>

                <div className="bg-slate-50 border-l-4 border-red-600 p-4 sm:p-6 pt-5 mb-8">
                    <h4 className="font-extrabold uppercase tracking-widest text-sm mb-4 text-slate-800">2. Identitate Vizuală (Kit PNRR / Fonduri EU)</h4>
                    <label className="flex items-center gap-3 cursor-pointer group bg-white p-4 border border-slate-200">
                        <input
                            type="checkbox"
                            checked={wantsVisualIdentity}
                            onChange={(e) => setWantsVisualIdentity(e.target.checked)}
                            className="w-6 h-6 text-red-600 border-2 border-slate-300 rounded-none focus:ring-red-600 focus:ring-2 shrink-0"
                        />
                        <span className="font-bold text-sm text-slate-700 group-hover:text-red-600 transition-colors block">Adaugă materiale de vizibilitate fizice la comandă</span>
                    </label>

                    {wantsVisualIdentity && (
                        <div className="mt-6 border-t border-slate-200 pt-6 transition-all duration-300">
                            <p className="font-extrabold uppercase tracking-widest text-[11px] mb-4 text-slate-500">Categorii materiale:</p>
                            
                            <div className="space-y-4 mb-6">
                                {FONDURI_EU_GROUPS.map((group) => {
                                    const isOpen = openGroups.includes(group.title);
                                    const groupItemsSelected = group.items.reduce((acc, it) => acc + (quantities[it.id] || 0), 0);

                                    return (
                                        <div key={group.title} className={`border ${isOpen || groupItemsSelected > 0 ? 'border-red-500 shadow-sm' : 'border-slate-200'} bg-white transition-all`}>
                                            <button 
                                                onClick={(e) => toggleGroup(group.title, e)} 
                                                className={`w-full text-left font-bold text-sm sm:text-[15px] p-4 flex justify-between items-center transition-colors ${isOpen ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'}`}
                                            >
                                                <span className="flex items-center">
                                                    {group.title} 
                                                    {groupItemsSelected > 0 && <span className={`ml-3 ${isOpen ? 'bg-white text-slate-900' : 'bg-red-600 text-white'} text-[10px] px-2 py-0.5 rounded-full`}>{groupItemsSelected} Produse</span>}
                                                </span>
                                                <span className={`text-xl ${isOpen ? 'text-slate-300' : 'text-slate-400'}`}>{isOpen ? '−' : '+'}</span>
                                            </button>
                                            
                                            {isOpen && (
                                                <div className="p-2 sm:p-4 bg-white space-y-2">
                                                    {group.items.map((opt) => (
                                                        <div key={opt.id} className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3 sm:p-4 border transition-colors ${quantities[opt.id] > 0 ? 'border-red-300 bg-red-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                                                            <div className="flex-1 w-full">
                                                                <p className="text-sm font-bold text-slate-800 leading-snug">{opt.label}</p>
                                                            </div>
                                                            <div className="flex items-center justify-between w-full sm:w-auto mt-1 sm:mt-0 gap-3">
                                                                <p className="text-[13px] font-black text-red-600 whitespace-nowrap">{opt.price} Lei</p>
                                                                <div className="flex items-center border-2 border-slate-200 bg-white min-w-[100px] shrink-0">
                                                                    <button onClick={(e) => handleKitQty(opt.id, -1, e)} className="flex-1 p-2 sm:p-1 text-slate-600 hover:text-black hover:bg-slate-100 transition-colors focus:outline-none flex justify-center"><Minus size={16} /></button>
                                                                    <input 
                                                                        type="text" 
                                                                        readOnly 
                                                                        name={opt.id}
                                                                        value={quantities[opt.id] || 0}
                                                                        className="w-8 text-center text-[13px] sm:text-[14px] font-bold bg-transparent outline-none border-x-2 border-slate-200 h-9 sm:h-7 p-0"
                                                                    />
                                                                    <button onClick={(e) => handleKitQty(opt.id, 1, e)} className="flex-1 p-2 sm:p-1 text-slate-600 hover:text-black hover:bg-slate-100 transition-colors focus:outline-none flex justify-center"><Plus size={16} /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
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
