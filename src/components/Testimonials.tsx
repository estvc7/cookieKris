'use client';
import React, { useEffect, useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { FaWhatsapp } from 'react-icons/fa';

const Testimonials: React.FC = () => {
    const [visibleMessages, setVisibleMessages] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleMessages((prev) => {
                if (prev < testimonials.length) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 1000); // Show a new message every 1 second
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6 max-w-md w-full mx-auto lg:max-w-full bg-[#eae6df] p-4 rounded-lg">
            {/* Blue message aligned all the way to the right */}
            <div className="relative bg-blue-100 rounded-3xl p-4 shadow-md text-right text-sm text-blue-900 ml-auto w-fit before:content-[''] before:absolute before:top-full before:right-3 before:border-8 before:border-transparent before:border-t-blue-100 animate-fadeIn">
                <div className="flex items-center justify-end mb-2">
                    <FaWhatsapp className="text-blue-600 mr-2" />
                    <h3 className="text-sm font-semibold text-blue-800">Kris</h3>
                </div>
                <p className="text-sm text-blue-900">Hola, ¿Qué te parecieron las galletas?</p>
                <span className="text-xs text-blue-700 block mt-1">10:30 AM</span>
            </div>

            {/* Testimonials below the blue message */}
            {testimonials.slice(0, visibleMessages).map((testimonial, index) => (
                <div
                    key={index}
                    className="relative bg-green-100 rounded-3xl p-4 shadow-lg clear-both w-fit before:content-[''] before:absolute before:top-full before:left-3 before:border-8 before:border-transparent before:border-t-green-100 animate-fadeIn"
                >
                    <div className="flex items-center mb-2">
                        <FaWhatsapp className="text-green-600 mr-2" />
                        <h3 className="text-sm font-semibold text-green-800">{testimonial.name}</h3>
                    </div>
                    <p className="text-xs text-green-700 mb-2">{testimonial.role}</p>
                    <p className="text-sm text-green-900">&quot;{testimonial.message}&quot;</p>
                    <span className="text-xs text-green-600 block mt-1">{testimonial.timestamp}</span>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
