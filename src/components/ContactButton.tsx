"use client";

import React from "react";
import { MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function ContactButton() {
    const phoneNumber = "40750473111";
    const message = encodeURIComponent("Bună ziua, vă scriu de pe site-ul Anuntul.info");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="floating-widget-container">
            {/* Quote Request Button */}
            <Link
                href="/contact"
                className="floating-btn floating-btn-quote"
                aria-label="Cere Ofertă Personalizată"
                title="Cere Ofertă Personalizată"
            >
                <FileText size={28} />
                <span className="floating-tooltip floating-tooltip-quote">
                    Cere Ofertă
                </span>
            </Link>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn floating-btn-wa"
                aria-label="Contactează-ne pe WhatsApp"
                title="Contactează-ne pe WhatsApp"
            >
                <MessageCircle size={32} />
                <span className="floating-tooltip floating-tooltip-wa">
                    Suntem Online
                </span>
            </a>
        </div>
    );
}
