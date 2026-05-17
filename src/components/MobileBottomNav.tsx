"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Newspaper, FileText, Mail, Menu } from "lucide-react";

const MobileBottomNav = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const navItems = [
    {
      label: "Acasă",
      href: "/",
      icon: Home,
    },
    {
      label: "PNRR",
      href: "/pnrr-fonduri-europene",
      icon: Newspaper,
    },
    {
      label: "Publică",
      href: "/trimite-comunicat",
      icon: FileText,
      highlight: true,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-[990]">
      <nav className="bg-red-950/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] px-6 py-3">
        <ul className="flex items-center justify-between gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
                >
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      item.highlight
                        ? "bg-white text-red-950 shadow-lg scale-110"
                        : isActive
                        ? "bg-red-700 text-white shadow-lg shadow-red-900/20 scale-110"
                        : "text-red-200/50 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={20} strokeWidth={isActive || item.highlight ? 3 : 2.5} />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-tighter transition-colors duration-300 ${
                      isActive || item.highlight ? "text-white" : "text-red-200/40"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
