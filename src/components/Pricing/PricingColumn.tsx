import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from 'next/image';

import { IPricing } from "@/types";
import WhatsAppButton from "./WhatsAppButton";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, imageURL } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                {imageURL && (
                    <div className="w-full h-24 relative mb-4">
                        <Image src={imageURL} alt={name} layout="fill" objectFit="cover" className="rounded-t-xl" />
                    </div>
                )}
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `₡${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600"></span>}
                </p>
                <WhatsAppButton highlight={highlight} details={name} />
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">Incluye:</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn;