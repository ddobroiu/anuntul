'use client';

import { useState, useRef, useTransition } from 'react';
import { Upload, Send, CheckCircle, PlusCircle, Paperclip, Plus, Minus } from 'lucide-react';
import { sendPressReleaseEmail } from '@/app/actions';

export default function PressReleaseForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [wantsVisualIdentity, setWantsVisualIdentity] = useState(false);
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const visualKitOptions = [
        { id: 'vi_comunicat', label: 'Publicare Comunicat Media (Ziare Nationale/Locale)', price: 450 },
        { id: 'vi_banner', label: 'Banner Digital Site', price: 200 },
        { id: 'vi_afis', label: 'Afiș Informativ A3 (Print Rigid)', price: 45 },
        { id: 'vi_auto_mici', label: 'Autocolante Mici (Set 20 buc)', price: 90 },
        { id: 'vi_auto_mari', label: 'Autocolant Mare Utilitaje/Auto', price: 150 },
        { id: 'vi_panou', label: 'Panou Temporar PVC/Poliplan', price: 450 },
        { id: 'vi_placa', label: 'Placă Permanentă Alucobond', price: 350 },
    ];

    const handleQty = (id: string, delta: number, e: React.MouseEvent) => {
        e.preventDefault();
        setQuantities(p => ({ ...p, [id]: Math.max(0, (p[id] || 0) + delta) }));
    };

    const totalKit = visualKitOptions.reduce((acc, opt) => acc + (quantities[opt.id] || 0) * opt.price, 0);

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
                <label className="flex items-center gap-3 cursor-pointer group mb-2">
                    <input
                        type="checkbox"
                        checked={wantsVisualIdentity}
                        onChange={(e) => setWantsVisualIdentity(e.target.checked)}
                        className="w-6 h-6 text-red-600 border-2 border-slate-300 rounded-none focus:ring-red-600 focus:ring-2"
                    />
                    <span style={{...labelStyle, marginBottom: 0}} className="group-hover:text-red-600 transition-colors">Doresc și kit de identitate vizuală (Gen Print / Fonduri Europene PNRR)</span>
                </label>

                {wantsVisualIdentity && (
                    <div className="mt-4 bg-slate-50 p-6 border-l-4 border-red-600 shadow-sm transition-all duration-300">
                        <h4 className="font-extrabold uppercase tracking-widest text-sm mb-6 text-slate-800">Adăugați materialele necesare în pachet:</h4>
                        
                        <div className="space-y-3 mb-8">
                            {visualKitOptions.map((opt) => (
                                <div key={opt.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                                    <div>
                                        <p className="text-sm font-bold text-slate-800 uppercase tracking-wide">{opt.label}</p>
                                        <p className="text-[11px] font-black uppercase text-red-600 tracking-widest mt-1">{opt.price} Lei / buc</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border-2 border-slate-200 bg-slate-50">
                                            <button onClick={(e) => handleQty(opt.id, -1, e)} className="p-2 text-slate-600 hover:text-black hover:bg-slate-200 transition-colors"><Minus size={16} /></button>
                                            <input 
                                                type="text" 
                                                readOnly 
                                                name={opt.id}
                                                value={quantities[opt.id] || 0}
                                                className="w-12 text-center text-sm font-bold bg-transparent outline-none border-x-2 border-slate-200"
                                            />
                                            <button onClick={(e) => handleQty(opt.id, 1, e)} className="p-2 text-slate-600 hover:text-black hover:bg-slate-200 transition-colors"><Plus size={16} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-900 border-l-4 border-red-600 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Estimat Kit Identitate Vizuală</p>
                                <p className="text-3xl font-black text-white italic tracking-tighter leading-none">{totalKit} LEI</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-medium text-slate-400 max-w-[200px]">* Costul este orientativ. Veți primi o ofertă finală personalizată care va fi confirmată cu dumneavoastră.</p>
                            </div>
                        </div>

                        <input type="hidden" name="wantsVisualIdentity" value="yes" />
                        <input type="hidden" name="visualKitTotal" value={totalKit} />
                    </div>
                )}
            </div>

            <div className="mt-10 border-t-2 border-slate-100 pt-8">
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
