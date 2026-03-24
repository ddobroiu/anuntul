
export interface SignageProduct {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    dimensions: string;
    variants?: {
        name: string;
        price: number;
    }[];
    tags: string[];
}

import { printCenterProducts } from "./signage-products-printcenter";

const dedemanProducts: SignageProduct[] = [
    {
        "id": "7049349",
        "slug": "7049349",
        "title": "Indicator semnalizare Stop proprietate privata, PVC, 37 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Stop proprietate privata, PVC, 37 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049349.jpg",
        "price": 57.52,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7046210",
        "slug": "7046210",
        "title": "Indicator semnalizare Supraveghere video, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Supraveghere video, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7046210.jpg",
        "price": 13.29,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004061",
        "slug": "5004061",
        "title": "Indicator semnalizare Incepator auto, PVC, diametru 9.6 cm, set 2 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Incepator auto, PVC, diametru 9.6 cm, set 2 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004061.jpg",
        "price": 12.9,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043145",
        "slug": "7043145",
        "title": "Indicator semnalizare Punct de prim ajutor, PVC, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Punct de prim ajutor, PVC, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043145.jpg",
        "price": 16.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004042",
        "slug": "5004042",
        "title": "Indicator semnalizare Acces strict interzis persoanelor neautorizate, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Acces strict interzis persoanelor neautorizate, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004042.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049348",
        "slug": "7049348",
        "title": "Indicator semnalizare Priza 220/ 400 V, autocolant, 25 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Priza 220/ 400 V, autocolant, 25 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049348.jpg",
        "price": 13.9,
        "category": "Indicatoare",
        "dimensions": "25x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004045",
        "slug": "5004045",
        "title": "Indicator semnalizare Acces interzis, PVC, 30 x20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Acces interzis, PVC, 30 x20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004045.jpg",
        "price": 16.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006265",
        "slug": "5006265",
        "title": "Indicator semnalizare Interdictie, autocolant, 30 x 20 cm, set 6 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Interdictie, autocolant, 30 x 20 cm, set 6 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006265.jpg",
        "price": 15.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7045245",
        "slug": "7045245",
        "title": "Indicator semnalizare Fumatul interzis, PVC, 20 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Fumatul interzis, PVC, 20 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7045245.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "20x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004064",
        "slug": "5004064",
        "title": "Indicator semnalizare Inalta tensiune, PVC, 15 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Inalta tensiune, PVC, 15 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004064.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "15x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004060",
        "slug": "5004060",
        "title": "Indicator semnalizare Nu parcati, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Nu parcati, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004060.jpg",
        "price": 12.29,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004023",
        "slug": "5004023",
        "title": "Indicator informare Solicitati bon fiscal, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Solicitati bon fiscal, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004023.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7041810",
        "slug": "7041810",
        "title": "Indicator semnalizare Stingator, autocolant, 20 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Stingator, autocolant, 20 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7041810.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "20x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049342",
        "slug": "7049342",
        "title": "Indicator semnalizare Parcare rezervata, PVC, 40 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Parcare rezervata, PVC, 40 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049342.jpg",
        "price": 29.9,
        "category": "Indicatoare",
        "dimensions": "40x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004038",
        "slug": "5004038",
        "title": "Indicator semnalizare Pastrati curatenia, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Pastrati curatenia, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004038.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006267",
        "slug": "5006267",
        "title": "Indicator Informare spatii comerciale, autocolant, 30 x 20 cm, set 7 bucati",
        "description": "Produs din categoria Semnalistica: Indicator Informare spatii comerciale, autocolant, 30 x 20 cm, set 7 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006267.jpg",
        "price": 15.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006268",
        "slug": "5006268",
        "title": "Indicator informare PSI, autocolant, 30 x 20 cm, set 6 bucati",
        "description": "Produs din categoria Semnalistica: Indicator informare PSI, autocolant, 30 x 20 cm, set 6 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006268.jpg",
        "price": 15.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049344",
        "slug": "7049344",
        "title": "Indicator luminescent Exit, autocolant reflectorizant, 19.5 x 7.5 cm",
        "description": "Produs din categoria Semnalistica: Indicator luminescent Exit, autocolant reflectorizant, 19.5 x 7.5 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049344.jpg",
        "price": 17.9,
        "category": "Indicatoare",
        "dimensions": "5x7 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006266",
        "slug": "5006266",
        "title": "Indicator semnalizare Iesiri in caz de urgenta, autocolant, 30 x 20 cm, set 4 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Iesiri in caz de urgenta, autocolant, 30 x 20 cm, set 4 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006266.jpg",
        "price": 17.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049347",
        "slug": "7049347",
        "title": "Indicator semnalizare Acces interzis persoanelor neautorizate, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Acces interzis persoanelor neautorizate, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049347.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004068",
        "slug": "5004068",
        "title": "Indicator semnalizare Iesire in caz de urgenta Stanga, PVC, 30 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Iesire in caz de urgenta Stanga, PVC, 30 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004068.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "30x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004673",
        "slug": "5004673",
        "title": "Indicator semnalizare Toaleta barbati, PVC, 14 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta barbati, PVC, 14 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004673.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "14x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004055",
        "slug": "5004055",
        "title": "Indicator semnalizare Nu parcati - Garaj, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Nu parcati - Garaj, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004055.jpg",
        "price": 16.9,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004069",
        "slug": "5004069",
        "title": "Indicator semnalizare Iesire in caz de urgenta Dreapta, PVC, 30 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Iesire in caz de urgenta Dreapta, PVC, 30 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004069.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "30x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004063",
        "slug": "5004063",
        "title": "Indicator semnalizare Priza avertizare 400 V,  PVC, 10 x 5 cm, set 10 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Priza avertizare 400 V,  PVC, 10 x 5 cm, set 10 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004063.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "10x5 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006282",
        "slug": "5006282",
        "title": "Indicator semnalizare Limitare viteza 70, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 70, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006282.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043176",
        "slug": "7043176",
        "title": "Indicator semnalizare Priza 230 V, autocolant, 9.5 x 4.5 cm, set 12 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Priza 230 V, autocolant, 9.5 x 4.5 cm, set 12 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043176.jpg",
        "price": 15.9,
        "category": "Indicatoare",
        "dimensions": "5x4 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006264",
        "slug": "5006264",
        "title": "Indicator informare Instructiuni in caz de urgenta, PVC, 40 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Instructiuni in caz de urgenta, PVC, 40 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006264.jpg",
        "price": 23.81,
        "category": "Indicatoare",
        "dimensions": "40x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043205",
        "slug": "7043205",
        "title": "Indicator semnalizare Stingator, autocolant, 15 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Stingator, autocolant, 15 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043205.jpg",
        "price": 10.9,
        "category": "Indicatoare",
        "dimensions": "15x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004674",
        "slug": "5004674",
        "title": "Indicator semnalizare Toaleta mixta,  PVC, 14 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta mixta,  PVC, 14 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004674.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "14x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5007429",
        "slug": "5007429",
        "title": "Indicator semnalizare Interzis foc deschis si fumat, PVC, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Interzis foc deschis si fumat, PVC, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5007429.jpg",
        "price": 16.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006263",
        "slug": "5006263",
        "title": "Indicator semnalizare Orientare, aluminiu, 28 x 9 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Orientare, aluminiu, 28 x 9 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006263.jpg",
        "price": 44.9,
        "category": "Indicatoare",
        "dimensions": "28x9 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049350",
        "slug": "7049350",
        "title": "Indicator semnalizare Stop acces interzis, PVC, 37 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Stop acces interzis, PVC, 37 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049350.jpg",
        "price": 57.52,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043149",
        "slug": "7043149",
        "title": "Indicator semnalizare Pericol electrocutare, autocolant, 15 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Pericol electrocutare, autocolant, 15 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043149.jpg",
        "price": 10.9,
        "category": "Indicatoare",
        "dimensions": "15x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004067",
        "slug": "5004067",
        "title": "Indicator semnalizare Directii de urmat, PVC, 15 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Directii de urmat, PVC, 15 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004067.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "15x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004025",
        "slug": "5004025",
        "title": "Indicator informare Nu vindem minorilor alcool si tutun, PVC, 20 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Nu vindem minorilor alcool si tutun, PVC, 20 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004025.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "20x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004037",
        "slug": "5004037",
        "title": "Indicator semnalizare Loc pentru fumat, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Loc pentru fumat, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004037.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006269",
        "slug": "5006269",
        "title": "Indicator semnalizare Depasirea interzisa + Depasire pe partea stanga, autocolant, diametru 12 cm, set 2 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Depasirea interzisa + Depasire pe partea stanga, autocolant, diametru 12 cm, set 2 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006269.jpg",
        "price": 13.9,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7057654",
        "slug": "7057654",
        "title": "Indicator informare Pastrati distanta sociala 1.5 m, PVC, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Pastrati distanta sociala 1.5 m, PVC, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7057654.jpg",
        "price": 14.7,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043925",
        "slug": "7043925",
        "title": "Indicator semnalizare Deseuri sticla W0102 A4, autocolant, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Deseuri sticla W0102 A4, autocolant, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043925.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043922",
        "slug": "7043922",
        "title": "Indicator semnalizare Deseuri hartie W0101 A4, autocolant, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Deseuri hartie W0101 A4, autocolant, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043922.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7040411",
        "slug": "7040411",
        "title": "Indicator semnalizare Loc de adunare in caz de urgenta, PVC, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Loc de adunare in caz de urgenta, PVC, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7040411.jpg",
        "price": 16.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049345",
        "slug": "7049345",
        "title": "Indicator luminescent Exit Dreapta, autocolant reflectorizant, 19.5 x 7.5 cm",
        "description": "Produs din categoria Semnalistica: Indicator luminescent Exit Dreapta, autocolant reflectorizant, 19.5 x 7.5 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049345.jpg",
        "price": 17.9,
        "category": "Indicatoare",
        "dimensions": "5x7 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049346",
        "slug": "7049346",
        "title": "Indicator luminescent Exit Stanga, autocolant reflectorizant, 19.5 x 7.5 cm",
        "description": "Produs din categoria Semnalistica: Indicator luminescent Exit Stanga, autocolant reflectorizant, 19.5 x 7.5 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049346.jpg",
        "price": 17.9,
        "category": "Indicatoare",
        "dimensions": "5x7 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "3029927",
        "slug": "3029927",
        "title": "Indicator toaleta, barbati 13530200, crom, ABS, 8 x 8 cm",
        "description": "Produs din categoria Semnalistica: Indicator toaleta, barbati 13530200, crom, ABS, 8 x 8 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/3029927.jpg",
        "price": 28.0,
        "category": "Indicatoare",
        "dimensions": "8x8 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006280",
        "slug": "5006280",
        "title": "Indicator semnalizare Depasire stanga, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Depasire stanga, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006280.jpg",
        "price": 6.9,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004065",
        "slug": "5004065",
        "title": "Indicator semnalizare Hidrant, PVC, 15 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Hidrant, PVC, 15 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004065.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "15x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7057653",
        "slug": "7057653",
        "title": "Indicator informare Pastrati distanta de siguranta 2 m, PVC, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Pastrati distanta de siguranta 2 m, PVC, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7057653.jpg",
        "price": 14.7,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043923",
        "slug": "7043923",
        "title": "Indicator semnalizare Deseuri menajere W0103 A4, autocolant, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Deseuri menajere W0103 A4, autocolant, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043923.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043924",
        "slug": "7043924",
        "title": "Indicator semnalizare Deseuri plastic W0104 A4, autocolant, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Deseuri plastic W0104 A4, autocolant, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043924.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7043926",
        "slug": "7043926",
        "title": "Indicator semnalizare Deseuri metalice W0105 A4, autocolant, 20 x 30 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Deseuri metalice W0105 A4, autocolant, 20 x 30 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7043926.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "20x30 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7057649",
        "slug": "7057649",
        "title": "Indicator informare Stop Covid M0144, PVC, 30 x 40 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Stop Covid M0144, PVC, 30 x 40 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7057649.jpg",
        "price": 26.64,
        "category": "Indicatoare",
        "dimensions": "30x40 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006787",
        "slug": "5006787",
        "title": "Indicator semnalizare Toaleta femei, aluminiu, 12 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta femei, aluminiu, 12 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006787.jpg",
        "price": 39.89,
        "category": "Indicatoare",
        "dimensions": "12x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7029721",
        "slug": "7029721",
        "title": "Indicator semnalizare Supraveghere video, autocolant, 20 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Supraveghere video, autocolant, 20 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7029721.jpg",
        "price": 9.51,
        "category": "Indicatoare",
        "dimensions": "20x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7046211",
        "slug": "7046211",
        "title": "Indicator semnalizare Supraveghere video, autocolant, diametru 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Supraveghere video, autocolant, diametru 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7046211.jpg",
        "price": 6.74,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004062",
        "slug": "5004062",
        "title": "Indicator semnalizare Priza 220/ 230 V, PVC, 10 x 5 cm, set 10 bucati",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Priza 220/ 230 V, PVC, 10 x 5 cm, set 10 bucati. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004062.jpg",
        "price": 14.9,
        "category": "Indicatoare",
        "dimensions": "10x5 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004066",
        "slug": "5004066",
        "title": "Indicator semnalizare Stingator, PVC, 15 x 15 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Stingator, PVC, 15 x 15 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004066.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "15x15 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006281",
        "slug": "5006281",
        "title": "Indicator semnalizare Limitare viteza 50, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 50, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006281.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7049343",
        "slug": "7049343",
        "title": "Indicator semnalizare Nu parcati, PVC, 40 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Nu parcati, PVC, 40 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7049343.jpg",
        "price": 21.9,
        "category": "Indicatoare",
        "dimensions": "40x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7042458",
        "slug": "7042458",
        "title": "Indicator semnalizare Limitare viteza 60, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 60, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7042458.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7042471",
        "slug": "7042471",
        "title": "Indicator semnalizare Limitare viteza 110, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 110, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7042471.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7042472",
        "slug": "7042472",
        "title": "Indicator semnalizare Limitare viteza 130, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 130, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7042472.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004036",
        "slug": "5004036",
        "title": "Indicator semnalizare Fumatul interzis, PVC, 30 x 20 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Fumatul interzis, PVC, 30 x 20 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004036.jpg",
        "price": 13.49,
        "category": "Indicatoare",
        "dimensions": "30x20 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006262",
        "slug": "5006262",
        "title": "Indicator semnalizare Toaleta mixta, aluminiu, 12 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta mixta, aluminiu, 12 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006262.jpg",
        "price": 39.89,
        "category": "Indicatoare",
        "dimensions": "12x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7042470",
        "slug": "7042470",
        "title": "Indicator semnalizare Limitare viteza 100, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 100, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7042470.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7042459",
        "slug": "7042459",
        "title": "Indicator semnalizare Limitare viteza 80, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 80, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7042459.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006283",
        "slug": "5006283",
        "title": "Indicator semnalizare Limitare viteza 90, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 90, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006283.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006284",
        "slug": "5006284",
        "title": "Indicator semnalizare Limitare viteza 120, autocolant, diametru 12 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Limitare viteza 120, autocolant, diametru 12 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006284.jpg",
        "price": 5.49,
        "category": "Indicatoare",
        "dimensions": "Standard",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5004672",
        "slug": "5004672",
        "title": "Indicator semnalizare Toaleta femei, PVC, 14 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta femei, PVC, 14 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5004672.jpg",
        "price": 11.89,
        "category": "Indicatoare",
        "dimensions": "14x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "7057648",
        "slug": "7057648",
        "title": "Indicator informare Stop Covid M0145, PVC, 30 x 40 cm",
        "description": "Produs din categoria Semnalistica: Indicator informare Stop Covid M0145, PVC, 30 x 40 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/7057648.jpg",
        "price": 26.64,
        "category": "Indicatoare",
        "dimensions": "30x40 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "3029928",
        "slug": "3029928",
        "title": "Indicator toaleta, femei / barbati 13530300, crom, ABS, 8 x 8 cm",
        "description": "Produs din categoria Semnalistica: Indicator toaleta, femei / barbati 13530300, crom, ABS, 8 x 8 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/3029928.jpg",
        "price": 31.0,
        "category": "Indicatoare",
        "dimensions": "8x8 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    },
    {
        "id": "5006261",
        "slug": "5006261",
        "title": "Indicator semnalizare Toaleta barbati, aluminiu, 12 x 10 cm",
        "description": "Produs din categoria Semnalistica: Indicator semnalizare Toaleta barbati, aluminiu, 12 x 10 cm. Disponibil online pe ShopPrint.ro",
        "image": "/r2/5006261.jpg",
        "price": 39.89,
        "category": "Indicatoare",
        "dimensions": "12x10 cm",
        "tags": [
            "semnalistica",
            "dedeman-style",
            "constructii",
            "protectia-muncii"
        ]
    }
];

export const signageProducts: SignageProduct[] = [
    ...dedemanProducts,
    ...printCenterProducts
];
