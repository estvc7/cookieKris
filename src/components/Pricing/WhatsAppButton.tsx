'use client';
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { footerDetails } from "@/data/footer";

interface WhatsAppButtonProps {
    details: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ details }) => {
    const message = `Hola, me gustaría solicitar ${details}.`;
    const phoneNumber = footerDetails.telephone.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${details} por WhatsApp`}
            className="flex w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-[#17351F] transition-colors hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
            <span className="mr-2">Pedir</span>
            <BsWhatsapp aria-hidden="true" />
        </a>
    );
};

export default WhatsAppButton;