import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Persona 1',
        role: 'Cliente de San Ramon',
        message: `${siteDetails.siteName}'s nos hizo experimentar un sabor fuera de este mundo. ¡Nunca hemos probado algo tan delicioso!`,
        avatar: '/images/IMG_8905.webp',
        timestamp: '10:35 AM',
    },
    {
        name: 'Persona 2',
        role: 'Cliente de San Jose',
        message: `${siteDetails.siteName}'s es el mejor lugar para encontrar comida deliciosa y saludable. ¡No puedo esperar para probar más!`,
        avatar: '/images/IMG_8905.webp',
        timestamp: '10:40 AM',
    },
    {
        name: 'Persona 3',
        role: 'Cliente de Palmares',
        message: `${siteDetails.siteName} es el lugar perfecto para encontrar comida deliciosa y saludable. ¡No puedo esperar para probar más!`,
        avatar: '/images/IMG_8905.webp',
        timestamp: '10:45 AM',
    },
];