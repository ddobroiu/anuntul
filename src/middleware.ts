import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const JUDETE_SLUGS = [
    "alba", "arad", "arges", "bacau", "bihor", "bistrita-nasaud", "botosani", "brasov", "braila", "buzau",
    "caras-severin", "calarasi", "cluj", "constanta", "covasna", "dambovita", "dolj", "galati", "giurgiu",
    "gorj", "harghita", "hunedoara", "ialomita", "iasi", "ilfov", "maramures", "mehedinti", "mures",
    "neamt", "olt", "prahova", "satu-mare", "salaj", "sibiu", "suceava", "teleorman", "timis", "tulcea",
    "vaslui", "valcea", "vrancea"
];

const STIRI_REDIRECTS: Record<string, string> = {
    '/stiri/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect':
        '/stiri/digitalizare-to-ti-construct-srl',
    '/stiri/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect.pdf':
        '/stiri/digitalizare-to-ti-construct-srl',
    '/comunicate/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect':
        '/stiri/digitalizare-to-ti-construct-srl',
    '/stiri/pdf-DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL.pdf':
        '/stiri/digitalizare-to-ti-construct-srl',
    '/stiri/pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L._':
        '/stiri/royal-colors-painting-finalizare',
    '/stiri/pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L.,':
        '/stiri/royal-colors-painting-finalizare',
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const stiriRedirect = STIRI_REDIRECTS[pathname];
    if (stiriRedirect) {
        return NextResponse.redirect(new URL(stiriRedirect, request.url), { status: 301 });
    }

    // Detect old WordPress date-based URLs: /YYYY/MM/DD/slug
    const wpRegex = /^\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/;
    const match = pathname.match(wpRegex);

    if (match) {
        const slug = match[4].toLowerCase();

        // Try to find a county in the slug
        for (const jSlug of JUDETE_SLUGS) {
            if (slug.includes(jSlug)) {
                return NextResponse.redirect(new URL(`/judet/${jSlug}`, request.url), { status: 301 });
            }
        }

        // Specific category redirects for Anuntul
        if (slug.includes('stiri') || slug.includes('news')) return NextResponse.redirect(new URL('/stiri', request.url), { status: 301 });
        if (slug.includes('comunicat') || slug.includes('presa')) return NextResponse.redirect(new URL('/comunicate', request.url), { status: 301 });
        if (slug.includes('publicitate') || slug.includes('legal')) return NextResponse.redirect(new URL('/publicitate', request.url), { status: 301 });

        return NextResponse.redirect(new URL('/blog', request.url), { status: 301 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
