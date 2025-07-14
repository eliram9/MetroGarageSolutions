"use client";

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import worksData from '../../data/works.json';

const EmlaCa = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    startIndex: 2, // Start with center image
  });

  const [selectedIndex, setSelectedIndex] = useState(2);
  const [direction, setDirection] = useState(0);
  const works = worksData;

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setDirection(-1);
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setDirection(1);
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      setDirection(index > currentIndex ? 1 : -1);
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Get visible images array (5 images: -2, -1, 0, +1, +2)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (selectedIndex + i + works.length) % works.length;
      visible.push({
        ...works[index],
        position: i,
        originalIndex: index,
      });
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Embla container (hidden, just for navigation logic) */}
      <div className="embla hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {works.map((work, index) => (
            <div key={index} className="embla__slide flex-none w-full">
              <div>{work.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom display showing 5 images */}
      <div className="relative flex justify-center items-center h-[600px]">
        {visibleImages.map((work, index) => {
          const position = work.position;
          const isCenter = position === 0;
          const isNearCenter = Math.abs(position) === 1;

          return (
            <motion.div
              key={`${work.originalIndex}-${selectedIndex}`}
              className="absolute rounded-lg overflow-hidden cursor-pointer shadow-lg"
              animate={{
                x: position === 0 ? 0 : position === 1 ? 280 : position === -1 ? -280 : position === 2 ? 560 : -560,
                scale: isCenter ? 1.1 : isNearCenter ? 0.85 : 0.7,
                opacity: 1,
                zIndex: isCenter ? 20 : isNearCenter ? 15 : 10,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => {
                if (position !== 0) {
                  scrollTo(work.originalIndex);
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
          onClick={scrollPrev}
          className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0"
        >
          {"<"}
        </button>

        <div className="flex space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? "bg-red scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors p-0"
        >
          {">"}
        </button>
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          position: relative;
          min-width: 0;
        }
      `}</style>
    </div>
  );
};

export default EmlaCa;