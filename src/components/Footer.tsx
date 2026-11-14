import Link from 'next/link';
import React from 'react';
import { FaCookieBite } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <FaCookieBite className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Correo: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">Teléfono: {footerDetails.telephone}</a>}

                    <div className="mt-5 flex items-center gap-5 flex-wrap">
                        {Object.entries(footerDetails.socials).map(([platformName, url]) => {
                            if (!url) return null;

                            return (
                                <a
                                    href={url}
                                    key={platformName}
                                    aria-label={`Visitar ${platformName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                                >
                                    {getPlatformIconByName(platformName)}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. Todos los derechos reservados.</p>
                <p className="text-sm mt-2 text-foreground-accent">
                    Desarrollado por{' '}
                    <a href="https://github.com/estvc7" target="_blank" rel="noopener noreferrer" className="underline">
                        estvc7
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
