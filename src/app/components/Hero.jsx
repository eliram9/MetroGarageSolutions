import React from 'react';
import HeroText from './HeroText';


const Hero = () => {
    return (
        <section className='relative h-[450px] flex items-center overflow-hidden font-rubik'>
            {/* Background Video */}
            <video className='absolute top-0 left-0 w-full h-full object-cover'
                   src="/images/door.mp4"
                   autoPlay loop muted
            ></video>

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0010A4] to-transparent"></div>

            {/* Text Content */}
            <div className='relative px-6 text-white w-1/2 '>
                <h1 className='text-4xl font-light'>GARAGE DOOR</h1>
                <div className='h-[100px]'>
                    <HeroText />
                </div>
                <p className='mt-2 w-4/6 font-light text-lg'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>
            </div>
        </section>
    )
}

export default Hero
