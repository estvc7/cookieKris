import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Cookie Bites',
        price: 3200,
        features: [
            '9 minigalletas con chispas de chocolate',
            'Acompañadas de Nutella o Dulce de Leche',
        ],
    },
    {
        name: 'NY Cookie Original -150 gr',
        price: 2350,
        features: [
            'Nueces',
            'Chispas de chocolate'
        ],
    },
    {
        name: 'NY Cookie - Chocolate 150 gr',
        price: 2350,
        features: [
            'Choco nueces',
            'Chispas de chocolate'
        ],
    },
    {
        name: 'NY Cookie - Choco Nutella 150 gr',
        price: 2350,
        features: [
            'Nutella',
            'Chispas de chocolate'
        ],
    },
    {
        name: 'NY Cookie - Macadamia 150 gr',
        price: 2350,
        features: [
            'Macadamia',
            'Chispas de chocolate'
        ],
    },
    {
        name: 'NY Cookie - Ferrero 150 gr',
        price: 2350,
        features: [
            'Ferrero Rocher',
            'Nutella',
            'Chispas de chocolate'
        ],
    }
]