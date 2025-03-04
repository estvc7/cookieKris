import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Cookie Bites',
        price: 3200,
        features: [
            '9 minigalletas con chispas de chocolate',
            'Acompañadas de Nutella o Dulce de Leche',
        ],
        imageURL: '/images/cookieBites.webp'
    },
    {
        name: 'NY Cookie Original -150 gr',
        price: 2350,
        features: [
            'Nueces',
            'Chispas de chocolate'
        ],
        imageURL: '/images/mainCookie.webp'
    },
    {
        name: 'NY Cookie - Chocolate 150 gr',
        price: 2350,
        features: [
            'Choco nueces',
            'Chispas de chocolate'
        ],
        imageURL: '/images/nutsCookie.webp'
    },
    {
        name: 'NY Cookie - Choco Nutella 150 gr',
        price: 2350,
        features: [
            'Nutella',
            'Chispas de chocolate'
        ],
        imageURL: '/images/chocolateV1.webp'
    },
    {
        name: 'NY Cookie - Macadamia  150 gr',
        price: 2350,
        features: [
            'Macadamia',
            'Chispas de chocolate'
        ],
        imageURL: '/images/heroCookie.webp'
    },
    {
        name: 'NY Cookie - Ferrero Rocher 150 gr',
        price: 2350,
        features: [
            'Ferrero Rocher',
            'Nutella',
            'Chispas de chocolate'
        ],
        imageURL: '/images/ferreroCookie.webp'
    }
]