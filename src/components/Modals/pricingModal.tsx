import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ModalProps {
    imageURL: string;
    onClose: () => void;
    name: string;
}

const PricingModal: React.FC<ModalProps> = ({ imageURL, onClose, name }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Match the duration of the animation
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white p-4 rounded-lg relative max-w-3xl w-full transform transition-transform duration-300 ease-out ${isVisible ? 'animate-modalOpen' : 'animate-modalClose'}`}>
                <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600">
                    &times;
                </button>
                <div className="relative w-full h-96">
                    <Image 
                        src={imageURL} 
                        alt={name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        className="object-contain rounded-t-xl cursor-pointer" 
                    />
                </div>
            </div>
        </div>
    );
};

export default PricingModal;