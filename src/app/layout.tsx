import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anuntul.net'),
  title: {
    template: '%s | Anuntul.net',
    default: 'Anuntul.net - Comunicate Presa Fonduri Europene & Materiale Vizibilitate',
  },
  description: "Platforma #1 pentru publicarea comunicatelor de presa (PNRR, POR, POCU) si achizitia de materiale de vizibilitate obligatorii (autocolante, afise, panouri temporare).",
  keywords: [
    "comunicate presa", "fonduri europene", "PNRR", "POR", "POCU",
    "anunt incepere proiect", "anunt finalizare proiect",
    "materiale vizibilitate", "autocolante PNRR", "afise A3 PNRR",
    "panouri temporare", "placi permanente", "publicitate proiecte europene"
  ],
  authors: [{ name: "Anuntul.net" }],
  creator: "Anuntul.net",
  publisher: "Anuntul.net",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Anuntul.net - Comunicate Fonduri Europene & Publicitate',
    description: 'Servicii complete de publicare comunicate si materiale de vizibilitate pentru proiecte cu finantare europeana.',
    url: 'https://anuntul.net',
    siteName: 'Anuntul.net',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuntul.net - Comunicate & Vizibilitate PNRR',
    description: 'Publicare rapida comunicate si livrare kituri vizibilitate (afise, autocolante) pentru proiecte europene.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
