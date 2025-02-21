'use client';
import React, { useState } from "react";
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const visibleTiers = showMore ? tiers : tiers.slice(0, 3);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {visibleTiers.map((tier, index) => (
                    <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                ))}
            </div>
            {tiers.length > 3 && (
                <div 
                    onClick={() => setShowMore(!showMore)} 
                    className="mt-4 flex items-center justify-center cursor-pointer"
                >
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <div className="mx-4 text-gray-500 transition-transform duration-300">
                        {showMore ? "Show less ▲" : "Show more ▼"}
                    </div>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>
            )}
        </div>
    );
}

export default Pricing;