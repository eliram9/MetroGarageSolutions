import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        // maybe grid?
        <section id='about' className='font-rubik text-primary py-20'>
            <div className='left-0 relative'>
                    <h1 className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15'>ABOUT</h1>
                    <div className='text-primary'>
                        <h2 className='ml-10 font-mediumm absolute -mt-9 md:-mt-12 text-[#002C8C] dark:text-white  md:text-3xl text-2xl'>WHO ARE WE?</h2>
                    </div>
            </div>

            <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center'>
                <div className='w-full md:w-full lg:w-1/2 order-2 md:order-2 lg:order-1'>
                    <div className=''>
                        <p className='text-base md:text-lg my-6 font-light'>Metro Garage Solution is a local and family owned company, we are based in Rockville, MD and provide reliable and affordable services throughout the Washington DC metropolitan area.</p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='btn-primary'>OUR SERVICES</button>
                        </div>
                    </div>
                    

                </div>

                <div className='w-full md:w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 md:order-1 lg:order-2'>
                    <div className='w-full md:w-[600px] py-6'>
                        {/* <Image src="/images/tech.png" alt="door garage technician" width={500} height={500} /> */}
                        <Image src="/images/ofer-ai.png" alt="door garage technician" width={500} height={500} className='w-full h-auto rounded-lg' />
                    </div>
                </div>
            </div>

            {/* Why Us? */}
            <div className='pb-10'>
                <div>
                    <div className='text-center'>
                        <div className='mt-24'>
                            <h3 className='text-xl md:text-2xl font-medium'>WHY CHOOSE US?</h3>
                            <p className='text-base md:text-lg my-6 font-light'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 pt-6 text-center">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-start to-end"></div>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-start to-end"></div>
                            <div className="p-4">
                                <div className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image src='/images/Love.png' alt="care and quality" width={50} height={10} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
                                    </div>
                                    <div>
                                        <h4 className='text-lg md:text-p font-medium pt-1'>Quality Guaranteed</h4>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='text-base md:text-lg my-3 font-light text-left'>We Guarantee the quality of our work and parts, please ask your garage door consultant for more information about our workmanship and parts warranty.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-end to-start"></div>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-end to-start"></div>
                            <div className="p-4">
                                <div className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image src='/images/Quality.png' alt="care and quality" width={50} height={10} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
                                    </div>
                                    <div>
                                        <h4 className='text-lg md:text-p font-medium pt-1'>Personal & Professional Service</h4>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='text-base md:text-lg my-3 font-light text-left'>We provide personal and professional service to all our customers from the time you call to get an estimate, until the job is complete and afterwards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
