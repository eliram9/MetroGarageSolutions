import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        // maybe grid?
        <section id='about' className='pb-6 relative font-rubik text-primary'>
            <div className='absolute top-2 left-0'>
                    <h1 className='text-9xl font-extrabold text-blue-500 opacity-15'>ABOUT</h1>
                </div>

            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <div className='mt-24'>
                        <h2 className='pl-4 text-4xl font-medium'>WHO ARE WE?</h2>
                        <p className='text-lg my-6 font-light'>Metro Garage Solution is a local and family owned company, we are based in Rockville, MD and provide reliable and affordable services throughout the Washington DC metropolitan area.</p>
                        <button className='my-3 px-5 py-3 bg-gradient-to-r from-start to-end text-white rounded-xl'>OUR SERVICES</button>
                    </div>
                    

                </div>

                <div className='w-1/2 flex justify-end items-center'>
                    <div>
                        <Image src="/images/tech.png" alt="door garage technician" width={500} height={500} />
                    </div>
                </div>
            </div>

            {/* Why Us? */}
            <div className='pb-10'>
                <div>
                    <div className='text-center'>
                        <div className='mt-24'>
                            <h2 className='text-4xl font-medium'>WHY CHOOSE US?</h2>
                            <p className='text-lg my-6 font-light'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 pt-6 text-center">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-start to-end"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-start to-end"></div>
                            <div className="p-4">
                                <div className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image src='/images/Love.png' alt="care and quality" width={50} height={10} />
                                    </div>
                                    <div>
                                        <h3 className='text-p text-3xl font-medium pt-1'>Quality Guaranteed</h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='text-lg my-3 font-light text-left'>We Guarantee the quality of our work and parts, please ask your garage door consultant for more information about our workmanship and parts warranty.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-end to-start"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-end to-start"></div>
                            <div className="p-4">
                                <div className='flex items-center pb-3'>
                                    <div className='pr-3'>
                                        <Image src='/images/Quality.png' alt="care and quality" width={50} height={10} />
                                    </div>
                                    <div>
                                        <h3 className='text-p text-3xl font-medium pt-1'>Personal & Professional Service</h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='text-lg my-3 font-light text-left'>We provide personal and professional service to all our customers from the time you call to get an estimate, until the job is complete and afterwards.</p>
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
