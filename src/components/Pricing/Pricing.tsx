'use client';
import React, { useState, useRef, useEffect } from "react";
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<string | number>('auto');
    const height = 580;

    useEffect(() => {
        if (containerRef.current) {
            setTimeout(() => {
                setContainerHeight(showMore ? containerRef.current!.scrollHeight : height); // Adjust 200 to your preferred collapsed height
            }, 0);
        }
    }, [showMore]);
    
    useEffect(() => {
        if (containerRef.current) {
            setTimeout(() => {
                setContainerHeight(height); // Adjust based on design needs
            }, 0);
        }
    }, []);

    const visibleTiers = showMore ? tiers : tiers.slice(0, 3);

    return (
        <div>
            <div 
                ref={containerRef} 
                style={{ height: containerHeight, transition: 'height 0.5s ease-in-out' }} 
                className="overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {visibleTiers.map((tier, index) => (
                        <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                    ))}
                </div>
            </div>
            {tiers.length > 3 && (
                <div 
                    onClick={() => setShowMore(!showMore)} 
                    className="mt-10 flex items-center justify-center cursor-pointer"
                >
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <div className="mx-4 text-gray-500 transition-transform duration-300">
                        {showMore ? "Mostrar menos ▲" : "Mostrar mas ▼"}
                    </div>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>
            )}
        </div>
    );
}

export default Pricing;