'use client';

import React, { useState, useEffect } from 'react';
import HeroText from './HeroText';
import Container from './Container';


const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // null until the first client-side measurement so we never start
    // downloading the wrong video on desktop
    const videoSrc = isMobile === null
        ? null
        : isMobile
            ? '/images/hero_video.mp4'
            : '/images/hero_video_desktop.mp4';

    return (
        <section className='relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center overflow-hidden font-rubik' aria-labelledby="hero-heading">
            {/* Skeleton shimmer — shown until the hero video can play */}
            <div
                aria-hidden="true"
                className={`absolute inset-0 skeleton-shimmer animate-shimmer transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
            />

            {videoSrc && (
                <video
                    key={videoSrc}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    onLoadedData={() => setVideoLoaded(true)}
                    onCanPlay={() => setVideoLoaded(true)}
                />
            )}

            <Container>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#002C8C] to-transparent" aria-hidden="true"></div>

                <header className='relative text-white'>
                    <h1 id="hero-heading" className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light'>
                        <span className="sr-only">Metro Garage Solutions - </span>GARAGE DOORS
                    </h1>
                    <div className='h-[100px]' aria-live="polite">
                        <HeroText />
                    </div>
                    <p className='text-lg sm:text-xl md:text-2xl w-full md:w-4/6 font-light pt-8 mt-2'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors in Rockville, MD and the Washington DC metro area.</p>

                    <nav className='mt-16 flex space-x-4' aria-label="Main actions">
                        <a href="#contact" aria-label="Contact Metro Garage Solutions for garage door services">
                            <button className="btn-accent">CONTACT US</button>
                        </a>
                        <a href="#services" aria-label="Get a free estimate for garage door services">
                            <button className="btn-primary">FREE ESTIMATE</button>
                        </a>
                    </nav>

                </header>
            </Container>
        </section>
    );
}

export default Hero
