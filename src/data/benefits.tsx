import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

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
        imageSrc: "/images/IMG_7580.webp"
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
        imageSrc: "/images/IMG_7580.webp"
    },
    // {
    //     title: "Bank-Grade Security",
    //     description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
    //     bullets: [
    //         {
    //             title: "Military-Grade Encryption",
    //             description: "Your information is safeguarded with the highest level of encryption.",
    //             icon: <FiLock size={26} />
    //         },
    //         {
    //             title: "Biometric Authentication",
    //             description: "Access your account securely with fingerprint or facial recognition.",
    //             icon: <FiUser size={26} />
    //         },
    //         {
    //             title: "Real-Time Fraud Detection",
    //             description: "Our system constantly monitors for suspicious activity to keep your money safe.",
    //             icon: <FiShield size={26} />
    //         }
    //     ],
    //     imageSrc: "/images/IMG_7580.webp"
    // },
]