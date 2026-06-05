'use client';

import React, { useState, useEffect } from 'react';
import HeroText from './HeroText';
import Container from './Container';


const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

    useEffect(() => {
        // bundle-conditional: Detect device type and serve appropriate video
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            console.log(`[Hero Video] Screen width: ${window.innerWidth}px | Mobile: ${mobile}`);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adaptive video source: mobile (999KB) vs desktop (2.4MB)
    const videoSrc = isMobile
        ? '/images/hero_video.mp4'          // 480p, 369kbps, ~1MB
        : '/images/hero_video_desktop.mp4'; // 720p, 930kbps, ~2.4MB

    // Debug: Log which video is being loaded
    useEffect(() => {
        console.log(`[Hero Video] Loading: ${videoSrc}`);
        console.log(`[Hero Video] Device: ${isMobile ? 'Mobile (999KB)' : 'Desktop (2.4MB)'}`);
    }, [videoSrc, isMobile]);

    return (
        <section className='relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center overflow-hidden font-rubik' aria-labelledby="hero-heading">
            {/* Skeleton Loading Animation */}
            {!videoLoaded && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] w-full h-full"></div>
                    </div>
                </div>
            )}

            <video
                key={videoSrc} // Force re-render when video source changes
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={videoSrc}
                poster="/images/ofer-ai.png"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

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
