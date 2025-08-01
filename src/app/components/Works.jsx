import React from 'react';

import Container from './Container';
import CarouselOld from './CarouselOld';
import BrandTrain from './BrandTrain';
import Tabs from './Tabs';


const Works = () => {
    return (
        <section id="works" className='py-20 font-rubik text-primary'>
            <Container>
                  {/* Header */}
                <div className='left-0 relative'>
                    <h1 className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15'>OUR WORK</h1>
                    <div className='text-primary'>
                        <h2 className='ml-10 font-mediumm absolute -mt-9 md:-mt-12 text-[#002C8C] dark:text-white md:text-3xl text-2xl'>{`Featured jobs we've done`}</h2>
                    </div>
                </div>
            </Container>
            {/* <BrandTrain /> */}
            <Tabs />
            {/* <CarouselOld /> */}
        </section>
    );
};

export default Works;