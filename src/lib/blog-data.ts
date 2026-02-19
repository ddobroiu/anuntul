
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
    },
    {
        id: '4',
        slug: 'dovada-trafic-raportare-comunicare-mire',
        title: 'Cum obții corect Dovada de Trafic pentru raportarea vizibilității MIPE / PNRR',
        excerpt: 'Mulți beneficiari întâmpină probleme la decontare din cauza dovezilor de trafic neconforme. Află care sunt formatele acceptate.',
        content: `
            <p>În noile ghiduri de comunicare pentru PNRR și programele gestionate de MIPE, nu mai este suficientă doar captura de ecran cu articolul publicat. Se solicită frecvent o confirmare a impactului și a numărului de cititori.</p>
            
            <h3>Ce conține o dovadă de trafic validă?</h3>
            <p>O dovadă profesională de trafic trebuie să includă:</p>
            <ul>
                <li>Numărul de vizualizări unice ale paginii comunicatului.</li>
                <li>Perioada de monitorizare a traficului.</li>
                <li>Sursa datelor (ex: Google Analytics, Cloudflare sau statistici interne ale platformei media).</li>
                <li>URL-ul direct unde a fost publicat materialul.</li>
            </ul>

            <p>Platforma <strong>Anuntul.net</strong> generează automat aceste rapoarte pentru fiecare client, oferind un document oficial ce poate fi anexat direct în MySMIS sau platforma de raportare PNRR. Având un trafic constant de peste 3000 de utilizatori unici lunar, comunicatele noastre îndeplinesc criteriile de audiență relevantă solicitate de evaluatori.</p>
        `,
        publishDate: '2026-02-19',
        author: 'Consultant SEO',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
        category: 'Noutati'
    },
    {
        id: '5',
        slug: 'achizitii-publicitate-prin-seap-ghid',
        title: 'Achiziția serviciilor de publicitate proiecte prin SEAP/SICAP',
        excerpt: 'Ghid practic pentru beneficiarii publici: cum să achiziționezi pachetele de vizibilitate fără erori în procesul de achiziție.',
        content: `
            <p>Pentru primării, școli și alte instituții publice, achiziția serviciilor de publicitate trebuie să treacă prin catalogul electronic SEAP/SICAP. Acest proces poate părea birocratic, dar este esențial pentru legalitatea cheltuielii.</p>
            
            <h3>Cum găsești produsele Anuntul.net în SEAP?</h3>
            <p>Produsele noastre sunt listate sub coduri CPV specifice publicității și tipăriturilor:</p>
            <ul>
                <li><strong>79341000-6:</strong> Servicii de publicitate (pentru comunicate).</li>
                <li><strong>44423450-0:</strong> Plăcuțe de înmatriculare sau indicatoare (pentru panouri și plăci).</li>
            </ul>

            <p>Beneficiarii trebuie să inițieze o "Cumpărare directă" din catalog sau să solicite o ofertă personalizată pe care o vom încărca în platformă în maximum 24 de ore. Acest flux asigură transparența totală și conformitatea cu legea achizițiilor publice.</p>
        `,
        publishDate: '2026-02-20',
        author: 'Expert Achiziții',
        image: 'https://images.unsplash.com/photo-1454165833261-ccc63499b441?q=80&w=2070&auto=format&fit=crop',
        category: 'Vizibilitate'
    },
    {
        id: '6',
        slug: 'greseli-comune-afise-obligatorii-pnrr',
        title: 'Top 5 greșeli la tipărirea afișelor A3 și panourilor PNRR',
        excerpt: 'O singură greșeală de design poate duce la respingerea materialului de vizibilitate. Verifică lista noastră înainte de a tipări.',
        content: `
            <p>Manualul de Identitate Vizuală (MIV) este biblia oricărui grafician care lucrează pentru proiecte europene. Totuși, erorile apar frecvent în practică.</p>
            
            <h3>1. Versiunea greșită a logoului UE</h3>
            <p>Din 2021, logoul UE s-a schimbat pentru PNRR. Nu se mai folosește logoul programelor 2014-2020. Asigură-te că folosești varianta cu textul "Finanțat de Uniunea Europeană".</p>

            <h3>2. Dimensiunea fontului (Regula celor 25%)</h3>
            <p>Numele proiectului nu trebuie să fie mai mic de 25% din mărimea titlului principal. Este o regulă de proporționalitate pe care mulți o ignoră.</p>

            <h3>3. Zona de protecție a logourilor</h3>
            <p>Logourile nu trebuie să fie înghesuite spre margini sau suprapuse peste alte elemente grafice. Fiecare are nevoie de un "spațiu de respirație" clar definit în manual.</p>

            <p>Comandând un kit de vizibilitate de la Anuntul.net, ai garanția că designul este verificat de specialiști care cunosc manualele MIPE și PNRR pe dinafară.</p>
        `,
        publishDate: '2026-02-21',
        author: 'Designer MIV',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
        category: 'Vizibilitate'
    }
];
