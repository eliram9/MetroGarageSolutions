import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        <section id='about' className='font-rubik text-primary py-20' aria-labelledby="about-heading">
            <header className='left-0 relative'>
                    <div className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15' aria-hidden="true">ABOUT</div>
                    <div className='text-primary'>
                        <h2 id="about-heading" className='ml-10 font-medium absolute -mt-9 md:-mt-12 text-[#002C8C] dark:text-white  md:text-3xl text-2xl'>WHO ARE WE?</h2>
                    </div>
            </header>

            <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8'>
                <article className='w-full md:w-full lg:w-1/2 order-2 md:order-2 lg:order-1 px-4 md:px-6 lg:px-0 lg:pr-8'>
                    <div className='space-y-6'>
                        <p className='text-base md:text-lg lg:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-300'>
                            Metro Garage Solutions is a family-owned garage door company based in Rockville, MD. For over 12 years we have provided garage door repair, maintenance, and installation services throughout Maryland, Washington DC, and Northern Virginia.
                        </p>
                        <div className='flex justify-center lg:justify-start pt-2'>
                            <button className='btn-primary w-full sm:w-auto' aria-label="View our garage door services">OUR SERVICES</button>
                        </div>
                    </div>
                </article>

                <aside className='w-full md:w-full lg:w-2/5 flex justify-center lg:justify-end items-center order-1 md:order-1 lg:order-2'>
                    <figure className='group relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl py-6 px-4 md:px-0'>

                        {/* Brand glow behind the frame */}
                        <div
                            aria-hidden="true"
                            className='pointer-events-none absolute inset-6 md:inset-2 -z-0 rounded-[2rem] bg-gradient-to-br from-start to-end opacity-30 blur-2xl dark:opacity-40 transition-opacity duration-500 group-hover:opacity-50'
                        />

                        {/* Gradient frame ring */}
                        <div className='relative rounded-lg shadow-end/20 dark:shadow-end/40'>
                            <div className='relative aspect-square overflow-hidden rounded-lg'>

                                {/* Zoomed, desaturated photo */}
                                <Image
                                    src="/images/ofer_1.png"
                                    alt="Professional garage door technician from Metro Garage Solutions in Rockville MD"
                                    fill
                                    sizes="(max-width: 1024px) 85vw, 600px"
                                    className='img-duotone img-zoomable object-cover object-center'
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />

                                {/* Brand-color duotone wash (recolors the photo) */}
                                <div aria-hidden="true" className='duotone-wash absolute inset-0' />

                                {/* Blue glow from bottom-right, fading up to transparent */}
                                <div
                                    aria-hidden="true"
                                    className='absolute inset-0 bg-gradient-to-bl from-primary/45'
                                />

                                {/* Red glow from bottom-left, fading up to transparent */}
                                <div
                                    aria-hidden="true"
                                    className='absolute inset-0 bg-gradient-to-tr from-end/45'
                                />
                            </div>
                        </div>
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
