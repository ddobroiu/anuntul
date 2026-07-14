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
        id: 'ghid-publicare-anunturi-seap-sicap-2026',
        title: 'GHID PUBLICARE ANUNȚURI SEAP / SICAP: VIZIBILITATE LEGALĂ ÎN 2026',
        excerpt: 'Procedura completă pentru publicarea comunicatelor de presă și anunțurilor de licitație prin SEAP/SICAP pe Anuntul.info.',
        content: `
            <h2>Publicare rapidă și decontare sigură pentru instituții</h2>
            <p>Conform reglementărilor privind achizițiile publice și transparența fondurilor nerambursabile (PNRR, Programe Regionale), publicarea anunțurilor și comunicatelor de presă în mass-media este un pas obligatoriu pentru orice beneficiar.</p>
            
            <h3>Beneficiile publicării pe Anuntul.info prin SEAP:</h3>
            <ul>
                <li><strong>Prezență în Catalogul Electronic:</strong> Ne găsiți pe SICAP pentru achiziție directă sub codul CPV 22462000-6.</li>
                <li><strong>Plată prin Trezorerie:</strong> Decontare facilă pentru primării și alte autorități contractante.</li>
                <li><strong>Indexare Prioritară:</strong> Anunțul dumneavoastră va apărea în primele rezultate Google, oferind vizibilitatea cerută de monitorii de proiect.</li>
            </ul>

            <p>Pentru a solicita o ofertă personalizată sau pentru a primi asistență tehnică privind publicarea în catalogul SICAP, vă rugăm să vizitați <a href="/seap">pagina noastră dedicată SEAP</a> sau să ne contactați direct la <b>contact@anuntul.info</b>.</p>
        `,
        category: 'Comunicat',
        region: 'National',
        date: '03.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
        isFeatured: true
    },
    {
        id: 'digitalizare-to-ti-construct-srl',
        title: 'DIGITALIZAREA SOCIETĂȚII TO-TI CONSTRUCT SRL',
        excerpt: 'Comunicat de presă privind derularea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind derularea proiectului cu titlul „DIGITALIZAREA SOCIETĂȚII TO-TI CONSTRUCT SRL", finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Fonduri Europene',
        region: 'National',
        date: '19.05.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL.pdf',
        isFeatured: true
    },
    {
        id: 'pdf-comunicat-presa-ciokix-srl',
        title: 'Comunicat presa CIOKIX SRL',
        excerpt: 'Comunicat de presă în format PDF. Click pentru a vizualiza documentul complet.',
        content: '',
        category: 'Comunicat',
        region: 'National',
        date: new Date().toLocaleDateString('ro-RO'),
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Comunicat presa CIOKIX SRL.pdf',
        isFeatured: false
    },
    {
        id: 'strizo-sintetic-digitalizare',
        title: 'DIGITALIZAREA ACTIVITĂȚII COMPANIEI STRIZO SINTETIC S.R.L.',
        excerpt: 'Comunicat de presă privind finalizarea derulării proiectului de digitalizare finanțat prin Fonduri Europene.',
        content: 'Comunicat de presă privind finalizarea derulării proiectului cu titlul „DIGITALIZAREA ACTIVITĂȚII COMPANIEI STRIZO SINTETIC S.R.L.”, cod SMIS 158485, finanțat prin Programul Operațional Competitivitate.',
        category: 'Fonduri Europene',
        region: 'Sud-Muntenia',
        date: '03.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-strizo-sintetic.pdf',
        isFeatured: true
    },
    {
        id: 'bazalt-construct-digitalizare',
        title: 'DIGITALIZAREA ACTIVITĂȚII COMPANIEI BAZALT CONSTRUCT S.R.L.',
        excerpt: 'Comunicat de presă privind finalizarea derulării proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind finalizarea derulării proiectului cu titlul „DIGITALIZAREA ACTIVITĂȚII COMPANIEI BAZALT CONSTRUCT S.R.L.”, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Fonduri Europene',
        region: 'National',
        date: '12.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat_de_presa_FINALIZARE_proiect_digitalizare_PNRR_BAZALT CONSTRUCT.pdf',
        isFeatured: true
    },
    {
        id: 'digitalizare-smart-dynamic-design',
        title: 'DIGITALIZAREA ACTIVITĂȚII COMPANIEI SMART DYNAMIC DESIGN S.R.L.',
        excerpt: 'Comunicat de presă privind începerea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind începerea derulării proiectului cu titlul „DIGITALIZAREA ACTIVITĂȚII COMPANIEI SMART DYNAMIC DESIGN S.R.L.”, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '24.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Digitalizarea companiei Smart Dynamic Design SRL.pdf',
        isFeatured: true
    },
    {
        id: 'finalizare-iqual-tech-digitalizare-radio',
        title: 'FINALIZAREA ACTIVITĂȚILOR PROIECTULUI - SISTEM DIGITAL PENTRU PERFORMANȚA STUDIILOR RADIO ȘI MANAGEMENTUL COMPANIEI IQUAL TECH SRL - DIGITALIZAREA IMM / PNRR',
        excerpt: 'Comunicat de presă privind finalizarea proiectului de digitalizare a companiei IQUAL TECH SRL, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        content: 'Comunicat de presă privind finalizarea derulării proiectului cu titlul „Sistem digital pentru performanța studiilor radio și pentru managementul companiei", implementat de IQUAL TECH SRL, finanțat prin Programul de Digitalizare a IMM sub PNRR.',
        category: 'Comunicat',
        region: 'National',
        date: '18.05.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/Comunicat_presa_finalizare_proiect_PNRR_IQT.pdf',
        isFeatured: true
    },
    {
        id: 'royal-colors-painting-finalizare',
        title: 'Comunicat de presă finalizare ROYAL COLORS PAINTING S.R.L.',
        excerpt: 'Comunicat de presă în format PDF. Click pentru a vizualiza documentul complet.',
        content: '',
        category: 'Comunicat',
        region: 'National',
        date: '10.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-royal-colors-painting-srl.pdf',
        isFeatured: false,
    },
    {
        id: 'fairvalue-consulting-comunicat-presa',
        title: 'Comunicat presă FAIRVALUE CONSULTING',
        excerpt: 'Comunicat de presă în format PDF. Click pentru a vizualiza documentul complet.',
        content: '',
        category: 'Comunicat',
        region: 'National',
        date: '10.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-presa-fairvalue-consulting.pdf',
        isFeatured: false,
    },
    {
        id: 'aviatia-utilitara-incheiere-implementare',
        title: 'Anunț AVIATIA UTILITARA încheiere implementare',
        excerpt: 'Comunicat de presă în format PDF. Click pentru a vizualiza documentul complet.',
        content: '',
        category: 'Comunicat',
        region: 'National',
        date: '10.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/anunt-aviatia-utilitara-incheiere-implementare.pdf',
        isFeatured: false,
    },
    {
        id: 'to-ti-construct-finalizare-digitalizare-pnrr',
        title: 'DIGITALIZAREA COMPANIEI TO-TI CONSTRUCT SRL — Finalizare proiect PNRR',
        excerpt: 'Comunicat de presă privind finalizarea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind finalizarea implementării proiectului „DIGITALIZAREA COMPANIEI TO-TI CONSTRUCT SRL”, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '11.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-digitalizare-to-ti-construct-srl.pdf',
        isFeatured: false,
    },
    {
        id: 'smart-dynamic-design-finalizare-proiect',
        title: 'Anunț privind finalizarea proiectului Smart Dynamic Design SRL',
        excerpt: 'Comunicat de presă privind finalizarea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind finalizarea proiectului „Digitalizarea companiei Smart Dynamic Design SRL”, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '11.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/anunt-finalizare-smart-dynamic-design-srl.pdf',
        isFeatured: false,
    },
    {
        id: 'hidrotehnic-srl-finalizare-digitalizare',
        title: 'Digitalizarea firmei HIDROTEHNIC SRL — Comunicat de presă finalizare',
        excerpt: 'Comunicat de presă privind finalizarea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind finalizarea proiectului de digitalizare al firmei HIDROTEHNIC SRL, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '16.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-hidrotehnic-srl.pdf',
        isFeatured: false,
    },
    {
        id: 'rcagsm-srl-digitalizare-pnrr',
        title: 'Comunicat de presă începere proiect — RCAGSM SRL',
        excerpt: 'Comunicat de presă privind începerea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind începerea proiectului de digitalizare RCAGSM SRL, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '16.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/incepere proiecr_comunicat_de_presa_proiect_RCAGSM SRL.pdf',
        isFeatured: false,
    },
    {
        id: 'ciokix-srl-finalizare-pnrr',
        title: 'Comunicat presă final CIOKIX SRL',
        excerpt: 'Comunicat de presă privind finalizarea proiectului de digitalizare finanțat prin PNRR.',
        content: 'Comunicat de presă privind finalizarea proiectului CIOKIX SRL, finanțat prin Planul Național de Redresare și Reziliență (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '16.06.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-ciokix-srl.pdf',
        isFeatured: false,
    },
    {
        id: 'anyatravel-srl-finalizare-proiect',
        title: 'FINALIZARE PROIECT — ANYATRAVEL SRL',
        excerpt:
            'Comunicat de presă privind finalizarea proiectului implementat de ANYATRAVEL SRL, finanțat din fonduri europene (PNRR).',
        content:
            'Comunicat de presă privind finalizarea derulării proiectului implementat de ANYATRAVEL SRL. Documentul oficial în format PDF este disponibil mai jos.',
        category: 'Comunicat',
        region: 'National',
        date: '28.05.2026',
        imageUrl:
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
        pdfUrl: '/comunicate/ANYATRAVEL SRL finalizare proiect.pdf',
        isFeatured: true,
    },
    {
        id: 'comunicat-de-presa-finalizare-iulie-2026',
        title: 'Comunicat de presă finalizare — Iulie 2026',
        excerpt: 'Comunicat de presă în format PDF pentru finalizarea proiectului în luna iulie 2026.',
        content: 'Documentul oficial în format PDF este disponibil mai jos pentru vizualizare și descărcare.',
        category: 'Comunicat',
        region: 'National',
        date: '14.07.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Comunicat de presa finalizare _Iulie 2026.pdf',
        isFeatured: false,
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
    'Actualitate', 'Economic', 'Fonduri Europene', 'Social', 'Cultura', 'Comunicat'
];
