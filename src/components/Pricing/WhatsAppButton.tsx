'use client';
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import clsx from "clsx";

interface WhatsAppButtonProps {
    highlight?: boolean;
    details?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ highlight, details }) => {
    const handleButtonClick = () => {
        const message = `Hola me gustaria solicitar ${details}`;
        const phoneNumber = '50688807062';
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <button
            onClick={handleButtonClick}
            className={clsx("w-full py-3 px-4 rounded-full transition-colors flex items-center justify-center", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-green-400": !highlight })}
        >
            <span className="mr-2">Pedir</span>
            <BsWhatsapp />
        </button>
    );
};

export default WhatsAppButton;