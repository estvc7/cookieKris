import { FiBarChart2, FiBriefcase,  FiPieChart,  FiTarget, FiClock, FiCheck } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Delicias para todos",
        description: "Disfruta de nuestras deliciosas galletas hechas con dedicación y calidad.",
        bullets: [
            {
                title: "Productos accesibles",
                description: "Productos a precios accesibles para todos los bolsillos.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Productos de calidad",
                description: "Productos cocinados con los mejores ingredientes.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Entrega planificada",
                description: "Entrega agendada para que disfrutes de cada bocado.",
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
                title: "Sabor único",
                description: "Cada galleta tiene un sabor único y especial.",
                icon: <FiCheck size={26} />
            },
            {
                title: "Variedad de productos",
                description: "Diferentes tipos de galletas para que disfrutes de una experiencia única.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Porción perfecta",
                description: "Porciones perfectas para disfrutar de un momento dulce.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/chocolateV1.webp"
    },
]