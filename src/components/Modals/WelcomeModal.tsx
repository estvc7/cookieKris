import React from 'react';
import { IWelcomeModalProps } from '@/types';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const WelcomeModal: React.FC<IWelcomeModalProps> = ({ show, handleClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300" onClick={handleClose}></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6 animate-fade-in">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-lg font-medium text-center text-gradient bg-gradient-to-r animate-bounce">
                        Bienvenido a Cookie Kits by Kris!
                    </h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                        <FaTimes />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="mt-4">
                    <p>El propósito de esta página es <strong>exclusivamente informativa, no se realizan pagos ni se recopilan datos de los usuarios.</strong></p>
                    <br />
                    <p>El punto fijo de entrega es en <strong className='animate-bounce'>Palmares-Alajuela</strong>, para cualquier otra ubicación favor coordinar a través de nuestro WhatsApp.</p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        className="px-4 py-2 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-300 flex items-center"
                        onClick={handleClose}
                    >
                        Continuar
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;