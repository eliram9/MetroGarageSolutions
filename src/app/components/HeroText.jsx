'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroText = () => {
    const words = ["INSTALLATION", "REPAIR", "MAINTENANCE"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Changes word every 2 seconds

        return () => clearInterval(interval);
    });

    return (
        <div className="text-7xl font-rubik h-24 flex items-center justify-start font-medium">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="bg-gradient-to-r from-start to-end text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}

export default HeroText;