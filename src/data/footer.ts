import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Grand sabor a un mordisco",
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
        }
    ],
    email: 'kris@hotmail.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        whatsapp: 'https://www.whatsapp.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}