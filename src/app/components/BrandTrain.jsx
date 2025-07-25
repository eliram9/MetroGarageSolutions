'use client';

import React from 'react';
import Image from 'next/image';

const BrandTrain = () => {
    const brands = [
        {
            name: "Chamberlain",
            logo: "/brands/Chamberlain-Logo.png",
            alt: "Chamberlain Logo"
        },
        {
            name: "LiftMaster",
            logo: "/brands/Liftmaster-Logo.png",
            alt: "LiftMaster Logo"
        },
        {
            name: "Clopay",
            logo: "/brands/Product_Logo_Clopay-01+(1).png",
            alt: "Clopay Logo"
        },
        {
            name: "Amarr",
            logo: "/brands/amarr-logo.png",
            alt: "Amarr Logo"
        },
        {
            name: "Genie",
            logo: "/brands/genie.png",
            alt: "Genie Logo"
        },
        {
            name: "Wayne Dalton",
            logo: "/brands/wayne-dalton-logo-300x141.webp",
            alt: "Wayne Dalton Logo"
        }
    ];

    return (
        <div className="w-full my-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className='font-medium dark:text-white md:text-3xl text-2xl mb-4'>TRUSTED BRANDS</h2>
                    <h4 className='text-md md:text-xl font-base pt-1 mb-10'>We work with industry-leading brands</h4> 
                </div>
                
                {/* Carousel Container */}
                <div className="relative overflow-hidden">    
                    {/* Scrolling Container */}
                    <div className="flex hover:animation-paused"
                         style={{animation: 'scroll 30s linear infinite'}}
                    >
                        {/* First set of logos */}
                        <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 min-w-max">
                            {brands.map((brand, index) => (
                                <div key={`first-${index}`}
                                     className="flex-shrink-0 transition-all duration-3000 hover:scale-110 group"
                                >
                                    <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
                                        <Image src={brand.logo}
                                               alt={brand.alt}
                                               width={200}
                                               height={100}
                                               className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 min-w-max ml-8 sm:ml-12 md:ml-16 lg:ml-20">
                            {brands.map((brand, index) => (
                                <div key={`second-${index}`}
                                     className="flex-shrink-0 transition-all duration-300 hover:scale-110 group"
                                >
                                    <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
                                        <Image src={brand.logo}
                                               alt={brand.alt}
                                               width={200}
                                               height={100}
                                               className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandTrain;