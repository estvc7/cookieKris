export interface IMenuItem {
    text: string;
    url: string;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
    imageURL?: string;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

export interface IPricingModalProps {
    imageURL: string;
    onClose: () => void;
    name: string;
}