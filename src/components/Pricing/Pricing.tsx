'use client';
import React, { useState } from "react";
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    const visibleTiers = showMore ? tiers : tiers.slice(0, 3);

    return (
        <div>
            <div id="lista-productos" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {visibleTiers.map((tier, index) => (
                    <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                ))}
            </div>
            {tiers.length > 3 && (
                <div className="mt-10 flex items-center justify-center">
                    <div className="border-t border-border-subtle flex-grow"></div>
                    <button
                        type="button"
                        aria-expanded={showMore}
                        aria-controls="lista-productos"
                        onClick={() => setShowMore((showing) => !showing)}
                        className="mx-4 text-foreground-accent underline underline-offset-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                        {showMore ? "Mostrar menos" : "Mostrar más"}
                    </button>
                    <div className="border-t border-border-subtle flex-grow"></div>
                </div>
            )}
        </div>
    );
}

export default Pricing;