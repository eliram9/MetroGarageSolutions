'use client';

import React from 'react';

import Image from 'next/image';
import Container from './Container';
import BrandTrain from './BrandTrain';

const Services = () => {
    return (
        <section id='services' className='bg-rose-s100' aria-labelledby="services-heading">
            <header className="relative w-full font-rubik py-6">
                <Image src="/images/obligation.png"
                       alt="Professional garage door service team at work in Rockville MD"
                       className="absolute inset-0 z-0"
                       fill
                />

                <div className="absolute inset-0 bg-primary/65" aria-hidden="true"></div>

                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
                    <Container>
                        <h2 id="services-heading" className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">OBLIGATION FREE ESTIMATE!</h2>
                        <p className="font-light mt-4 pb-10">Metro Garage Solutions provides an obligation free estimate, 
                            just call us at <a href="tel:240-688-8858" className='font-semibold hover:underline'>240.688.8858</a> or click on the button below.</p>

                        
                        {/* Elfsight Google Reviews — platform.js loaded once via next/script in FAQ */}
                        <div className='py-10 w-full max-w-full overflow-hidden min-h-[200px]'>
                            <div className="max-w-xs mx-auto sm:max-w-sm md:max-w-full" style={{maxWidth: '100%', overflow: 'hidden'}}>
                                <div className="elfsight-app-b505707f-ef1e-44ba-9085-001e0913ad5c" data-elfsight-app-lazy></div>
                            </div>
                        </div>    
                        <button 
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className='btn-primary cursor-pointer'
                            aria-label="Request a free garage door service estimate"
                        >
                            REQUEST FREE ESTIMATE!
                        </button> 
                    </Container>
                </div>
            </header>

            <BrandTrain />

            <div className='py-6 md:py-12 lg:py-16 pb-12 md:pb-16 lg:pb-20 relative font-rubik text-primary bg-gradient-to-tl from-primary/90 to-end/90'>
                <Container>
                    <header className='text-center text-white'>
                        <h3 className="pt-8 md:pt-16 text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">OUR SERVICES</h3>
                        <p className="text-base md:text-lg font-light mt-4 pb-4 md:pb-20">We are doing a couple of things you might be interested in</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8" role="list">
                        <article className="w-full shadow-xl rounded-lg py-6 px-4 md:px-6 flex flex-col items-center text-center bg-black/15 border border-white" role="listitem">
                            <Image src="/images/install.png" 
                                alt="Garage door installation service icon" 
                                width={64} 
                                height={64} 
                                className="mb-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px]"
                                loading="lazy"
                            />
                            <h4 className="text-white font-medium mb-3 text-base md:text-lg">Installation Services</h4>
                            <p className="text-white text-sm md:text-base font-light px-2 md:px-4">Our installation services include: door installation, panels installation, door accessories, and door opener installation.</p>
                        </article>

                        <article className="w-full shadow-xl rounded-lg py-6 px-4 md:px-6 flex flex-col items-center text-center bg-black/15 border border-white" role="listitem">
                            <Image src="/images/maintaine.png" 
                                alt="Garage door maintenance service icon" 
                                width={64} 
                                height={64} 
                                className="mb-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px]"
                                loading="lazy"
                            />
                            <h4 className="text-white font-medium mb-3 text-base md:text-lg">Maintenance Services</h4>
                            <p className="text-white text-sm md:text-base font-light px-2 md:px-4">Regular maintenance can save you hundreds on costly repairs or door replacements. We offer maintenance and inspections for an affordable price.</p>
                        </article>

                        <article className="w-full shadow-xl rounded-lg py-6 px-4 md:px-6 flex flex-col items-center text-center bg-black/15 border border-white" role="listitem">
                            <Image src="/images/repair.png" 
                                alt="Garage door repair service icon" 
                                width={64} 
                                height={64} 
                                className="mb-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px]"
                                loading="lazy"
                            />
                            <h4 className="text-white font-medium mb-3 text-base md:text-lg">Repair Services</h4>
                            <p className="text-white text-sm md:text-base font-light px-2 md:px-4">Everything in line could break, either by wearing out over time, or by accident. We service all of the major garage door openers, and carry most door parts.</p>
                        </article>
                    </div>
                </Container>
            </div>
        </section>
       
    )
}

export default Services
