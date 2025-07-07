import React from 'react';
import HeroText from './HeroText';
import Container from './Container';


const Hero = () => {
    return (
        <section className='relative h-[60vh] flex items-center overflow-hidden font-rubik'>
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
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-light'>GARAGE DOORS</h1>
                    <div className='h-[100px]'>
                        <HeroText />
                    </div>
                    <p className='text-md mt-2 md:text-xl xl:2xl w-full md:w-4/6 font-light pt-8'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors.</p>

                {/* Buttons */}
                    <div className='mt-16 flex space-x-4'>
                        <div>
                            <button className="text-sm px-4 py-2 md:px-5 md:py-3 bg-red hover:bg-redHover text-white rounded-xl">ABOUT US</button>
                        </div>
                        <div>
                            <button className="text-sm px-4 py-2 md:px-5 md:backdrop:py-3 bg-orange hover:bg-orangeHover text-white rounded-xl">WHY METRO</button>
                        </div>
                    </div> 
                </div> 
            </Container>
        </section>
    );
}

export default Hero
