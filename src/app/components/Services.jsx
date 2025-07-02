import React from 'react';

import Image from 'next/image';

const Services = () => {
    return (
        <>
            <div className="relative w-full h-[500px] font-rubik">
                {/* Background Image */}
                <Image src="/images/tech.png" 
                       alt="door garage technician"
                       className="absolute inset-0 z-0"
                       fill
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-6">
                    <h1 className="text-5xl font-md tracking-wide">OBLIGATION FREE ESTIMATE!</h1>
                    <p className="text-xl font-light mt-4 pb-20">Metro Garage Solutions provides an obligation free estimate, 
                        just call us at <span className='font-semibold'>240.688.8858</span> or click on the button below.</p>
                    <button className='my-3 px-5 py-3 bg-gradient-to-r from-start to-end text-white rounded-xl'>REQUESR FREE ESTIMATE!</button> 
                </div>

            </div>

            <section className='px-32 py-3 pb-32 relative font-rubik text-primary bg-gradient-to-tl from-primary to-end'>
                <div className='text-center text-white'>
                    <h1 className="pt-16 text-5xl font-md">OUR SERVICES</h1>
                    <p className="text-xl font-light mt-4 pb-20">We are doing a couple of things you might be interested in</p>
                </div>

                {/* Cards section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 font-extralight bg-transparent">
                    {/* Card 1 */}
                    <div className="w-full shadow-xl rounded-lg p-6 flex flex-col items-center text-center">
                        <Image src="/images/install.png" 
                               alt="Installation Icon" 
                               width={64} 
                               height={64} 
                               className="mb-3" 
                        />
                        <p className="text-white mt-3 px-16">Our installation services include: door installation, panels installation, door accessories, and door opener installation.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full shadow-xl rounded-lg p-6 flex flex-col items-center text-center bg-transparent">
                    <Image src="/images/maintaine.png" 
                               alt="Maintenance Icon" 
                               width={64} 
                               height={64} 
                               className="mb-3" 
                        />
                        <p className="text-white mt-3 px-16">Regular maintenance can save you hundreds on costly repairs or door replacements. We offer maintenance and inspections for an affordable price.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full shadow-xl rounded-lg p-6 flex flex-col items-center text-center bg-transparent">
                    <Image src="/images/repair.png" 
                               alt="Repair Icon" 
                               width={64} 
                               height={64} 
                               className="mb-3" 
                        />
                        <p className="text-white mt-3 px-16">Everything in line could break, either by wearing out over time, or by accident. We service all of the major garage door openers, and carry most door..</p>
                    </div>
                </div>
            </section>
        </>
       
    )
}

export default Services
