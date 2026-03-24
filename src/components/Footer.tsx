"use client";

import { Newspaper, Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';
import NextLink from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-24 mt-24 border-t border-white/5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
                    <div className="flex flex-col gap-6">
                        <NextLink href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all">
                              <Newspaper size={20} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                ANUNTUL<span className="text-indigo-400">.NET</span>
                            </span>
                        </NextLink>
                        <p className="text-sm leading-relaxed max-w-xs font-medium">
                            Platforma #1 pentru publicarea comunicatelor de presă obligatorii pentru proiecte europene și știri de interes național. Conformitate MIV garantată.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <NextLink key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </NextLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h3 className="text-white font-black uppercase tracking-widest text-sm">Explorare</h3>
                        <ul className="flex flex-col gap-4">
                            <li><NextLink href="/regiuni" className="hover:text-indigo-400 flex items-center gap-2 group transition-all"><MapPin size={14} className="group-hover:translate-x-1" /> Stiri pe Regiuni</NextLink></li>
                            <li><NextLink href="/comunicate" className="hover:text-indigo-400 flex items-center gap-2 group transition-all"><Send size={14} className="group-hover:translate-x-1" /> Toate Comunicatele</NextLink></li>
                            <li><NextLink href="/seap" className="text-rose-400 hover:text-rose-300 flex items-center gap-2 group transition-all font-black"><Send size={14} className="group-hover:translate-x-1" /> Achiziții SEAP</NextLink></li>
                            <li><NextLink href="/contact" className="hover:text-indigo-400 flex items-center gap-2 group transition-all"><Mail size={14} className="group-hover:translate-x-1" /> Contact Direct</NextLink></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h3 className="text-white font-black uppercase tracking-widest text-sm">Legal & Suport</h3>
                        <ul className="flex flex-col gap-4">
                            <li><NextLink href="/termeni" className="hover:text-indigo-400 transition-all">Termeni și Condiții</NextLink></li>
                            <li><NextLink href="/confidentialitate" className="hover:text-indigo-400 transition-all">Confidențialitate</NextLink></li>
                            <li><NextLink href="/politica-cookies" className="hover:text-indigo-400 transition-all">Politica Cookies</NextLink></li>
                            <li><NextLink href="/publicitate" className="hover:text-indigo-400 transition-all">Publicitate & Media Kit</NextLink></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h3 className="text-white font-black uppercase tracking-widest text-sm">Contact Rapid</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <Phone className="text-indigo-400" size={24} />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Telefon</p>
                                    <p className="text-white font-black tracking-tight">+40 750 473 111</p>
                                </div>
                            </div>
                            <NextLink href="/trimite-comunicat" className="bg-indigo-600 text-white p-5 rounded-2xl text-center font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/40">
                                Publică un Comunicat
                            </NextLink>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
                    <p>&copy; {currentYear} ANUNTUL.NET. TOATE DREPTURILE REZERVATE.</p>
                    <div className="flex gap-8">
                         <span className="text-slate-600">Partener EuPrint.ro</span>
                         <span className="text-slate-600">Visual Identity Experts</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
