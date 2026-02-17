
import fs from 'fs';
import path from 'path';
import { Article } from '@/lib/data';

export async function getLocalPdfArticles(): Promise<Article[]> {
    try {
        const communicateDir = path.join(process.cwd(), 'public', 'comunicate');

        // Check if directory exists
        if (!fs.existsSync(communicateDir)) {
            return [];
        }

        const files = fs.readdirSync(communicateDir);

        return files
            .filter(file => file.toLowerCase().endsWith('.pdf'))
            .map(file => {
                // Clean up title: replace separators with spaces, remove extension
                const title = file
                    .replace(/\.pdf$/i, '')
                    .replace(/[-_]/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();

                // Generate a stable ID
                const id = 'pdf-' + file.replace(/[^a-zA-Z0-9.-]/g, '_');

                return {
                    id: id,
                    title: title,
                    excerpt: 'Comunicat de presa in format PDF. Click pentru a vizualiza documentul complet.',
                    content: '', // Will handle content in detail page
                    category: 'Comunicat',
                    region: 'National', // Default region
                    date: new Date().toLocaleDateString('ro-RO'), // Could use fs.statSync to get real date
                    imageUrl: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=2070&auto=format&fit=crop', // Generic document image
                    pdfUrl: `/comunicate/${file}`,
                    isFeatured: false
                };
            });
    } catch (error) {
        console.error('Error reading local PDF files:', error);
        return [];
    }
}
