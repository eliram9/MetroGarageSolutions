import React from 'react';

import Container from './Container';
import Carousel from './Carousel';
import BrandTrain from './BrandTrain';
import Tabs from './Tabs';


const Works = () => {
    return (
        <section id="works" className='py-20 font-rubik text-primary'>
            {/* <BrandTrain /> */}
            <Container>
                {/* Header */}
                <div className='text-center'>
                    <h1 className="pt-8 md:pt-16 font-md">OUR WORK</h1>
                    <h3 className="font-light mt-4 pb-4 md:pb-20">Featured jobs we've done</h3>
                </div>
            </Container> 
            <Tabs />
            <Carousel />
        </section>
    );
};

export default Works;