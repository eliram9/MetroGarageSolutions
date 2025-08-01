import React from 'react';
import HeroText from './HeroText';
import Container from './Container';


const Hero = () => {
    return (
        <section className='relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center overflow-hidden font-rubik' aria-labelledby="hero-heading">
            <video 
                className='absolute top-0 left-0 w-full h-full object-cover'
                src="/images/hero_video.mp4"
                autoPlay 
                loop 
                muted
                playsInline
                aria-hidden="true"
                poster="/images/garage.png"
            >
                <source src="/images/hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Container>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#002C8C] to-transparent" aria-hidden="true"></div>

                <header className='relative text-white'>
                    <h1 id="hero-heading" className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light'>
                        <span className="sr-only">Metro Garage Solutions - </span>GARAGE DOORS
                    </h1>
                    <div className='h-[100px]' aria-live="polite">
                        <HeroText />
                    </div>
                    <p className='text-lg sm:text-xl md:text-2xl w-full md:w-4/6 font-light pt-8 mt-2'>We specialize in the installation and maintenance of a wide variety of garage door openers, and garage doors in Rockville, MD and the Washington DC metro area.</p>

                    <nav className='mt-16 flex space-x-4' aria-label="Main actions">
                        <a href="#contact" aria-label="Contact Metro Garage Solutions for garage door services">
                            <button className="btn-accent">CONTACT US</button>
                        </a>
                        <a href="#services" aria-label="Get a free estimate for garage door services">
                            <button className="btn-primary">FREE ESTIMATE</button>
                        </a>
                    </nav>

                </header> 
            </Container>
        </section>
    );
}

export default Hero
