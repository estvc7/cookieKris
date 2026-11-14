'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaCookieBite } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-border-subtle bg-background shadow-sm">
            <Container className="!px-0">
                <nav aria-label="Navegación principal" className="mx-auto flex justify-between items-center py-2 px-5 md:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <FaCookieBite className="text-foreground min-w-fit w-7 h-7" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-foreground rounded-full w-10 h-10 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <nav id="mobile-menu" aria-label="Navegación móvil" className="md:hidden border-t border-border-subtle bg-background shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-secondary block" onClick={() => setIsOpen(false)}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Transition>
        </header>
    );
};

export default Header;