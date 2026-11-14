'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { heroDetails } from '@/data/hero';
import { footerDetails } from '@/data/footer';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!video || prefersReducedMotion) return;

        void video.play().catch(() => {
            // The poster remains visible when autoplay is unavailable.
        });
    }, []);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-20 pt-20 md:pt-20 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#6b5a4a12_1px,transparent_1px),linear-gradient(to_bottom,#6b5a4a12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(255,249,240,0.5)] to-[rgba(243,232,216,0.8)]" />

            <div className="text-center animate-fadeIn">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">
                    {heroDetails.subheading}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Link
                        href="#pricing"
                        className="rounded-full bg-primary px-6 py-3 font-semibold text-foreground transition-colors hover:bg-primary-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                        Ver productos
                    </Link>
                    {footerDetails.socials.whatsapp && (
                        <a
                            href={footerDetails.socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-[#17351F] transition-colors hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        >
                            Consultar por WhatsApp
                        </a>
                    )}
                </div>
                <video
                    ref={videoRef}
                    src={heroDetails.centerVideoSrc}
                    poster={heroDetails.centerImageSrc}
                    width={384}
                    height={320}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="relative mt-12 md:mt-8 mx-auto z-10 rounded-lg shadow-lg animate-fadeIn w-full md:w-auto"
                />
            </div>
        </section>
    );
};

export default Hero;