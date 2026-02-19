
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishDate: string;
    author: string;
    image: string;
    category: 'Ghiduri' | 'Noutati' | 'Vizibilitate';
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'ghid-comunicate-presa-pnrr-2026',
        title: 'Ghid Complet 2026: Publicarea Comunicatelor de Presă pentru Proiecte PNRR',
        excerpt: 'Află care sunt cerințele obligatorii de vizibilitate pentru proiectele finanțate prin PNRR și cum să eviți penalitățile la decontare.',
        content: `
            <p>Implementarea unui proiect finanțat prin Planul Național de Redresare și Reziliență (PNRR) vine cu o serie de responsabilități stricte în ceea ce privește vizibilitatea. Nerespectarea acestora poate duce la întârzieri în decontarea cheltuielilor sau chiar la corecții financiare.</p>
            
            <h3>De ce este obligatoriu comunicatul de presă?</h3>
            <p>Conform Manualului de Identitate Vizuală (MIV) PNRR, orice beneficiar de fonduri europene are obligația de a informa publicul larg despre sprijinul financiar obținut. Acest lucru se realizează, în principal, prin două comunicate de presă:</p>
            <ul>
                <li><strong>Comunicatul de început:</strong> Publicat la semnarea contractului de finanțare.</li>
                <li><strong>Comunicatul de finalizare:</strong> Publicat la încheierea activităților proiectului.</li>
            </ul>

            <h3>Elemente obligatorii în textul comunicatului</h3>
            <p>Un comunicat valid trebuie să conțină elemente specifice care să ateste sursa finanțării:</p>
            <ul>
                <li>Logoul Guvernului României și logoul Uniunii Europene ("Finanțat de Uniunea Europeană - NextGenerationEU").</li>
                <li>Sloganul "PNRR: Fonduri pentru România modernă și reformată!".</li>
                <li>Titlul proiectului, codul acestuia și numele beneficiarului.</li>
                <li>Valoarea totală a proiectului și valoarea finanțării nerambursabile.</li>
                <li>Obiectivele principale și data de începere/finalizare.</li>
            </ul>

            <h3>Unde trebuie publicat?</h3>
            <p>Pentru a fi acceptat la decontare, comunicatul trebuie publicat într-o publicație cu acoperire relevantă (națională sau regională, în funcție de specificul apelului). Anuntul.net oferă platforma ideală pentru publicarea acestor anunțuri, asigurând totodată dovada de trafic necesară dosarului de plată.</p>
        `,
        publishDate: '2026-02-10',
        author: 'Echipa Anuntul.net',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
        category: 'Ghiduri'
    },
    {
        id: '2',
        slug: 'importanta-vizibilitatii-fonduri-europene',
        title: 'Importanța Materialelor de Vizibilitate în Proiectele POR și POCU',
        excerpt: 'De la panouri temporare la autocolante pentru echipamente: tot ce trebuie să știi despre materialele de promovare obligatorii.',
        content: `
            <p>Proiectele finanțate prin Programul Operațional Regional (POR) sau Programul Operațional Capital Uman (POCU) impun standarde ridicate pentru brandingul și semnaletica proiectelor. Vizibilitatea nu este doar o chestiune de imagine, ci o condiție contractuală.</p>

            <h3>Tipuri de materiale de vizibilitate necesare</h3>
            <p>În funcție de valoarea proiectului și tipul investiției, pot fi necesare:</p>
            <ul>
                <li><strong>Afișe A3:</strong> Obligatorii pentru toate proiectele, afișate la locul de implementare.</li>
                <li><strong>Panouri temporare:</strong> Pentru investiții care depășesc 500.000 Euro, pe durata execuției lucrărilor.</li>
                <li><strong>Plăci permanente:</strong> Instalate după finalizarea proiectului.</li>
                <li><strong>Autocolante:</strong> Pentru toate dotările și echipamentele achiziționate prin proiect.</li>
            </ul>

            <h3>Greșeli comune de evitat</h3>
            <p>Multe proiecte primesc observații din cauza unor detalii tehnice aparent minore:</p>
            <ul>
                <li>Utilizarea unor variante vechi ale logourilor.</li>
                <li>Nerespectarea zonei de protecție a elementelor grafice.</li>
                <li>Dimensiuni neconforme ale caracterelor în raport cu restul textului.</li>
            </ul>

            <p>La Anuntul.net, nu doar că publicăm comunicatele, dar oferim și kituri complete de materiale publicitare realizate direct conform manualului de identitate vizuală aplicabil.</p>
        `,
        publishDate: '2026-02-15',
        author: 'Expert Fonduri',
        image: 'https://images.unsplash.com/photo-1579548122064-07d2ca86d494?q=80&w=2070&auto=format&fit=crop',
        category: 'Vizibilitate'
    },
    {
        id: '3',
        slug: 'cum-sa-scrii-un-comunicat-de-impact',
        title: 'Reguli de Aur pentru un Comunicat de Presă cu Impact Maxim',
        excerpt: 'Cum să structurezi informația astfel încât mesajul tău să ajungă la audiența dorită și să fie preluat de partenerii media.',
        content: `
            <p>Un comunicat de presă bine scris este jumătate din bătălia pentru vizibilitate câștigată. Deși cerințele tehnice pentru fondurile europene sunt prioritare, structura jurnalistică ajută la credibilitatea brandului beneficiar.</p>

            <h3>Structura standard (Regula celor 5W)</h3>
            <p>Orice text informativ eficient trebuie să răspundă la:</p>
            <ul>
                <li><strong>Who (Cine):</strong> Cine este beneficiarul și cine finanțează?</li>
                <li><strong>What (Ce):</strong> Ce activități se desfășoară în cadrul proiectului?</li>
                <li><strong>Where (Unde):</strong> Localizarea investiției.</li>
                <li><strong>When (Când):</strong> Perioada de implementare.</li>
                <li><strong>Why (De ce):</strong> Scopul și impactul asupra comunității.</li>
            </ul>

            <h3>Titlul - Semnul de identitate al comunicatului</h3>
            <p>Titlul trebuie să fie scurt, informativ și să includă obligatoriu numele programului de finanțare pentru conformitate. Evitați limbajul prea tehnic în primele paragrafe; păstrați jargonul pentru secțiunile de detalii administrative.</p>

            <h3>Dovada de trafic - Confirmarea succesului</h3>
            <p>Publicarea unui comunicat nu este suficientă; agențiile de management solicită adesea dovezi ale audienței. Anuntul.net oferă statistici transparente pentru comunicatele publicate, asigurând conformitatea deplină cu indicatorii de comunicare asumați în cererea de finanțare.</p>
        `,
        publishDate: '2026-02-18',
        author: 'Specialist PR',
        image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2070&auto=format&fit=crop',
        category: 'Ghiduri'
    }
];
