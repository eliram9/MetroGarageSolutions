import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        <section id='about' className='font-rubik text-primary py-20' aria-labelledby="about-heading">
            <header className='left-0 relative'>
                    <h1 className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15' aria-hidden="true">ABOUT</h1>
                    <div className='text-primary'>
                        <h2 id="about-heading" className='ml-10 font-mediumm absolute -mt-9 md:-mt-12 text-[#002C8C] dark:text-white  md:text-3xl text-2xl'>WHO ARE WE?</h2>
                    </div>
            </header>

            <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center'>
                <article className='w-full md:w-full lg:w-1/2 order-2 md:order-2 lg:order-1'>
                    <div>
                        <p className='text-base md:text-lg my-6 font-light'>Metro Garage Solution is a local and family owned company, we are based in Rockville, MD and provide reliable and affordable services throughout the Washington DC metropolitan area.</p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='btn-primary' aria-label="View our garage door services">OUR SERVICES</button>
                        </div>
                    </div>
                </article>

                <aside className='w-full md:w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 md:order-1 lg:order-2'>
                    <figure className='w-full md:w-[600px] py-6'>
                        <Image 
                            src="/images/ofer-ai.png" 
                            alt="Professional garage door technician from Metro Garage Solutions in Rockville MD" 
                            width={500} 
                            height={500} 
                            className='w-full h-auto rounded-lg'
                            loading="lazy"
                        />
                    </figure>
                </aside>
            </div>

            <section className='pb-10' aria-labelledby="why-choose-us">
                <div>
                    <header className='text-center'>
                        <div className='mt-24'>
                            <h3 id="why-choose-us" className='text-xl md:text-2xl font-medium'>WHY CHOOSE US?</h3>
                            <p className='text-base md:text-lg my-6 font-light'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28 pt-6 text-center" role="list">
                        <article className="relative" role="listitem">
                            <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-start to-end" aria-hidden="true"></div>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-start to-end" aria-hidden="true"></div>
                            <div className="p-4">
                                <header className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image 
                                            src='/images/Love.png' 
                                            alt="Quality guarantee icon" 
                                            width={50} 
                                            height={50} 
                                            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-lg md:text-p font-medium pt-1'>Quality Guaranteed</h4>
                                    </div>
                                </header>
                                <div className='flex'>
                                    <p className='text-base md:text-lg my-3 font-light text-left'>We guarantee the quality of our work and parts, please ask your garage door consultant for more information about our workmanship and parts warranty.</p>
                                </div>
                            </div>
                        </article>
                        <article className="relative" role="listitem">
                            <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-end to-start" aria-hidden="true"></div>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-end to-start" aria-hidden="true"></div>
                            <div className="p-4">
                                <header className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image 
                                            src='/images/Quality.png' 
                                            alt="Professional service icon" 
                                            width={50} 
                                            height={50} 
                                            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-lg md:text-p font-medium pt-1'>Personal & Professional Service</h4>
                                    </div>
                                </header>
                                <div className='flex'>
                                    <p className='text-base md:text-lg my-3 font-light text-left'>We provide personal and professional service to all our customers from the time you call to get an estimate, until the job is complete and afterwards.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default About;
