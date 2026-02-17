export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    region: string;
    date: string;
    imageUrl: string;
    pdfUrl?: string;
    isFeatured?: boolean;
}

export const dummyArticles: Article[] = [
    {
        id: '1',
        title: 'Noul centru tehnologic din Cluj-Napoca va crea 500 de locuri de munca',
        excerpt: 'Compania GlobalTech a anuntat astazi deschiderea unui nou hub de inovare in inima Transilvaniei, promitand dezvoltarea sectorului IT local.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Economic',
        region: 'Nord-Vest',
        date: '17 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        isFeatured: true,
    },
    {
        id: '2',
        title: 'Festivalul de Teatru de la Sibiu anunta programul editiei 2026',
        excerpt: 'Peste 300 de spectacole din 20 de tari vor fi prezentate in cadrul FITS 2026, transformand orasul intr-o scena imensa.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Cultura',
        region: 'Centru',
        date: '16 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1507676184212-d0339efdc6ab?q=80&w=2069&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Investitii majore in infrastructura rutiera din Iasi',
        excerpt: 'Consiliul Judetean a aprobat bugetul pentru modernizarea a 50 km de drum judetean in zona metropolitana Iasi.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Administratie',
        region: 'Nord-Est',
        date: '15 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1596401499503-4c4899981881?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Start-up romanesc lanseaza aplicatia care revolutioneaza agricultura',
        excerpt: 'O echipa de tineri antreprenori din Timisoara a creat o solutie bazata pe AI pentru monitorizarea culturilor agricole.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Tehnologie',
        region: 'Vest',
        date: '14 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2153&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Comunicat: Lansarea noii game de produse bio romanesti',
        excerpt: 'Asociatia Producatorilor Bio anunta disponibilitatea noilor produse certificate ecologic in marile lanturi de magazine.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Comunicat',
        region: 'National',
        date: '14 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Bucurestiul gazduieste Summit-ul European de Inovare',
        excerpt: 'Lideri din intreaga Europa se reunesc la Palatul Parlamentului pentru a discuta viitorul digital al continentului.',
        content: 'Acesta este un text demonstrativ pentru articol. În curând vom avea conținut complet și detaliat despre acest subiect. Până atunci, vă invităm să explorați celelalte categorii și știri disponibile pe platforma noastră.',
        category: 'Politic',
        region: 'Bucuresti-Ilfov',
        date: '12 Feb 2026',
        imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    },
];

export const regions = [
    'Bucuresti-Ilfov',
    'Centru',
    'Nord-Est',
    'Nord-Vest',
    'Sud-Est',
    'Sud-Muntenia',
    'Sud-Vest Oltenia',
    'Vest',
    'National'
];

export const categories = [
    'Actualitate', 'Economic', 'Politic', 'Social', 'Cultura', 'Sport', 'Monden', 'Comunicat'
];
