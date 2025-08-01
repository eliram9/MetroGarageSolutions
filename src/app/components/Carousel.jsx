"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import imagesData from "../../data/images.json";

const categoryColors = {
  Tree: 'bg-green-600',
  Sun: 'bg-yellow-600',
  Whale: 'bg-blue-600',
  Snow: 'bg-gray-600',
};

const Carousel = ({ activeCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center image
  const works = activeCategory ? imagesData.filter(image => image.category === activeCategory) : imagesData;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const getVisibleImages = () => {
    if (works.length === 0) return [];
    
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + works.length) % works.length;
      visible.push({
        ...works[index],
        position: i,
        originalIndex: index,
      });
    }
    return visible;
  };

  // Use useMemo for efficient recalculation of visible images
  const visibleImages = useMemo(() => getVisibleImages(), [currentIndex, activeCategory, works]);

  // Reset index when category changes
  useEffect(() => {
    if (works.length > 0) {
      const validIndex = Math.min(2, works.length - 1);
      setCurrentIndex(validIndex);
    }
  }, [activeCategory]);


  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex justify-center items-center h-[300px] md:h-[400px] lg:h-[600px] relative">
        <AnimatePresence>
          {visibleImages.map((work, index) => {
            const position = work.position;
            const isCenter = position === 0;
            const isNearCenter = Math.abs(position) === 1;

            return (
              <motion.div
                key={work.id}
              className={`absolute rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 ${
                isCenter 
                  ? 'shadow-2xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40' 
                  : isNearCenter 
                  ? 'shadow-xl shadow-gray-900/30 hover:shadow-xl hover:shadow-primary/20'
                  : 'shadow-lg shadow-gray-900/20'
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: position === 0 ? 0 : position === 1 ? (window.innerWidth < 768 ? 120 : 280) : position === -1 ? (window.innerWidth < 768 ? -120 : -280) : position === 2 ? (window.innerWidth < 768 ? 200 : 450) : (window.innerWidth < 768 ? -200 : -450),
                scale: isCenter ? 1.1 : isNearCenter ? 0.85 : 0.7,
                filter: isCenter ? 'blur(0px)' : `blur(${Math.abs(position) * 1.5}px)`,
                zIndex: isCenter ? 20 : isNearCenter ? 15 : 10,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => {
                if (position !== 0) {
                  setCurrentIndex(work.originalIndex);
                }
              }}
            >
              <img
                src={work.image}
                alt={work.title || `Slide ${index}`}
                className={`object-cover ${
                  isCenter
                    ? "w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[600px] md:h-[360px] lg:w-[800px] lg:h-[480px]"
                    : isNearCenter
                    ? "w-[240px] h-[170px] sm:w-[350px] sm:h-[245px] md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[420px]"
                    : "w-[200px] h-[140px] sm:w-[300px] sm:h-[210px] md:w-[400px] md:h-[240px] lg:w-[750px] lg:h-[300px]"
                }`}
              />

              {/* Category Tag - Top Left */}
              <div className="absolute top-1 left-1 md:top-2 md:left-2 z-10">
                <span className={`px-1 py-0.5 lg:px-2 lg:py-1 text-white text-[10px] lg:text-xs font-base md:font-medium tracking-wide rounded-full ${
                  categoryColors[work.category] || 'bg-gray-600'
                } shadow-md`}>
                  {work.category.toUpperCase()}
                </span>
              </div>

              {/* Center image overlay */}
              {isCenter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-1.5 pt-3 md:p-3 md:pt-6"
                >
                  <h3 className="text-white font-medium text-xs md:text-sm lg:text-base">{work.title}</h3>
                  <p className="text-white/90 text-[10px] md:text-xs lg:text-sm">{work.description}</p>
                </motion.div>
              )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-4 md:mt-6 space-x-3 md:space-x-4">
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-9 md:h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0 text-sm md:text-base"
        >
          {"<"}
        </button>

        <div className="flex space-x-1 md:space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-red scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 md:w-9 md:h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0 text-sm md:text-base"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;