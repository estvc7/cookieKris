import { FiBarChart2, FiBriefcase, FiDollarSign,  FiPieChart,  FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Sabor al mejor precio",
        description: "Compra en línea y recibe tus productos en la puerta de tu casa.",
        bullets: [
            {
                title: "Productos frescos",
                description: "Compra galletas, pan, pasteles y más.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Productos de calidad",
                description: "Compra productos de calidad a precios bajos.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Entrega rápida",
                description: "Recibe tus productos en la puerta de tu casa.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/cookieBites.webp"
    },
    {
        title: "Nueva experiencia de sabor",
        description: "Descubre nuevos sabores y disfruta de una experiencia culinaria única.",
        bullets: [
            {
                title: "Productos de calidad",
                description: "Compra productos de calidad a precios bajos.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Productos frescos",
                description: "Compra galletas, pan, pasteles y más.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Entrega rápida",
                description: "Recibe tus productos en la puerta de tu casa.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/chocolateV1.webp"
    },
]