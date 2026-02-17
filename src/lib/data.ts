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

export const dummyArticles: Article[] = [];

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
