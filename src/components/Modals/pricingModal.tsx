import React from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import type { IPricingModalProps } from '@/types';


const PricingModal: React.FC<IPricingModalProps> = ({ imageURL, onClose, name }) => {
    return (
        <Dialog open onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
                <DialogPanel className="w-full max-w-3xl rounded-lg bg-white p-4 shadow-xl">
                    <div className="mb-3 flex items-center justify-between gap-4">
                        <DialogTitle className="text-lg font-semibold">Imagen de {name}</DialogTitle>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Cerrar imagen ampliada"
                            className="rounded px-2 py-1 text-2xl leading-none text-foreground-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="relative h-[70vh] max-h-[36rem] min-h-64 w-full">
                        <Image
                            src={imageURL}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="rounded object-contain"
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default PricingModal;