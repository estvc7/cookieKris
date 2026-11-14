"use client";

import { useState } from 'react';
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from 'next/image';

import type { IPricing } from "@/types";
import WhatsAppButton from "./WhatsAppButton";
import PricingModal from "../Modals/pricingModal";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, imageURL } = tier;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-surface rounded-xl border border-border-subtle lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-border-subtle rounded-t-xl">
                {imageURL && (
                    <button
                        type="button"
                        className="relative mb-4 block h-24 w-full rounded-t-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        onClick={handleImageClick}
                        aria-label={`Ampliar imagen de ${name}`}
                    >
                        <Image
                            src={imageURL}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="rounded-t-xl object-cover"
                        />
                    </button>
                )}
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `₡${price}` : price}
                    </span>
                </p>
                <WhatsAppButton details={name} />
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">Incluye:</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {isModalOpen && imageURL && <PricingModal imageURL={imageURL} onClose={closeModal} name={name} />}
        </div>
    )
}

export default PricingColumn;