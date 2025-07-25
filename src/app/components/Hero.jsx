import React from 'react';
import HeroText from './HeroText';
import Container from './Container';


const Hero = () => {
    return (
        <section className='relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center overflow-hidden font-rubik'>
            {/* Background Video */}
            <video className='absolute top-0 left-0 w-full h-full object-cover'
                   src="/images/hero_video.mp4"
                   autoPlay loop muted
            >
            </video>

            <Container>
                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#002C8C] to-transparent"></div>

                {/* Text Content */}
                <div className='relative text-white'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light'>GARAGE DOORS</h1>
                    <div className='h-[100px]'>
                        <HeroText />
                    </div>
                    <p className='text-lg sm:text-xl md:text-2xl w-full md:w-4/6 font-light pt-8 mt-2'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>

                {/* Buttons */}
                    <div className='mt-16 flex space-x-4'>
                        <div>
                            <a href="#contact">
                                <button className="btn-accent">CONTACT US</button>
                            </a>
                        </div>
                        <div>
                            <a href="#services">
                                <button className="btn-primary">FREE ESTIMATE</button>
                            </a>
                        </div>
                    </div>

                </div> 
            </Container>
        </section>
    );
}

export default Hero
