"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import worksData from "../../data/works.json";

const categoryColors = {
  Installation: 'bg-blue-600',
  Repair: 'bg-emerald-600',
  Maintenance: 'bg-amber-600',
  Commercial: 'bg-purple-600',
};

const CarouselOld = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center image
  const works = worksData;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const getVisibleImages = () => {
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

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  useEffect(() => {
    setVisibleImages(getVisibleImages());
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex justify-center items-center h-[600px] relative">
        {visibleImages.map((work, index) => {
          const position = work.position;
          const isCenter = position === 0;
          const isNearCenter = Math.abs(position) === 1;

          return (
            <motion.div
              key={`${work.originalIndex}-${currentIndex}`}
              className="absolute rounded-lg overflow-hidden cursor-pointer shadow-lg"
              initial={false}
              animate={{
                x: position === 0 ? 0 : position === 1 ? 280 : position === -1 ? -280 : position === 2 ? 450 : -450,
                scale: isCenter ? 1.1 : isNearCenter ? 0.85 : 0.7,
                filter: isCenter ? 'blur(0px)' : `blur(${Math.abs(position) * 1.5}px)`,
                zIndex: isCenter ? 20 : isNearCenter ? 15 : 10,
              }}
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
                    ? "w-[800px] h-[480px]"
                    : isNearCenter
                    ? "w-[700px] h-[420px]"
                    : "w-[750px] h-[300px]"
                }`}
              />

              {/* Category Tag - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1.5 text-white text-xs font-medium tracking-wide rounded-full ${
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
                  className="absolute bottom-0 left-0 right-0 bg-primary p-4"
                >
                  <h3 className="text-white font-bold text-lg">{work.title}</h3>
                  <p className="text-white/90 text-sm">{work.description}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0"
        >
          {"<"}
        </button>

        <div className="flex space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-red scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;