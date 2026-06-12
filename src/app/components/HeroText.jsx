'use client'
import React, { useState, useEffect, useRef } from 'react';

const words = ["INSTALLATION", "REPAIR", "MAINTENANCE"];

const HeroText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState('in');
    const fallbackRef = useRef(null);

    useEffect(() => {
        const id = setInterval(() => {
            setPhase('out');
            // Fallback for prefers-reduced-motion: onAnimationEnd never fires
            // when animation:none is active, so advance the word by timer instead.
            fallbackRef.current = setTimeout(() => {
                setCurrentIndex(i => (i + 1) % words.length);
                setPhase('in');
            }, 350);
        }, 2000);
        return () => {
            clearInterval(id);
            clearTimeout(fallbackRef.current);
        };
    }, []);

    const handleAnimationEnd = () => {
        if (phase === 'out') {
            clearTimeout(fallbackRef.current);
            setCurrentIndex(i => (i + 1) % words.length);
            setPhase('in');
        }
    };

    return (
        <div className="text-5xl md:text-6xl xl:text-7xl font-rubik h-24 flex items-center justify-start font-medium">
            <span
                onAnimationEnd={handleAnimationEnd}
                className={`bg-gradient-to-r from-start to-end text-transparent bg-clip-text ${
                    phase === 'in' ? 'animate-word-in' : 'animate-word-out'
                }`}
            >
                {words[currentIndex]}
            </span>
        </div>
    );
}

export default HeroText;
