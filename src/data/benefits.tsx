import { FiBarChart2, FiBriefcase,  FiPieChart,  FiTarget, FiClock, FiCheck } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Sabor al mejor precio",
        description: "Compra productos de calidad a precios bajos.",
        bullets: [
            {
                title: "Productos frescos",
                description: "Frescura garantizada en todos nuestros productos.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Productos de calidad",
                description: "Calidad con los mejores ingredientes.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Entrega planificada",
                description: "Entrega planificada para que no te falte nada.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/cookieBites.webp"
    },
    {
        title: "Nueva experiencia de sabor",
        description: "Descubre nuevos sabores y disfruta de una experiencia culinaria única.",
        bullets: [
            {
                title: "Sabor garantizado",
                description: "Sabores únicos y deliciosos.",
                icon: <FiCheck size={26} />
            },
            {
                title: "Variedad de productos",
                description: "Gran variedad de productos para todos los gustos.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Porción perfecta",
                description: "Porciones perfectas para disfrutar en cualquier momento.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/chocolateV1.webp"
    },
]