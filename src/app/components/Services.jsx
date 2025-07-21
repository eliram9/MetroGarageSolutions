'use client';

import React from 'react';

import Script from 'next/script';
import Image from 'next/image';
import Container from './Container';

const Services = () => {
    return (
        <section id='services'>
            <div className="relative w-full h-[40vh] md:h-[50vh] font-rubik">
                {/* Background Image */}
                <Image src="/images/obligation.png" 
                       alt="door garage technician"
                       className="absolute inset-0 z-0"
                       fill
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/65"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-6">
                    <Container>
                        <h1 className="font-md tracking-wide">OBLIGATION FREE ESTIMATE!</h1>
                        <h3 className="font-light mt-4 pb-10">Metro Garage Solutions provides an obligation free estimate, 
                            just call us at <span className='font-semibold'>240.688.8858</span> or click on the button below.</h3>

                        
                        {/* Elfsight Google Reviews | Untitled Google Reviews */}
                        <div className='py-10'>
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div class="elfsight-app-b505707f-ef1e-44ba-9085-001e0913ad5c" data-elfsight-app-lazy></div>
                        </div>    
                        <button 
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className='my-3 px-5 py-3 bg-gradient-to-r from-start to-end text-white rounded-xl hover:scale-105 transition-transform cursor-pointer'
                        >
                            REQUEST FREE ESTIMATE!
                        </button> 
                    </Container>
                </div>

            </div>

            <div className='py-3 pb-12 relative font-rubik text-primary bg-gradient-to-tl from-primary/90 to-end/90'>
                <Container>
                    <div className='text-center text-white'>
                        <h1 className="pt-8 md:pt-16 font-md">OUR SERVICES</h1>
                        <h3 className="font-light mt-4 pb-4 md:pb-20">We are doing a couple of things you might be interested in</h3>
                    </div>

                    {/* Cards section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 font-extralight bg-transparent">
                        {/* Card 1 */}
                        <div className="w-full shadow-xl rounded-lg py-6 px-3 flex flex-col items-center text-center bg-black/15 border border-white">
                            <Image src="/images/install.png" 
                                alt="Installation Icon" 
                                width={64} 
                                height={64} 
                                className="mb-3 w-11 h-11 md:w-16 md:h-16" 
                            />
                            <p className="text-white mt-3 px-6 md:px-5">Our installation services include: door installation, panels installation, door accessories, and door opener installation.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full shadow-xl rounded-lg py-6 px-3 flex flex-col items-center text-center bg-black/15 border border-white">
                            <Image src="/images/maintaine.png" 
                                alt="Maintenance Icon" 
                                width={64} 
                                height={64} 
                                className="mb-3 w-11 h-11 md:w-16 md:h-16" 
                            />
                            <p className="text-white mt-3 px-6 md:px-5">Regular maintenance can save you hundreds on costly repairs or door replacements. We offer maintenance and inspections for an affordable price.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full shadow-xl rounded-lg py-6 px-3 flex flex-col items-center text-center bg-black/15 border border-white">
                            <Image src="/images/repair.png" 
                                alt="Repair Icon" 
                                width={64} 
                                height={64} 
                                className="mb-3 w-11 h-11 md:w-16 md:h-16" 
                            />
                            <p className="text-white mt-3 px-6 md:px-5">Everything in line could break, either by wearing out over time, or by accident. We service all of the major garage door openers, and carry most door..</p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
       
    )
}

export default Services
