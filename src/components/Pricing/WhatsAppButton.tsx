'use client';
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import clsx from "clsx";

interface WhatsAppButtonProps {
    highlight?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ highlight }) => {
    const handleButtonClick = () => {
        window.location.href = "https://wa.me/50688807062?text=Hola%2C%20Quiero%20Galletas%20hoy%3F";
    };

    return (
        <button
            onClick={handleButtonClick}
            className={clsx("w-full py-3 px-4 rounded-full transition-colors flex items-center justify-center", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}
        >
            <span className="mr-2">Pedir</span>
            <BsWhatsapp />
        </button>
    );
};

export default WhatsAppButton;