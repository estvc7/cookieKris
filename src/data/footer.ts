import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Cookie Kits by Kris es una empresa dedicada a la venta de kits de galletas para que puedas disfrutar de un momento dulce con tus seres queridos.",
    quickLinks: [
        {
            text: "Detalles",
            url: "#features"
        },
        {
            text: "Precios",
            url: "#pricing"
        },
        {
            text: "Testimonios",
            url: "#testimonials"
        },
        {
            text: "Preguntas frecuentes",
            url: "#preguntasFrecuentes"
        }
    ],
    email: 'kris@hotmail.com',
    telephone: '(+506) 8880-7062',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        whatsapp: 'https://wa.me/50688807062?text=Hola%2C%20Quiero%20Galletas%20hoy%3F',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/cookie_kits_by_kris/',
    }
}