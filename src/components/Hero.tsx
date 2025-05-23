'use client';

import React, { useEffect, useRef } from 'react';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play().catch((err) => {
                console.log('Autoplay failed:', err);
            });
        }
    }, []);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-20 pt-20 md:pt-20 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />

            <div className="text-center animate-fadeIn">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">
                    {heroDetails.subheading}
                </p>
                <video
                    ref={videoRef}
                    src={heroDetails.centerVideoSrc}
                    width={384}
                    height={320}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative mt-12 md:mt-8 mx-auto z-10 rounded-lg shadow-lg animate-fadeIn w-full md:w-auto"
                />
            </div>
        </section>
    );
};

export default Hero;