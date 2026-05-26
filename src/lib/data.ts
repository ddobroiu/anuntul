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
        title: 'GHID PUBLICARE ANUN╚ÜURI SEAP / SICAP: VIZIBILITATE LEGAL─é ├ÄN 2026',
        excerpt: 'Procedura complet─â pentru publicarea comunicatelor de pres─â ╚Öi anun╚¢urilor de licita╚¢ie prin SEAP/SICAP pe Anuntul.info.',
        content: `
            <h2>Publicare rapid─â ╚Öi decontare sigur─â pentru institu╚¢ii</h2>
            <p>Conform reglement─ârilor privind achizi╚¢iile publice ╚Öi transparen╚¢a fondurilor nerambursabile (PNRR, Programe Regionale), publicarea anun╚¢urilor ╚Öi comunicatelor de pres─â ├«n mass-media este un pas obligatoriu pentru orice beneficiar.</p>
            
            <h3>Beneficiile public─ârii pe Anuntul.info prin SEAP:</h3>
            <ul>
                <li><strong>Prezen╚¢─â ├«n Catalogul Electronic:</strong> Ne g─âsi╚¢i pe SICAP pentru achizi╚¢ie direct─â sub codul CPV 22462000-6.</li>
                <li><strong>Plat─â prin Trezorerie:</strong> Decontare facil─â pentru prim─ârii ╚Öi alte autorit─â╚¢i contractante.</li>
                <li><strong>Indexare Prioritar─â:</strong> Anun╚¢ul dumneavoastr─â va ap─ârea ├«n primele rezultate Google, oferind vizibilitatea cerut─â de monitorii de proiect.</li>
            </ul>

            <p>Pentru a solicita o ofert─â personalizat─â sau pentru a primi asisten╚¢─â tehnic─â privind publicarea ├«n catalogul SICAP, v─â rug─âm s─â vizita╚¢i <a href="/seap">pagina noastr─â dedicat─â SEAP</a> sau s─â ne contacta╚¢i direct la <b>contact@anuntul.info</b>.</p>
        `,
        category: 'Comunicat',
        region: 'National',
        date: '03.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
        isFeatured: true
    },
    {
        id: 'pdf-comunicat-presa-ciokix-srl',
        title: 'Comunicat presa CIOKIX SRL',
        excerpt: 'Comunicat de pres─â ├«n format PDF. Click pentru a vizualiza documentul complet.',
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
        title: 'DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI STRIZO SINTETIC S.R.L.',
        excerpt: 'Comunicat de pres─â privind finalizarea derul─ârii proiectului de digitalizare finan╚¢at prin Fonduri Europene.',
        content: 'Comunicat de pres─â privind finalizarea derul─ârii proiectului cu titlul ΓÇ₧DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI STRIZO SINTETIC S.R.L.ΓÇ¥, cod SMIS 158485, finan╚¢at prin Programul Opera╚¢ional Competitivitate.',
        category: 'Fonduri Europene',
        region: 'Sud-Muntenia',
        date: '03.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat-finalizare-strizo-sintetic.pdf',
        isFeatured: true
    },
    {
        id: 'bazalt-construct-digitalizare',
        title: 'DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI BAZALT CONSTRUCT S.R.L.',
        excerpt: 'Comunicat de pres─â privind finalizarea derul─ârii proiectului de digitalizare finan╚¢at prin PNRR.',
        content: 'Comunicat de pres─â privind finalizarea derul─ârii proiectului cu titlul ΓÇ₧DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI BAZALT CONSTRUCT S.R.L.ΓÇ¥, finan╚¢at prin Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â (PNRR).',
        category: 'Fonduri Europene',
        region: 'National',
        date: '12.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        pdfUrl: '/comunicate/comunicat_de_presa_FINALIZARE_proiect_digitalizare_PNRR_BAZALT CONSTRUCT.pdf',
        isFeatured: true
    },
    {
        id: 'digitalizare-smart-dynamic-design',
        title: 'DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI SMART DYNAMIC DESIGN S.R.L.',
        excerpt: 'Comunicat de pres─â privind ├«nceperea proiectului de digitalizare finan╚¢at prin PNRR.',
        content: 'Comunicat de pres─â privind ├«nceperea derul─ârii proiectului cu titlul ΓÇ₧DIGITALIZAREA ACTIVIT─é╚ÜII COMPANIEI SMART DYNAMIC DESIGN S.R.L.ΓÇ¥, finan╚¢at prin Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â (PNRR).',
        category: 'Comunicat',
        region: 'National',
        date: '24.03.2026',
        imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Digitalizarea companiei Smart Dynamic Design SRL.pdf',
        isFeatured: true
    },
    {
        id: 'finalizare-iqual-tech-digitalizare-radio',
        title: 'FINALIZAREA ACTIVIT─é╚ÜILOR PROIECTULUI - SISTEM DIGITAL PENTRU PERFORMAN╚ÜA STUDIILOR RADIO ╚ÿI MANAGEMENTUL COMPANIEI IQUAL TECH SRL - DIGITALIZAREA IMM / PNRR',
        excerpt: 'Comunicat de pres─â privind finalizarea proiectului de digitalizare a companiei IQUAL TECH SRL, finan╚¢at prin Planul Na╚¢ional de Redresare ╚Öi Rezilien╚¢─â (PNRR).',
        content: '',
        category: 'Comunicat',
        region: 'National',
        date: '18.05.2026',
        imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop',
        pdfUrl: '/comunicate/Comunicat_presa_finalizare_proiect_PNRR_IQT.pdf',
        isFeatured: true
    }
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
